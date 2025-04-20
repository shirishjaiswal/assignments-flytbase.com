import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST (request : Request) {
  try {
    const data = await request.json();
    
    const report = await prisma.report.create({
      data
    })
    return NextResponse.json(report, { status: 201 });
  } catch {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
