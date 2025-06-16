"use client"

import { useState } from "react"
import Layout from "@/components/music-connect/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Bell,
  User,
  Lock,
  Globe,
  Palette,
  CreditCard,
  LogOut,
  Save,
  Trash2,
  Upload,
  LinkIcon,
  Music,
  Instagram,
  Twitter,
  Youtube,
  AirplayIcon as Spotify,
  Shield,
} from "lucide-react"
import Image from "next/image"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Settings</h1>
            <p className="text-gray-400">Manage your account preferences and profile</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#1F1F23] border border-musicConnect-border flex flex-col h-auto p-1 w-full rounded-md">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center justify-start w-full p-2 rounded-md ${
                  activeTab === "profile"
                    ? "bg-musicConnect-blue/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#2B2B30]"
                }`}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab("account")}
                className={`flex items-center justify-start w-full p-2 rounded-md ${
                  activeTab === "account"
                    ? "bg-musicConnect-blue/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#2B2B30]"
                }`}
              >
                <Shield className="h-4 w-4 mr-2" />
                Account
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`flex items-center justify-start w-full p-2 rounded-md ${
                  activeTab === "notifications"
                    ? "bg-musicConnect-blue/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#2B2B30]"
                }`}
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </button>
              <button
                onClick={() => setActiveTab("privacy")}
                className={`flex items-center justify-start w-full p-2 rounded-md ${
                  activeTab === "privacy"
                    ? "bg-musicConnect-blue/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#2B2B30]"
                }`}
              >
                <Lock className="h-4 w-4 mr-2" />
                Privacy
              </button>
              <button
                onClick={() => setActiveTab("appearance")}
                className={`flex items-center justify-start w-full p-2 rounded-md ${
                  activeTab === "appearance"
                    ? "bg-musicConnect-blue/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#2B2B30]"
                }`}
              >
                <Palette className="h-4 w-4 mr-2" />
                Appearance
              </button>
              <button
                onClick={() => setActiveTab("billing")}
                className={`flex items-center justify-start w-full p-2 rounded-md ${
                  activeTab === "billing"
                    ? "bg-musicConnect-blue/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#2B2B30]"
                }`}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </button>
              <button
                onClick={() => setActiveTab("integrations")}
                className={`flex items-center justify-start w-full p-2 rounded-md ${
                  activeTab === "integrations"
                    ? "bg-musicConnect-blue/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#2B2B30]"
                }`}
              >
                <LinkIcon className="h-4 w-4 mr-2" />
                Integrations
              </button>
            </div>

            <Button
              variant="outline"
              className="w-full mt-4 border-musicConnect-border text-red-400 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 bg-[#1F1F23] rounded-xl border border-musicConnect-border p-6">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Profile Information</h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=120&width=120"
                          alt="Profile"
                          width={120}
                          height={120}
                          className="rounded-full object-cover border-4 border-[#2B2B30]"
                        />
                        <Button
                          size="icon"
                          className="absolute bottom-0 right-0 bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white rounded-full h-8 w-8"
                        >
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-gray-400">
                        Recommended: 400x400px <br /> Max size: 2MB
                      </p>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white">
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Alex Rodriguez"
                            className="bg-[#2B2B30] border-musicConnect-border text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username" className="text-white">
                            Username
                          </Label>
                          <Input
                            id="username"
                            placeholder="alexrodriguez"
                            className="bg-[#2B2B30] border-musicConnect-border text-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="alex@example.com"
                          className="bg-[#2B2B30] border-musicConnect-border text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio" className="text-white">
                          Bio
                        </Label>
                        <Textarea
                          id="bio"
                          placeholder="Tell us about yourself and your music..."
                          className="bg-[#2B2B30] border-musicConnect-border text-white min-h-[120px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-white">
                          Location
                        </Label>
                        <Input
                          id="location"
                          placeholder="Los Angeles, CA"
                          className="bg-[#2B2B30] border-musicConnect-border text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white">Professional Role</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {["Producer", "Songwriter", "Vocalist", "Instrumentalist", "DJ", "Engineer"].map((role) => (
                            <div
                              key={role}
                              className="flex items-center space-x-2 p-2 rounded-md border border-musicConnect-border hover:border-musicConnect-blue cursor-pointer"
                            >
                              <div className="h-4 w-4 rounded-sm border border-musicConnect-border flex items-center justify-center">
                                {role === "Producer" && <div className="h-2 w-2 rounded-sm bg-musicConnect-blue"></div>}
                              </div>
                              <span className="text-sm text-white">{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-musicConnect-border" />

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Music Genres</h2>
                  <p className="text-sm text-gray-400 mb-4">
                    Select the genres that best describe your music to help us connect you with relevant opportunities.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      "Pop",
                      "Hip Hop",
                      "R&B",
                      "Rock",
                      "Electronic",
                      "Jazz",
                      "Classical",
                      "Country",
                      "Folk",
                      "Indie",
                      "Metal",
                      "Blues",
                    ].map((genre) => (
                      <div
                        key={genre}
                        className="flex items-center space-x-2 p-2 rounded-md border border-musicConnect-border hover:border-musicConnect-blue cursor-pointer"
                      >
                        <div className="h-4 w-4 rounded-sm border border-musicConnect-border flex items-center justify-center">
                          {(genre === "Hip Hop" || genre === "Electronic" || genre === "R&B") && (
                            <div className="h-2 w-2 rounded-sm bg-musicConnect-blue"></div>
                          )}
                        </div>
                        <span className="text-sm text-white">{genre}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-musicConnect-border" />

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Social Media</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      <Input
                        placeholder="Instagram username"
                        className="bg-[#2B2B30] border-musicConnect-border text-white"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <Twitter className="h-5 w-5 text-blue-400" />
                      <Input
                        placeholder="Twitter username"
                        className="bg-[#2B2B30] border-musicConnect-border text-white"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <Youtube className="h-5 w-5 text-red-500" />
                      <Input
                        placeholder="YouTube channel URL"
                        className="bg-[#2B2B30] border-musicConnect-border text-white"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <Spotify className="h-5 w-5 text-green-500" />
                      <Input
                        placeholder="Spotify artist URL"
                        className="bg-[#2B2B30] border-musicConnect-border text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" className="border-musicConnect-border text-white">
                    Cancel
                  </Button>
                  <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "account" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Account Settings</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password" className="text-white">
                        Current Password
                      </Label>
                      <Input
                        id="current-password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-[#2B2B30] border-musicConnect-border text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password" className="text-white">
                        New Password
                      </Label>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-[#2B2B30] border-musicConnect-border text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-white">
                        Confirm New Password
                      </Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-[#2B2B30] border-musicConnect-border text-white"
                      />
                    </div>
                    <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
                      Update Password
                    </Button>
                  </div>
                </div>

                <Separator className="bg-musicConnect-border" />

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Two-Factor Authentication</h2>
                  <p className="text-sm text-gray-400 mb-4">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                    <div>
                      <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-400">Protect your account with an additional security layer</p>
                    </div>
                    <Switch id="two-factor" />
                  </div>
                </div>

                <Separator className="bg-musicConnect-border" />

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Danger Zone</h2>
                  <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/10">
                    <h3 className="text-red-400 font-medium mb-2">Delete Account</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button
                      variant="outline"
                      className="border-red-500/50 text-red-400 hover:bg-red-500/20 hover:text-red-400"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Notification Preferences</h2>
                  <p className="text-sm text-gray-400 mb-4">
                    Manage how and when you receive notifications from Harmonics.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div>
                        <h3 className="text-white font-medium">Email Notifications</h3>
                        <p className="text-sm text-gray-400">Receive notifications via email</p>
                      </div>
                      <Switch id="email-notifications" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div>
                        <h3 className="text-white font-medium">Push Notifications</h3>
                        <p className="text-sm text-gray-400">Receive notifications on your device</p>
                      </div>
                      <Switch id="push-notifications" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div>
                        <h3 className="text-white font-medium">SMS Notifications</h3>
                        <p className="text-sm text-gray-400">Receive important notifications via SMS</p>
                      </div>
                      <Switch id="sms-notifications" />
                    </div>
                  </div>
                </div>

                <Separator className="bg-musicConnect-border" />

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Notification Types</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "New Connection Requests",
                        description: "When someone sends you a connection request",
                        defaultChecked: true,
                      },
                      {
                        title: "Messages",
                        description: "When you receive a new message",
                        defaultChecked: true,
                      },
                      {
                        title: "Workspace Updates",
                        description: "When there are updates in your workspaces",
                        defaultChecked: true,
                      },
                      {
                        title: "Agreement Updates",
                        description: "When there are updates to your agreements",
                        defaultChecked: true,
                      },
                      {
                        title: "New Opportunities",
                        description: "When new opportunities match your profile",
                        defaultChecked: true,
                      },
                      {
                        title: "Marketing & Promotions",
                        description: "Promotional content and special offers",
                        defaultChecked: false,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border"
                      >
                        <div>
                          <h3 className="text-white font-medium">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <Switch id={`notification-${index}`} defaultChecked={item.defaultChecked} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" className="border-musicConnect-border text-white">
                    Reset to Default
                  </Button>
                  <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "privacy" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Privacy Settings</h2>
                  <p className="text-sm text-gray-400 mb-4">
                    Control who can see your profile and how your information is used.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div>
                        <h3 className="text-white font-medium">Profile Visibility</h3>
                        <p className="text-sm text-gray-400">Who can see your profile</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select className="bg-[#2B2B30] border border-musicConnect-border text-white rounded-md p-1 text-sm">
                          <option>Everyone</option>
                          <option>Connections Only</option>
                          <option>Private</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div>
                        <h3 className="text-white font-medium">Connection Requests</h3>
                        <p className="text-sm text-gray-400">Who can send you connection requests</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select className="bg-[#2B2B30] border border-musicConnect-border text-white rounded-md p-1 text-sm">
                          <option>Everyone</option>
                          <option>Mutual Connections</option>
                          <option>No One</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div>
                        <h3 className="text-white font-medium">Message Requests</h3>
                        <p className="text-sm text-gray-400">Who can send you messages</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select className="bg-[#2B2B30] border border-musicConnect-border text-white rounded-md p-1 text-sm">
                          <option>Connections Only</option>
                          <option>Everyone</option>
                          <option>No One</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div>
                        <h3 className="text-white font-medium">Activity Status</h3>
                        <p className="text-sm text-gray-400">Show when you're active on Harmonics</p>
                      </div>
                      <Switch id="activity-status" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div>
                        <h3 className="text-white font-medium">Data Usage for Recommendations</h3>
                        <p className="text-sm text-gray-400">
                          Allow us to use your activity to improve recommendations
                        </p>
                      </div>
                      <Switch id="data-recommendations" defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator className="bg-musicConnect-border" />

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Data & Privacy</h2>
                  <div className="space-y-4">
                    <Button variant="outline" className="border-musicConnect-border text-white">
                      <Globe className="h-4 w-4 mr-2" />
                      View Privacy Policy
                    </Button>
                    <Button variant="outline" className="border-musicConnect-border text-white">
                      Download Your Data
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" className="border-musicConnect-border text-white">
                    Cancel
                  </Button>
                  <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "appearance" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Appearance Settings</h2>
                  <p className="text-sm text-gray-400 mb-4">Customize how Harmonics looks for you.</p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-musicConnect-border">
                      <h3 className="text-white font-medium mb-3">Theme</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="border-2 border-musicConnect-blue rounded-lg p-3 bg-[#0F0F12]">
                          <div className="h-20 rounded-md bg-[#1F1F23] mb-2 flex items-center justify-center">
                            <span className="text-white text-xs">Dark (Default)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white text-sm">Dark</span>
                            <div className="h-4 w-4 rounded-full bg-musicConnect-blue"></div>
                          </div>
                        </div>
                        <div className="border-2 border-musicConnect-border rounded-lg p-3 bg-white">
                          <div className="h-20 rounded-md bg-gray-100 mb-2 flex items-center justify-center">
                            <span className="text-gray-800 text-xs">Light</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-800 text-sm">Light</span>
                            <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                          </div>
                        </div>
                        <div className="border-2 border-musicConnect-border rounded-lg p-3 bg-gradient-to-r from-[#0F0F12] to-white">
                          <div className="h-20 rounded-md bg-gradient-to-r from-[#1F1F23] to-gray-100 mb-2 flex items-center justify-center">
                            <span className="text-white text-xs">System</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white text-sm">System</span>
                            <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-musicConnect-border">
                      <h3 className="text-white font-medium mb-3">Accent Color</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { name: "Blue", color: "#4361EE", selected: true },
                          { name: "Purple", color: "#7209B7", selected: false },
                          { name: "Green", color: "#4CC9F0", selected: false },
                          { name: "Orange", color: "#F77F00", selected: false },
                        ].map((color) => (
                          <div
                            key={color.name}
                            className={`border-2 ${
                              color.selected ? "border-white" : "border-musicConnect-border"
                            } rounded-lg p-3 cursor-pointer`}
                            style={{ backgroundColor: color.color }}
                          >
                            <div className="h-10 flex items-end justify-end">
                              {color.selected && (
                                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                                  <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                                </div>
                              )}
                            </div>
                            <span className="text-white text-sm">{color.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div>
                        <h3 className="text-white font-medium">Reduce Motion</h3>
                        <p className="text-sm text-gray-400">Minimize animations throughout the interface</p>
                      </div>
                      <Switch id="reduce-motion" />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div>
                        <h3 className="text-white font-medium">Compact Mode</h3>
                        <p className="text-sm text-gray-400">Display more content with reduced spacing</p>
                      </div>
                      <Switch id="compact-mode" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" className="border-musicConnect-border text-white">
                    Reset to Default
                  </Button>
                  <Button className="bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "billing" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Subscription & Billing</h2>
                  <div className="p-4 rounded-lg border border-musicConnect-border bg-gradient-to-r from-musicConnect-blue/20 to-musicConnect-purple/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium">Pro Plan</h3>
                        <p className="text-sm text-gray-400">Your subscription renews on June 15, 2025</p>
                      </div>
                      <div className="bg-musicConnect-blue/20 text-musicConnect-blue px-3 py-1 rounded-full text-sm font-medium">
                        Active
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-[#2B2B30] p-3 rounded-md">
                        <h4 className="text-gray-400 text-xs mb-1">Price</h4>
                        <p className="text-white font-medium">$19.99/month</p>
                      </div>
                      <div className="bg-[#2B2B30] p-3 rounded-md">
                        <h4 className="text-gray-400 text-xs mb-1">Next Billing Date</h4>
                        <p className="text-white font-medium">June 15, 2025</p>
                      </div>
                      <div className="bg-[#2B2B30] p-3 rounded-md">
                        <h4 className="text-gray-400 text-xs mb-1">Payment Method</h4>
                        <p className="text-white font-medium">•••• 4242</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button variant="outline" className="border-musicConnect-border text-white">
                        Update Payment Method
                      </Button>
                      <Button variant="outline" className="border-musicConnect-border text-white">
                        View Billing History
                      </Button>
                      <Button
                        variant="outline"
                        className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:text-amber-400"
                      >
                        Cancel Subscription
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator className="bg-musicConnect-border" />

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Available Plans</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg border border-musicConnect-border">
                      <h3 className="text-white font-medium mb-1">Free</h3>
                      <p className="text-2xl font-bold text-white mb-2">$0</p>
                      <p className="text-sm text-gray-400 mb-4">Basic features for individual artists</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">Limited connections</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">Basic messaging</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">1 workspace</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full border-musicConnect-border text-white" disabled>
                        Current Plan
                      </Button>
                    </div>

                    <div className="p-4 rounded-lg border-2 border-musicConnect-blue relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-musicConnect-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                      <h3 className="text-white font-medium mb-1">Pro</h3>
                      <p className="text-2xl font-bold text-white mb-2">$19.99</p>
                      <p className="text-sm text-gray-400 mb-4">Advanced features for serious musicians</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">Unlimited connections</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">Advanced messaging</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">10 workspaces</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">AI Assistant access</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">Priority opportunities</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white">
                        Current Plan
                      </Button>
                    </div>

                    <div className="p-4 rounded-lg border border-musicConnect-border">
                      <h3 className="text-white font-medium mb-1">Business</h3>
                      <p className="text-2xl font-bold text-white mb-2">$49.99</p>
                      <p className="text-sm text-gray-400 mb-4">For studios and music businesses</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">Everything in Pro</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">Team management</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">Unlimited workspaces</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">Advanced analytics</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-300">Dedicated support</span>
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        className="w-full border-musicConnect-border text-white hover:bg-musicConnect-blue hover:text-white hover:border-musicConnect-blue"
                      >
                        Upgrade
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "integrations" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Connected Services</h2>
                  <p className="text-sm text-gray-400 mb-4">
                    Manage third-party services and applications connected to your Harmonics account.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md bg-green-500 flex items-center justify-center mr-3">
                          <Spotify className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Spotify</h3>
                          <p className="text-xs text-gray-400">Connected on May 10, 2025</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                      >
                        Disconnect
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md bg-red-500 flex items-center justify-center mr-3">
                          <Youtube className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">YouTube</h3>
                          <p className="text-xs text-gray-400">Connected on May 12, 2025</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                      >
                        Disconnect
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md bg-[#2B2B30] flex items-center justify-center mr-3">
                          <Music className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">SoundCloud</h3>
                          <p className="text-xs text-gray-400">Not connected</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-musicConnect-blue text-musicConnect-blue hover:bg-musicConnect-blue/10"
                      >
                        Connect
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-musicConnect-border">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md bg-[#2B2B30] flex items-center justify-center mr-3">
                          <svg
                            className="h-6 w-6 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 21.6c-5.3 0-9.6-4.3-9.6-9.6S6.7 2.4 12 2.4s9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zm0-12.3c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm6.1-2.9c-1.5-1.8-3.6-2.7-6.1-2.7s-4.6.9-6.1 2.7c-.3.4-.3.9.1 1.2.4.3.9.3 1.2-.1 1.1-1.4 2.8-2.1 4.8-2.1s3.7.8 4.8 2.1c.2.2.4.3.7.3.2 0 .4-.1.5-.2.4-.3.4-.9.1-1.2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Bandcamp</h3>
                          <p className="text-xs text-gray-400">Not connected</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-musicConnect-blue text-musicConnect-blue hover:bg-musicConnect-blue/10"
                      >
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator className="bg-musicConnect-border" />

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">API Access</h2>
                  <p className="text-sm text-gray-400 mb-4">
                    Manage API keys and access for developers and third-party applications.
                  </p>

                  <div className="p-4 rounded-lg border border-musicConnect-border">
                    <h3 className="text-white font-medium mb-3">API Keys</h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between p-3 rounded-md bg-[#2B2B30]">
                        <div>
                          <p className="text-sm text-white">Production Key</p>
                          <p className="text-xs text-gray-400">Created on May 1, 2025</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                            Active
                          </span>
                          <Button variant="outline" size="sm" className="h-7 border-musicConnect-border text-white">
                            View
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-md bg-[#2B2B30]">
                        <div>
                          <p className="text-sm text-white">Development Key</p>
                          <p className="text-xs text-gray-400">Created on May 5, 2025</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                            Active
                          </span>
                          <Button variant="outline" size="sm" className="h-7 border-musicConnect-border text-white">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-musicConnect-blue text-musicConnect-blue hover:bg-musicConnect-blue/10"
                    >
                      Generate New API Key
                    </Button>
                  </div>

                  <div className="p-4 rounded-lg border border-musicConnect-border mt-4">
                    <h3 className="text-white font-medium mb-3">Authorized Applications</h3>
                    <p className="text-sm text-gray-400 mb-3">
                      These applications have access to your Harmonics account.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-md bg-[#2B2B30]">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-md bg-musicConnect-blue/20 flex items-center justify-center mr-3">
                            <Music className="h-4 w-4 text-musicConnect-blue" />
                          </div>
                          <div>
                            <p className="text-sm text-white">Music Distribution Pro</p>
                            <p className="text-xs text-gray-400">Access: Profile, Music Library</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 border-red-500/30 text-red-400 hover:bg-red-500/10"
                        >
                          Revoke
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-md bg-[#2B2B30]">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-md bg-musicConnect-purple/20 flex items-center justify-center mr-3">
                            <svg
                              className="h-4 w-4 text-musicConnect-purple"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 18V5l12-2v13" />
                              <circle cx="6" cy="18" r="3" />
                              <circle cx="18" cy="16" r="3" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-white">Beat Maker Studio</p>
                            <p className="text-xs text-gray-400">Access: Profile</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 border-red-500/30 text-red-400 hover:bg-red-500/10"
                        >
                          Revoke
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
