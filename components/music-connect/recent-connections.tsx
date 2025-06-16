import { Button } from "@/components/ui/button"
import { Play, UserPlus } from "lucide-react"
import Image from "next/image"

interface ConnectionProps {
  name: string
  role: string
  avatar: string
  genres: string[]
  audioPreview?: string
}

const connections: ConnectionProps[] = [
  {
    name: "Sophia Martinez",
    role: "Vocalist",
    avatar: "/placeholder.svg?height=40&width=40",
    genres: ["R&B", "Soul"],
    audioPreview: "#",
  },
  {
    name: "Marcus Johnson",
    role: "Producer",
    avatar: "/placeholder.svg?height=40&width=40",
    genres: ["Hip Hop", "Trap"],
    audioPreview: "#",
  },
  {
    name: "Emma Wilson",
    role: "Guitarist",
    avatar: "/placeholder.svg?height=40&width=40",
    genres: ["Rock", "Alternative"],
    audioPreview: "#",
  },
  {
    name: "David Kim",
    role: "Composer",
    avatar: "/placeholder.svg?height=40&width=40",
    genres: ["Classical", "Film Score"],
    audioPreview: "#",
  },
]

function ConnectionCard({ connection }: { connection: ConnectionProps }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-musicConnect-background transition-colors">
      <Image
        src={connection.avatar || "/placeholder.svg"}
        alt={connection.name}
        width={40}
        height={40}
        className="rounded-full object-cover"
      />

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-white truncate">{connection.name}</h3>
        <p className="text-xs text-gray-400">{connection.role}</p>
        <div className="flex flex-wrap mt-1">
          {connection.genres.map((genre) => (
            <span
              key={genre}
              className="text-xs px-2 py-0.5 bg-musicConnect-blue/20 text-musicConnect-blue rounded-full mr-1"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {connection.audioPreview && (
          <button className="p-1.5 rounded-full bg-musicConnect-background hover:bg-musicConnect-blue/20 transition-colors">
            <Play className="h-3.5 w-3.5 text-musicConnect-blue" />
          </button>
        )}
        <button className="p-1.5 rounded-full bg-musicConnect-background hover:bg-musicConnect-blue/20 transition-colors">
          <UserPlus className="h-3.5 w-3.5 text-musicConnect-blue" />
        </button>
      </div>
    </div>
  )
}

export default function RecentConnections() {
  return (
    <div className="space-y-3">
      {connections.map((connection) => (
        <ConnectionCard key={connection.name} connection={connection} />
      ))}

      <Button
        variant="outline"
        className="w-full mt-4 border-musicConnect-border text-white hover:bg-musicConnect-blue/20 hover:text-white"
      >
        Find More Collaborators
      </Button>
    </div>
  )
}
