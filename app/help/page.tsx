"use client"

import { useState } from "react"
import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  Mail,
  FileText,
  BookOpen,
  HelpCircle,
  Video,
  ArrowRight,
  Play,
  Users,
  Briefcase,
  FileCodeIcon,
  Headphones,
  Sparkles,
  Upload,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState("faq")
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <BookOpen className="h-5 w-5 text-musicConnect-blue" />,
      questions: [
        {
          question: "How do I set up my artist profile?",
          answer:
            "To set up your artist profile, go to Settings > Profile and fill out your information including your name, bio, location, and professional role. You can also add your profile picture and select your music genres to help us connect you with relevant opportunities.",
        },
        {
          question: "How do I find other artists to connect with?",
          answer:
            "You can find other artists by going to the Connections page. There, you'll see recommended artists based on your profile, genres, and location. You can also use the search and filter options to find specific types of artists or professionals.",
        },
        {
          question: "What are workspaces and how do I use them?",
          answer:
            "Workspaces are collaborative environments where you can work on music projects with other artists. To create a workspace, go to the Workspaces page and click 'Create New Workspace'. You can invite collaborators, share files, and communicate about the project all in one place.",
        },
      ],
    },
    {
      title: "Account & Billing",
      icon: <FileText className="h-5 w-5 text-musicConnect-purple" />,
      questions: [
        {
          question: "How do I upgrade my subscription?",
          answer:
            "To upgrade your subscription, go to Settings > Billing and select the plan you want to upgrade to. You'll be guided through the payment process, and your new plan benefits will be activated immediately after successful payment.",
        },
        {
          question: "Can I cancel my subscription at any time?",
          answer:
            "Yes, you can cancel your subscription at any time. Go to Settings > Billing and click 'Cancel Subscription'. Your subscription will remain active until the end of your current billing period, after which you'll be downgraded to the Free plan.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, Mastercard, American Express, Discover), as well as PayPal. For annual subscriptions, we also offer invoicing options for businesses.",
        },
      ],
    },
    {
      title: "Collaborations & Projects",
      icon: <Users className="h-5 w-5 text-green-500" />,
      questions: [
        {
          question: "How do I invite someone to collaborate on a project?",
          answer:
            "To invite someone to collaborate, go to your Workspace, click on 'Members' or 'Invite', and enter their email or username. They'll receive a notification and can accept your invitation to join the workspace.",
        },
        {
          question: "How do file sharing and permissions work?",
          answer:
            "In workspaces, you can upload and share files with your collaborators. The workspace creator can set permissions for who can view, edit, or download files. All members can comment on files and participate in discussions.",
        },
        {
          question: "Can I collaborate with someone who doesn't have a Harmonics account?",
          answer:
            "Yes, you can invite someone without a Harmonics account. They'll receive an email invitation with a link to create an account. Once they sign up, they'll automatically be added to your workspace.",
        },
      ],
    },
    {
      title: "Agreements & Contracts",
      icon: <FileCodeIcon className="h-5 w-5 text-amber-500" />,
      questions: [
        {
          question: "How do I create a new agreement?",
          answer:
            "To create a new agreement, go to the Agreements page and click 'Create New Agreement'. You can choose from templates for different types of agreements (royalty splits, work for hire, etc.) or create a custom agreement. Fill in the details and invite the other parties to review and sign.",
        },
        {
          question: "Are the agreements legally binding?",
          answer:
            "Yes, agreements created and signed on Harmonics are legally binding. We use secure electronic signature technology that complies with e-signature laws in most jurisdictions. However, for complex legal matters, we recommend consulting with a legal professional.",
        },
        {
          question: "Can I edit an agreement after it's been signed?",
          answer:
            "No, once an agreement has been signed by all parties, it cannot be edited. This ensures the integrity of the contract. If changes are needed, you'll need to create a new agreement or an amendment to the existing one, which will require signatures from all parties again.",
        },
      ],
    },
    {
      title: "AI Assistant",
      icon: <Sparkles className="h-5 w-5 text-musicConnect-blue" />,
      questions: [
        {
          question: "What can the AI Assistant help me with?",
          answer:
            "The AI Assistant can help with a variety of music-related tasks including songwriting suggestions, chord progressions, production tips, basic legal advice for music contracts, career guidance, and more. It's designed to be your creative partner and business advisor.",
        },
        {
          question: "Is my conversation with the AI Assistant private?",
          answer:
            "Yes, your conversations with the AI Assistant are private and not shared with other users. We use the data to improve the AI's responses, but this is done in an anonymized way that protects your privacy.",
        },
        {
          question: "Can the AI Assistant write complete songs for me?",
          answer:
            "The AI Assistant can help with elements of songwriting such as lyrics, chord progressions, and structure suggestions, but it's designed to be collaborative rather than replacing your creative input. The best results come from using the AI as a creative partner.",
        },
      ],
    },
  ]

  const tutorials = [
    {
      title: "Complete Profile Setup Guide",
      description: "Learn how to set up your artist profile for maximum visibility",
      duration: "5:32",
      category: "Getting Started",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Finding the Perfect Collaborators",
      description: "Tips for connecting with the right artists for your projects",
      duration: "7:15",
      category: "Collaborations",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Creating Your First Workspace",
      description: "Step-by-step guide to setting up a collaborative workspace",
      duration: "4:48",
      category: "Workspaces",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Understanding Music Agreements",
      description: "Learn the basics of music contracts and agreements",
      duration: "10:22",
      category: "Agreements",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Maximizing the AI Assistant",
      description: "Get the most out of your creative AI partner",
      duration: "6:05",
      category: "AI Tools",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
  ]

  const filteredFAQs = faqCategories.flatMap((category) =>
    category.questions
      .filter(
        (q) =>
          searchQuery === "" ||
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .map((q) => ({ ...q, category: category.title })),
  )

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Help Center</h1>
            <p className="text-gray-400">Find answers and learn how to get the most out of Harmonics</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for help articles, tutorials, and FAQs..."
            className="pl-12 py-6 bg-[#1F1F23] border-musicConnect-border text-white text-lg focus:border-musicConnect-blue"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="bg-[#1F1F23] border border-musicConnect-border w-full justify-start rounded-md p-1 mt-6 flex">
          <button
            onClick={() => setActiveTab("faq")}
            className={`flex items-center justify-start p-2 rounded-md ${
              activeTab === "faq"
                ? "bg-musicConnect-blue/20 text-white"
                : "text-gray-400 hover:text-white hover:bg-[#2B2B30]"
            }`}
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            FAQ
          </button>
          <button
            onClick={() => setActiveTab("tutorials")}
            className={`flex items-center justify-start p-2 rounded-md ${
              activeTab === "tutorials"
                ? "bg-musicConnect-blue/20 text-white"
                : "text-gray-400 hover:text-white hover:bg-[#2B2B30]"
            }`}
          >
            <Video className="h-4 w-4 mr-2" />
            Tutorials
          </button>
          <button
            onClick={() => setActiveTab("documentation")}
            className={`flex items-center justify-start p-2 rounded-md ${
              activeTab === "documentation"
                ? "bg-musicConnect-blue/20 text-white"
                : "text-gray-400 hover:text-white hover:bg-[#2B2B30]"
            }`}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Documentation
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`flex items-center justify-start p-2 rounded-md ${
              activeTab === "contact"
                ? "bg-musicConnect-blue/20 text-white"
                : "text-gray-400 hover:text-white hover:bg-[#2B2B30]"
            }`}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Support
          </button>
        </div>

        {activeTab === "faq" && (
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* FAQ Categories */}
              <div className="md:col-span-1">
                <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5">
                  <h2 className="text-lg font-semibold text-white mb-4">Categories</h2>
                  <div className="space-y-2">
                    {faqCategories.map((category, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#2B2B30] transition-colors text-left"
                      >
                        <div className="flex items-center">
                          <div className="mr-3">{category.icon}</div>
                          <span className="text-white">{category.title}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ Content */}
              <div className="md:col-span-2">
                <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5">
                  <h2 className="text-lg font-semibold text-white mb-4">
                    {searchQuery ? `Search Results (${filteredFAQs.length})` : "Frequently Asked Questions"}
                  </h2>

                  {searchQuery && filteredFAQs.length === 0 ? (
                    <div className="text-center py-8">
                      <HelpCircle className="h-12 w-12 text-gray-500 mx-auto mb-3" />
                      <h3 className="text-white text-lg mb-2">No results found</h3>
                      <p className="text-gray-400 mb-4">
                        We couldn't find any FAQs matching "{searchQuery}". Try a different search term or browse the
                        categories.
                      </p>
                      <Button
                        variant="outline"
                        className="border-musicConnect-border text-white"
                        onClick={() => setSearchQuery("")}
                      >
                        Clear Search
                      </Button>
                    </div>
                  ) : (
                    <Accordion type="single" collapsible className="w-full">
                      {(searchQuery ? filteredFAQs : faqCategories[0].questions).map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border-b border-musicConnect-border"
                        >
                          <AccordionTrigger className="text-white hover:text-musicConnect-blue hover:no-underline py-4">
                            <div className="text-left">
                              {item.question}
                              {searchQuery && item.category && (
                                <span className="block text-xs text-musicConnect-blue mt-1">{item.category}</span>
                              )}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300 pb-4">{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "tutorials" && (
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tutorial Categories */}
              <div className="md:col-span-1">
                <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5">
                  <h2 className="text-lg font-semibold text-white mb-4">Tutorial Topics</h2>
                  <div className="space-y-2">
                    {[
                      { title: "Getting Started", icon: <BookOpen className="h-5 w-5 text-musicConnect-blue" /> },
                      { title: "Profile Setup", icon: <User className="h-5 w-5 text-musicConnect-purple" /> },
                      { title: "Connections", icon: <Users className="h-5 w-5 text-green-500" /> },
                      { title: "Workspaces", icon: <Briefcase className="h-5 w-5 text-amber-500" /> },
                      { title: "Agreements", icon: <FileCodeIcon className="h-5 w-5 text-red-500" /> },
                      { title: "Opportunities", icon: <Headphones className="h-5 w-5 text-blue-500" /> },
                      { title: "AI Tools", icon: <Sparkles className="h-5 w-5 text-pink-500" /> },
                    ].map((category, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#2B2B30] transition-colors text-left"
                      >
                        <div className="flex items-center">
                          <div className="mr-3">{category.icon}</div>
                          <span className="text-white">{category.title}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tutorial Content */}
              <div className="md:col-span-2">
                <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5">
                  <h2 className="text-lg font-semibold text-white mb-4">Featured Tutorials</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tutorials.map((tutorial, index) => (
                      <div
                        key={index}
                        className="border border-musicConnect-border rounded-lg overflow-hidden hover:border-musicConnect-blue transition-colors"
                      >
                        <div className="relative">
                          <img
                            src={tutorial.thumbnail || "/placeholder.svg"}
                            alt={tutorial.title}
                            className="w-full h-32 object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                            <div className="w-12 h-12 rounded-full bg-musicConnect-blue/80 flex items-center justify-center">
                              <Play className="h-6 w-6 text-white" fill="white" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {tutorial.duration}
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="text-white font-medium mb-1">{tutorial.title}</h3>
                          <p className="text-gray-400 text-sm mb-2">{tutorial.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs bg-[#2B2B30] text-gray-300 px-2 py-0.5 rounded-full">
                              {tutorial.category}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-musicConnect-blue hover:bg-musicConnect-blue/10 p-0"
                            >
                              Watch
                              <ArrowRight className="h-3.5 w-3.5 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
                      View All Tutorials
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "documentation" && (
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Documentation Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5">
                  <h2 className="text-lg font-semibold text-white mb-4">Documentation</h2>
                  <div className="space-y-1">
                    {[
                      { title: "Getting Started", expanded: true },
                      { title: "User Guide", expanded: false },
                      { title: "Features", expanded: false },
                      { title: "Integrations", expanded: false },
                      { title: "API Reference", expanded: false },
                      { title: "Legal", expanded: false },
                    ].map((section, index) => (
                      <div key={index} className="space-y-1">
                        <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-[#2B2B30] transition-colors text-left">
                          <span className="text-white">{section.title}</span>
                          {section.expanded ? (
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                        {section.expanded && (
                          <div className="pl-4 space-y-1">
                            {["Introduction", "Quick Start", "Installation", "Configuration"].map((item, i) => (
                              <button
                                key={i}
                                className="w-full text-left p-2 text-sm text-gray-400 hover:text-white hover:bg-[#2B2B30] rounded-lg"
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Documentation Content */}
              <div className="md:col-span-3">
                <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <span>Documentation</span>
                    <ChevronRight className="h-4 w-4 mx-1" />
                    <span>Getting Started</span>
                    <ChevronRight className="h-4 w-4 mx-1" />
                    <span className="text-white">Introduction</span>
                  </div>

                  <h1 className="text-2xl font-bold text-white mb-4">Introduction to Harmonics</h1>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-4">
                      Welcome to Harmonics, the professional networking platform designed specifically for music artists
                      and industry professionals. This guide will help you understand the platform and get started with
                      your music networking journey.
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-6 mb-3">What is Harmonics?</h2>
                    <p className="text-gray-300 mb-4">
                      Harmonics is a comprehensive platform that connects artists, producers, songwriters, engineers,
                      and other music professionals. It provides tools for collaboration, project management, legal
                      agreements, and discovering new opportunities in the music industry.
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-6 mb-3">Key Features</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                      <li>
                        <strong className="text-white">Connections:</strong> Find and connect with other music
                        professionals based on genre, skills, and location.
                      </li>
                      <li>
                        <strong className="text-white">Workspaces:</strong> Collaborate on music projects with shared
                        files, messaging, and task management.
                      </li>
                      <li>
                        <strong className="text-white">Agreements:</strong> Create, review, and sign music contracts and
                        agreements with built-in templates.
                      </li>
                      <li>
                        <strong className="text-white">Opportunities:</strong> Discover gigs, collaborations, licensing
                        opportunities, and events.
                      </li>
                      <li>
                        <strong className="text-white">AI Assistant:</strong> Get creative and business guidance from
                        our AI-powered music assistant.
                      </li>
                    </ul>

                    <h2 className="text-xl font-semibold text-white mt-6 mb-3">Getting Started</h2>
                    <p className="text-gray-300 mb-4">
                      To get the most out of Harmonics, we recommend following these steps:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-300 mb-4">
                      <li>
                        <strong className="text-white">Complete your profile:</strong> Add your professional
                        information, music genres, and portfolio to increase visibility.
                      </li>
                      <li>
                        <strong className="text-white">Connect with others:</strong> Start building your network by
                        connecting with other music professionals.
                      </li>
                      <li>
                        <strong className="text-white">Explore opportunities:</strong> Browse the opportunities section
                        to find gigs, collaborations, and events.
                      </li>
                      <li>
                        <strong className="text-white">Create a workspace:</strong> Start a collaborative project and
                        invite others to join.
                      </li>
                      <li>
                        <strong className="text-white">Try the AI Assistant:</strong> Get help with creative challenges
                        or business questions.
                      </li>
                    </ol>

                    <div className="bg-[#2B2B30] p-4 rounded-lg border border-musicConnect-border mt-6">
                      <h3 className="text-white font-medium mb-2">Next Steps</h3>
                      <p className="text-gray-300 mb-3">
                        Continue exploring our documentation to learn more about specific features:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          className="justify-start border-musicConnect-border text-white hover:bg-[#373740]"
                        >
                          <BookOpen className="h-4 w-4 mr-2" />
                          Quick Start Guide
                        </Button>
                        <Button
                          variant="outline"
                          className="justify-start border-musicConnect-border text-white hover:bg-[#373740]"
                        >
                          <Users className="h-4 w-4 mr-2" />
                          Building Your Network
                        </Button>
                        <Button
                          variant="outline"
                          className="justify-start border-musicConnect-border text-white hover:bg-[#373740]"
                        >
                          <Briefcase className="h-4 w-4 mr-2" />
                          Workspace Tutorial
                        </Button>
                        <Button
                          variant="outline"
                          className="justify-start border-musicConnect-border text-white hover:bg-[#373740]"
                        >
                          <FileCodeIcon className="h-4 w-4 mr-2" />
                          Agreements Guide
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contact Options */}
              <div className="md:col-span-1">
                <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5">
                  <h2 className="text-lg font-semibold text-white mb-4">Contact Options</h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-musicConnect-border hover:border-musicConnect-blue transition-colors">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-musicConnect-blue/20 flex items-center justify-center mr-3">
                          <MessageSquare className="h-5 w-5 text-musicConnect-blue" />
                        </div>
                        <h3 className="text-white font-medium">Live Chat</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        Chat with our support team in real-time for immediate assistance.
                      </p>
                      <div className="flex items-center text-xs text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span>Available now • Average response time: 2 minutes</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-musicConnect-border hover:border-musicConnect-blue transition-colors">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-musicConnect-purple/20 flex items-center justify-center mr-3">
                          <Mail className="h-5 w-5 text-musicConnect-purple" />
                        </div>
                        <h3 className="text-white font-medium">Email Support</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        Send us an email for non-urgent issues or detailed questions.
                      </p>
                      <div className="flex items-center text-xs text-gray-400">
                        <span>support@harmonics.com • Response within 24 hours</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-musicConnect-border hover:border-musicConnect-blue transition-colors">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                          <HelpCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <h3 className="text-white font-medium">Help Center</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        Browse our knowledge base for answers to common questions.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-musicConnect-border text-white hover:bg-[#2B2B30]"
                      >
                        Browse Articles
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-5">
                  <h2 className="text-lg font-semibold text-white mb-4">Contact Support</h2>
                  <p className="text-gray-400 mb-6">
                    Fill out the form below and our support team will get back to you as soon as possible.
                  </p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-white">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="bg-[#2B2B30] border-musicConnect-border text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-white">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="bg-[#2B2B30] border-musicConnect-border text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-white">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What is your inquiry about?"
                        className="bg-[#2B2B30] border-musicConnect-border text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="category" className="text-white">
                        Category
                      </label>
                      <select
                        id="category"
                        className="w-full bg-[#2B2B30] border border-musicConnect-border text-white rounded-md p-2"
                      >
                        <option value="">Select a category</option>
                        <option value="account">Account Issues</option>
                        <option value="billing">Billing & Subscription</option>
                        <option value="technical">Technical Support</option>
                        <option value="feature">Feature Request</option>
                        <option value="bug">Bug Report</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Describe your issue or question in detail..."
                        className="bg-[#2B2B30] border-musicConnect-border text-white min-h-[150px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="attachments" className="text-white">
                        Attachments (optional)
                      </label>
                      <div className="border-2 border-dashed border-musicConnect-border rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-400 mb-2">Drag and drop files here, or click to browse files</p>
                        <p className="text-xs text-gray-500">Maximum file size: 10MB</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded border border-musicConnect-border"></div>
                      <label htmlFor="newsletter" className="text-sm text-gray-400">
                        Subscribe to our newsletter for product updates and tips
                      </label>
                    </div>

                    <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
                      Submit Support Request
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <Separator className="bg-musicConnect-border mt-6" />

        <div className="bg-[#1F1F23] rounded-xl border border-musicConnect-border p-6 text-center mt-6">
          <h2 className="text-xl font-semibold text-white mb-2">Still need help?</h2>
          <p className="text-gray-400 mb-4 max-w-lg mx-auto">
            Our support team is available 24/7 to assist you with any questions or issues you may have.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
              <MessageSquare className="h-4 w-4 mr-2" />
              Start Live Chat
            </Button>
            <Button variant="outline" className="border-musicConnect-border text-white hover:bg-[#2B2B30]">
              <Mail className="h-4 w-4 mr-2" />
              Email Support
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function User(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
