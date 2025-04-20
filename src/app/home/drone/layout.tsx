import DroneMenubar from "./drone-menu";

function DroneLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DroneMenubar />
      {children}
    </div>
  );
}

export default DroneLayout;
