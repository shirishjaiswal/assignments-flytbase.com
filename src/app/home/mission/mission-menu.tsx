'use client';

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { useRouter, usePathname } from 'next/navigation';

export default function MissionMenubar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const baseClasses = "px-3 py-1.5 rounded-md transition-colors";
  const activeClasses = "bg-muted font-semibold";
  const hoverClasses = "hover:bg-accent hover:text-accent-foreground";

  return (
    <Menubar className="mb-6">
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => router.push('/home/mission/all')}
          className={`${baseClasses} ${hoverClasses} ${isActive('/home/mission/all') ? activeClasses : ''}`}
        >
          All Mission
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger
          onClick={() => router.push('/home/mission/create')}
          className={`${baseClasses} ${hoverClasses} ${isActive('/home/mission/create') ? activeClasses : ''}`}
        >
          Create Mission
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
