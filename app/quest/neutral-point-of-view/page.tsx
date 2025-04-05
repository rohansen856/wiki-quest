"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ChevronRight, Award, Scale } from "lucide-react"
import { QuestLayout } from "@/components/quest-layout"
import { NeutralPointQuiz } from "@/components/neutral-point-quiz"

export default function NeutralPointOfViewQuest() {
  const [activeTab, setActiveTab] = useState("learn")
  const [progress, setProgress] = useState(0)
  const [currentTopic, setCurrentTopic] = useState(0)
  const [completedTopics, setCompletedTopics] = useState<number[]>([])
  const [quizStarted, setQuizStarted] = useState(false)

  const topics = [
    {
      title: "What is Neutral Point of View?",
      description: "Understanding the core principle of neutrality in Wikipedia.",
      content:
        "Neutral point of view (NPOV) is a fundamental principle of Wikipedia. It means representing fairly, proportionately, and, as far as possible, without editorial bias, all the significant views that have been published by reliable sources on a topic. All Wikipedia articles must be written from a neutral point of view. This means they must represent views fairly and without bias, presenting competing viewpoints in proportion to their prominence. Articles should not take a stand on controversial issues or promote any particular point of view.",
      key_points: [
        "Represent all significant viewpoints fairly and without bias",
        "Present competing views in proportion to their prominence in reliable sources",
        "Do not take sides on controversial issues",
      ],
    },
    {
      title: "Achieving Balance",
      description: "How to present multiple viewpoints in a balanced way.",
      content:
        "Achieving balance in Wikipedia articles means representing all significant viewpoints in proportion to their prominence. However, this doesn't mean giving equal space to every opinion. Views that are held by a tiny minority should not be given the same weight as mainstream views. The balance should reflect what reliable sources say about the topic. For example, on scientific topics, views that are widely supported by the scientific community should receive more coverage than fringe theories, though the existence of those theories can still be noted when they are covered by reliable sources.",
      key_points: [
        "Present viewpoints in proportion to their prominence in reliable sources",
        "Don't give undue weight to minority views",
        "Balance doesn't mean equal coverage for all viewpoints",
      ],
    },
    {
      title: "Words to Watch",
      description: "How language choices can affect neutrality.",
      content:
        "The language used in Wikipedia articles can subtly introduce bias, so editors should watch for certain types of words and phrases. Avoid peacock terms (like 'excellent' or 'best'), weasel words (like 'some people say' or 'it is believed'), and editorializing language that implies a judgment. Use straightforward, neutral language. For example, instead of saying 'an amazing breakthrough that revolutionized the field,' say 'a development that significantly changed the field, according to [source].' By avoiding loaded terms and sticking to factual language, you help maintain the neutrality of the article.",
      key_points: [
        "Avoid peacock terms (words of praise) like 'excellent' or 'extraordinary'",
        "Avoid weasel words that make vague attributions like 'some people say'",
        "Use straightforward, factual language instead of editorializing",
      ],
    },
    {
      title: "Contentious Topics",
      description: "Handling controversial or divisive subjects.",
      content:
        "Topics that are controversial or divisive require special care to maintain neutrality. When writing about contentious topics, it's important to represent all significant viewpoints fairly, attribute opinions and disputed claims to their sources, and avoid giving undue weight to any particular perspective. Don't use phrases like 'opponents claim' or 'supporters believe' without attributing these views to specific reliable sources. Be especially careful with topics related to politics, religion, nationalism, and recent conflicts, as these often have strongly opposing viewpoints that need to be presented fairly.",
      key_points: [
        "Attribute opinions and disputed claims to their sources",
        "Avoid framing one view as 'the truth' and others as merely 'claims'",
        "Be particularly careful with politically, religiously, or culturally sensitive topics",
      ],
    },
    {
      title: "NPOV Disputes",
      description: "How to handle disagreements about neutrality.",
      content:
        "Sometimes editors disagree about whether an article maintains a neutral point of view. When this happens, it's important to discuss the specific concerns on the article's talk page rather than engaging in edit wars. Try to understand the other editor's perspective and find common ground. Be specific about which parts of the article you believe violate NPOV and why. Support your position with policy and reliable sources. Remember that the goal is to improve the article, not to 'win' an argument. If discussion doesn't resolve the issue, Wikipedia has dispute resolution processes to help reach consensus.",
      key_points: [
        "Discuss NPOV concerns on the article's talk page",
        "Be specific about which content you believe violates neutrality",
        "Focus on improving the article rather than winning arguments",
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
      title="Neutral Point of View"
      description="Learn how to write Wikipedia articles from a neutral perspective."
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
                <div className="rounded-full bg-indigo-100 p-2 mr-3">
                  <Scale className="h-5 w-5 text-indigo-600" />
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
                  Now that you've learned about Wikipedia's Neutral Point of View policy, let's test your understanding
                  with a short quiz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-6">
                  <Award className="h-16 w-16 text-indigo-600" />
                </div>
                <p className="text-center">
                  The quiz consists of 5 questions about maintaining a neutral point of view. You need to score at least
                  80% to earn the Neutrality Guardian badge.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={handleStartQuiz}>Start Quiz</Button>
              </CardFooter>
            </Card>
          ) : (
            <NeutralPointQuiz />
          )}
        </TabsContent>
      </Tabs>
    </QuestLayout>
  )
}

