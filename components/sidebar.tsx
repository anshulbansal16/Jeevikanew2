import type React from "react"

type SidebarProps = {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar">
      {/* Sidebar content goes here */}
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
