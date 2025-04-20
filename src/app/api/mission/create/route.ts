import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const mission = await prisma.mission.create({
      data
    })
    await prisma.drone.update({
      where: {
        id: data.droneId
      },
      data: {
        status: "ONLINE"
      }
    })
    return NextResponse.json(mission, { status: 201 });
  } catch (error) {
    console.error("Create Mission Error:", error);
    return NextResponse.json({ error: "Failed to create mission" }, { status: 500 });
  }
}