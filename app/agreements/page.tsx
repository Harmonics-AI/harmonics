import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Download, FileText, Plus, Search, Sparkles } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"

interface AgreementProps {
  title: string
  type: string
  collaborators: { name: string; avatar: string }[]
  status: "Draft" | "Signed" | "Needs Review" | "Expired"
  date: string
  lastModified: string
}

const agreements: AgreementProps[] = [
  {
    title: "Summer EP Royalty Split",
    type: "Royalty Agreement",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Sophia Martinez", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Marcus Johnson", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    status: "Needs Review",
    date: "Created May 15, 2025",
    lastModified: "2 days ago",
  },
  {
    title: "Remix Agreement",
    type: "Licensing Agreement",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "David Kim", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    status: "Signed",
    date: "Signed May 10, 2025",
    lastModified: "1 week ago",
  },
  {
    title: "Film Score Contract",
    type: "Work for Hire",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Emma Wilson", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    status: "Draft",
    date: "Last edited May 5, 2025",
    lastModified: "2 weeks ago",
  },
]

function StatusBadge({ status }: { status: AgreementProps["status"] }) {
  let color = ""

  switch (status) {
    case "Draft":
      color = "text-amber-400 bg-amber-400/20"
      break
    case "Needs Review":
      color = "text-musicConnect-blue bg-musicConnect-blue/20"
      break
    case "Signed":
      color = "text-green-400 bg-green-400/20"
      break
    case "Expired":
      color = "text-red-400 bg-red-400/20"
      break
  }

  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${color}`}>{status}</span>
}

function AgreementCard({ agreement }: { agreement: AgreementProps }) {
  return (
    <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5 hover:border-musicConnect-blue transition-colors">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-[#2B2B30]">
          <FileText className="h-5 w-5 text-musicConnect-blue" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-white">{agreement.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{agreement.type}</p>
            </div>
            <StatusBadge status={agreement.status} />
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-gray-400 mr-1.5" />
              <span className="text-xs text-gray-400">{agreement.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-gray-400 mr-1.5" />
              <span className="text-xs text-gray-400">Modified {agreement.lastModified}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex -space-x-2">
              {agreement.collaborators.map((collaborator, index) => (
                <Image
                  key={index}
                  src={collaborator.avatar || "/placeholder.svg"}
                  alt={collaborator.name}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-[#1F1F23]"
                  title={collaborator.name}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-white border-musicConnect-border hover:bg-[#2B2B30]">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
              <Button size="sm" className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AgreementsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Agreements</h1>
            <p className="text-gray-400">Manage your contracts and legal documents</p>
          </div>

          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="bg-[#1F1F23] border border-musicConnect-border">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="signed">Signed</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search agreements..."
              className="pl-10 bg-[#1F1F23] border-musicConnect-border text-gray-300 focus:border-musicConnect-blue"
            />
          </div>

          <Button className="w-full md:w-auto bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
            <Sparkles className="h-4 w-4 mr-2" />
            Create Agreement with AI
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {agreements.map((agreement, index) => (
            <AgreementCard key={index} agreement={agreement} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Create New Agreement
          </Button>
        </div>
      </div>
    </Layout>
  )
}
