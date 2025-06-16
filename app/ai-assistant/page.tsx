import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FileText, Mic, Music, Send, Sparkles } from "lucide-react"

export default function AIAssistantPage() {
  return (
    <Layout>
      <div className="h-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">AI Assistant</h1>
            <p className="text-gray-400">Your creative partner for music production and business</p>
          </div>

          <Tabs defaultValue="chat" className="w-full md:w-auto">
            <TabsList className="bg-[#1F1F23] border border-musicConnect-border">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="lg:col-span-3 bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5 flex flex-col h-[calc(100vh-240px)]">
            <div className="flex-1 overflow-y-auto mb-4 space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-musicConnect-blue flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div className="bg-[#2B2B30] rounded-lg p-3 max-w-[80%]">
                  <p className="text-white text-sm">
                    Hi Alex! I'm your AI music assistant. I can help you with songwriting, production tips, legal
                    advice, and more. What would you like to work on today?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-end">
                <div className="bg-musicConnect-blue/20 rounded-lg p-3 max-w-[80%]">
                  <p className="text-white text-sm">
                    I need help writing lyrics for a chorus. The song is about overcoming creative blocks and finding
                    inspiration again.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#2B2B30] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">A</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-musicConnect-blue flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div className="bg-[#2B2B30] rounded-lg p-3 max-w-[80%]">
                  <p className="text-white text-sm">Here's a chorus about overcoming creative blocks:</p>
                  <div className="mt-2 p-3 bg-[#1F1F23] rounded-md">
                    <p className="text-gray-300 text-sm italic">
                      Breaking through the walls I've built
                      <br />
                      Waves of inspiration start to flow
                      <br />
                      Every doubt begins to lift
                      <br />
                      I'm finding my voice, I'm letting go
                      <br />
                      <br />
                      (Chorus)
                      <br />
                      The silence shatters into sound
                      <br />
                      The emptiness now filled with light
                      <br />
                      I'm breaking free from what held me down
                      <br />
                      Creating again, I've won the fight
                    </p>
                  </div>
                  <p className="text-white text-sm mt-2">
                    Would you like me to suggest a melody for this, or would you prefer to adjust the lyrics?
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Input
                type="text"
                placeholder="Ask anything about music production, business, or creativity..."
                className="pr-24 bg-[#2B2B30] border-musicConnect-border text-gray-300 focus:border-musicConnect-blue"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                <button className="p-1.5 rounded-full hover:bg-[#1F1F23] transition-colors">
                  <Mic className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1.5 rounded-full bg-musicConnect-blue hover:bg-musicConnect-blue/80 transition-colors">
                  <Send className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-4">
              <h3 className="text-sm font-medium text-white mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-white border-musicConnect-border hover:bg-[#2B2B30] text-xs h-auto py-2"
                >
                  <Music className="h-3.5 w-3.5 mr-2" />
                  Generate chord progressions
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-white border-musicConnect-border hover:bg-[#2B2B30] text-xs h-auto py-2"
                >
                  <FileText className="h-3.5 w-3.5 mr-2" />
                  Draft a royalty agreement
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-white border-musicConnect-border hover:bg-[#2B2B30] text-xs h-auto py-2"
                >
                  <Sparkles className="h-3.5 w-3.5 mr-2" />
                  Suggest song structure
                </Button>
              </div>
            </div>

            <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-4">
              <h3 className="text-sm font-medium text-white mb-3">Recent Conversations</h3>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-[#2B2B30] text-xs h-auto py-2"
                >
                  <span className="truncate text-left">Songwriting tips for R&B tracks</span>
                  <ArrowRight className="h-3 w-3 ml-auto" />
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-[#2B2B30] text-xs h-auto py-2"
                >
                  <span className="truncate text-left">Help with mixing vocals</span>
                  <ArrowRight className="h-3 w-3 ml-auto" />
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-[#2B2B30] text-xs h-auto py-2"
                >
                  <span className="truncate text-left">Contract review for studio session</span>
                  <ArrowRight className="h-3 w-3 ml-auto" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
