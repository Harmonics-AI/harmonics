"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Bell, Calendar, Search } from "lucide-react"
import UserProfile from "./user-profile"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function TopNav() {
  return (
    <nav className="px-3 sm:px-6 flex items-center justify-between bg-musicConnect-background border-b border-musicConnect-border h-full">
      <div className="relative w-full max-w-md hidden md:block">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search people, projects, genres, skills..."
          className="pl-10 bg-[#1F1F23] border-musicConnect-border text-gray-300 focus:border-musicConnect-blue"
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto">
        <button type="button" className="p-1.5 sm:p-2 hover:bg-[#1F1F23] rounded-full transition-colors relative">
          <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-musicConnect-blue rounded-full"></span>
        </button>

        <Link href="/calendar" className="p-1.5 sm:p-2 hover:bg-[#1F1F23] rounded-full transition-colors">
          <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Image
              src="/placeholder.svg?height=28&width=28"
              alt="User avatar"
              width={28}
              height={28}
              className="rounded-full ring-2 ring-musicConnect-border sm:w-8 sm:h-8 cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-[280px] sm:w-80 bg-[#1F1F23] border-musicConnect-border rounded-lg shadow-lg"
          >
            <UserProfile />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
