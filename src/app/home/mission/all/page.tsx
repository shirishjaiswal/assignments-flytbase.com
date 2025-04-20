'use server'

import prisma from "@/lib/prisma";
import MissionList from "./components/mission-list";

async function Page () {
  const missions = await prisma.mission.findMany();
  return (
    <>
      <MissionList missions={missions} />
    </>
  );
}

export default Page