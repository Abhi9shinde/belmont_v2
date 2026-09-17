import { ReactNode } from "react";
import ArchitecturalFrame from "./ArchitecturalFrame";

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0c0c0b]">
      {/* Architectural / blueprint layer */}
      <ArchitecturalFrame />

      {/* Belmont website */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
          border-x
          border-white/[0.10]
          bg-[#151514]
        "
      >
        {children}
      </div>
    </div>
  );
}
