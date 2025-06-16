"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Plus,
  Send,
  Paperclip,
  Mic,
  MoreVertical,
  Phone,
  Video,
  ImageIcon,
  Music,
  File,
  ChevronLeft,
  CheckCheck,
  Check,
  Play,
  Pause,
  Volume2,
  Reply,
  Trash2,
  Users,
  Info,
  Share2,
  Archive,
  Smile,
} from "lucide-react"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  sender: "user" | "contact"
  timestamp: string
  time: string
  date: string
  read: boolean
  type?: "text" | "audio" | "image" | "file"
  attachments?: {
    type: "image" | "audio" | "file"
    name: string
    url: string
    size?: string
    duration?: string
    preview?: string
  }[]
  isEdited?: boolean
  replyTo?: {
    id: string
    content: string
    sender: "user" | "contact"
  }
}

interface Conversation {
  id: string
  contact: {
    id: string
    name: string
    avatar: string
    status: "online" | "offline" | "away"
    lastSeen?: string
    isTyping?: boolean
  }
  isGroup?: boolean
  groupMembers?: {
    id: string
    name: string
    avatar: string
    status: "online" | "offline" | "away"
  }[]
  messages: Message[]
  unreadCount: number
  lastMessage: {
    content: string
    timestamp: string
  }
  pinned?: boolean
}

const conversations: Conversation[] = [
  {
    id: "1",
    contact: {
      id: "c1",
      name: "Sophia Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      isTyping: true,
    },
    messages: [
      {
        id: "m1",
        content: "Hey Alex, I've been working on those vocal tracks you sent over. They sound amazing!",
        sender: "contact",
        timestamp: "10:30 AM",
        time: "10:30 AM",
        date: "Today",
        read: true,
        type: "text",
      },
      {
        id: "m2",
        content: "Thanks Sophia! I'm glad you like them. Do you think we should add more reverb to the chorus?",
        sender: "user",
        timestamp: "10:32 AM",
        time: "10:32 AM",
        date: "Today",
        read: true,
        type: "text",
      },
      {
        id: "m3",
        content:
          "I think a touch more would help it sit better in the mix. I'll send you a test version with different reverb settings.",
        sender: "contact",
        timestamp: "10:35 AM",
        time: "10:35 AM",
        date: "Today",
        read: true,
        type: "text",
      },
      {
        id: "m4",
        content: "",
        sender: "contact",
        timestamp: "10:36 AM",
        time: "10:36 AM",
        date: "Today",
        read: true,
        type: "audio",
        attachments: [
          {
            type: "audio",
            name: "chorus_reverb_test.mp3",
            url: "#",
            duration: "0:42",
            preview: "waveform",
          },
        ],
      },
      {
        id: "m5",
        content: "This sounds perfect! Let's go with this version.",
        sender: "user",
        timestamp: "10:40 AM",
        time: "10:40 AM",
        date: "Today",
        read: true,
        type: "text",
      },
      {
        id: "m6",
        content: "Here's a reference track I found that has a similar vibe to what we're going for",
        sender: "user",
        timestamp: "10:45 AM",
        time: "10:45 AM",
        date: "Today",
        read: true,
        type: "text",
      },
      {
        id: "m7",
        content: "",
        sender: "user",
        timestamp: "10:46 AM",
        time: "10:46 AM",
        date: "Today",
        read: true,
        type: "audio",
        attachments: [
          {
            type: "audio",
            name: "reference_track.mp3",
            url: "#",
            duration: "1:24",
            preview: "waveform",
          },
        ],
      },
      {
        id: "m8",
        content: "Love it! I'll use that as inspiration for the final mix.",
        sender: "contact",
        timestamp: "10:50 AM",
        time: "10:50 AM",
        date: "Today",
        read: true,
        type: "text",
      },
      {
        id: "m9",
        content: "Do you want me to add some additional harmonies in the bridge?",
        sender: "contact",
        timestamp: "10:52 AM",
        time: "10:52 AM",
        date: "Today",
        read: true,
        type: "text",
      },
      {
        id: "m10",
        content: "That would be great! Maybe we can layer 2-3 harmony tracks?",
        sender: "user",
        timestamp: "10:55 AM",
        time: "10:55 AM",
        date: "Today",
        read: true,
        type: "text",
        replyTo: {
          id: "m9",
          content: "Do you want me to add some additional harmonies in the bridge?",
          sender: "contact",
        },
      },
    ],
    unreadCount: 0,
    lastMessage: {
      content: "That would be great! Maybe we can layer 2-3 harmony tracks?",
      timestamp: "10:55 AM",
    },
    pinned: true,
  },
  {
    id: "2",
    contact: {
      id: "c2",
      name: "Marcus Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
    },
    messages: [
      {
        id: "m1",
        content: "Are we still on for the studio session tomorrow at 2?",
        sender: "contact",
        timestamp: "Yesterday",
        time: "5:45 PM",
        date: "Yesterday",
        read: true,
        type: "text",
      },
      {
        id: "m2",
        content: "Yes, definitely! I've booked the room and everything is set.",
        sender: "user",
        timestamp: "Yesterday",
        time: "5:50 PM",
        date: "Yesterday",
        read: true,
        type: "text",
      },
      {
        id: "m3",
        content: "Great! I've been working on some new beats I think you'll like.",
        sender: "contact",
        timestamp: "Yesterday",
        time: "6:05 PM",
        date: "Yesterday",
        read: false,
        type: "text",
      },
      {
        id: "m4",
        content: "",
        sender: "contact",
        timestamp: "Yesterday",
        time: "6:10 PM",
        date: "Yesterday",
        read: false,
        type: "image",
        attachments: [
          {
            type: "image",
            name: "studio_setup.jpg",
            url: "/placeholder.svg?height=300&width=400",
            size: "1.2 MB",
          },
        ],
      },
      {
        id: "m5",
        content: "Here's my setup for tomorrow. Got some new gear I want to try out!",
        sender: "contact",
        timestamp: "Yesterday",
        time: "6:12 PM",
        date: "Yesterday",
        read: false,
        type: "text",
      },
    ],
    unreadCount: 3,
    lastMessage: {
      content: "Here's my setup for tomorrow. Got some new gear I want to try out!",
      timestamp: "Yesterday",
    },
  },
  {
    id: "3",
    contact: {
      id: "c3",
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "away",
      lastSeen: "1 hour ago",
    },
    messages: [
      {
        id: "m1",
        content: "Here's the guitar track for the bridge section. Let me know what you think!",
        sender: "contact",
        timestamp: "Monday",
        time: "3:20 PM",
        date: "Monday",
        read: true,
        type: "text",
      },
      {
        id: "m2",
        content: "",
        sender: "contact",
        timestamp: "Monday",
        time: "3:22 PM",
        date: "Monday",
        read: true,
        type: "audio",
        attachments: [
          {
            type: "audio",
            name: "bridge_guitar.mp3",
            url: "#",
            duration: "1:38",
            preview: "waveform",
          },
        ],
      },
      {
        id: "m3",
        content: "This sounds amazing Emma! The tone is perfect. I'll add it to the project right away.",
        sender: "user",
        timestamp: "Monday",
        time: "4:15 PM",
        date: "Monday",
        read: true,
        type: "text",
        isEdited: true,
      },
    ],
    unreadCount: 0,
    lastMessage: {
      content: "This sounds amazing Emma! The tone is perfect. I'll add it to the project right away.",
      timestamp: "Monday",
    },
  },
  {
    id: "4",
    contact: {
      id: "c4",
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
      lastSeen: "3 hours ago",
    },
    messages: [
      {
        id: "m1",
        content:
          "I've reviewed the contract for the film score. Everything looks good, but we should clarify the licensing terms.",
        sender: "contact",
        timestamp: "May 15",
        time: "11:30 AM",
        date: "May 15",
        read: true,
        type: "text",
      },
      {
        id: "m2",
        content: "",
        sender: "contact",
        timestamp: "May 15",
        time: "11:32 AM",
        date: "May 15",
        read: true,
        type: "file",
        attachments: [
          {
            type: "file",
            name: "film_score_contract_v2.pdf",
            url: "#",
            size: "1.5 MB",
          },
        ],
      },
      {
        id: "m3",
        content: "I've highlighted the sections that need clarification on page 3 and 5.",
        sender: "contact",
        timestamp: "May 15",
        time: "11:35 AM",
        date: "May 15",
        read: true,
        type: "text",
      },
    ],
    unreadCount: 0,
    lastMessage: {
      content: "I've highlighted the sections that need clarification on page 3 and 5.",
      timestamp: "May 15",
    },
  },
  {
    id: "5",
    contact: {
      id: "c5",
      name: "Summer Project Team",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
    },
    isGroup: true,
    groupMembers: [
      {
        id: "m1",
        name: "You",
        avatar: "/placeholder.svg?height=24&width=24",
        status: "online",
      },
      {
        id: "m2",
        name: "Sophia Martinez",
        avatar: "/placeholder.svg?height=24&width=24",
        status: "online",
      },
      {
        id: "m3",
        name: "Marcus Johnson",
        avatar: "/placeholder.svg?height=24&width=24",
        status: "online",
      },
      {
        id: "m4",
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=24&width=24",
        status: "away",
      },
    ],
    messages: [
      {
        id: "m1",
        content: "Hey team! I've uploaded all the stems from our last session to the shared workspace.",
        sender: "user",
        timestamp: "Tuesday",
        time: "2:15 PM",
        date: "Tuesday",
        read: true,
        type: "text",
      },
      {
        id: "m2",
        content: "Thanks Alex! I'll take a look at the vocals and see if we need any additional takes.",
        sender: "contact",
        timestamp: "Tuesday",
        time: "2:20 PM",
        date: "Tuesday",
        read: true,
        type: "text",
      },
      {
        id: "m3",
        content: "I've started working on the drum programming. Should be done by tomorrow.",
        sender: "contact",
        timestamp: "Tuesday",
        time: "3:05 PM",
        date: "Tuesday",
        read: true,
        type: "text",
      },
      {
        id: "m4",
        content: "Great progress everyone! Here's a rough mix of what we have so far.",
        sender: "contact",
        timestamp: "Tuesday",
        time: "5:30 PM",
        date: "Tuesday",
        read: true,
        type: "text",
      },
      {
        id: "m5",
        content: "",
        sender: "contact",
        timestamp: "Tuesday",
        time: "5:32 PM",
        date: "Tuesday",
        read: true,
        type: "audio",
        attachments: [
          {
            type: "audio",
            name: "summer_ep_rough_mix_v1.mp3",
            url: "#",
            duration: "3:45",
            preview: "waveform",
          },
        ],
      },
    ],
    unreadCount: 0,
    lastMessage: {
      content: "summer_ep_rough_mix_v1.mp3",
      timestamp: "Tuesday",
    },
  },
]

function StatusIndicator({ status }: { status: Conversation["contact"]["status"] }) {
  let bgColor = ""

  switch (status) {
    case "online":
      bgColor = "bg-green-500"
      break
    case "away":
      bgColor = "bg-amber-500"
      break
    case "offline":
      bgColor = "bg-gray-500"
      break
  }

  return <div className={`absolute bottom-0 right-0 w-3 h-3 ${bgColor} rounded-full border-2 border-[#1F1F23]`} />
}

function ConversationItem({
  conversation,
  isActive,
  onClick,
}: {
  conversation: Conversation
  isActive: boolean
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
        isActive ? "bg-musicConnect-blue/20" : "hover:bg-[#2B2B30]"
      } transition-colors`}
    >
      <div className="relative">
        {conversation.isGroup ? (
          <div className="w-10 h-10 bg-[#2B2B30] rounded-full flex items-center justify-center">
            <Users className="h-5 w-5 text-musicConnect-blue" />
          </div>
        ) : (
          <Image
            src={conversation.contact.avatar || "/placeholder.svg"}
            alt={conversation.contact.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        )}
        {!conversation.isGroup && <StatusIndicator status={conversation.contact.status} />}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <h3 className="text-sm font-medium text-white truncate">{conversation.contact.name}</h3>
            {conversation.pinned && (
              <svg className="h-3 w-3 text-musicConnect-blue" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 4.5L18.5 8M8.5 21L10 19.5M10 19.5L4.5 14L14 4.5L19.5 10L10 19.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span className="text-xs text-gray-400">{conversation.lastMessage.timestamp}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-400 truncate">
            {conversation.contact.isTyping ? (
              <span className="text-musicConnect-blue">typing...</span>
            ) : (
              conversation.lastMessage.content
            )}
          </p>
          {conversation.unreadCount > 0 && (
            <span className="ml-2 flex-shrink-0 w-5 h-5 bg-musicConnect-blue rounded-full text-[10px] flex items-center justify-center text-white">
              {conversation.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function AudioMessage({ attachment, message }: { attachment: Message["attachments"][0]; message: Message }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current)
            }
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 420) // 42 seconds total duration for demo
    }
  }

  return (
    <div className="flex items-center gap-3 w-full max-w-xs sm:max-w-sm">
      <button
        onClick={togglePlay}
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          message.sender === "user" ? "bg-musicConnect-blue/50" : "bg-[#373740]"
        }`}
      >
        {isPlaying ? <Pause className="h-4 w-4 text-white" /> : <Play className="h-4 w-4 text-white" fill="white" />}
      </button>

      <div className="flex-1">
        <div className="waveform mb-1 h-8 bg-[#2B2B30] rounded overflow-hidden">
          <div className="waveform-bars h-full flex items-end px-1">
            {Array.from({ length: 50 }).map((_, i) => {
              // Generate random height for waveform bars
              const height = Math.max(10, Math.floor(Math.random() * 100))
              const isFilled = (i / 50) * 100 <= progress

              return (
                <div
                  key={i}
                  className={`waveform-bar ${
                    isFilled
                      ? message.sender === "user"
                        ? "bg-white"
                        : "bg-musicConnect-blue"
                      : message.sender === "user"
                        ? "bg-white/30"
                        : "bg-musicConnect-blue/30"
                  }`}
                  style={{ height: `${height}%` }}
                />
              )
            })}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">{attachment.duration}</span>
          <div className="flex items-center gap-1">
            <button className="text-gray-400 hover:text-white">
              <Volume2 className="h-3 w-3" />
            </button>
            <span className="text-xs text-gray-400">{attachment.name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function FileAttachment({ attachment }: { attachment: Message["attachments"][0] }) {
  let icon = <File className="h-4 w-4 text-gray-400" />
  let bgColor = "bg-[#2B2B30]"
  let textColor = "text-white"

  switch (attachment.type) {
    case "image":
      icon = <ImageIcon className="h-4 w-4 text-musicConnect-blue" />
      bgColor = "bg-musicConnect-blue/10"
      textColor = "text-musicConnect-blue"
      break
    case "audio":
      icon = <Music className="h-4 w-4 text-musicConnect-green" />
      bgColor = "bg-musicConnect-green/10"
      textColor = "text-musicConnect-green"
      break
    case "file":
      icon = <File className="h-4 w-4 text-amber-400" />
      bgColor = "bg-amber-400/10"
      textColor = "text-amber-400"
      break
  }

  return (
    <div className={`flex items-center gap-2 p-2 rounded-md ${bgColor}`}>
      {icon}
      <div className="flex-1 min-w-0">
        <span className={`text-xs ${textColor} font-medium truncate block`}>{attachment.name}</span>
        {attachment.size && <span className="text-[10px] text-gray-400">{attachment.size}</span>}
      </div>
      <button className="p-1 rounded-full hover:bg-[#1F1F23]/50">
        <svg className="h-3.5 w-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

function ImageAttachment({ attachment }: { attachment: Message["attachments"][0] }) {
  return (
    <div className="rounded-md overflow-hidden">
      <Image
        src={attachment.url || "/placeholder.svg"}
        alt={attachment.name}
        width={300}
        height={200}
        className="max-w-xs rounded-md object-cover"
      />
      <div className="flex justify-between items-center px-2 py-1 bg-[#2B2B30]">
        <span className="text-xs text-gray-300 truncate">{attachment.name}</span>
        {attachment.size && <span className="text-xs text-gray-400">{attachment.size}</span>}
      </div>
    </div>
  )
}

function MessageBubble({
  message,
  showDate = false,
  isFirstOfDay = false,
  onReply,
}: {
  message: Message
  showDate?: boolean
  isFirstOfDay?: boolean
  onReply: (message: Message) => void
}) {
  const isUser = message.sender === "user"
  const [showActions, setShowActions] = useState(false)

  const handleReply = (e: React.MouseEvent) => {
    e.stopPropagation()
    onReply(message)
  }

  return (
    <>
      {isFirstOfDay && (
        <div className="flex justify-center my-4">
          <div className="px-3 py-1 rounded-full bg-[#2B2B30] text-xs text-gray-400">{message.date}</div>
        </div>
      )}

      <div
        className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 group`}
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        {showActions && !isUser && (
          <div className="flex items-center mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleReply}
              className="p-1.5 rounded-full hover:bg-[#2B2B30] text-gray-400 hover:text-white"
            >
              <Reply className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        <div className={`max-w-[70%] ${isUser ? "bg-musicConnect-blue/30" : "bg-[#2B2B30]"} rounded-lg p-3 relative`}>
          {message.replyTo && (
            <div className="mb-2 px-3 py-2 rounded bg-[#1F1F23]/50 border-l-2 border-musicConnect-blue text-xs text-gray-400">
              <p className="text-gray-300 font-medium mb-1">
                {message.replyTo.sender === "user" ? "You" : "Sophia Martinez"}
              </p>
              <p className="truncate">{message.replyTo.content}</p>
            </div>
          )}

          {message.type === "audio" && message.attachments && message.attachments.length > 0 && (
            <AudioMessage attachment={message.attachments[0]} message={message} />
          )}

          {message.type === "image" && message.attachments && message.attachments.length > 0 && (
            <ImageAttachment attachment={message.attachments[0]} />
          )}

          {message.type === "file" && message.attachments && message.attachments.length > 0 && (
            <FileAttachment attachment={message.attachments[0]} />
          )}

          {message.content && <p className="text-sm text-white">{message.content}</p>}

          <div className="flex justify-end items-center gap-1 mt-1">
            <p className="text-xs text-gray-400">{message.time}</p>
            {isUser && (
              <div className="text-xs">
                {message.read ? (
                  <CheckCheck className="h-3.5 w-3.5 text-musicConnect-blue" />
                ) : (
                  <Check className="h-3.5 w-3.5 text-gray-400" />
                )}
              </div>
            )}
            {message.isEdited && <span className="text-[10px] text-gray-400">(edited)</span>}
          </div>
        </div>

        {showActions && isUser && (
          <div className="flex items-center ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleReply}
              className="p-1.5 rounded-full hover:bg-[#2B2B30] text-gray-400 hover:text-white"
            >
              <Reply className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </>
  )
}

function DateSeparator({ date }: { date: string }) {
  return (
    <div className="flex items-center justify-center my-6">
      <div className="h-px bg-musicConnect-border flex-1" />
      <div className="px-3 text-xs text-gray-400">{date}</div>
      <div className="h-px bg-musicConnect-border flex-1" />
    </div>
  )
}

function DropZone({ active }: { active: boolean }) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-[#1F1F23]/80 z-10 flex items-center justify-center transition-opacity",
        active ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div className="dropzone active p-10 text-center">
        <div className="text-4xl mb-3">📁</div>
        <h3 className="text-lg font-medium text-white">Drop files to send</h3>
        <p className="text-sm text-gray-400">Share audio, images, and documents</p>
      </div>
    </div>
  )
}

export default function MessagesPage() {
  const [activeConversationId, setActiveConversationId] = useState<string>("1")
  const [isMobileView, setIsMobileView] = useState(false)
  const [isAttachmentMenuOpen, setIsAttachmentMenuOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [replyToMessage, setReplyToMessage] = useState<Message | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // For mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    // Initial check
    handleResize()

    // Only add the listener, don't set any mobile-specific styles
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      // Clean up any mobile-specific styles
      document.body.classList.remove("mobile-view")
    }
  }, [])

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [activeConversationId])

  const activeConversation = conversations.find((c) => c.id === activeConversationId) || conversations[0]

  // Group messages by date for date separators
  const groupedMessages = activeConversation.messages.reduce(
    (acc, message) => {
      const date = message.date
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(message)
      return acc
    },
    {} as Record<string, Message[]>,
  )

  const handleBack = () => {
    setActiveConversationId("1") // Default to first conversation instead of null
  }

  const handleSend = () => {
    if (message.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", message)
      setMessage("")
      setReplyToMessage(null)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    // In a real app, this would handle the dropped files
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      console.log("Files dropped:", e.dataTransfer.files)
    }
  }

  const handleReply = (message: Message) => {
    setReplyToMessage(message)
  }

  const cancelReply = () => {
    setReplyToMessage(null)
  }

  return (
    <Layout>
      <div className="h-[calc(100vh-120px)] flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Messages</h1>
            <p className="text-gray-400">Connect with your collaborators</p>
          </div>

          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="bg-[#1F1F23] border border-musicConnect-border">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div
          className="flex-1 flex overflow-hidden bg-[#1F1F23] rounded-xl border border-musicConnect-border"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Conversations List */}
          <div
            className={cn(
              "border-r border-musicConnect-border flex flex-col",
              isMobileView && activeConversationId ? "hidden" : "w-full md:w-80",
            )}
          >
            <div className="p-3 border-b border-musicConnect-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search messages..."
                  className="pl-10 bg-[#2B2B30] border-musicConnect-border text-gray-300 focus:border-musicConnect-blue"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-2">
              {conversations.map((conversation) => (
                <ConversationItem
                  key={conversation.id}
                  conversation={conversation}
                  isActive={conversation.id === activeConversationId}
                  onClick={() => setActiveConversationId(conversation.id)}
                />
              ))}
            </div>

            <div className="p-3 border-t border-musicConnect-border">
              <Button className="w-full bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Message
              </Button>
            </div>
          </div>

          {/* Chat Area */}
          <div
            className={cn("flex-1 flex flex-col relative", isMobileView && !activeConversationId ? "hidden" : "flex")}
          >
            {/* Drag & Drop Zone */}
            <DropZone active={isDragging} />

            {/* Chat Header */}
            <div className="p-3 border-b border-musicConnect-border flex justify-between items-center">
              <div className="flex items-center gap-3">
                {isMobileView && (
                  <button onClick={handleBack} className="p-1.5 rounded-full hover:bg-[#2B2B30] mr-1">
                    <ChevronLeft className="h-5 w-5 text-gray-400" />
                  </button>
                )}

                <div className="relative">
                  {activeConversation.isGroup ? (
                    <div className="w-9 h-9 bg-[#2B2B30] rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-musicConnect-blue" />
                    </div>
                  ) : (
                    <Image
                      src={activeConversation.contact.avatar || "/placeholder.svg"}
                      alt={activeConversation.contact.name}
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                  )}
                  {!activeConversation.isGroup && <StatusIndicator status={activeConversation.contact.status} />}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-white">{activeConversation.contact.name}</h3>
                  <p className="text-xs text-gray-400">
                    {activeConversation.isGroup
                      ? `${activeConversation.groupMembers?.length} members`
                      : activeConversation.contact.status === "online"
                        ? "Online"
                        : `Last seen ${activeConversation.contact.lastSeen || "recently"}`}
                    {activeConversation.contact.isTyping && (
                      <span className="text-musicConnect-blue ml-1">typing...</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#2B2B30]">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#2B2B30]">
                  <Video className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#2B2B30]">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-[#2B2B30] border-musicConnect-border text-white">
                    <DropdownMenuItem className="hover:bg-[#373740] cursor-pointer">
                      <Info className="h-4 w-4 mr-2" />
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#373740] cursor-pointer">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Contact
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-musicConnect-border" />
                    <DropdownMenuItem className="hover:bg-[#373740] text-amber-400 cursor-pointer">
                      <Archive className="h-4 w-4 mr-2" />
                      Archive Chat
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#373740] text-red-400 cursor-pointer">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Chat
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {Object.entries(groupedMessages).map(([date, messages], dateIndex, dateArray) => (
                <div key={date}>
                  {dateIndex > 0 && <DateSeparator date={date} />}

                  {messages.map((message, messageIndex) => (
                    <MessageBubble
                      key={message.id}
                      message={message}
                      isFirstOfDay={messageIndex === 0 && dateIndex === 0}
                      onReply={handleReply}
                    />
                  ))}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Reply To */}
            {replyToMessage && (
              <div className="px-4 py-2 border-t border-musicConnect-border bg-[#2B2B30] flex items-start">
                <div className="flex-1">
                  <div className="flex items-center">
                    <Reply className="h-3.5 w-3.5 text-musicConnect-blue mr-2" />
                    <span className="text-xs font-medium text-musicConnect-blue">
                      Replying to {replyToMessage.sender === "user" ? "yourself" : activeConversation.contact.name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 truncate">{replyToMessage.content}</p>
                </div>
                <button onClick={cancelReply} className="p-1 rounded-full hover:bg-[#373740] text-gray-400">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* Message Input */}
            <div className="p-3 border-t border-musicConnect-border">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Type a message..."
                  className="pr-32 bg-[#2B2B30] border-musicConnect-border text-gray-300 focus:border-musicConnect-blue"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <DropdownMenu open={isAttachmentMenuOpen} onOpenChange={setIsAttachmentMenuOpen}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-white hover:bg-[#1F1F23]"
                      >
                        <Paperclip className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="top"
                      align="end"
                      className="bg-[#2B2B30] border-musicConnect-border text-white"
                    >
                      <DropdownMenuItem className="hover:bg-[#373740] cursor-pointer">
                        <ImageIcon className="h-4 w-4 mr-2 text-musicConnect-blue" />
                        Image
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-[#373740] cursor-pointer">
                        <Music className="h-4 w-4 mr-2 text-musicConnect-green" />
                        Audio
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-[#373740] cursor-pointer">
                        <File className="h-4 w-4 mr-2 text-amber-400" />
                        File
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-white hover:bg-[#1F1F23]"
                  >
                    <Smile className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-white hover:bg-[#1F1F23]"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>

                  <Button
                    size="icon"
                    className="h-8 w-8 bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white"
                    onClick={handleSend}
                    disabled={!message.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Select a conversation message */}
          {isMobileView && activeConversationId === "0" && (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#2B2B30] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageIcon className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Your Messages</h3>
                <p className="text-sm text-gray-400 mb-4">Select a conversation to start messaging</p>
                <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  New Message
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

// Custom message icon for the mobile empty state
function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
