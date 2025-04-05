"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, CheckCircle, ChevronRight, Award } from "lucide-react"
import { QuestLayout } from "@/components/quest-layout"
import { PillarQuiz } from "@/components/pillar-quiz"

export default function FivePillarsQuest() {
  const [activeTab, setActiveTab] = useState("learn")
  const [progress, setProgress] = useState(0)
  const [currentPillar, setCurrentPillar] = useState(0)
  const [completedPillars, setCompletedPillars] = useState<number[]>([])
  const [quizStarted, setQuizStarted] = useState(false)

  const pillars = [
    {
      title: "Wikipedia is an encyclopedia",
      description:
        "Wikipedia is an online encyclopedia that anyone can edit. It contains articles on topics in every field of knowledge, from history to science to popular culture.",
      content:
        "Wikipedia is an encyclopedia: a comprehensive written compendium that contains information on all branches of knowledge. It is not a soapbox, an advertising platform, a vanity press, an experiment in anarchy or democracy, an indiscriminate collection of information, or a web directory. It is not a dictionary, a newspaper, or a collection of source documents; that kind of content should be contributed to the sister projects, such as Wiktionary, Wikinews, and Wikisource.",
      key_points: [
        "Wikipedia is an encyclopedia, not a platform for other purposes",
        "Content should be informational and educational",
        "Promotional content, dictionary definitions, and news don't belong in Wikipedia",
      ],
    },
    {
      title: "Wikipedia is written from a neutral point of view",
      description:
        "All Wikipedia articles must be written from a neutral point of view, representing significant views fairly, proportionately and without bias.",
      content:
        "Wikipedia articles must be written from a neutral point of view (NPOV), which means representing fairly, proportionately, and, as far as possible, without editorial bias, all the significant points of view that have been published by reliable sources on a topic. NPOV is a fundamental principle of Wikipedia and of other Wikimedia projects. This policy is non-negotiable and all editors and articles must follow it.",
      key_points: [
        "Articles must represent all significant viewpoints fairly",
        "Content should be presented without bias",
        "Personal opinions and advocacy don't belong in Wikipedia articles",
      ],
    },
    {
      title: "Wikipedia is free content",
      description:
        "Wikipedia's content can be edited, used, and redistributed by anyone, subject to certain terms. All text is available under the Creative Commons Attribution-ShareAlike License.",
      content:
        "Wikipedia content can be copied, modified, and redistributed if and only if the copied version is made available on the same terms to others and acknowledgment of the authors of the Wikipedia article used is included. This principle is known as 'copyleft'. Wikipedia articles therefore will remain free forever and can be used by anybody subject to certain restrictions, most of which serve to ensure that freedom.",
      key_points: [
        "Content is freely available for anyone to use, modify, and distribute",
        "Contributions are licensed under Creative Commons Attribution-ShareAlike License",
        "Copyright violations are strictly prohibited",
      ],
    },
    {
      title: "Wikipedia editors should treat each other with respect and civility",
      description:
        "Wikipedians should interact with each other in a respectful and civil manner. Respect other editors, even when you disagree.",
      content:
        "Wikipedia editors should interact with each other in a respectful and civil manner. Respect your fellow Wikipedians, even when you disagree. Apply Wikipedia etiquette, and don't engage in personal attacks. Seek consensus, avoid edit wars, and never disrupt Wikipedia to illustrate a point. Act in good faith, and assume good faith on the part of others. Be open and welcoming to newcomers. Should conflicts arise, discuss them calmly on the appropriate talk pages, follow dispute resolution procedures, and consider that there are 5,999,999 other articles on the English Wikipedia to improve and discuss.",
      key_points: [
        "Treat other editors with respect, even during disagreements",
        "Avoid personal attacks and assume good faith",
        "Follow dispute resolution procedures when conflicts arise",
      ],
    },
    {
      title: "Wikipedia has no firm rules",
      description:
        "Wikipedia has policies and guidelines, but they are not carved in stone. The principles and spirit of Wikipedia's rules matter more than their literal wording.",
      content:
        "Wikipedia has policies and guidelines, but they are not carved in stone; their content and interpretation can evolve over time. The principles and spirit matter more than literal wording, and sometimes improving Wikipedia requires making exceptions. Be bold but not reckless in updating articles. And do not agonize over making mistakes: every past version of a page is saved, so any mistakes can be easily corrected.",
      key_points: [
        "Policies and guidelines can evolve over time",
        "The spirit of rules matters more than literal wording",
        "Be bold in editing, and don't worry about making mistakes",
      ],
    },
  ]

  const handleNextPillar = () => {
    if (currentPillar < pillars.length - 1) {
      setCurrentPillar(currentPillar + 1)
      setProgress(Math.round(((currentPillar + 1) / pillars.length) * 100))
    } else {
      setActiveTab("quiz")
    }
  }

  const handlePillarComplete = (pillarIndex: number) => {
    if (!completedPillars.includes(pillarIndex)) {
      setCompletedPillars([...completedPillars, pillarIndex])
      setProgress(Math.round(((completedPillars.length + 1) / pillars.length) * 100))
    }
  }

  const handleStartQuiz = () => {
    setQuizStarted(true)
  }

  return (
    <QuestLayout
      title="The Five Pillars of Wikipedia"
      description="Learn the fundamental principles that guide Wikipedia's content and community."
      progress={progress}
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>
        <TabsContent value="learn" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <div className="rounded-full bg-purple-100 p-2 mr-3">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <CardTitle>
                    Pillar {currentPillar + 1}: {pillars[currentPillar].title}
                  </CardTitle>
                  <CardDescription>{pillars[currentPillar].description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>{pillars[currentPillar].content}</p>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Key Points:</h4>
                  <ul className="space-y-2">
                    {pillars[currentPillar].key_points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                disabled={currentPillar === 0}
                onClick={() => {
                  setCurrentPillar(currentPillar - 1)
                  setProgress(Math.round(((currentPillar - 1) / pillars.length) * 100))
                }}
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  handleNextPillar()
                  handlePillarComplete(currentPillar)
                }}
              >
                {currentPillar < pillars.length - 1 ? (
                  <>
                    Next <ChevronRight className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Take Quiz <Award className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="quiz" className="mt-6">
          {!quizStarted ? (
            <Card>
              <CardHeader>
                <CardTitle>Test Your Knowledge</CardTitle>
                <CardDescription>
                  Now that you've learned about the Five Pillars of Wikipedia, let's test your understanding with a
                  short quiz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-6">
                  <Award className="h-16 w-16 text-purple-600" />
                </div>
                <p className="text-center">
                  The quiz consists of 5 questions about the Five Pillars. You need to score at least 80% to earn the
                  Five Pillars badge.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={handleStartQuiz}>Start Quiz</Button>
              </CardFooter>
            </Card>
          ) : (
            <PillarQuiz />
          )}
        </TabsContent>
      </Tabs>
    </QuestLayout>
  )
}

