'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  MissionType,
  MissionStatus,
  RecurringIntervalType,
  DroneStatus,
} from '../../../../../../generated/prisma';
import { toast } from 'sonner';
import { Drone } from '@/types/drone';
import dynamic from 'next/dynamic';

const LocationPicker = dynamic(() => import('./location-picker'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

function CreateMissionForm() {
  const [form, setForm] = useState<{
    name: string;
    type: string;
    area: string;
    status: string;
    progress: number;
    recurring: boolean;
    recurringInterval: string;
    droneId: string;
    waypoints: { latitude: number; longitude: number; altitude: number };
    [key: string]: any;
  }>({
    name: '',
    type: 'INSPECTION',
    area: '',
    status: 'PENDING',
    progress: 0,
    recurring: false,
    recurringInterval: 'DAILY',
    droneId: '',
    waypoints: { latitude: 0, longitude: 0, altitude: 0 },
  });

  const [availableDrones, setAvailableDrones] = useState<Drone[]>([]);

  useEffect(() => {
    const fetchDrones = async () => {
      const res = await fetch(`/api/drone/get?status=${DroneStatus.AVAILABLE}`);
      const data = await res.json();
      setAvailableDrones(data);
    };

    fetchDrones();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStatusChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      status: value,
    }));
  };

  const handleTypeChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      type: value,
    }));
  };

  const handleRecurringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      recurring: e.target.checked,
    }));
  };

  const handleRecurringIntervalChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      recurringInterval: value,
    }));
  };

  const handleWaypointChange = (
    field: 'latitude' | 'longitude' | 'altitude',
    value: number
  ) => {
    setForm((prev) => ({
      ...prev,
      waypoints: {
        ...prev.waypoints,
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/mission/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(`Mission "${form.name}" created successfully`);
        setForm({
          name: '',
          type: 'INSPECTION',
          area: '',
          status: 'PENDING',
          progress: 0,
          recurring: false,
          recurringInterval: 'DAILY',
          droneId: '',
          waypoints: { latitude: 0, longitude: 0, altitude: 0 },
        });
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error('An error occurred while creating the mission');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 mx-auto w-full p-6 border rounded-xl shadow"
    >
      <div className="grid grid-cols-2 gap-6">
        {/* Mission Name */}
        <div>
          <Label htmlFor="name" className="mb-1 block">
            Mission Name
          </Label>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Area */}
        <div>
          <Label htmlFor="area" className="mb-1 block">
            Area
          </Label>
          <Input
            type="text"
            name="area"
            value={form.area}
            onChange={handleChange}
            required
          />
        </div>

        {/* Mission Type */}
        <div>
          <Label htmlFor="type" className="mb-1 block">
            Mission Type
          </Label>
          <Select value={form.type} onValueChange={handleTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select mission type" />
            </SelectTrigger>
            <SelectContent className="z-50">
              {Object.keys(MissionType).map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Status */}
        <div>
          <Label htmlFor="status" className="mb-1 block">
            Status
          </Label>
          <Select value={form.status} onValueChange={handleStatusChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent className="z-50">
              {Object.keys(MissionStatus).map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-10">
          {/* Recurring */}
          <div className="flex items-center">
            <Label className="mr-2" htmlFor="recurring">
              Recurring
            </Label>
            <input
              type="checkbox"
              id="recurring"
              checked={form.recurring}
              onChange={handleRecurringChange}
            />
          </div>

          {/* Recurring Interval */}
          {form.recurring && (
            <div>
              <Label htmlFor="recurringInterval" className="mb-1 block">
                Recurring Interval
              </Label>
              <Select
                value={form.recurringInterval}
                onValueChange={handleRecurringIntervalChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select interval" />
                </SelectTrigger>
                <SelectContent className="z-50">
                  {Object.keys(RecurringIntervalType).map((interval) => (
                    <SelectItem key={interval} value={interval}>
                      {interval}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* Select Drone */}
        <div>
          <Label htmlFor="droneId" className="mb-1 block">
            Assign Drone
          </Label>
          <Select
            value={form.droneId}
            onValueChange={(value) => setForm({ ...form, droneId: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select drone" />
            </SelectTrigger>
            <SelectContent className="z-50">
              {availableDrones.map((drone) => (
                <SelectItem key={drone.id} value={drone.id || 'drone-id'}>
                  {drone.model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Waypoints */}
        <div className="mb-4">
          <Label className="mb-2 block">Select Waypoint on Map</Label>
          <LocationPicker
            onLocationSelect={({ latitude, longitude }) =>
              setForm((prev) => ({
                ...prev,
                waypoints: {
                  ...prev.waypoints,
                  latitude,
                  longitude,
                },
              }))
            }
            defaultPosition={[
              form.waypoints.latitude || 19.076,
              form.waypoints.longitude || 72.8777,
            ]}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="latitude">Max Altitude</Label>
          <Input
            type="number"
            placeholder="Altitude"
            value={form.waypoints.altitude.toString()}
            onChange={(e) =>
              handleWaypointChange('altitude', parseFloat(e.target.value) || 0)
            }
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button type="submit">Create New Mission</Button>
      </div>
    </form>
  );
}

export default CreateMissionForm;