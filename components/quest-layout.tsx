import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Home } from "lucide-react"

interface QuestLayoutProps {
  title: string
  description: string
  progress: number
  children: React.ReactNode
}

export function QuestLayout({ title, description, progress, children }: QuestLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <span className="font-bold">WikiQuest</span>
            </Link>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-2">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <Link href="/" className="text-sm text-muted-foreground hover:underline mb-2 inline-block">
              ← Back to Quests
            </Link>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>
  )
}

