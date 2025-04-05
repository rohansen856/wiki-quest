import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ExternalLink, Home, Lightbulb, FileText } from "lucide-react"

export default function ResourcesPage() {
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
              <Lightbulb className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Helpful Resources</h1>
              <p className="text-muted-foreground">Additional guides and tools for Wikipedia editors</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started Guide</CardTitle>
                <CardDescription>Official Wikipedia guide for new editors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The official Wikipedia Getting Started guide covers the basics of creating an account, making your
                  first edits, and understanding Wikipedia's community.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Help:Getting_started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:underline"
                >
                  Visit Guide <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wikipedia Tutorial</CardTitle>
                <CardDescription>Step-by-step introduction to editing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This interactive tutorial walks you through the basics of editing Wikipedia, including how to format
                  text, add references, and upload images.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Wikipedia:Tutorial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:underline"
                >
                  Start Tutorial <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Teahouse</CardTitle>
                <CardDescription>Friendly help forum for new editors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Teahouse is a friendly place where you can ask questions about how to edit Wikipedia and get help
                  from experienced volunteers.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Wikipedia:Teahouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:underline"
                >
                  Visit Teahouse <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manual of Style</CardTitle>
                <CardDescription>Guidelines for writing and formatting</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Manual of Style provides guidelines for writing and formatting Wikipedia articles to ensure
                  consistency across the encyclopedia.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:underline"
                >
                  Read Manual <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Referencing Guide</CardTitle>
                <CardDescription>How to add citations to articles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This guide explains how to add references to Wikipedia articles, including different citation formats
                  and tools to make the process easier.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Help:Referencing_for_beginners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:underline"
                >
                  Learn Referencing <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sandbox</CardTitle>
                <CardDescription>Practice editing in a safe environment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The sandbox is a page where you can practice editing without affecting Wikipedia articles. It's a
                  great place to experiment with formatting and learn how wiki markup works.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Wikipedia:Sandbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:underline"
                >
                  Try Sandbox <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Helpful Tools</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Citation Tool</CardTitle>
                  <CardDescription>Generate citations automatically</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    This tool helps you generate properly formatted citations for Wikipedia articles from URLs, DOIs,
                    ISBNs, and more.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Special:CiteThisPage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:underline"
                  >
                    Use Citation Tool <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Wiki Markup Cheatsheet</CardTitle>
                  <CardDescription>Quick reference for wiki syntax</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A handy reference guide for the most common wiki markup syntax used in Wikipedia articles.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Help:Cheatsheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:underline"
                  >
                    View Cheatsheet <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Article Wizard</CardTitle>
                  <CardDescription>Guide for creating new articles</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The Article Wizard guides you through the process of creating a new Wikipedia article, helping to
                    ensure it meets all guidelines.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Wikipedia:Article_wizard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:underline"
                  >
                    Use Article Wizard <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-10 mb-6">
            <h2 className="text-2xl font-bold mb-4">Documentation</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">
                    <a
                      href="https://en.wikipedia.org/wiki/Wikipedia:Policies_and_guidelines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Policies and Guidelines
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive overview of Wikipedia's policies and guidelines
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">
                    <a
                      href="https://en.wikipedia.org/wiki/Help:Contents"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Help Contents
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">Central hub for all Wikipedia help resources</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">
                    <a
                      href="https://en.wikipedia.org/wiki/Wikipedia:FAQ/Editing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Editing FAQ
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">Frequently asked questions about editing Wikipedia</p>
                </div>
              </div>
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

