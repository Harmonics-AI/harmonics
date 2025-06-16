"use client"

import { useState } from "react"
import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Filter, Headphones, Music, Search, Users } from "lucide-react"
import { Input } from "@/components/ui/input"

interface OpportunityProps {
  title: string
  type: "gig" | "collaboration" | "licensing" | "event"
  organization: string
  description: string
  deadline: string
  location: string
  compensation?: string
  tags: string[]
}

const opportunities: OpportunityProps[] = [
  {
    title: "Indie Film Soundtrack",
    type: "licensing",
    organization: "Horizon Films",
    description:
      "Looking for original music for an upcoming indie drama film. We need atmospheric, emotional pieces that can enhance key scenes. All genres considered, but preference for piano-based compositions.",
    deadline: "May 30, 2025",
    location: "Remote",
    compensation: "$1,500 - $3,000",
    tags: ["Licensing", "Film", "All Genres", "Piano", "Emotional"],
  },
  {
    title: "Live Performance at The Sound Lounge",
    type: "gig",
    organization: "The Sound Lounge",
    description:
      "Seeking bands and solo artists for weekend performances. Our venue specializes in intimate acoustic sets and small ensemble performances. Great exposure opportunity in a popular downtown venue.",
    deadline: "June 5, 2025",
    location: "Los Angeles, CA",
    compensation: "$300 - $500 per set",
    tags: ["Live", "Paid", "Local", "Acoustic", "Weekend"],
  },
  {
    title: "Producer Networking Event",
    type: "event",
    organization: "Beat Makers Guild",
    description:
      "Connect with producers and artists in your area. This workshop includes equipment demonstrations, mixing sessions, and networking opportunities with industry professionals.",
    deadline: "June 12, 2025",
    location: "Atlanta, GA",
    tags: ["Networking", "Workshop", "Production", "Industry"],
  },
  {
    title: "Vocalist Needed for EDM Track",
    type: "collaboration",
    organization: "Pulse Productions",
    description:
      "Looking for a vocalist to collaborate on an upbeat EDM track. The instrumental is complete and we need powerful vocals with lyrics about empowerment and celebration.",
    deadline: "June 20, 2025",
    location: "Remote",
    compensation: "Royalty Split + $500 advance",
    tags: ["Collaboration", "EDM", "Vocals", "Remote", "Paid"],
  },
]

function OpportunityIcon({ type }: { type: OpportunityProps["type"] }) {
  switch (type) {
    case "gig":
      return <Headphones className="h-5 w-5 text-musicConnect-purple" />
    case "collaboration":
      return <Users className="h-5 w-5 text-musicConnect-blue" />
    case "licensing":
      return <Music className="h-5 w-5 text-musicConnect-green" />
    case "event":
      return <Calendar className="h-5 w-5 text-amber-400" />
  }
}

function OpportunityCard({ opportunity }: { opportunity: OpportunityProps }) {
  return (
    <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5 hover:border-musicConnect-blue transition-colors">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-[#2B2B30]">
          <OpportunityIcon type={opportunity.type} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-medium text-white">{opportunity.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{opportunity.organization}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-1 bg-[#2B2B30] text-white rounded-md">
                {opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1)}
              </span>
              {opportunity.compensation && (
                <span className="text-xs px-2 py-1 bg-musicConnect-green/20 text-musicConnect-green rounded-md">
                  {opportunity.compensation}
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-300 mt-3 line-clamp-3">{opportunity.description}</p>

          <div className="flex flex-wrap gap-1 mt-3">
            {opportunity.tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-0.5 bg-[#2B2B30] text-gray-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap justify-between items-center gap-3">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-amber-400 mr-1.5" />
                <span className="text-xs text-gray-300">Deadline: {opportunity.deadline}</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-gray-400 mr-1.5"
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
                <span className="text-xs text-gray-300">{opportunity.location}</span>
              </div>
            </div>

            <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
              Apply Now
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OpportunitiesPage() {
  const [activeTab, setActiveTab] = useState("recommended")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredOpportunities = opportunities.filter((opportunity) => {
    if (activeTab !== "recommended" && opportunity.type !== activeTab) {
      return false
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        opportunity.title.toLowerCase().includes(query) ||
        opportunity.description.toLowerCase().includes(query) ||
        opportunity.organization.toLowerCase().includes(query) ||
        opportunity.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    return true
  })

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Opportunities</h1>
            <p className="text-gray-400">Find gigs, collaborations, and events in the music industry</p>
          </div>

          <Tabs defaultValue="recommended" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList className="bg-[#1F1F23] border border-musicConnect-border">
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="gig">Gigs</TabsTrigger>
              <TabsTrigger value="collaboration">Collaborations</TabsTrigger>
              <TabsTrigger value="licensing">Licensing</TabsTrigger>
              <TabsTrigger value="event">Events</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search opportunities..."
              className="pl-10 bg-[#1F1F23] border-musicConnect-border text-gray-300 focus:border-musicConnect-blue"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Button
            variant="outline"
            className="w-full md:w-auto text-white border-musicConnect-border hover:bg-[#2B2B30]"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter Options
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((opportunity, index) => <OpportunityCard key={index} opportunity={opportunity} />)
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-400">No opportunities found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 text-white border-musicConnect-border hover:bg-[#2B2B30]"
                onClick={() => {
                  setActiveTab("recommended")
                  setSearchQuery("")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        {filteredOpportunities.length > 0 && (
          <div className="flex justify-center">
            <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
              Load More Opportunities
            </Button>
          </div>
        )}
      </div>
    </Layout>
  )
}
