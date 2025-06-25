"use client"

import { useState } from "react"
import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Play, UserPlus, Instagram, Music2 } from "lucide-react"
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
  instagram?: string
  tiktok?: string
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
    instagram: "@sophiamartinez",
    tiktok: "@sophiamusic",
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
    instagram: "@marcusbeats",
    tiktok: "@marcusproducer",
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
    instagram: "@emmawilsonmusic",
    tiktok: "@emmaguitar",
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
    instagram: "@davidkimcomposer",
    tiktok: "@davidkimmusic",
  },
  {
    name: "Aria Rodriguez",
    role: "Singer-Songwriter",
    avatar: "/placeholder.svg?height=80&width=80",
    genres: ["Folk", "Indie", "Acoustic"],
    skills: ["Songwriting", "Guitar", "Harmonies"],
    location: "Austin, TX",
    audioPreview: "#",
    matchPercentage: 91,
    instagram: "@ariarodriguezmusic",
    tiktok: "@ariasongs",
  },
  {
    name: "Tyler Chen",
    role: "Electronic Producer",
    avatar: "/placeholder.svg?height=80&width=80",
    genres: ["EDM", "House", "Techno"],
    skills: ["Synthesis", "Sound Design", "DJ"],
    location: "Miami, FL",
    audioPreview: "#",
    matchPercentage: 76,
    instagram: "@tylerbeats",
    tiktok: "@tylerchen_edm",
  },
]

function ArtistCard({ artist }: { artist: ArtistProps }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5 hover:border-musicConnect-blue transition-colors">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <Image
            src={artist.avatar || "/placeholder.svg"}
            alt={artist.name}
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
          {artist.audioPreview && (
            <button
              onClick={togglePlay}
              className="absolute bottom-2 right-2 p-2 rounded-full bg-musicConnect-blue/90 hover:bg-musicConnect-blue transition-colors"
            >
              <Play className="h-4 w-4 text-white" fill="white" />
            </button>
          )}
        </div>

        <div className="w-full space-y-3">
          <div>
            <h3 className="text-lg font-medium text-white">{artist.name}</h3>
            <p className="text-sm text-gray-400">{artist.role}</p>
            <p className="text-xs text-gray-500">{artist.location}</p>
          </div>

          <div className="bg-musicConnect-blue/20 text-musicConnect-blue px-3 py-1 rounded-full text-sm font-medium inline-block">
            {artist.matchPercentage}% Match
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-2">Genres</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {artist.genres.slice(0, 3).map((genre) => (
                <span
                  key={genre}
                  className="text-xs px-2 py-1 bg-musicConnect-purple/20 text-musicConnect-purple rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-2">Skills</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {artist.skills.slice(0, 2).map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-1 bg-musicConnect-green/20 text-musicConnect-green rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          {(artist.instagram || artist.tiktok) && (
            <div className="flex justify-center gap-3 pt-2">
              {artist.instagram && (
                <a
                  href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
              )}
              {artist.tiktok && (
                <a
                  href={`https://tiktok.com/@${artist.tiktok.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-black hover:bg-gray-800 transition-colors"
                >
                  <Music2 className="h-4 w-4 text-white" />
                </a>
              )}
            </div>
          )}

          <div className="flex flex-col gap-2 pt-3">
            <Button
              variant="outline"
              size="sm"
              className="text-white border-musicConnect-border hover:bg-musicConnect-blue/20 hover:border-musicConnect-blue"
            >
              View Profile
            </Button>
            <Button size="sm" className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
