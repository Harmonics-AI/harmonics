import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Headphones, Users, Music } from "lucide-react"

interface OpportunityProps {
  title: string
  type: "gig" | "collaboration" | "licensing" | "event"
  description: string
  deadline: string
  tags: string[]
}

const opportunities: OpportunityProps[] = [
  {
    title: "Indie Film Soundtrack",
    type: "licensing",
    description: "Looking for original music for an upcoming indie film. All genres considered.",
    deadline: "Deadline: May 30, 2025",
    tags: ["Licensing", "Film", "All Genres"],
  },
  {
    title: "Live Performance at The Sound Lounge",
    type: "gig",
    description: "Seeking bands and solo artists for weekend performances.",
    deadline: "Deadline: June 5, 2025",
    tags: ["Live", "Paid", "Local"],
  },
  {
    title: "Producer Networking Event",
    type: "event",
    description: "Connect with producers and artists in your area.",
    deadline: "June 12, 2025 • 7:00 PM",
    tags: ["Networking", "Workshop"],
  },
]

function OpportunityIcon({ type }: { type: OpportunityProps["type"] }) {
  switch (type) {
    case "gig":
      return <Headphones className="h-4 w-4 text-musicConnect-purple" />
    case "collaboration":
      return <Users className="h-4 w-4 text-musicConnect-blue" />
    case "licensing":
      return <Music className="h-4 w-4 text-musicConnect-green" />
    case "event":
      return <Calendar className="h-4 w-4 text-amber-400" />
  }
}

function OpportunityCard({ opportunity }: { opportunity: OpportunityProps }) {
  return (
    <div className="p-3 rounded-lg hover:bg-musicConnect-background transition-colors">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#2B2B30]">
          <OpportunityIcon type={opportunity.type} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-white">{opportunity.title}</h3>
          <p className="text-xs text-gray-400 mt-1 line-clamp-2">{opportunity.description}</p>

          <div className="flex flex-wrap gap-1 mt-2">
            {opportunity.tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-0.5 bg-[#2B2B30] text-gray-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-3">
            <p className="text-xs text-amber-400">{opportunity.deadline}</p>

            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs text-musicConnect-blue hover:bg-musicConnect-blue/10 hover:text-musicConnect-blue"
            >
              Apply
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Opportunities() {
  return (
    <div className="space-y-3">
      {opportunities.map((opportunity, index) => (
        <OpportunityCard key={index} opportunity={opportunity} />
      ))}

      <Button
        variant="outline"
        className="w-full mt-4 border-musicConnect-border text-white hover:bg-musicConnect-blue/20 hover:text-white"
      >
        Browse All Opportunities
      </Button>
    </div>
  )
}
