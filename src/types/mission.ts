import { Drone } from "@/types/drone";
import { Report } from "@/types/report";

export enum MissionType {
  IDEAL,
  INSPECTION,
  REPAIR,
  DELIVERY,
  EMERGENCY,
}

export enum MissionStatus {
  PENDING,
  IN_PROGRESS,
  COMPLETED,
  ABORTED,
  FAILED,
}

export enum RecurringIntervalType {
  DAILY,
  WEEKLY,
  MONTHLY,
  YEARLY,
}

export type Mission = {
  id?: number;
  name: string;
  type: MissionType;
  area: string;
  status: MissionStatus;
  progress: number;
  recurring: boolean;
  waypoints: Location;
  recurringInterval: RecurringIntervalType;
  drone: Drone;
  droneId: string;
  droneLocation: Location;
  report: Report[];
  createdAt: Date;
  updatedAt: Date;
};