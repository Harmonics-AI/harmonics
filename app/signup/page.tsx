"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SignupPage() {
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
                <h1 className="text-2xl font-bold text-musicConnect-text-primary">Create your account</h1>
                <p className="text-sm text-musicConnect-text-secondary mt-2">
                  Join the future of music collaboration
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-musicConnect-text-primary">First name</Label>
                  <Input 
                    id="first-name" 
                    placeholder="John" 
                    className="bg-musicConnect-background border-musicConnect-border text-musicConnect-text-primary placeholder:text-musicConnect-text-secondary focus:border-musicConnect-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-musicConnect-text-primary">Last name</Label>
                  <Input 
                    id="last-name" 
                    placeholder="Doe" 
                    className="bg-musicConnect-background border-musicConnect-border text-musicConnect-text-primary placeholder:text-musicConnect-text-secondary focus:border-musicConnect-blue"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-musicConnect-text-primary">Email</Label>
                <Input 
                  id="email" 
                  placeholder="name@example.com" 
                  type="email" 
                  className="bg-musicConnect-background border-musicConnect-border text-musicConnect-text-primary placeholder:text-musicConnect-text-secondary focus:border-musicConnect-blue"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-musicConnect-text-primary">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Create a strong password"
                  className="bg-musicConnect-background border-musicConnect-border text-musicConnect-text-primary placeholder:text-musicConnect-text-secondary focus:border-musicConnect-blue"
                />
                <p className="text-xs text-musicConnect-text-secondary">
                  Must be at least 8 characters with numbers and special characters
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-musicConnect-text-primary">Confirm Password</Label>
                <Input 
                  id="confirm-password" 
                  type="password" 
                  placeholder="Confirm your password"
                  className="bg-musicConnect-background border-musicConnect-border text-musicConnect-text-primary placeholder:text-musicConnect-text-secondary focus:border-musicConnect-blue"
                />
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="border-musicConnect-border data-[state=checked]:bg-musicConnect-blue mt-0.5" />
                <Label htmlFor="terms" className="text-sm text-musicConnect-text-secondary leading-5">
                  I agree to the{" "}
                  <Link href="/terms" className="text-musicConnect-blue hover:text-musicConnect-green transition-colors">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-musicConnect-blue hover:text-musicConnect-green transition-colors">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="marketing" className="border-musicConnect-border data-[state=checked]:bg-musicConnect-blue mt-0.5" />
                <Label htmlFor="marketing" className="text-sm text-musicConnect-text-secondary leading-5">
                  Send me updates about new features and collaboration opportunities
                </Label>
              </div>
              <Button 
                className="w-full bg-musicConnect-blue hover:bg-musicConnect-blue/80 text-white font-medium" 
                type="submit"
              >
                Create account
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-musicConnect-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-musicConnect-card px-2 text-musicConnect-text-secondary">Or continue with</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full bg-musicConnect-background border-musicConnect-border text-musicConnect-text-primary hover:bg-musicConnect-border">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="currentColor"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="currentColor"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="currentColor"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="currentColor"
                />
              </svg>
              Continue with Google
            </Button>
            
            <div className="text-center text-sm">
              <span className="text-musicConnect-text-secondary">Already have an account? </span>
              <Link href="/login" className="text-musicConnect-blue hover:text-musicConnect-green transition-colors font-medium">
                Sign in
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

