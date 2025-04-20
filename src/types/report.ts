import { Mission } from "@/types/mission";

export type Report = {
  id?: string;
  mission: Mission;
  missionId: string;
  missionName: string;
  createdAt?: Date;
  updatedAt?: Date;
};
