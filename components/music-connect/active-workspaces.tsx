import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CheckCircle, AlertCircle, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface WorkspaceProps {
  id: number
  title: string
  collaborators: { name: string; avatar: string }[]
  status: "In Progress" | "Feedback Needed" | "Finalizing"
  lastUpdated: string
}

const workspaces: WorkspaceProps[] = [
  {
    id: 1,
    title: "Summer EP Production",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Sophia Martinez", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Marcus Johnson", avatar: "/placeholder.svg?height=24&width=24" },
    ],
    status: "In Progress",
    lastUpdated: "Updated 2 hours ago",
  },
  {
    id: 2,
    title: "Remix Project",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "David Kim", avatar: "/placeholder.svg?height=24&width=24" },
    ],
    status: "Feedback Needed",
    lastUpdated: "Updated yesterday",
  },
  {
    id: 3,
    title: "Film Score Collaboration",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Emma Wilson", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "David Kim", avatar: "/placeholder.svg?height=24&width=24" },
    ],
    status: "Finalizing",
    lastUpdated: "Updated 3 days ago",
  },
]

function StatusBadge({ status }: { status: WorkspaceProps["status"] }) {
  let color = ""
  let icon = null

  switch (status) {
    case "In Progress":
      color = "text-amber-400 bg-amber-400/20"
      icon = <Clock className="h-3 w-3 mr-1" />
      break
    case "Feedback Needed":
      color = "text-musicConnect-blue bg-musicConnect-blue/20"
      icon = <AlertCircle className="h-3 w-3 mr-1" />
      break
    case "Finalizing":
      color = "text-green-400 bg-green-400/20"
      icon = <CheckCircle className="h-3 w-3 mr-1" />
      break
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${color}`}>
      {icon}
      {status}
    </span>
  )
}

function WorkspaceCard({ workspace }: { workspace: WorkspaceProps }) {
  return (
    <div className="p-3 rounded-lg hover:bg-musicConnect-background transition-colors">
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-white">{workspace.title}</h3>
        <StatusBadge status={workspace.status} />
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex -space-x-2">
          {workspace.collaborators.map((collaborator, index) => (
            <Image
              key={index}
              src={collaborator.avatar || "/placeholder.svg"}
              alt={collaborator.name}
              width={24}
              height={24}
              className="rounded-full border-2 border-[#1F1F23]"
              title={collaborator.name}
            />
          ))}
        </div>

        <p className="text-xs text-gray-400">{workspace.lastUpdated}</p>
      </div>

      <Button
        variant="ghost"
        className="w-full mt-3 text-musicConnect-blue hover:bg-musicConnect-blue/10 hover:text-musicConnect-blue p-0 h-8"
        asChild
      >
        <Link href={`/workspace/${workspace.id}`}>
          Open Workspace
          <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Link>
      </Button>
    </div>
  )
}

export default function ActiveWorkspaces() {
  return (
    <div className="space-y-3">
      {workspaces.map((workspace, index) => (
        <WorkspaceCard key={index} workspace={workspace} />
      ))}

      <Button
        variant="outline"
        className="w-full mt-4 border-musicConnect-border text-white hover:bg-musicConnect-blue/20 hover:text-white"
        asChild
      >
        <Link href="/workspace/create">
          <Plus className="mr-2 h-4 w-4" />
          Create New Workspace
        </Link>
      </Button>
    </div>
  )
}
