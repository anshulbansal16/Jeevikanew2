import type React from "react"
import { SidebarNav } from "./sidebar-nav"

type SidebarProps = {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`flex h-screen w-64 flex-col border-r bg-background ${className}`}>
      <div className="flex h-14 items-center border-b px-4">
        <span className="font-semibold">Jeevika Health</span>
      </div>
      <SidebarNav />
    </div>
  )
}

export default Sidebar
