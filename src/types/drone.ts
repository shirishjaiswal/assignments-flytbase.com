import { Mission } from "@/types/mission";
import { DroneStatus } from "../../generated/prisma";

export type Drone = {
  id?: string;
  model: string;
  modelId: string;
  maxAltitude: number;
  topSpeed: number;
  maxWeight: number;
  range: number;
  type: string;
  status: DroneStatus;
  battery: number;
  missions?: Mission[];
  createdAt?: Date;
  updatedAt?: Date;
};

