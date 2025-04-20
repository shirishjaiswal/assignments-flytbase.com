import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) {
      return new NextResponse("id is required", { status: 400 });
    }

    await prisma.mission.findUnique({
      where: {
        id: id,
      },
    });
    const updatedMission = await prisma.mission.update({
      where: {
        id: id,
      },
      data: {
        status: "ABORTED",
      },
    });
    if (updatedMission?.id) {
      await prisma.drone.update({
        where: {
          id: updatedMission.droneId,
        },
        data: {
          status: "AVAILABLE",
        },
      });
    }
    await prisma.report.create({
      data: {
        missionId: id,
      },
    });
    return NextResponse.json(updatedMission);
  } catch {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
