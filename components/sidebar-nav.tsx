"use client"

import type React from "react"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { buttonVariants } from "@/components/ui/button"

interface SidebarNavItemProps {
  href: string
  icon: LucideIcon
  current: boolean
  children: React.ReactNode
}

export function SidebarNavItem({ href, icon: Icon, current, children }: SidebarNavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        current
          ? "bg-blue-600/20 text-white border border-blue-500/30"
          : "text-slate-300 hover:text-white hover:bg-slate-700/50",
      )}
    >
      <Icon className="h-5 w-5" />
      {children}
    </Link>
  )
}

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
