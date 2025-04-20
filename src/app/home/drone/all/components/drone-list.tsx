'use client';

import { useState, useMemo } from 'react';
import { Drone } from '@/types/drone';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

interface DroneListProps {
  drones: Drone[];
}

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'ONLINE':
      return 'text-green-600';
    case 'OFFLINE':
      return 'text-red-600';
    case 'IDLE':
      return 'text-yellow-600';
    case 'IN-FLIGHT':
      return 'text-blue-600';
    case 'CHARGING':
      return 'text-purple-600';
    case 'ERROR':
      return 'text-orange-600';
    default:
      return 'text-muted-foreground';
  }
};

export default function DroneList({ drones }: DroneListProps) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredDrones = useMemo(() => {
    return drones.filter((drone) => {
      const matchesSearch =
        drone.model.toLowerCase().includes(search.toLowerCase()) ||
        drone.modelId.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'ALL' ? true : drone.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [drones, search, statusFilter]);

  const uniqueStatuses = [...new Set(drones.map((d) => d.status))];

  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <Input
          placeholder="Search by model or ID"
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

      {filteredDrones.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border rounded-md">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="text-left px-4 py-2">Model</th>
                <th className="text-left px-4 py-2">Model ID</th>
                <th className="text-left px-4 py-2">Battery</th>
                <th className="text-left px-4 py-2">Top Speed</th>
                <th className="text-left px-4 py-2">Max Altitude</th>
                <th className="text-left px-4 py-2">Range</th>
                <th className="text-left px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredDrones.map((drone) => (
                <tr key={drone.id} className="border-t">
                  <td className="px-4 py-2 font-medium">{drone.model}</td>
                  <td className="px-4 py-2">{drone.modelId}</td>
                  <td className="px-4 py-2">{drone.battery}%</td>
                  <td className="px-4 py-2">{drone.topSpeed} km/h</td>
                  <td className="px-4 py-2">{drone.maxAltitude} m</td>
                  <td className="px-4 py-2">{drone.range} km</td>
                  <td className={`px-4 py-2 capitalize ${getStatusColor(drone.status)}`}>
                    {drone.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-muted-foreground">No drones match your filters.</p>
      )}
    </div>
  );
}
