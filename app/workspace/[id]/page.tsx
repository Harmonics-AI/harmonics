"use client"

import { useState, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Upload,
  Play,
  Pause,
  Download,
  MessageSquare,
  Plus,
  Settings,
  Users,
  FileAudio,
  Calendar,
  Folder,
  Volume2,
  MoreHorizontal,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"

interface AudioVersion {
  id: string
  name: string
  uploadedBy: string
  uploadedAt: string
  duration: string
  size: string
  comments: Comment[]
}

interface Comment {
  id: string
  user: string
  avatar: string
  timestamp: string
  audioTime: string
  content: string
  resolved: boolean
}

interface Task {
  id: string
  title: string
  assignee: string
  status: "todo" | "in-progress" | "review" | "done"
  priority: "low" | "medium" | "high"
  dueDate: string
}

export default function WorkspacePage() {
  const params = useParams()
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [activeTab, setActiveTab] = useState("overview")
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState("1:23")
  const [totalTime] = useState("3:45")
  const [isFilesDropdownOpen, setIsFilesDropdownOpen] = useState(false)

  const [audioVersions] = useState<AudioVersion[]>([
    {
      id: "1",
      name: "Summer_EP_Track1_v3.wav",
      uploadedBy: "You",
      uploadedAt: "2 hours ago",
      duration: "3:45",
      size: "42.3 MB",
      comments: [
        {
          id: "1",
          user: "Sophia Martinez",
          avatar: "/placeholder.svg?height=32&width=32",
          timestamp: "1 hour ago",
          audioTime: "1:23",
          content: "Love the vocal arrangement here, but could we add more reverb?",
          resolved: false,
        },
      ],
    },
    {
      id: "2",
      name: "Summer_EP_Track1_v2.wav",
      uploadedBy: "Marcus Johnson",
      uploadedAt: "1 day ago",
      duration: "3:42",
      size: "41.8 MB",
      comments: [],
    },
  ])

  const [tasks] = useState<Task[]>([
    {
      id: "1",
      title: "Mix vocals for Track 1",
      assignee: "Marcus Johnson",
      status: "in-progress",
      priority: "high",
      dueDate: "2024-01-15",
    },
    {
      id: "2",
      title: "Create album artwork",
      assignee: "Sophia Martinez",
      status: "todo",
      priority: "medium",
      dueDate: "2024-01-20",
    },
    {
      id: "3",
      title: "Master final tracks",
      assignee: "You",
      status: "todo",
      priority: "high",
      dueDate: "2024-01-25",
    },
  ])

  const handleFileUpload = () => {
    fileInputRef.current?.click()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "todo":
        return "bg-gray-500"
      case "in-progress":
        return "bg-amber-500"
      case "review":
        return "bg-blue-500"
      case "done":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "text-green-400"
      case "medium":
        return "text-amber-400"
      case "high":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-gray-400 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Workspaces
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-white">Summer EP Production</h1>
              <p className="text-gray-400">Four-track EP with R&B and soul influences</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-musicConnect-border hover:bg-[#2B2B30]"
                onClick={() => setIsFilesDropdownOpen(!isFilesDropdownOpen)}
              >
                <Folder className="h-4 w-4 mr-2" />
                Files
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              {isFilesDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-[#1F1F23] border border-musicConnect-border rounded-lg shadow-lg z-10">
                  <div className="p-2 space-y-1">
                    {[
                      { name: "Summer_EP_Track1_v3.wav", type: "Audio" },
                      { name: "Vocals_Raw.wav", type: "Audio" },
                      { name: "Instrumental_v2.wav", type: "Audio" },
                      { name: "Lyrics_Draft.txt", type: "Document" },
                      { name: "Album_Artwork.psd", type: "Image" },
                    ].map((file, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 hover:bg-[#2B2B30] rounded cursor-pointer">
                        <FileAudio className="h-4 w-4 text-musicConnect-blue" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white truncate">{file.name}</p>
                          <p className="text-xs text-gray-400">{file.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Button variant="outline" size="sm" className="text-white border-musicConnect-border hover:bg-[#2B2B30]">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm" className="text-white border-musicConnect-border hover:bg-[#2B2B30]">
              <Users className="h-4 w-4 mr-2" />
              Invite
            </Button>
          </div>
        </div>

        {/* Task Board Preview */}
        <Card className="bg-[#1F1F23] border-musicConnect-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Task Board</CardTitle>
              <Button size="sm" className="bg-musicConnect-blue hover:bg-musicConnect-blue/80">
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["todo", "in-progress", "review", "done"].map((status) => (
                <div key={status} className="text-center">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(status)} mx-auto mb-1`} />
                  <p className="text-xs text-gray-400 capitalize">{status.replace("-", " ")}</p>
                  <p className="text-lg font-bold text-white">
                    {tasks.filter((task) => task.status === status).length}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-[#1F1F23] border border-musicConnect-border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
            <TabsTrigger value="tasks">Task Board</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Audio Player */}
              <Card className="lg:col-span-2 bg-[#1F1F23] border-musicConnect-border">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileAudio className="h-5 w-5" />
                    Current Track: Summer_EP_Track1_v3.wav
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Waveform Placeholder */}
                  <div className="h-24 bg-[#2B2B30] rounded-lg flex items-center justify-center">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-musicConnect-blue rounded-full"
                          style={{ height: `${Math.random() * 60 + 10}px` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button
                        size="sm"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-musicConnect-blue hover:bg-musicConnect-blue/80"
                      >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <span className="text-sm text-gray-400">
                        {currentTime} / {totalTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Volume2 className="h-4 w-4 text-gray-400" />
                      <div className="w-20 h-1 bg-[#2B2B30] rounded-full">
                        <div className="w-3/4 h-full bg-musicConnect-blue rounded-full" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-[#1F1F23] border-musicConnect-border">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={handleFileUpload}
                    className="w-full bg-musicConnect-blue hover:bg-musicConnect-blue/80"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload New Version
                  </Button>
                  <Button variant="outline" className="w-full text-white border-musicConnect-border hover:bg-[#2B2B30]">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Add Comment
                  </Button>
                  <Button variant="outline" className="w-full text-white border-musicConnect-border hover:bg-[#2B2B30]">
                    <Download className="h-4 w-4 mr-2" />
                    Download All
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Collaboration Timeline */}
            <Card className="bg-[#1F1F23] border-musicConnect-border">
              <CardHeader>
                <CardTitle className="text-white">Collaboration Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { user: "You", action: "created the workspace", time: "1 week ago", type: "create" },
                    { user: "Sophia Martinez", action: "joined the collaboration", time: "6 days ago", type: "join" },
                    { user: "Marcus Johnson", action: "started mixing process", time: "5 days ago", type: "audio" },
                    { user: "You", action: "uploaded latest version", time: "2 hours ago", type: "upload" },
                    { user: "Sophia Martinez", action: "added vocal feedback", time: "1 hour ago", type: "comment" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-musicConnect-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-white">{activity.user.charAt(0)}</span>
                      </div>
                      <div className="flex-1 pb-4 border-l border-gray-600 pl-4 -ml-4">
                        <p className="text-sm text-white">
                          <span className="font-medium">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="files" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Project Files & Audio Versions</h2>
              <Button onClick={handleFileUpload} className="bg-musicConnect-blue hover:bg-musicConnect-blue/80">
                <Upload className="h-4 w-4 mr-2" />
                Upload Files
              </Button>
            </div>
            
            {/* Audio Versions Section */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Audio Versions</h3>
              <div className="space-y-4">
              {audioVersions.map((version) => (
                <Card key={version.id} className="bg-[#1F1F23] border-musicConnect-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-musicConnect-blue rounded-lg flex items-center justify-center">
                          <FileAudio className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{version.name}</h3>
                          <p className="text-sm text-gray-400">
                            Uploaded by {version.uploadedBy} • {version.uploadedAt}
                          </p>
                          <p className="text-xs text-gray-400">
                            {version.duration} • {version.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" className="text-white border-musicConnect-border">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-white border-musicConnect-border">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-white border-musicConnect-border">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {version.comments.length > 0 && (
                      <div className="mt-4 space-y-3">
                        <h4 className="text-sm font-medium text-gray-300">Comments</h4>
                        {version.comments.map((comment) => (
                          <div key={comment.id} className="flex gap-3 p-3 bg-[#2B2B30] rounded-lg">
                            <Image
                              src={comment.avatar || "/placeholder.svg"}
                              alt={comment.user}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-medium text-white">{comment.user}</span>
                                <Badge variant="outline" className="text-xs">
                                  {comment.audioTime}
                                </Badge>
                                <span className="text-xs text-gray-400">{comment.timestamp}</span>
                              </div>
                              <p className="text-sm text-gray-300">{comment.content}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Button size="sm" variant="ghost" className="text-xs text-gray-400 hover:text-white">
                                  Reply
                                </Button>
                                <Button size="sm" variant="ghost" className="text-xs text-gray-400 hover:text-white">
                                  {comment.resolved ? "Resolved" : "Mark Resolved"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
                              ))}
              </div>
            </div>
            
            {/* Other Files Section */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Other Files</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Lyrics_Draft.txt", size: "2.1 KB", type: "text", date: "3 days ago" },
                  { name: "Album_Artwork.psd", size: "12.4 MB", type: "image", date: "1 week ago" },
                  { name: "Project_Notes.pdf", size: "156 KB", type: "document", date: "1 week ago" },
                  { name: "Reference_Track.mp3", size: "8.2 MB", type: "audio", date: "2 weeks ago" },
                ].map((file, index) => (
                  <Card key={index} className="bg-[#1F1F23] border-musicConnect-border">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-musicConnect-blue rounded-lg flex items-center justify-center">
                          <Folder className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-white truncate">{file.name}</h4>
                          <p className="text-xs text-gray-400">
                            {file.size} • {file.date}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Task Board</h2>
              <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80">
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {["todo", "in-progress", "review", "done"].map((status) => (
                <Card key={status} className="bg-[#1F1F23] border-musicConnect-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white capitalize flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(status)}`} />
                      {status.replace("-", " ")}
                      <Badge variant="secondary" className="ml-auto">
                        {tasks.filter((task) => task.status === status).length}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {tasks
                      .filter((task) => task.status === status)
                      .map((task) => (
                        <div key={task.id} className="p-3 bg-[#2B2B30] rounded-lg">
                          <h4 className="text-sm font-medium text-white mb-2">{task.title}</h4>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-400">{task.assignee}</span>
                            <span className={getPriorityColor(task.priority)}>{task.priority}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                            <Calendar className="h-3 w-3" />
                            {task.dueDate}
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notes" className="space-y-6">
            <Card className="bg-[#1F1F23] border-musicConnect-border">
              <CardHeader>
                <CardTitle className="text-white">Project Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Add your project notes here..."
                  className="min-h-[300px] bg-[#2B2B30] border-musicConnect-border text-white"
                  defaultValue="Project Goals:
- Create a cohesive 4-track EP with R&B and soul influences
- Target completion by end of January
- Focus on vocal harmonies and smooth production

Technical Notes:
- Recording in 24-bit/96kHz
- Using vintage-style compression on vocals
- Aim for -14 LUFS mastering standard

Collaboration Notes:
- Sophia handling lead vocals and harmonies
- Marcus responsible for mixing and mastering
- Weekly check-ins every Tuesday at 3 PM"
                />
              </CardContent>
            </Card>
          </TabsContent>


        </Tabs>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="audio/*,image/*,.pdf,.txt,.doc,.docx"
          className="hidden"
          onChange={(e) => {
            // Handle file upload
            console.log("Files selected:", e.target.files)
          }}
        />
      </div>
    </Layout>
  )
}
