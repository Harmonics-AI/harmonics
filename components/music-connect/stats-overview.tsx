import type React from "react"
import { Users, Briefcase, FileCodeIcon as FileContract, Headphones } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  positive?: boolean
}

function StatCard({ title, value, change, icon, positive = true }: StatCardProps) {
  return (
    <div className="bg-[#1F1F23] rounded-xl p-6 border border-musicConnect-border shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-sm text-gray-400 font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-white">{value}</h3>
          <p className={`text-sm ${positive ? "text-green-400" : "text-red-400"} font-medium`}>{change}</p>
        </div>
        <div className="p-4 rounded-xl bg-musicConnect-blue/10 shadow-inner">{icon}</div>
      </div>
    </div>
  )
}

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <StatCard
        title="Total Connections"
        value="248"
        change="+12% from last month"
        icon={<Users className="h-6 w-6 text-musicConnect-blue" />}
      />
      <StatCard
        title="Workspaces"
        value="8"
        change="+3 new this month"
        icon={<Briefcase className="h-6 w-6 text-musicConnect-purple" />}
      />
      <StatCard
        title="Agreements"
        value="16"
        change="4 pending signatures"
        icon={<FileContract className="h-6 w-6 text-musicConnect-green" />}
        positive={false}
      />
    </div>
  )
}
