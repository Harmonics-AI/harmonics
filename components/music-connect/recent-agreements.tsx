import { Button } from "@/components/ui/button"
import { FileText, Clock, CheckCircle, AlertTriangle, Plus } from "lucide-react"
import Image from "next/image"

interface AgreementProps {
  title: string
  collaborators: { name: string; avatar: string }[]
  status: "Draft" | "Signed" | "Needs Review"
  date: string
}

const agreements: AgreementProps[] = [
  {
    title: "Summer EP Royalty Split",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Sophia Martinez", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Marcus Johnson", avatar: "/placeholder.svg?height=24&width=24" },
    ],
    status: "Needs Review",
    date: "Created May 15, 2025",
  },
  {
    title: "Remix Agreement",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "David Kim", avatar: "/placeholder.svg?height=24&width=24" },
    ],
    status: "Signed",
    date: "Signed May 10, 2025",
  },
  {
    title: "Film Score Contract",
    collaborators: [
      { name: "You", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Emma Wilson", avatar: "/placeholder.svg?height=24&width=24" },
    ],
    status: "Draft",
    date: "Last edited May 5, 2025",
  },
]

function StatusBadge({ status }: { status: AgreementProps["status"] }) {
  let color = ""
  let icon = null

  switch (status) {
    case "Draft":
      color = "text-amber-400 bg-amber-400/20"
      icon = <Clock className="h-3 w-3 mr-1" />
      break
    case "Needs Review":
      color = "text-musicConnect-blue bg-musicConnect-blue/20"
      icon = <AlertTriangle className="h-3 w-3 mr-1" />
      break
    case "Signed":
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

function AgreementCard({ agreement }: { agreement: AgreementProps }) {
  return (
    <div className="p-3 rounded-lg hover:bg-musicConnect-background transition-colors">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-musicConnect-blue/10">
          <FileText className="h-4 w-4 text-musicConnect-blue" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-white">{agreement.title}</h3>
            <StatusBadge status={agreement.status} />
          </div>

          <p className="text-xs text-gray-400 mt-1">{agreement.date}</p>

          <div className="flex items-center mt-2">
            <div className="flex -space-x-2 mr-2">
              {agreement.collaborators.map((collaborator, index) => (
                <Image
                  key={index}
                  src={collaborator.avatar || "/placeholder.svg"}
                  alt={collaborator.name}
                  width={20}
                  height={20}
                  className="rounded-full border-2 border-[#1F1F23]"
                  title={collaborator.name}
                />
              ))}
            </div>
            <span className="text-xs text-gray-400">{agreement.collaborators.length} collaborators</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RecentAgreements() {
  return (
    <div className="space-y-3">
      {agreements.map((agreement, index) => (
        <AgreementCard key={index} agreement={agreement} />
      ))}

      <Button
        variant="outline"
        className="w-full mt-4 border-musicConnect-border text-white hover:bg-musicConnect-blue/20 hover:text-white"
      >
        <Plus className="mr-2 h-4 w-4" />
        Create New Agreement
      </Button>
    </div>
  )
}
