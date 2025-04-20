'use server'

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import DroneList from "@/app/home/drone/all/components/drone-list";

export default async function Page() {
  const drones = await prisma.drone.findMany();
  return (
    <div className="container">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Drone Dashboard</CardTitle>
        </CardHeader>
        <DroneList drones={drones} />
      </Card>
    </div>
  );
}
