import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, BookOpen, FileText, Scale, Copyright } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col mx-auto">
      <header className="sticky top-0 z-10 mx-auto border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <span className="font-bold">WikiQuest</span>
            </Link>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-2">
            <Link href="/profile">
              <Button variant="ghost" size="sm">
                My Progress
              </Button>
            </Link>
            <Link href="/achievements">
              <Button variant="ghost" size="sm">
                Achievements
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1  mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Begin Your Wikipedia Editor Journey
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Learn how to contribute to Wikipedia through fun, interactive
                  lessons and challenges.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/quest/five-pillars">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Start Your Quest
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 mx-auto">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-purple-100 p-4">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Learn the Fundamentals</h3>
                  <p className="text-muted-foreground">
                    Understand Wikipedia's core principles and guidelines
                    through interactive lessons.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-green-100 p-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Practice Editing</h3>
                  <p className="text-muted-foreground">
                    Apply what you've learned in simulated editing scenarios
                    before making real contributions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-amber-100 p-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Earn Achievements</h3>
                  <p className="text-muted-foreground">
                    Track your progress and earn badges as you master different
                    aspects of Wikipedia editing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Available Quests
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Choose a quest to begin your Wikipedia editor training.
                </p>
              </div>
              <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Link href="/quest/five-pillars">
                  <div className="flex flex-col items-start rounded-lg border bg-white p-6 shadow-sm transition-all hover:bg-slate-50 hover:shadow">
                    <div className="rounded-full bg-purple-100 p-3 mb-4">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold">The Five Pillars</h3>
                    <p className="text-muted-foreground mt-2">
                      Learn the fundamental principles that guide Wikipedia's
                      content and community.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-purple-600">
                      <span className="font-medium">Begin Quest</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
                <Link href="/quest/what-wikipedia-is-not">
                  <div className="flex flex-col items-start rounded-lg border bg-white p-6 shadow-sm transition-all hover:bg-slate-50 hover:shadow">
                    <div className="rounded-full bg-green-100 p-3 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-green-600"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">What Wikipedia Is Not</h3>
                    <p className="text-muted-foreground mt-2">
                      Understand common misconceptions about Wikipedia's purpose
                      and content.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-green-600">
                      <span className="font-medium">Begin Quest</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
                <Link href="/quest/verifiability">
                  <div className="flex flex-col items-start rounded-lg border bg-white p-6 shadow-sm transition-all hover:bg-slate-50 hover:shadow">
                    <div className="rounded-full bg-blue-100 p-3 mb-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">Verifiability</h3>
                    <p className="text-muted-foreground mt-2">
                      Learn why all information in Wikipedia must be verifiable
                      through reliable sources.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-blue-600">
                      <span className="font-medium">Begin Quest</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
                <Link href="/quest/no-original-research">
                  <div className="flex flex-col items-start rounded-lg border bg-white p-6 shadow-sm transition-all hover:bg-slate-50 hover:shadow">
                    <div className="rounded-full bg-amber-100 p-3 mb-4">
                      <BookOpen className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold">No Original Research</h3>
                    <p className="text-muted-foreground mt-2">
                      Discover why Wikipedia only publishes material that has
                      been published by reliable sources.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-amber-600">
                      <span className="font-medium">Begin Quest</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
                <Link href="/quest/neutral-point-of-view">
                  <div className="flex flex-col items-start rounded-lg border bg-white p-6 shadow-sm transition-all hover:bg-slate-50 hover:shadow">
                    <div className="rounded-full bg-indigo-100 p-3 mb-4">
                      <Scale className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold">Neutral Point of View</h3>
                    <p className="text-muted-foreground mt-2">
                      Learn how to write Wikipedia articles that represent all
                      significant viewpoints fairly.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-indigo-600">
                      <span className="font-medium">Begin Quest</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
                <Link href="/quest/copyrights">
                  <div className="flex flex-col items-start rounded-lg border bg-white p-6 shadow-sm transition-all hover:bg-slate-50 hover:shadow">
                    <div className="rounded-full bg-pink-100 p-3 mb-4">
                      <Copyright className="h-6 w-6 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold">Copyrights</h3>
                    <p className="text-muted-foreground mt-2">
                      Understand how copyright works on Wikipedia and what
                      content is acceptable to use.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-pink-600">
                      <span className="font-medium">Begin Quest</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t mx-auto py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built to help new Wikipedia editors learn and contribute
            effectively.
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
  );
}

