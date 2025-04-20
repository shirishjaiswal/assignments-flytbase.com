"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Mission } from "../../../../../../generated/prisma";
import Link from "next/link";

interface MissionListProps {
  missions: Mission[];
}
const getMissionStatusColor = (type: string): string => {
  switch (type) {
    case "PENDING":
      return "text-gray-500";
    case "INPROGRESS":
      return "text-blue-600";
    case "ABORTED":
      return "text-orange-600";
    case "COMPLETED":
      return "text-green-600";
    case "FAILED":
      return "text-red-600 font-semibold";
    default:
      return "text-muted-foreground";
  }
};

export default function MissionList({ missions }: MissionListProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const filteredMissions = useMemo(() => {
    return missions.filter((mission) => {
      const matchesSearch =
        mission.name.toLowerCase().includes(search.toLowerCase()) ||
        mission.area.toLowerCase().includes(search.toLowerCase());
      const matchesStatus =
        statusFilter === "ALL" ? true : mission.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [missions, search, statusFilter]);

  const uniqueStatuses = [...new Set(missions.map((m) => m.status))];

  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <Input
          placeholder="Search by name or area"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="sm:w-1/2"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All</SelectItem>
            {uniqueStatuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredMissions.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border rounded-md">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Area</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Progress</th>
                <th className="px-4 py-2 text-left">Recurring</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMissions.map((mission) => (
                <tr key={mission.id} className="border-t">
                  <td className="px-4 py-2 font-medium">{mission.name}</td>
                  <td className="px-4 py-2">{mission.type}</td>
                  <td className="px-4 py-2">{mission.area}</td>
                  <td
                    className={`px-4 py-2 capitalize ${getMissionStatusColor(
                      mission.status
                    )}`}
                  >
                    {mission.status}
                  </td>
                  <td className="px-4 py-2">{mission.progress}%</td>
                  <td className="px-4 py-2">
                    {mission.recurring ? `${mission.recurringInterval}` : "No"}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <Link href={`/home/mission/${mission.id}`} className="text-blue-600 hover:underline">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-muted-foreground">No missions match your filters.</p>
      )}
    </div>
  );
}
