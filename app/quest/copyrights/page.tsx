"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ChevronRight, Award, Copyright } from "lucide-react"
import { QuestLayout } from "@/components/quest-layout"
import { CopyrightsQuiz } from "@/components/copyrights-quiz"

export default function CopyrightsQuest() {
  const [activeTab, setActiveTab] = useState("learn")
  const [progress, setProgress] = useState(0)
  const [currentTopic, setCurrentTopic] = useState(0)
  const [completedTopics, setCompletedTopics] = useState<number[]>([])
  const [quizStarted, setQuizStarted] = useState(false)

  const topics = [
    {
      title: "Copyright Basics",
      description: "Understanding copyright law as it relates to Wikipedia.",
      content:
        "Copyright is a legal right that grants the creator of an original work exclusive rights to its use and distribution. In Wikipedia, copyright is a crucial consideration because all content must be either free of copyright restrictions or used with permission. Wikipedia content is licensed under the Creative Commons Attribution-ShareAlike License (CC BY-SA), which allows anyone to copy, redistribute, and adapt the content, as long as they give appropriate credit and license their new creations under identical terms. Understanding copyright is essential for Wikipedia editors to ensure they don't add copyrighted material without permission.",
      key_points: [
        "Wikipedia content is licensed under the Creative Commons Attribution-ShareAlike License",
        "Editors must only add content that is either free of copyright or properly licensed",
        "Copyright violations can lead to content being removed and possible legal issues",
      ],
    },
    {
      title: "Free Licenses",
      description: "Understanding the licenses that Wikipedia uses.",
      content:
        "Wikipedia uses free licenses to ensure that its content can be freely used, modified, and shared by anyone. The primary license used is the Creative Commons Attribution-ShareAlike License (CC BY-SA), which allows anyone to share and adapt the material for any purpose, even commercially, as long as they give appropriate credit and distribute their contributions under the same license. Images and other media on Wikipedia may use various free licenses, such as CC BY, CC BY-SA, or public domain. Before uploading any content to Wikipedia, you must ensure it's either your own work that you're willing to license freely, or it's already under a compatible free license.",
      key_points: [
        "Wikipedia primarily uses the CC BY-SA license",
        "Free licenses allow content to be used, modified, and shared by anyone",
        "Different types of media may use different specific licenses",
      ],
    },
    {
      title: "Copyright Violations",
      description: "How to avoid and handle copyright violations on Wikipedia.",
      content:
        "Copyright violations occur when copyrighted material is used without permission from the copyright holder. On Wikipedia, this often happens when editors copy text directly from copyrighted sources like books, websites, or academic papers. To avoid copyright violations, never copy text directly from sources unless they're explicitly freely licensed or in the public domain. Instead, read the source, understand it, and then write the information in your own words. If you spot a copyright violation on Wikipedia, you should report it promptly. The violating content will usually be removed, and in serious cases, the editor who added it may face restrictions.",
      key_points: [
        "Never copy text directly from copyrighted sources",
        "Write information in your own words after reading sources",
        "Report copyright violations when you spot them",
      ],
    },
    {
      title: "Fair Use",
      description: "Understanding fair use limitations on Wikipedia.",
      content:
        "Fair use is a doctrine in copyright law that allows limited use of copyrighted material without permission for purposes such as criticism, comment, news reporting, teaching, and research. While fair use exists in some jurisdictions like the United States, Wikipedia has a very strict fair use policy because it operates globally and fair use laws vary by country. In general, Wikipedia strongly discourages relying on fair use claims and prefers freely licensed content. The English Wikipedia does allow fair use in limited circumstances for things like low-resolution images of album covers or movie posters when used to identify the subject, but these must meet specific criteria and include a rationale explaining why free content cannot be used instead.",
      key_points: [
        "Fair use on Wikipedia is highly restricted and discouraged",
        "Free content is always preferred over fair use claims",
        "Fair use claims must meet specific criteria and include a rationale",
      ],
    },
    {
      title: "Public Domain",
      description: "Understanding what public domain means for Wikipedia content.",
      content:
        "Public domain refers to creative materials that are not protected by intellectual property laws such as copyright. These materials are owned by the public rather than by an individual creator. Works enter the public domain through various means: copyright expiration, forfeiture, or when they were created by the U.S. federal government. On Wikipedia, public domain materials can be used without restriction. However, it's important to verify that works are actually in the public domain before using them. The duration of copyright varies by country and depends on factors like when the work was created and the author's death date. Materials created before 1926 are generally in the public domain in the United States, but this is not universal across all countries.",
      key_points: [
        "Public domain works can be used on Wikipedia without restrictions",
        "Works enter the public domain when copyright expires or through other means",
        "Copyright duration varies by country and depends on multiple factors",
      ],
    },
  ]

  const handleNextTopic = () => {
    if (currentTopic < topics.length - 1) {
      setCurrentTopic(currentTopic + 1)
      setProgress(Math.round(((currentTopic + 1) / topics.length) * 100))
    } else {
      setActiveTab("quiz")
    }
  }

  const handleTopicComplete = (topicIndex: number) => {
    if (!completedTopics.includes(topicIndex)) {
      setCompletedTopics([...completedTopics, topicIndex])
      setProgress(Math.round(((completedTopics.length + 1) / topics.length) * 100))
    }
  }

  const handleStartQuiz = () => {
    setQuizStarted(true)
  }

  return (
    <QuestLayout
      title="Copyrights"
      description="Learn about copyright considerations when editing Wikipedia."
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
                <div className="rounded-full bg-pink-100 p-2 mr-3">
                  <Copyright className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <CardTitle>{topics[currentTopic].title}</CardTitle>
                  <CardDescription>{topics[currentTopic].description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>{topics[currentTopic].content}</p>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Key Points:</h4>
                  <ul className="space-y-2">
                    {topics[currentTopic].key_points.map((point, index) => (
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
                disabled={currentTopic === 0}
                onClick={() => {
                  setCurrentTopic(currentTopic - 1)
                  setProgress(Math.round(((currentTopic - 1) / topics.length) * 100))
                }}
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  handleNextTopic()
                  handleTopicComplete(currentTopic)
                }}
              >
                {currentTopic < topics.length - 1 ? (
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
                  Now that you've learned about copyright considerations on Wikipedia, let's test your understanding
                  with a short quiz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-6">
                  <Award className="h-16 w-16 text-pink-600" />
                </div>
                <p className="text-center">
                  The quiz consists of 5 questions about copyright on Wikipedia. You need to score at least 80% to earn
                  the Copyright Guardian badge.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={handleStartQuiz}>Start Quiz</Button>
              </CardFooter>
            </Card>
          ) : (
            <CopyrightsQuiz />
          )}
        </TabsContent>
      </Tabs>
    </QuestLayout>
  )
}

