"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award, BookOpen, Home, User, CheckCircle } from "lucide-react"

export default function ProfilePage() {
  // In a real app, this would come from a database
  const [earnedBadges, setEarnedBadges] = useState([
    {
      id: "five-pillars",
      name: "Five Pillars",
      description: "Mastered the fundamental principles of Wikipedia",
      completed: true,
    },
    {
      id: "wikipedia-is-not",
      name: "Wikipedia Boundaries",
      description: "Learned what Wikipedia is not meant to be",
      completed: true,
    },
  ])

  const [quests, setQuests] = useState([
    { id: "five-pillars", name: "The Five Pillars", progress: 100, completed: true },
    { id: "what-wikipedia-is-not", name: "What Wikipedia Is Not", progress: 100, completed: true },
    { id: "verifiability", name: "Verifiability", progress: 0, completed: false },
    { id: "neutral-point", name: "Neutral Point of View", progress: 0, completed: false },
  ])

  return (
    <div className="flex mx-auto min-h-screen flex-col">
      <header className="sticky mx-auto top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
      <main className="flex-1 mx-auto">
        <div className="container py-8">
          <div className="mb-8 flex items-center">
            <div className="rounded-full bg-purple-100 p-4 mr-4">
              <User className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Your Profile</h1>
              <p className="text-muted-foreground">
                Track your progress and achievements
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                  <CardDescription>Track your learning journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quests.map((quest) => (
                      <div key={quest.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{quest.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {quest.progress}%
                          </span>
                        </div>
                        <Progress value={quest.progress} className="h-2" />
                        <div className="flex justify-end">
                          {quest.completed ? (
                            <span className="text-xs text-green-600 flex items-center">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Completed
                            </span>
                          ) : (
                            <Link href={`/quest/${quest.id}`}>
                              <Button
                                variant="link"
                                size="sm"
                                className="h-auto p-0 text-xs"
                              >
                                {quest.progress > 0 ? "Continue" : "Start"}
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Overall Stats</CardTitle>
                  <CardDescription>
                    Your Wikipedia editor journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4 text-center">
                      <div className="text-2xl font-bold">2/6</div>
                      <div className="text-xs text-muted-foreground">
                        Quests Completed
                      </div>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <div className="text-2xl font-bold">2</div>
                      <div className="text-xs text-muted-foreground">
                        Badges Earned
                      </div>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <div className="text-2xl font-bold">10</div>
                      <div className="text-xs text-muted-foreground">
                        Quiz Questions Answered
                      </div>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <div className="text-2xl font-bold">90%</div>
                      <div className="text-xs text-muted-foreground">
                        Quiz Accuracy
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Your Badges</CardTitle>
                  <CardDescription>Achievements you've earned</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {earnedBadges.map((badge) => (
                      <div
                        key={badge.id}
                        className="flex items-start space-x-4 rounded-lg border p-4"
                      >
                        <div className="rounded-full bg-purple-100 p-3">
                          <Award className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{badge.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {badge.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="flex items-start space-x-4 rounded-lg border border-dashed p-4 bg-muted/50">
                      <div className="rounded-full bg-muted p-3">
                        <Award className="h-6 w-6 text-muted-foreground/60" />
                      </div>
                      <div>
                        <h3 className="font-medium text-muted-foreground/80">
                          Verifiability Expert
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Complete the Verifiability quest to earn this badge
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 rounded-lg border border-dashed p-4 bg-muted/50">
                      <div className="rounded-full bg-muted p-3">
                        <Award className="h-6 w-6 text-muted-foreground/60" />
                      </div>
                      <div>
                        <h3 className="font-medium text-muted-foreground/80">
                          Neutrality Guardian
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Complete the Neutral Point of View quest to earn this
                          badge
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

