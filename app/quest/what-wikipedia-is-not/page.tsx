"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ChevronRight, Award, X } from "lucide-react"
import { QuestLayout } from "@/components/quest-layout"
import { WikipediaIsNotQuiz } from "@/components/wikipedia-is-not-quiz"

export default function WhatWikipediaIsNotQuest() {
  const [activeTab, setActiveTab] = useState("learn")
  const [progress, setProgress] = useState(0)
  const [currentTopic, setCurrentTopic] = useState(0)
  const [completedTopics, setCompletedTopics] = useState<number[]>([])
  const [quizStarted, setQuizStarted] = useState(false)

  const topics = [
    {
      title: "Wikipedia is not a dictionary",
      description: "Wikipedia is not a dictionary, phrasebook, or a slang guide.",
      content:
        "Wikipedia is not a dictionary, phrasebook, or a slang guide. Articles should begin with a good definition or description, but articles that contain nothing more than a definition should be expanded with additional encyclopedic content. If they cannot be expanded beyond a definition, Wikipedia is not the right place for them. In some cases, the definition of a term may be covered in a related article. If so, redirect the title to the related article. If not, consider moving the article to Wiktionary, adding to the corresponding Wiktionary entry, or redirecting to the entry in Wiktionary instead.",
      examples: [
        {
          wrong: "Creating an article that only defines a term without providing encyclopedic context",
          right:
            "Creating an article that defines a term and provides comprehensive information about its history, usage, and significance",
        },
        {
          wrong: "Adding multiple dictionary definitions to an article",
          right: "Focusing on encyclopedic content while beginning with a clear definition",
        },
      ],
    },
    {
      title: "Wikipedia is not a publisher of original thought",
      description: "Wikipedia is not a place to publish your own thoughts, experiences, or arguments.",
      content:
        "Wikipedia is not a publisher of original thought: it is not a forum for publishing your own opinions, experiences, arguments, or conclusions. Wikipedia is not a soapbox, a battleground, or a vehicle for propaganda, advertising and showcasing. This applies to articles, categories, templates, talk page discussions, and user pages. Wikipedia is not a place to publish original research. Articles may not contain any new analysis or synthesis of published material that serves to reach or imply a conclusion not clearly stated by the sources themselves.",
      examples: [
        {
          wrong: "Adding your personal theory about a historical event",
          right: "Citing reliable sources that present established theories about the event",
        },
        {
          wrong: "Writing an article based on your own research findings",
          right: "Writing an article based on information published in reliable sources",
        },
      ],
    },
    {
      title: "Wikipedia is not a soapbox",
      description: "Wikipedia is not a platform for propaganda, advocacy, or recruitment.",
      content:
        "Wikipedia is not a soapbox, a battleground, or a vehicle for propaganda, advertising and showcasing. This applies to articles, categories, templates, talk page discussions, and user pages. Wikipedia articles are not a platform for advocacy, propaganda, or recruitment of any kind. Articles must not be written to advocate a position, but should explain the positions taken by reliable sources. Wikipedia is not a venue for raising the visibility of an issue or agenda. Articles about issues such as politics or religion should present competing views in a fair and impartial manner.",
      examples: [
        {
          wrong: "Writing an article that promotes a particular political viewpoint",
          right: "Writing an article that presents multiple political viewpoints in a neutral manner",
        },
        {
          wrong: "Using Wikipedia to campaign for a cause",
          right: "Creating an article that objectively describes a cause and its significance",
        },
      ],
    },
    {
      title: "Wikipedia is not a mirror or a repository of links, images, or media files",
      description: "Wikipedia articles are not mere collections of external links or media files.",
      content:
        "Wikipedia is not a mirror or a repository of links, images, or media files. Wikipedia articles are not merely collections of external links or images. Articles should not exist only to direct the reader to other websites; Wikipedia is not a directory, catalogue, or web guide, and articles should not consist only of external links. Articles should not exist mainly to display media files. Wikipedia is not a file repository either. Files should be uploaded to Wikipedia only if they are used (or will be used) in encyclopedia articles or other Wikipedia pages; otherwise, they may be deleted.",
      examples: [
        {
          wrong: "Creating an article that is primarily a list of external links",
          right:
            "Creating an article with comprehensive content that includes relevant external links in a 'Further reading' or 'External links' section",
        },
        {
          wrong: "Uploading images that aren't used in any articles",
          right: "Only uploading images that enhance the encyclopedic content of articles",
        },
      ],
    },
    {
      title: "Wikipedia is not a blog, social networking site, or memorial site",
      description: "Wikipedia is not a place for self-promotion, autobiography, or memorials.",
      content:
        "Wikipedia is not a blog, webspace provider, social networking site, or memorial site. Wikipedia is not a place to promote yourself, your group, your company, or your views, for reasons unrelated to the goals of creating an encyclopedia. Your user page is not a personal homepage, and Wikipedia is not a blog, webspace provider, or social networking site. Wikipedia pages are not a place to memorialize deceased friends, relatives, or pets, or to promote your views on a particular person. Articles about recently deceased people who have received no significant coverage in reliable sources should not be created.",
      examples: [
        {
          wrong: "Creating a personal profile page about yourself",
          right: "Creating an article about a notable person with reliable sources",
        },
        {
          wrong: "Using Wikipedia to memorialize a deceased loved one",
          right: "Creating an article about a deceased person who meets Wikipedia's notability guidelines",
        },
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
      title="What Wikipedia Is Not"
      description="Understand common misconceptions about Wikipedia's purpose and content."
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
                <div className="rounded-full bg-green-100 p-2 mr-3">
                  <X className="h-5 w-5 text-green-600" />
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
                  <h4 className="font-semibold mb-4">Examples:</h4>
                  <div className="space-y-4">
                    {topics[currentTopic].examples.map((example, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                          <div className="flex items-start">
                            <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-medium text-red-700 mb-1">Incorrect</h5>
                              <p className="text-sm">{example.wrong}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-medium text-green-700 mb-1">Correct</h5>
                              <p className="text-sm">{example.right}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
                  Now that you've learned about what Wikipedia is not, let's test your understanding with a short quiz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-6">
                  <Award className="h-16 w-16 text-green-600" />
                </div>
                <p className="text-center">
                  The quiz consists of 5 questions about what Wikipedia is not. You need to score at least 80% to earn
                  the "Wikipedia Boundaries" badge.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={handleStartQuiz}>Start Quiz</Button>
              </CardFooter>
            </Card>
          ) : (
            <WikipediaIsNotQuiz />
          )}
        </TabsContent>
      </Tabs>
    </QuestLayout>
  )
}

