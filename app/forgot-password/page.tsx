"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ForgotPasswordPage() {
  const [emailSent, setEmailSent] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call your password reset API
    setEmailSent(true)
  }

  if (emailSent) {
    return (
      <div className="min-h-screen bg-musicConnect-background flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Card className="bg-musicConnect-card border-musicConnect-border shadow-xl">
            <CardHeader className="space-y-6 pb-8">
              <div className="flex flex-col items-center space-y-4">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/harmonicslogo.png"
                    alt="Harmonics Logo"
                    width={150}
                    height={80}
                    className="full"
                  />
                </Link>
                <div className="text-center">
                  <div className="w-16 h-16 bg-musicConnect-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-musicConnect-blue" />
                  </div>
                  <h1 className="text-2xl font-bold text-musicConnect-text-primary">Check your email</h1>
                  <p className="text-sm text-musicConnect-text-secondary mt-2">
                    We've sent password reset instructions to
                  </p>
                  <p className="text-sm text-musicConnect-blue font-medium">
                    {email}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-sm text-musicConnect-text-secondary">
                  Didn't receive the email? Check your spam folder or request a new one.
                </p>
                
                <Button 
                  onClick={() => setEmailSent(false)}
                  variant="outline" 
                  className="w-full bg-musicConnect-background border-musicConnect-border text-musicConnect-text-primary hover:bg-musicConnect-border"
                >
                  Try different email
                </Button>
              </div>
              
              <div className="flex justify-center pt-4">
                <Link 
                  href="/login" 
                  className="flex items-center text-sm text-musicConnect-text-secondary hover:text-musicConnect-blue transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-musicConnect-background flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <Card className="bg-musicConnect-card border-musicConnect-border shadow-xl">
          <CardHeader className="space-y-6 pb-8">
            <div className="flex flex-col items-center space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/harmonicslogo.png"
                  alt="Harmonics Logo"
                  width={150}
                  height={80}
                  className="full"
                />
              </Link>
              <div className="text-center">
                <div className="w-16 h-16 bg-musicConnect-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-musicConnect-blue" />
                </div>
                <h1 className="text-2xl font-bold text-musicConnect-text-primary">Reset your password</h1>
                <p className="text-sm text-musicConnect-text-secondary mt-2">
                  Enter your email address and we'll send you a link to reset your password
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-musicConnect-text-primary">Email address</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-musicConnect-background border-musicConnect-border text-musicConnect-text-primary placeholder:text-musicConnect-text-secondary focus:border-musicConnect-blue"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white font-medium"
                disabled={!email}
              >
                Send reset instructions
              </Button>
            </form>
            
            <div className="text-center text-sm">
              <span className="text-musicConnect-text-secondary">Remember your password? </span>
              <Link href="/login" className="text-musicConnect-blue hover:text-musicConnect-green transition-colors font-medium">
                Back to login
              </Link>
            </div>
            
            <div className="flex justify-center pt-4">
              <Link 
                href="/" 
                className="flex items-center text-sm text-musicConnect-text-secondary hover:text-musicConnect-blue transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 