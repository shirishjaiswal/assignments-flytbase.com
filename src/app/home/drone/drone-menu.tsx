'use client';

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { useRouter, usePathname } from 'next/navigation';

export default function DroneMenubar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const baseClasses = "px-3 py-1.5 rounded-md transition-colors";
  const activeClasses = "bg-muted font-semibold";
  const hoverClasses = "hover:bg-accent hover:text-accent-foreground";

  return (
    <Menubar className="mb-6">
      {/* All Drones */}
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => router.push('/home/drone/all')}
          className={`${baseClasses} ${hoverClasses} ${isActive('/home/drone/all') ? activeClasses : ''}`}
        >
          All Drones
        </MenubarTrigger>
      </MenubarMenu>

      {/* Create Drone */}
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => router.push('/home/drone/create')}
          className={`${baseClasses} ${hoverClasses} ${isActive('/home/drone/create') ? activeClasses : ''}`}
        >
          Create Drone
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
