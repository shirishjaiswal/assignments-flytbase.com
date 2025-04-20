'use client';

import { useState } from "react";
import { Drone } from "@/types/drone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DroneStatus } from "../../../../../../generated/prisma";
import { toast } from "sonner";

function CreateDroneForm() {
  const [form, setForm] = useState<Drone>({
    model: "",
    modelId: "",
    maxAltitude: 0,
    topSpeed: 0,
    maxWeight: 0,
    range: 0,
    battery: 100,
    type: "default",
    status: DroneStatus.OFFLINE,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "battery" ||
        name === "topSpeed" ||
        name === "maxWeight" ||
        name === "range" ||
        name === "maxAltitude"
          ? Number(value)
          : value,
    }));
  };

  const handleStatusChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      status: DroneStatus[value as keyof typeof DroneStatus],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/drone/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(`Drone ${form.model} created successfully`);
        setForm({
          model: "",
          modelId: "",
          maxAltitude: 0,
          topSpeed: 0,
          maxWeight: 0,
          range: 0,
          battery: 100,
          type: "default",
          status: DroneStatus.OFFLINE,
        });
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("An error occurred while creating the drone");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 mx-auto w-full p-6 border rounded-xl shadow"
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Label htmlFor="model" className="mb-1 block">
            Model
          </Label>
          <Input
            type="text"
            name="model"
            value={form.model}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="modelId" className="mb-1 block">
            Model ID
          </Label>
          <Input
            type="text"
            name="modelId"
            value={form.modelId}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="maxAltitude" className="mb-1 block">
            Max Altitude
          </Label>
          <Input
            type="number"
            name="maxAltitude"
            value={form.maxAltitude}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="topSpeed" className="mb-1 block">
            Top Speed
          </Label>
          <Input
            type="number"
            name="topSpeed"
            value={form.topSpeed}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="maxWeight" className="mb-1 block">
            Max Weight
          </Label>
          <Input
            type="number"
            name="maxWeight"
            value={form.maxWeight}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="range" className="mb-1 block">
            Range
          </Label>
          <Input
            type="number"
            name="range"
            value={form.range}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="battery" className="mb-1 block">
            Battery (%)
          </Label>
          <Input
            type="number"
            name="battery"
            value={form.battery}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="status">Status</Label>
          <Select onValueChange={handleStatusChange} value={form.status ? String(form.status) : undefined}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(DroneStatus)
                .filter((key) => isNaN(Number(key))) // Filter out numeric keys
                .map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Create New Drone</Button>
      </div>
    </form>
  );
}

export default CreateDroneForm;

