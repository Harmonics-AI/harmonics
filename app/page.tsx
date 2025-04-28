import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart, BarChart2, Calendar, CheckCircle, Clock, Headphones, Piano, Search, Users, X } from "lucide-react"
import { useEffect } from "react";

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footerdemo } from "@/components/ui/footer-section"
import { Squares } from "@/components/ui/squares-background"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Input } from "@/components/ui/input"
import HeaderThemeHandler from "@/components/header-theme-handler"

export default function LandingPage() {

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderThemeHandler />
      <Squares
        className="fixed inset-0 z-[-1]"
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="#333"
        hoverFillColor="#222"
      />
      <header 
        className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm"
        style={{ 
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(240, 240, 240, 0.9))" 
        }}
        data-dark-style="background: linear-gradient(to bottom, rgba(50, 50, 50, 0.95), rgba(30, 30, 30, 0.9))"
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/harmonicslogo.png"
              alt="Harmonics Logo"
              width={190}
              height={110}
              className="full"
            />
          </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#comparison" className="text-sm font-medium hover:text-primary transition-colors">
              Comparison
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/*
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
            */}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/80 dark:from-background/20 dark:to-background/0">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col justify-center space-y-4 text-center max-w-3xl mx-auto">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-in">
                    <span className="text-primary">Bringing artists and labels together</span> like never before
                  </h1>
                  <p
                    className="text-muted-foreground md:text-xl animate-in"
                    style={{ "--index": 1 } as React.CSSProperties}
                  >
                    The ultimate platform for artists to showcase their talent, connect with labels, and grow their
                    careers with powerful analytics and collaboration tools.
                  </p>
                </div>
                <div
                  className="flex flex-col gap-4 sm:flex-row justify-center animate-in"
                  style={{ "--index": 2 } as React.CSSProperties}
                >
                  <Button
                    size="lg"
                    className="px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all"
                    asChild
                  >
                    <Link href="/signup">Join the Waitlist</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-base font-medium border-2 shadow-lg hover:shadow-xl transition-all"
                    asChild
                  >
                    <Link href="#features">
                      Explore Features
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                {/* <div
                  className="mt-4 text-sm text-muted-foreground animate-in"
                  style={{ "--index": 3 } as React.CSSProperties}
                >
                  <span className="font-semibold text-primary">3,742</span> artists and labels already on the waitlist
                </div> */}
              </div>
              {/* <div
                className="relative w-full max-w-4xl overflow-hidden rounded-xl border bg-background p-2 shadow-2xl animate-in"
                style={{ "--index": 3 } as React.CSSProperties}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2nacq7cn1plE9pfvsh7UCZe9Er8zPO.png"
                  alt="Harmonics.live Dashboard Preview"
                  width={1200}
                  height={800}
                  className="w-full object-cover"
                />
              </div> */}
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features for Artists</h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Everything you need to grow your music career and connect with the right people
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: Users,
                  title: "Artist Profiles",
                  description:
                    "Create detailed profiles with bio, music links, and experience",
                },
                {
                  icon: Search,
                  title: "Search & Discovery",
                  description: "Get discovered based on your genre, location, engagement metrics, and more",
                },
                {
                  icon: Headphones,
                  title: "Collaboration Tools",
                  description: "Connect and share files with other artists and producers seamlessly",
                },
                {
                  icon: CheckCircle,
                  title: "AI Matchmaking",
                  description: "Get matched with the perfect collaborators based on data-driven insights",
                },
                {
                  icon: Piano,
                  title: "Virtual Studio Integration",
                  description: "Collaborate remotely on music projects",
                },
                {
                  icon: BarChart,
                  title: "Analytics",
                  description: "Data provided from Spotify, Apple Music, YouTube, Instagram, TikTok, and SoundCloud for real-time insights",
                },
              ].map((feature, index) => (
                <div key={index} className="relative min-h-[14rem]">
                  <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                      <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                            {feature.title}
                          </h3>
                          <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="comparison" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Compare</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how Harmonics stacks up against other platforms
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-medium">Features</th>
                    <th className="p-4 text-center font-medium">Harmonics</th>
                    <th className="p-4 text-center font-medium">Viberate</th>
                    <th className="p-4 text-center font-medium">Groover</th>
                    <th className="p-4 text-center font-medium">Chartmetric</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Unified Analytics</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <X className="h-5 w-5 text-red-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">AI Matchmaking</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <X className="h-5 w-5 text-red-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <X className="h-5 w-5 text-red-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <X className="h-5 w-5 text-red-500 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Collaboration Tools</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <X className="h-5 w-5 text-red-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <X className="h-5 w-5 text-red-500 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Virtual Studio</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <X className="h-5 w-5 text-red-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <X className="h-5 w-5 text-red-500 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Starting Price</td>
                    <td className="p-4 text-center font-medium text-primary">$0</td>
                    <td className="p-4 text-center">$60</td>
                    <td className="p-4 text-center">$48</td>
                    <td className="p-4 text-center">$10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Artists & Labels</h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our users have to say about Harmonics
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {[
                {
                  name: "Midnight Mercenary",
                  role: "Rapper, Music Producer",
                  quote:
                    "Harmonics.live has transformed how I track my growth across platforms. The analytics are incredibly detailed, and I've found amazing collaborators through the AI matchmaking.",
                },
                {
                  name: "Rhythm Records",
                  role: "Independent Label",
                  quote:
                    "As a label, finding the right artists used to be challenging. With Harmonics.live's discovery tools, we can filter by genre, engagement, and location to find exactly what we're looking for.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="relative">
                  <div className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative flex flex-col justify-between space-y-4 rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                      <div className="space-y-2">
                        <svg
                          className="h-6 w-6 text-primary"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                        </svg>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Simple Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works for you and your career
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  name: "Free",
                  price: "$0",
                  features: [
                    "Basic analytics for 1 artist",
                    "Limited platform connections",
                    "Basic discovery features",
                    "Community access",
                  ],
                },
                {
                  name: "Premium",
                  price: "$19",
                  features: [
                    "Advanced analytics for up to 5 artists",
                    "All platform connections",
                    "Enhanced discovery features",
                    "Collaboration tools",
                    "Basic AI matchmaking",
                    "10 pitching opportunities/month",
                  ],
                },
                {
                  name: "Pro",
                  price: "$49",
                  features: [
                    "Everything in Premium",
                    "Unlimited artist profiles",
                    "Priority discovery placement",
                    "Advanced AI matchmaking",
                    "Unlimited pitching opportunities",
                    "Priority support",
                    "Custom reporting",
                  ],
                },
              ].map((plan, index) => (
                <div key={index} className="relative">
                  <div className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div
                      className={`relative flex flex-col justify-between rounded-xl border-[0.75px] ${index === 1 ? "bg-primary text-primary-foreground" : "bg-background"} p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]`}
                    >
                      <div>
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <div className="mt-4 flex items-baseline">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="ml-1 text-sm text-muted-foreground">/month</span>
                        </div>
                        <ul className="mt-6 space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        className={`mt-8 ${index === 1 ? "bg-background text-primary hover:bg-background/90" : ""}`}
                        variant={index === 1 ? "secondary" : "default"}
                        asChild
                      >
                        <Link href="/signup">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl py-12">
              <div className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 bg-background/80 backdrop-blur-sm shadow-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative rounded-xl border-[0.75px] bg-background p-8 space-y-8">
                  <div className="text-center space-y-2 mb-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground md:text-lg">
                      Everything you need to know about Harmonics
                    </p>
                  </div>
                  
                  <div className="border-t border-border pt-6"></div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary">How do I get started?</h3>
                    <p className="text-muted-foreground">
                      Simply sign up for our waitlist, and we'll notify you as soon as you're granted access. Once in, you
                      can connect your music platforms, set up your profile, and start exploring the features.
                    </p>
                  </div>
                  
                  <div className="border-t border-border pt-6"></div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary">Which platforms can I connect?</h3>
                    <p className="text-muted-foreground">
                      Harmonics integrates with Spotify, Apple Music, SoundCloud, YouTube, Instagram, TikTok, and more.
                      We're constantly adding new integrations.
                    </p>
                  </div>
                  
                  <div className="border-t border-border pt-6"></div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary">How does the AI matchmaking work?</h3>
                    <p className="text-muted-foreground">
                      Our AI analyzes your music style, audience demographics, and career goals to suggest potential
                      collaborators, labels, and opportunities that align with your artistic vision.
                    </p>
                  </div>
                  
                  <div className="border-t border-border pt-6"></div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary">Can labels use Harmonics too?</h3>
                    <p className="text-muted-foreground">
                      Absolutely! Labels can create profiles to discover new talent, track artist performance, and connect
                      directly with artists for potential signings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Music Career?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of artists and labels already using Harmonics to connect and grow
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/signup">Join the Waitlist</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Request a Demo</Link>
                </Button>
              </div>
              <div className="mt-8 max-w-md w-full">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="mt-2 text-sm text-muted-foreground">
                  Subscribe to our newsletter for artist spotlights and industry insights
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footerdemo />
    </div>
  )
}

