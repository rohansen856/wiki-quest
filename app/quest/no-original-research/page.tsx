"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ChevronRight, Award, BookOpen } from "lucide-react"
import { QuestLayout } from "@/components/quest-layout"
import { NoOriginalResearchQuiz } from "@/components/no-original-research-quiz"

export default function NoOriginalResearchQuest() {
  const [activeTab, setActiveTab] = useState("learn")
  const [progress, setProgress] = useState(0)
  const [currentTopic, setCurrentTopic] = useState(0)
  const [completedTopics, setCompletedTopics] = useState<number[]>([])
  const [quizStarted, setQuizStarted] = useState(false)

  const topics = [
    {
      title: "What Is Original Research?",
      description: "Understanding original research in the context of Wikipedia.",
      content:
        "Wikipedia articles must not contain original research. The term 'original research' refers to material—such as facts, allegations, and ideas—for which no reliable, published source exists. This includes any analysis or synthesis of published material that serves to reach or imply a conclusion not explicitly stated by the sources. To demonstrate that you are not adding original research, you must be able to cite reliable, published sources that are directly related to the topic of the article, and directly support the material being presented.",
      key_points: [
        "Material for which no reliable, published source exists",
        "Analysis or synthesis of published material that reaches conclusions not stated by sources",
        "Personal views, experiences, or interpretations",
      ],
    },
    {
      title: "Primary, Secondary, and Tertiary Sources",
      description: "Understanding different types of sources in Wikipedia.",
      content:
        "In Wikipedia, sources are classified as primary, secondary, or tertiary. Primary sources are original materials that are close to an event, often accounts written by people who are directly involved. Secondary sources provide interpretation, analysis, or synthesis of primary sources. Tertiary sources are publications such as encyclopedias that summarize primary and secondary sources. Wikipedia articles should be based mainly on reliable secondary sources, as primary sources may be too close to the subject to provide a balanced view, and tertiary sources often lack the depth needed for Wikipedia articles.",
      key_points: [
        "Primary sources: Original materials close to an event, like interviews or autobiographies",
        "Secondary sources: Interpretations of primary sources, like scholarly analysis",
        "Tertiary sources: Publications that summarize primary and secondary sources",
      ],
    },
    {
      title: "Synthesis of Published Material",
      description: "How combining sources can create original research.",
      content:
        "Even if each individual piece of information you add to an article comes from a reliable source, combining these pieces to advance a novel position constitutes original research. This type of synthesis occurs when you combine information from multiple sources to reach or imply a conclusion not explicitly stated by any of the sources. For example, using several primary sources to conclude something that none of the sources directly states would be synthesis. Always make sure that reliable sources directly support the conclusions presented in your edits.",
      key_points: [
        "Combining information from multiple sources to reach a novel conclusion",
        "Drawing connections between sources that the sources themselves don't make",
        "Using multiple primary sources to reach a conclusion not stated by any source",
      ],
    },
    {
      title: "Avoiding Original Research",
      description: "Practical tips for avoiding original research in your edits.",
      content:
        "To avoid adding original research to Wikipedia, always base your contributions on information from reliable, published sources. Make sure that your edits represent what the sources actually say, without adding your own interpretations or analyses. Avoid making connections between sources that the sources themselves don't make. When in doubt, include less of your own synthesis and rely more on direct quotations and clear paraphrasing of the source material. Remember that Wikipedia's goal is to summarize existing knowledge, not to create new knowledge.",
      key_points: [
        "Base all contributions on reliable, published sources",
        "Represent what the sources actually say without adding your own interpretation",
        "When in doubt, rely more on direct quotations and clear paraphrasing",
      ],
    },
    {
      title: "Research vs. Original Research",
      description: "Understanding the difference between research and original research.",
      content:
        "In Wikipedia, there's an important distinction between research and original research. Research involves finding and consulting reliable sources to verify information. This is not only permitted but encouraged for Wikipedia editors. Original research, on the other hand, refers to material that cannot be attributed to a reliable, published source. While Wikipedia editors should research to find reliable sources, they should not add their own unpublished ideas, personal experiences, or conclusions drawn from combining sources in new ways. Remember, Wikipedia's aim is to summarize existing knowledge from reliable sources, not to serve as a platform for new ideas.",
      key_points: [
        "Research: Finding and consulting reliable sources (encouraged)",
        "Original research: Adding unpublished ideas or novel conclusions (prohibited)",
        "Wikipedia aims to summarize existing knowledge, not create new knowledge",
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
      title="No Original Research"
      description="Learn why Wikipedia doesn't publish original thought or research."
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
                <div className="rounded-full bg-amber-100 p-2 mr-3">
                  <BookOpen className="h-5 w-5 text-amber-600" />
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
                  Now that you've learned about Wikipedia's "No Original Research" policy, let's test your understanding
                  with a short quiz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-6">
                  <Award className="h-16 w-16 text-amber-600" />
                </div>
                <p className="text-center">
                  The quiz consists of 5 questions about original research in Wikipedia. You need to score at least 80%
                  to earn the Research Guardian badge.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={handleStartQuiz}>Start Quiz</Button>
              </CardFooter>
            </Card>
          ) : (
            <NoOriginalResearchQuiz />
          )}
        </TabsContent>
      </Tabs>
    </QuestLayout>
  )
}

