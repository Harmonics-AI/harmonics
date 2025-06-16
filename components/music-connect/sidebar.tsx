"use client"

import type React from "react"

import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileCodeIcon as FileContract,
  Sparkles,
  Settings,
  HelpCircle,
  Menu,
  Music,
  Headphones,
  MessageSquare,
  Calendar,
} from "lucide-react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function handleNavigation() {
    setIsMobileMenuOpen(false)
  }

  function NavItem({
    href,
    icon: Icon,
    children,
  }: {
    href: string
    icon: any
    children: React.ReactNode
  }) {
    const isActive = pathname === href

    return (
      <Link
        href={href}
        onClick={handleNavigation}
        className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors 
          ${isActive ? "bg-musicConnect-blue/20 text-white" : "text-gray-300 hover:text-white hover:bg-[#1F1F23]"}`}
      >
        <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
        {children}
      </Link>
    )
  }

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-musicConnect-background shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-5 w-5 text-gray-300" />
      </button>
      <nav
        className={`
          fixed inset-y-0 left-0 z-[60] w-64 bg-musicConnect-background transform transition-transform duration-200 ease-in-out
          lg:translate-x-0 lg:static lg:w-64 border-r border-musicConnect-border
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-full flex flex-col">
          <Link href="/" className="h-16 px-6 flex items-center border-b border-musicConnect-border">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-musicConnect-blue rounded-md flex items-center justify-center">
                <Music className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">Harmonics</span>
            </div>
          </Link>

          <div className="flex-1 overflow-y-auto py-4 px-4">
            <div className="space-y-6">
              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Main</div>
                <div className="space-y-1">
                  <NavItem href="/dashboard" icon={LayoutDashboard}>
                    Dashboard
                  </NavItem>
                  <NavItem href="/connections" icon={Users}>
                    Connections
                  </NavItem>
                  <NavItem href="/workspaces" icon={Briefcase}>
                    Workspaces
                  </NavItem>
                  <NavItem href="/opportunities" icon={Headphones}>
                    Opportunities
                  </NavItem>
                  <NavItem href="/agreements" icon={FileContract}>
                    Agreements
                  </NavItem>
                </div>
              </div>

              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Tools</div>
                <div className="space-y-1">
                  <NavItem href="/ai-assistant" icon={Sparkles}>
                    AI Assistant
                  </NavItem>
                  <NavItem href="/calendar" icon={Calendar}>
                    Calendar
                  </NavItem>
                  <NavItem href="/messages" icon={MessageSquare}>
                    Messages
                  </NavItem>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 border-t border-musicConnect-border">
            <div className="space-y-1">
              <NavItem href="/settings" icon={Settings}>
                Settings
              </NavItem>
              <NavItem href="/help" icon={HelpCircle}>
                Help
              </NavItem>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[55] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
