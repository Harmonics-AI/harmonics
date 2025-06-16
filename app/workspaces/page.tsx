"use client"

import { useState } from "react"
import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, File, MessageSquare, Plus, Upload } from "lucide-react"
import Image from "next/image"

interface WorkspaceProps {
  title: string
  description: string
  collaborators: { name: string; avatar: string; role: string }[]
  status: "In Progress" | "Feedback Needed" | "Finalizing" | "Completed"
  lastUpdated: string
  files: number
  messages: number
  progress: number
}

const workspaces: WorkspaceProps[] = [
  {
    title: "Summer EP Production",
    description: "Four-track EP with R&B and soul influences",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=32&width=32", role: "Producer" },
      { name: "Sophia Martinez", avatar: "/placeholder.svg?height=32&width=32", role: "Vocalist" },
      { name: "Marcus Johnson", avatar: "/placeholder.svg?height=32&width=32", role: "Mixing Engineer" },
    ],
    status: "In Progress",
    lastUpdated: "Updated 2 hours ago",
    files: 12,
    messages: 24,
    progress: 65,
  },
  {
    title: "Remix Project",
    description: "Electronic remix of 'Midnight Dreams'",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=32&width=32", role: "Producer" },
      { name: "David Kim", avatar: "/placeholder.svg?height=32&width=32", role: "Composer" },
    ],
    status: "Feedback Needed",
    lastUpdated: "Updated yesterday",
    files: 8,
    messages: 16,
    progress: 40,
  },
  {
    title: "Film Score Collaboration",
    description: "Original score for indie short film 'Echoes'",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=32&width=32", role: "Composer" },
      { name: "Emma Wilson", avatar: "/placeholder.svg?height=32&width=32", role: "Guitarist" },
      { name: "David Kim", avatar: "/placeholder.svg?height=32&width=32", role: "Composer" },
    ],
    status: "Finalizing",
    lastUpdated: "Updated 3 days ago",
    files: 15,
    messages: 32,
    progress: 90,
  },
]

function StatusBadge({ status }: { status: WorkspaceProps["status"] }) {
  let color = ""

  switch (status) {
    case "In Progress":
      color = "text-amber-400 bg-amber-400/20"
      break
    case "Feedback Needed":
      color = "text-musicConnect-blue bg-musicConnect-blue/20"
      break
    case "Finalizing":
      color = "text-green-400 bg-green-400/20"
      break
    case "Completed":
      color = "text-purple-400 bg-purple-400/20"
      break
  }

  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${color}`}>{status}</span>
}

function WorkspaceCard({ workspace, index }: { workspace: WorkspaceProps; index: number }) {
  return (
    <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5 hover:border-musicConnect-blue transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-white">{workspace.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{workspace.description}</p>
        </div>
        <StatusBadge status={workspace.status} />
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-400">Progress</span>
          <span className="text-xs text-white">{workspace.progress}%</span>
        </div>
        <div className="h-2 bg-[#2B2B30] rounded-full overflow-hidden">
          <div className="h-full bg-musicConnect-blue rounded-full" style={{ width: `${workspace.progress}%` }} />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-gray-400 mr-1.5" />
          <span className="text-xs text-gray-400">{workspace.lastUpdated}</span>
        </div>
        <div className="flex items-center">
          <File className="h-4 w-4 text-gray-400 mr-1.5" />
          <span className="text-xs text-gray-400">{workspace.files} files</span>
        </div>
        <div className="flex items-center">
          <MessageSquare className="h-4 w-4 text-gray-400 mr-1.5" />
          <span className="text-xs text-gray-400">{workspace.messages} messages</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex -space-x-2">
          {workspace.collaborators.map((collaborator, index) => (
            <div key={index} className="relative group">
              <Image
                src={collaborator.avatar || "/placeholder.svg"}
                alt={collaborator.name}
                width={32}
                height={32}
                className="rounded-full border-2 border-[#1F1F23]"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 px-2 py-1 bg-[#2B2B30] rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                {collaborator.name} • {collaborator.role}
              </div>
            </div>
          ))}
        </div>

        <Button
          className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white"
          onClick={() => (window.location.href = `/workspace/${index + 1}`)}
        >
          Open Workspace
        </Button>
      </div>
    </div>
  )
}

export default function WorkspacesPage() {
  const [activeTab, setActiveTab] = useState("active")

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Workspaces</h1>
            <p className="text-gray-400">Collaborate on music projects with your connections</p>
          </div>

          <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList className="bg-[#1F1F23] border border-musicConnect-border">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
              <TabsTrigger value="shared">Shared with me</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Your Active Workspaces</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-white border-musicConnect-border hover:bg-[#2B2B30]">
              <Calendar className="h-4 w-4 mr-2" />
              Calendar
            </Button>
            <Button variant="outline" size="sm" className="text-white border-musicConnect-border hover:bg-[#2B2B30]">
              <Upload className="h-4 w-4 mr-2" />
              Upload Files
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {workspaces.map((workspace, index) => (
            <WorkspaceCard key={index} workspace={workspace} index={index} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white"
            onClick={() => (window.location.href = "/workspace/create")}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create New Workspace
          </Button>
        </div>
      </div>
    </Layout>
  )
}
