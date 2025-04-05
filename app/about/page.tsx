import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Home, Info } from "lucide-react"

export default function AboutPage() {
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
          <div className="mb-8 flex items-center">
            <div className="rounded-full bg-purple-100 p-4 mr-4">
              <Info className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">About WikiQuest</h1>
              <p className="text-muted-foreground">Learn about our mission to help new Wikipedia editors</p>
            </div>
          </div>

          <div className="prose prose-purple max-w-none">
            <p className="lead">
              WikiQuest is designed to help new Wikipedia editors learn the fundamentals of contributing to Wikipedia in
              a fun, engaging way. Our interactive quests and quizzes make it easy to understand Wikipedia's core
              principles and guidelines.
            </p>

            <h2>Our Mission</h2>
            <p>
              While anyone can contribute to Wikipedia, there are certain rules and guidelines that ensure the
              encyclopedia maintains its quality and reliability. Often newcomers get overwhelmed by these rules, and as
              a result they either drop off or, in worst cases, may get blocked from being able to edit if they
              continuously violate the policies.
            </p>
            <p>
              It is often not because they want to cause damage, but because it is hard to navigate the whole space and
              get started. There are hundreds of policy pages, guidelines, and even videos, but it can be overwhelming.
              And most times, to get started editors only need to know the basics.
            </p>
            <p>
              WikiQuest aims to solve this problem by gamifying the experience of onboarding Wikipedia editors, so that
              they learn how to contribute to Wikipedia in a fun and friendly way. By the end of our quests, a new
              editor should be able to have reasonable confidence that they can continue to contribute effectively.
            </p>

            <h2>What You'll Learn</h2>
            <p>WikiQuest covers the following essential topics for new Wikipedia editors:</p>
            <ul>
              <li>The Five Pillars of Wikipedia</li>
              <li>What Wikipedia is Not</li>
              <li>Verifiability</li>
              <li>No Original Research</li>
              <li>Neutral Point of View</li>
              <li>Copyright Policies</li>
            </ul>

            <h2>How It Works</h2>
            <p>
              Each quest focuses on a specific aspect of Wikipedia editing. You'll progress through interactive lessons,
              examples, and quizzes that test your understanding. As you complete quests, you'll earn badges that
              showcase your growing expertise as a Wikipedia editor.
            </p>

            <h2>Get Started</h2>
            <p>
              Ready to begin your journey as a Wikipedia editor? Start with our "Five Pillars" quest to learn the
              fundamental principles that guide all Wikipedia content and community interactions.
            </p>

            <div className="not-prose mt-8">
              <Link href="/quest/five-pillars">
                <Button className="bg-purple-600 hover:bg-purple-700">Begin Your First Quest</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built to help new Wikipedia editors learn and contribute effectively.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/about" className="underline underline-offset-4">
              About
            </Link>
            <Link href="/resources" className="underline underline-offset-4">
              Resources
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

