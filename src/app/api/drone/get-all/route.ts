import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const drone = await prisma.drone.findMany();
    return NextResponse.json(drone, { status: 200 });
  } catch (error) {
    console.error("Create Drone Error:", error);
    return NextResponse.json({ error: "Failed to create drone" }, { status: 500 });
  }
}