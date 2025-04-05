"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ChevronRight, Award, FileText } from "lucide-react"
import { QuestLayout } from "@/components/quest-layout"
import { VerifiabilityQuiz } from "@/components/verifiability-quiz"

export default function VerifiabilityQuest() {
  const [activeTab, setActiveTab] = useState("learn")
  const [progress, setProgress] = useState(0)
  const [currentTopic, setCurrentTopic] = useState(0)
  const [completedTopics, setCompletedTopics] = useState<number[]>([])
  const [quizStarted, setQuizStarted] = useState(false)

  const topics = [
    {
      title: "Verifiability Basics",
      description: "The core principle of verifiability in Wikipedia.",
      content:
        "Verifiability on Wikipedia means that other people using the encyclopedia can check that the information comes from a reliable source. Wikipedia does not publish original research. Its content is determined by previously published information rather than the beliefs or experiences of its editors. Even if you're sure something is true, it must be verifiable before you can add it. All material in Wikipedia articles must be attributable to a reliable, published source.",
      key_points: [
        "Information must be attributable to reliable, published sources",
        "Articles should contain only material that has been published by reliable sources",
        "Readers must be able to check that Wikipedia content has already been published by a reliable source",
      ],
    },
    {
      title: "Reliable Sources",
      description: "What makes a source reliable for Wikipedia.",
      content:
        "In Wikipedia, verifiability means that people reading and editing the encyclopedia can check that information comes from a reliable source. Reliable sources are necessary both to substantiate material within articles and to give credit to others for their work. The word 'source' in Wikipedia has several related meanings: the piece of work itself, the creator of the work, the publisher of the work, or the repository where the work is made available. Academic and peer-reviewed publications are usually the most reliable sources, as are books published by university presses, university-level textbooks, magazines, journals, and mainstream newspapers.",
      key_points: [
        "Academic and peer-reviewed publications are generally considered reliable",
        "Books published by university presses and mainstream newspapers are often reliable",
        "Self-published sources like personal blogs, social media posts, or self-published books are generally not reliable",
      ],
    },
    {
      title: "Citations and References",
      description: "How to properly cite sources in Wikipedia.",
      content:
        "Wikipedia articles require citations to ensure the information comes from reliable sources. When adding content to an article, you should include a citation that directs readers to a reliable source for that information. Citations allow readers to verify that the material has a reliable source and to locate that source. Wikipedia uses a variety of citation formats, but the most common is the citation template that includes the author, title, publication, date, and location of the source. Citations serve several important purposes: they uphold intellectual property rights, verify content, and help readers find more information.",
      key_points: [
        "All material challenged or likely to be challenged must be attributed to a reliable source",
        "Citations help readers verify information and find more details",
        "Proper citation formats help maintain consistency across Wikipedia",
      ],
    },
    {
      title: "Burden of Evidence",
      description: "Who is responsible for providing sources.",
      content:
        "The burden of evidence lies with the editor who adds or restores material to an article. All quotations, any material challenged or likely to be challenged, and contentious material about living persons must be attributed to a reliable, published source immediately in the form of an inline citation, even if already cited in a general reference or elsewhere in the article. For all other material, the general rule is to cite it if it is challenged, or likely to be challenged. If you are unable to find reliable sources for a statement, consider rewriting it in a way that is easier to verify, or removing it.",
      key_points: [
        "Editors who add content must provide citations to reliable sources",
        "Unsourced material may be removed by any editor",
        "When adding controversial content, add the citation at the same time",
      ],
    },
    {
      title: "Verifiability in Practice",
      description: "Real-world application of verifiability.",
      content:
        "In practice, verifiability means that Wikipedia editors should be able to check that the content of an article comes from a reliable source. When editing an article, it's important to provide citations for any information that might be challenged, especially if it's controversial. If you're not sure whether a source is reliable, consider its reputation, whether it's peer-reviewed, who the publisher is, and whether it has an editorial process. Remember that just because information is online doesn't mean it's reliable. Wikipedia prefers secondary sources (those that summarize primary sources) over primary sources, as they often provide more context and analysis.",
      key_points: [
        "Always provide citations for contentious or challenged material",
        "Evaluate sources based on reputation, publisher, and editorial process",
        "Secondary sources are often preferred over primary sources",
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
      title="Verifiability"
      description="Learn why verifiability is a cornerstone of Wikipedia's content policies."
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
                <div className="rounded-full bg-blue-100 p-2 mr-3">
                  <FileText className="h-5 w-5 text-blue-600" />
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
                  Now that you've learned about verifiability in Wikipedia, let's test your understanding with a short
                  quiz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-6">
                  <Award className="h-16 w-16 text-blue-600" />
                </div>
                <p className="text-center">
                  The quiz consists of 5 questions about verifiability. You need to score at least 80% to earn the
                  Verifiability Expert badge.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={handleStartQuiz}>Start Quiz</Button>
              </CardFooter>
            </Card>
          ) : (
            <VerifiabilityQuiz />
          )}
        </TabsContent>
      </Tabs>
    </QuestLayout>
  )
}

