import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RecentConnections from "./recent-connections"
import ActiveWorkspaces from "./active-workspaces"
import RecentAgreements from "./recent-agreements"
import Opportunities from "./opportunities"
import StatsOverview from "./stats-overview"

export default function Dashboard() {
  return (
    <div className="space-y-10 py-6 px-2 md:px-4">
      {/* Header Section with increased spacing */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back, Alex</h1>
          <p className="text-gray-400 text-lg">Here's what's happening in your music network</p>
        </div>
      </div>

      {/* Stats Overview with increased spacing */}
      <div className="mb-8">
        <StatsOverview />
      </div>

      {/* Main Content Grid with better spacing and modern styling */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Connections Card */}
        <div className="bg-[#1F1F23] rounded-xl p-8 flex flex-col border border-musicConnect-border shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-bold text-white mb-6">Connections</h2>
          <RecentConnections />
        </div>

        {/* Active Workspaces Card */}
        <div className="bg-[#1F1F23] rounded-xl p-8 flex flex-col border border-musicConnect-border shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-bold text-white mb-6">Active Workspaces</h2>
          <ActiveWorkspaces />
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Agreements Card */}
        <div className="bg-[#1F1F23] rounded-xl p-8 flex flex-col border border-musicConnect-border shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-bold text-white mb-6">Recent Agreements</h2>
          <RecentAgreements />
        </div>

        {/* Opportunities Card */}
        <div className="bg-[#1F1F23] rounded-xl p-8 flex flex-col border border-musicConnect-border shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-bold text-white mb-6">Opportunities For You</h2>
          <Opportunities />
        </div>
      </div>
    </div>
  )
}
