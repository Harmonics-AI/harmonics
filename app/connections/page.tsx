"use client"

import { useState } from "react"
import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Play, UserPlus } from "lucide-react"
import Image from "next/image"

interface ArtistProps {
  name: string
  role: string
  avatar: string
  genres: string[]
  skills: string[]
  location: string
  audioPreview?: string
  matchPercentage: number
}

const artists: ArtistProps[] = [
  {
    name: "Sophia Martinez",
    role: "Vocalist",
    avatar: "/placeholder.svg?height=80&width=80",
    genres: ["R&B", "Soul", "Pop"],
    skills: ["Songwriting", "Vocal Arrangement"],
    location: "Los Angeles, CA",
    audioPreview: "#",
    matchPercentage: 95,
  },
  {
    name: "Marcus Johnson",
    role: "Producer",
    avatar: "/placeholder.svg?height=80&width=80",
    genres: ["Hip Hop", "Trap", "Electronic"],
    skills: ["Mixing", "Mastering", "Beat Making"],
    location: "Atlanta, GA",
    audioPreview: "#",
    matchPercentage: 88,
  },
  {
    name: "Emma Wilson",
    role: "Guitarist",
    avatar: "/placeholder.svg?height=80&width=80",
    genres: ["Rock", "Alternative", "Indie"],
    skills: ["Composition", "Arrangement"],
    location: "Nashville, TN",
    audioPreview: "#",
    matchPercentage: 82,
  },
  {
    name: "David Kim",
    role: "Composer",
    avatar: "/placeholder.svg?height=80&width=80",
    genres: ["Classical", "Film Score", "Ambient"],
    skills: ["Orchestration", "Piano", "Conducting"],
    location: "New York, NY",
    audioPreview: "#",
    matchPercentage: 79,
  },
]

function ArtistCard({ artist }: { artist: ArtistProps }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5 hover:border-musicConnect-blue transition-colors">
      <div className="flex items-start gap-4">
        <div className="relative">
          <Image
            src={artist.avatar || "/placeholder.svg"}
            alt={artist.name}
            width={80}
            height={80}
            className="rounded-lg object-cover"
          />
          {artist.audioPreview && (
            <button
              onClick={togglePlay}
              className="absolute bottom-2 right-2 p-1.5 rounded-full bg-musicConnect-blue/90 hover:bg-musicConnect-blue transition-colors"
            >
              <Play className="h-3.5 w-3.5 text-white" fill="white" />
            </button>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium text-white">{artist.name}</h3>
              <p className="text-sm text-gray-400">
                {artist.role} • {artist.location}
              </p>
            </div>
            <div className="bg-musicConnect-blue/20 text-musicConnect-blue px-2 py-1 rounded-md text-sm font-medium">
              {artist.matchPercentage}% Match
            </div>
          </div>

          <div className="mt-3">
            <p className="text-xs text-gray-400 mb-1">Genres</p>
            <div className="flex flex-wrap gap-1">
              {artist.genres.map((genre) => (
                <span
                  key={genre}
                  className="text-xs px-2 py-0.5 bg-musicConnect-purple/20 text-musicConnect-purple rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <p className="text-xs text-gray-400 mb-1">Skills</p>
            <div className="flex flex-wrap gap-1">
              {artist.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-0.5 bg-musicConnect-green/20 text-musicConnect-green rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              className="text-white border-musicConnect-border hover:bg-musicConnect-blue/20 hover:border-musicConnect-blue"
            >
              View Profile
            </Button>
            <Button size="sm" className="ml-2 bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
              <UserPlus className="h-4 w-4 mr-1" />
              Connect
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ConnectionsPage() {
  const [activeTab, setActiveTab] = useState("matches")

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Connections</h1>
            <p className="text-gray-400">Find and connect with other music professionals</p>
          </div>

          <Tabs defaultValue="matches" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList className="bg-[#1F1F23] border border-musicConnect-border">
              <TabsTrigger value="matches">Top Matches</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="connected">Connected</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Top Matches For You</h2>
          <Button variant="outline" size="sm" className="text-white border-musicConnect-border hover:bg-[#2B2B30]">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {artists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
            Find More Collaborators
          </Button>
        </div>
      </div>
    </Layout>
  )
}
