'use client'

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tooltip } from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Mission } from "../../../../../../generated/prisma";
import Report from "./report";

const LocationPicker = dynamic(
  () => import("../../create/components/location-picker"),
  {
    ssr: false,
  }
);

function MissionDashboard({ mission }: { mission: Mission }) {
  const [missionData, setMissionData] = useState(mission);
  const [loading, setLoading] = useState(false);
  const [showConfirmAbort, setShowConfirmAbort] = useState(false);

  const [reportData, setReportData] = useState<{
    mission?: Mission;
    drone?: any;
  } | null>(null);
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    if (missionData.status === "ABORTED") return;

    const fetchMission = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/mission/get?id=${mission.id}`);
        const data = await response.json();
        setMissionData(data);
      } catch (error) {
        console.error("Error fetching mission:", error);
      } finally {
        setLoading(false);
      }
    };

    const interval = setInterval(fetchMission, 5000);
    return () => clearInterval(interval);
  }, [mission.id, missionData.status]);

  const abortMission = async () => {
    try {
      const response = await fetch(`/api/mission/abort/?id=${mission.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setMissionData((prevData) => ({
          ...prevData,
          status: "ABORTED",
        }));
        toast.success("Mission has been aborted");
      } else {
        toast.error("Failed to abort the mission");
      }
    } catch  {
      toast.error("An error occurred while aborting the mission");
    }
  };

  const generateReport = async () => {
    try {
      const missionResponse = await fetch(`/api/report/get?id=${mission.id}`);
      const missionData = await missionResponse.json();
      const droneId = missionData.droneId;
      const droneResponse = await fetch(`/api/drone/get?id=${droneId}`);
      const droneData = await droneResponse.json();

      setReportData({ mission: missionData, drone: droneData });
      setShowReport(true);
    } catch (error) {
      console.error("Error generating report:", error);
      toast.error("Failed to generate report");
    }
  };

  const handleAbortClick = () => setShowConfirmAbort(true);
  const handleConfirmAbort = () => {
    setShowConfirmAbort(false);
    abortMission();
  };
  const handleCancelAbort = () => setShowConfirmAbort(false);

  return (
    <div className="container mx-auto px-6 py-8 max-h-200 overflow-auto">
      {loading && <div className="spinner">Loading...</div>}

      <Card className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Mission Dashboard</h1>

        <div className="mt-6 mb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-700">
              {missionData.name}
            </h2>
            <Tooltip>
              <div
                className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                  missionData.status === "ABORTED" ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {missionData.status}
              </div>
            </Tooltip>
          </div>
          <p className="text-gray-600">
            {missionData.type} | {missionData.area}
          </p>
        </div>

        <div className="mt-4">
          <label className="text-sm text-gray-500">Progress</label>
          <Progress
            value={missionData.progress}
            max={100}
            color="primary"
            className="mt-2"
          />
        </div>

        {missionData.status !== "ABORTED" && (
          <Button
            variant="destructive"
            className="mt-6"
            onClick={handleAbortClick}
          >
            Abort Mission
          </Button>
        )}

        {missionData.status === "ABORTED" && (
          <Button variant="outline" className="mt-6" onClick={generateReport}>
            Report
          </Button>
        )}
      </Card>

      {/* Abort Confirmation Dialog */}
      <Dialog open={showConfirmAbort} onOpenChange={setShowConfirmAbort}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to abort this mission?
            </DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex justify-between mt-4">
            <Button variant="destructive" onClick={handleConfirmAbort}>
              Yes, Abort
            </Button>
            <Button variant="secondary" onClick={handleCancelAbort}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Report Dialog */}
      {reportData && (
        <Report reportData={reportData} setShowReport={setShowReport} showReport={showReport} />
      )}

      <Card className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          Mission Location
        </h3>
        <div className="mt-4">
          <LocationPicker
            defaultPosition={[
              missionData.waypoints?.latitude || 0,
              missionData.waypoints?.longitude || 0,
            ]}
            onLocationSelect={(location) => {
              setMissionData((prev) => ({
                ...prev,
                waypoints: {
                  latitude: location.latitude,
                  longitude: location.longitude,
                  altitude: location.altitude,
                },
              }));
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default MissionDashboard;
