"use client";
import {useRouter } from "next/navigation";

type MenuItem = {
  id: number;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  redirect?: string;
};

const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 12h3v8h14v-8h3L12 2zm-2 14H8v-2h2v2zm4 0h-2v-2h2v2z" />
  </svg>
);

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Drone",
    icon: HomeIcon,
    redirect: "/home/drone/all",
  },
  {
    id: 2,
    title: "Mission",
    icon: HomeIcon,
    redirect: "/home/mission/all",
  }
];

export default function Sidebar() {
  const router = useRouter();

  const onClickMenuItem = (item: MenuItem) => {
    if (item.redirect) {
      router.push(item.redirect);
    }
  };

  return (
    <div
      className="h-screen w-72 bg-white-900 text-black z-50 overflow-y-auto shadow-2xl"
    >
      {/* Header */}
      <header className="flex items-center justify-between p-3 border-b border-gray-700">
        <button
          id="sidebar-header-content"
          className="text-lg font-semibold"
        >
          Drone Surveillance System
        </button>
      </header>

      {/* Navigation */}
      <main className="p-4">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              id={`menu-item-${item.id}`}
              className="flex w-full items-center p-4 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => onClickMenuItem(item)}
              title={item.title}
            >
              {item.icon && <item.icon className="h-6 w-6" />}
              <span className="ml-3">{item.title}</span>
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}