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
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, X, Users, Music, Palette, Settings, Upload } from "lucide-react"

interface WorkspaceTemplate {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  features: string[]
}

export default function CreateWorkspacePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [workspaceData, setWorkspaceData] = useState({
    template: "",
    title: "",
    description: "",
    genre: "",
    collaborators: [] as string[],
    privacy: "private",
    features: [] as string[],
  })
  const [newCollaborator, setNewCollaborator] = useState("")

  const templates: WorkspaceTemplate[] = [
    {
      id: "music-production",
      name: "Music Production",
      description: "Full-featured studio for creating original music",
      icon: <Music className="h-6 w-6" />,
      features: ["Audio Recording", "MIDI Sequencing", "Effects Processing", "Mixing Console"],
    },
    {
      id: "remix-project",
      name: "Remix Project",
      description: "Collaborative remixing and remastering workspace",
      icon: <Settings className="h-6 w-6" />,
      features: ["Version Control", "A/B Testing", "Stem Separation", "Reference Tracks"],
    },
    {
      id: "songwriting",
      name: "Songwriting",
      description: "Lyric writing and composition collaboration",
      icon: <Palette className="h-6 w-6" />,
      features: ["Lyric Editor", "Chord Progressions", "Voice Memos", "Rhyme Dictionary"],
    },
    {
      id: "podcast-production",
      name: "Podcast Production",
      description: "Audio editing and podcast creation workspace",
      icon: <Upload className="h-6 w-6" />,
      features: ["Multi-track Editing", "Noise Reduction", "Chapter Markers", "Publishing Tools"],
    },
  ]

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

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
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

        {/* Progress Steps */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber ? "bg-musicConnect-blue text-white" : "bg-[#2B2B30] text-gray-400"
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-16 h-0.5 mx-2 ${step > stepNumber ? "bg-musicConnect-blue" : "bg-[#2B2B30]"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div className="space-y-6">
            <Card className="bg-[#1F1F23] border-musicConnect-border">
              <CardHeader>
                <CardTitle className="text-white">Choose a Template</CardTitle>
                <p className="text-gray-400">Select the type of workspace that best fits your project</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {templates.map((template) => (
                    <div
                      key={template.id}
                      onClick={() => setWorkspaceData((prev) => ({ ...prev, template: template.id }))}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        workspaceData.template === template.id
                          ? "border-musicConnect-blue bg-musicConnect-blue/10"
                          : "border-musicConnect-border hover:border-musicConnect-blue/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-musicConnect-blue/20 rounded-lg text-musicConnect-blue">
                          {template.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-white mb-1">{template.name}</h3>
                          <p className="text-sm text-gray-400 mb-3">{template.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {template.features.map((feature, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button
                onClick={nextStep}
                disabled={!workspaceData.template}
                className="bg-musicConnect-blue hover:bg-musicConnect-blue/80"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
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

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                className="text-white border-musicConnect-border hover:bg-[#2B2B30]"
              >
                Back
              </Button>
              <Button
                onClick={nextStep}
                disabled={!workspaceData.title.trim()}
                className="bg-musicConnect-blue hover:bg-musicConnect-blue/80"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
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

            {/* Summary */}
            <Card className="bg-[#1F1F23] border-musicConnect-border">
              <CardHeader>
                <CardTitle className="text-white">Workspace Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Template:</span>
                    <p className="text-white capitalize">{workspaceData.template.replace("-", " ")}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Privacy:</span>
                    <p className="text-white capitalize">{workspaceData.privacy}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Title:</span>
                    <p className="text-white">{workspaceData.title || "Untitled Project"}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Genre:</span>
                    <p className="text-white">{workspaceData.genre || "Not specified"}</p>
                  </div>
                </div>
                {workspaceData.collaborators.length > 0 && (
                  <div>
                    <span className="text-gray-400 text-sm">Collaborators:</span>
                    <p className="text-white">{workspaceData.collaborators.join(", ")}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                className="text-white border-musicConnect-border hover:bg-[#2B2B30]"
              >
                Back
              </Button>
              <Button onClick={handleCreate} className="bg-musicConnect-blue hover:bg-musicConnect-blue/80">
                Create Workspace
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
