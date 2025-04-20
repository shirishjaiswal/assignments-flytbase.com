import prisma  from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if(!id) {
      return new NextResponse("id is required", { status: 400 });
    }

    const availableDrones = await prisma.mission.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json(availableDrones);
  } catch (error) {
    console.error("Error fetching available drones:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
