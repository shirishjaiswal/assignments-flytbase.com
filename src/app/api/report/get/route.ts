import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if(!id) {
      return new NextResponse("id is required", { status: 400 });
    }
    const missionReport = await prisma.report.findMany({
      where: {
        missionId: id,
      },
    });
    const missionData = await prisma.mission.findUnique({
      where: {
        id: missionReport[0].missionId,
      },
    })

    return NextResponse.json(missionData, { status: 200 });
  } catch (error) {
    console.error("Error fetching available drones:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}