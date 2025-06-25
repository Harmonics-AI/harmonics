"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Plus, X, Users } from "lucide-react"

export default function CreateWorkspacePage() {
  const router = useRouter()
  const [workspaceData, setWorkspaceData] = useState({
    title: "",
    description: "",
    genre: "",
    collaborators: [] as string[],
    privacy: "private",
  })
  const [newCollaborator, setNewCollaborator] = useState("")

  const addCollaborator = () => {
    if (newCollaborator.trim() && !workspaceData.collaborators.includes(newCollaborator.trim())) {
      setWorkspaceData((prev) => ({
        ...prev,
        collaborators: [...prev.collaborators, newCollaborator.trim()],
      }))
      setNewCollaborator("")
    }
  }

  const removeCollaborator = (collaborator: string) => {
    setWorkspaceData((prev) => ({
      ...prev,
      collaborators: prev.collaborators.filter((c) => c !== collaborator),
    }))
  }

  const handleCreate = () => {
    // In a real app, this would create the workspace via API
    console.log("Creating workspace:", workspaceData)
    router.push("/workspace/1")
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Workspaces
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-white">Create New Workspace</h1>
            <p className="text-gray-400">Set up a collaborative music project</p>
          </div>
        </div>

        {/* Workspace Creation Form */}
        <div className="space-y-6">
          <Card className="bg-[#1F1F23] border-musicConnect-border">
            <CardHeader>
              <CardTitle className="text-white">Project Details</CardTitle>
              <p className="text-gray-400">Tell us about your project</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-gray-300">
                  Project Title *
                </Label>
                <Input
                  id="title"
                  value={workspaceData.title}
                  onChange={(e) => setWorkspaceData((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter project title..."
                  className="bg-[#2B2B30] border-musicConnect-border text-white"
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-gray-300">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={workspaceData.description}
                  onChange={(e) => setWorkspaceData((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your project..."
                  className="bg-[#2B2B30] border-musicConnect-border text-white min-h-[100px]"
                />
              </div>
              <div>
                <Label htmlFor="genre" className="text-gray-300">
                  Genre
                </Label>
                <Select
                  value={workspaceData.genre}
                  onValueChange={(value) => setWorkspaceData((prev) => ({ ...prev, genre: value }))}
                >
                  <SelectTrigger className="bg-[#2B2B30] border-musicConnect-border text-white">
                    <SelectValue placeholder="Select genre..." />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2B2B30] border-musicConnect-border">
                    <SelectItem value="pop">Pop</SelectItem>
                    <SelectItem value="rock">Rock</SelectItem>
                    <SelectItem value="hip-hop">Hip-Hop</SelectItem>
                    <SelectItem value="electronic">Electronic</SelectItem>
                    <SelectItem value="r&b">R&B</SelectItem>
                    <SelectItem value="jazz">Jazz</SelectItem>
                    <SelectItem value="classical">Classical</SelectItem>
                    <SelectItem value="country">Country</SelectItem>
                    <SelectItem value="folk">Folk</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-gray-300">Privacy</Label>
                <Select
                  value={workspaceData.privacy}
                  onValueChange={(value) => setWorkspaceData((prev) => ({ ...prev, privacy: value }))}
                >
                  <SelectTrigger className="bg-[#2B2B30] border-musicConnect-border text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2B2B30] border-musicConnect-border">
                    <SelectItem value="private">Private - Only invited members</SelectItem>
                    <SelectItem value="invite-only">Invite Only - Members can invite others</SelectItem>
                    <SelectItem value="public">Public - Anyone can join</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1F1F23] border-musicConnect-border">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="h-5 w-5" />
                Invite Collaborators
              </CardTitle>
              <p className="text-gray-400">Add team members to your workspace (optional)</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={newCollaborator}
                  onChange={(e) => setNewCollaborator(e.target.value)}
                  placeholder="Enter username or email..."
                  className="bg-[#2B2B30] border-musicConnect-border text-white"
                  onKeyPress={(e) => e.key === "Enter" && addCollaborator()}
                />
                <Button
                  onClick={addCollaborator}
                  size="sm"
                  className="bg-musicConnect-blue hover:bg-musicConnect-blue/80"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {workspaceData.collaborators.length > 0 && (
                <div>
                  <Label className="text-gray-300 mb-2 block">Invited Collaborators</Label>
                  <div className="flex flex-wrap gap-2">
                    {workspaceData.collaborators.map((collaborator, index) => (
                      <div key={index} className="flex items-center gap-2 bg-[#2B2B30] px-3 py-1 rounded-full">
                        <span className="text-sm text-white">{collaborator}</span>
                        <button
                          onClick={() => removeCollaborator(collaborator)}
                          className="text-gray-400 hover:text-white"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 bg-[#2B2B30] rounded-lg">
                <h4 className="text-white font-medium mb-2">Suggested Collaborators</h4>
                <div className="space-y-2">
                  {["Sophia Martinez", "Marcus Johnson", "David Kim"].map((suggestion, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-musicConnect-blue rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">{suggestion.charAt(0)}</span>
                        </div>
                        <span className="text-sm text-white">{suggestion}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          if (!workspaceData.collaborators.includes(suggestion)) {
                            setWorkspaceData((prev) => ({
                              ...prev,
                              collaborators: [...prev.collaborators, suggestion],
                            }))
                          }
                        }}
                        className="text-musicConnect-blue hover:text-musicConnect-blue/80"
                      >
                        Invite
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button 
              onClick={handleCreate} 
              className="bg-musicConnect-blue hover:bg-musicConnect-blue/80"
              disabled={!workspaceData.title.trim()}
            >
              Create Workspace
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
