import prisma  from "@/lib/prisma";
import { NextResponse } from "next/server";
import { DroneStatus } from "../../../../../generated/prisma"; 

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");

    const validStatus = status && Object.values(DroneStatus).includes(status as DroneStatus)
      ? (status as DroneStatus)
      : DroneStatus.AVAILABLE; 

    const availableDrones = await prisma.drone.findMany({
      where: {
        status: validStatus,
      },
    });

    return NextResponse.json(availableDrones);
  } catch (error) {
    console.error("Error fetching available drones:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
