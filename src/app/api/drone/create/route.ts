import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const drone = await prisma.drone.create({
      data
    })
    return NextResponse.json(drone, { status: 201 });
  } catch (error) {
    console.error("Create Drone Error:", error);
    return NextResponse.json({ error: "Failed to create drone" }, { status: 500 });
  }
}