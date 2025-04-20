import prisma from "@/lib/prisma";
import MissionDashboard from "./components/mission-dashboard";
import { notFound } from "next/navigation";

import type { NextPage } from "next";

const Page = async ({ params } : { params: { id: string }}) => {
  const { id } = await params;

  if (!id) {
    notFound(); 
  }

  const mission = await prisma.mission.findUnique({
    where: { id },
  });

  return mission ? <MissionDashboard mission={mission} /> : notFound();
};

export default Page;