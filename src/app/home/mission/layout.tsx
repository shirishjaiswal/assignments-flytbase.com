import MissionMenubar from "./mission-menu";

function MissionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MissionMenubar />
      {children}
    </div>
  );
}

export default MissionLayout;
