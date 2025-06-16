"use client"

import { useState } from "react"
import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ChevronLeft, ChevronRight, Clock, Filter, Plus, Users, Video, Music, Mic } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CalendarEvent {
  id: string
  title: string
  type: "session" | "meeting" | "performance" | "deadline"
  date: string
  time: string
  duration: string
  participants?: string[]
  location?: string
  description?: string
}

const events: CalendarEvent[] = [
  {
    id: "1",
    title: "Recording Session with Marcus",
    type: "session",
    date: "May 21, 2025",
    time: "2:00 PM",
    duration: "3 hours",
    participants: ["Marcus Johnson", "You"],
    location: "Skyline Studios",
    description: "Vocal recording for the Summer EP project",
  },
  {
    id: "2",
    title: "Project Review Meeting",
    type: "meeting",
    date: "May 21, 2025",
    time: "6:30 PM",
    duration: "1 hour",
    participants: ["Sophia Martinez", "David Kim", "You"],
    location: "Virtual (Zoom)",
    description: "Review progress on the film score project",
  },
  {
    id: "3",
    title: "Live Performance",
    type: "performance",
    date: "May 23, 2025",
    time: "9:00 PM",
    duration: "45 minutes",
    location: "The Sound Lounge",
    description: "Opening act for The Resonators",
  },
  {
    id: "4",
    title: "Remix Submission Deadline",
    type: "deadline",
    date: "May 25, 2025",
    time: "11:59 PM",
    duration: "N/A",
    description: "Final submission for the remix contest",
  },
  {
    id: "5",
    title: "Songwriting Session",
    type: "session",
    date: "May 26, 2025",
    time: "1:00 PM",
    duration: "4 hours",
    participants: ["Emma Wilson", "You"],
    location: "Your Studio",
    description: "Working on new material for the upcoming album",
  },
]

function EventTypeIcon({ type }: { type: CalendarEvent["type"] }) {
  switch (type) {
    case "session":
      return <Music className="h-4 w-4 text-musicConnect-blue" />
    case "meeting":
      return <Video className="h-4 w-4 text-musicConnect-purple" />
    case "performance":
      return <Mic className="h-4 w-4 text-musicConnect-green" />
    case "deadline":
      return <Clock className="h-4 w-4 text-amber-400" />
  }
}

function EventCard({ event }: { event: CalendarEvent }) {
  return (
    <div className="bg-[#1F1F23] rounded-lg border border-musicConnect-border p-4 hover:border-musicConnect-blue transition-colors">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#2B2B30]">
          <EventTypeIcon type={event.type} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-white">{event.title}</h3>

          <div className="flex items-center gap-2 mt-2">
            <CalendarIcon className="h-3.5 w-3.5 text-gray-400" />
            <span className="text-xs text-gray-300">{event.date}</span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <Clock className="h-3.5 w-3.5 text-gray-400" />
            <span className="text-xs text-gray-300">
              {event.time} ({event.duration})
            </span>
          </div>

          {event.location && (
            <div className="flex items-center gap-2 mt-1">
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs text-gray-300">{event.location}</span>
            </div>
          )}

          {event.participants && event.participants.length > 0 && (
            <div className="flex items-center gap-2 mt-1">
              <Users className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-xs text-gray-300">{event.participants.join(", ")}</span>
            </div>
          )}

          {event.description && <p className="text-xs text-gray-400 mt-2">{event.description}</p>}
        </div>
      </div>
    </div>
  )
}

function CalendarGrid() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Get the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  // Get the number of days in the month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // Create calendar grid
  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(
      <div key={`empty-${i}`} className="h-24 border border-musicConnect-border bg-[#1F1F23]/50 rounded-md"></div>,
    )
  }

  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === currentDay
    const dayEvents = events.filter((event) => {
      const eventDate = new Date(event.date)
      return (
        eventDate.getDate() === day && eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
      )
    })

    calendarDays.push(
      <div
        key={`day-${day}`}
        className={`h-24 border border-musicConnect-border ${isToday ? "bg-musicConnect-blue/10 border-musicConnect-blue" : "bg-[#1F1F23]"} rounded-md p-1 overflow-hidden`}
      >
        <div className="flex justify-between items-center mb-1">
          <span className={`text-xs font-medium ${isToday ? "text-musicConnect-blue" : "text-white"}`}>{day}</span>
          {dayEvents.length > 0 && (
            <Badge
              variant="outline"
              className="text-[10px] h-4 bg-musicConnect-blue/20 text-musicConnect-blue border-none"
            >
              {dayEvents.length} event{dayEvents.length > 1 ? "s" : ""}
            </Badge>
          )}
        </div>
        <div className="space-y-1">
          {dayEvents.slice(0, 2).map((event, index) => (
            <div key={index} className="text-[10px] truncate bg-[#2B2B30] rounded px-1 py-0.5 text-white">
              {event.time} - {event.title}
            </div>
          ))}
          {dayEvents.length > 2 && <div className="text-[10px] text-gray-400">+{dayEvents.length - 2} more</div>}
        </div>
      </div>,
    )
  }

  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map((day) => (
        <div key={day} className="text-center text-xs font-medium text-gray-400 py-2">
          {day}
        </div>
      ))}
      {calendarDays}
    </div>
  )
}

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const goToToday = () => {
    const today = new Date()
    setCurrentMonth(today.getMonth())
    setCurrentYear(today.getFullYear())
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Calendar</h1>
            <p className="text-gray-400">Manage your sessions, meetings, and deadlines</p>
          </div>

          <Tabs defaultValue="month" className="w-full md:w-auto">
            <TabsList className="bg-[#1F1F23] border border-musicConnect-border">
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-white border-musicConnect-border hover:bg-[#2B2B30]"
              onClick={goToPreviousMonth}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-medium text-white">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-musicConnect-border hover:bg-[#2B2B30]"
              onClick={goToNextMonth}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="ml-2 text-white border-musicConnect-border hover:bg-[#2B2B30]"
              onClick={goToToday}
            >
              Today
            </Button>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-white border-musicConnect-border hover:bg-[#2B2B30]">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm" className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </div>
        </div>

        <div className="bg-[#1F1F23]/30 rounded-xl border border-musicConnect-border p-4">
          <CalendarGrid />
        </div>

        <div>
          <h2 className="text-lg font-medium text-white mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
