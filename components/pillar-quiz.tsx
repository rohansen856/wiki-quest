"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Award, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export function PillarQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const questions = [
    {
      question: "What is the first pillar of Wikipedia?",
      options: [
        "Wikipedia is a social networking site",
        "Wikipedia is an encyclopedia",
        "Wikipedia is a dictionary",
        "Wikipedia is a blog",
      ],
      correctAnswer: "Wikipedia is an encyclopedia",
    },
    {
      question: "What does 'neutral point of view' mean in Wikipedia?",
      options: [
        "Articles should only present the most popular viewpoint",
        "Articles should only include facts, not opinions",
        "Articles should represent all significant viewpoints fairly and without bias",
        "Articles should be written from the editor's perspective",
      ],
      correctAnswer: "Articles should represent all significant viewpoints fairly and without bias",
    },
    {
      question: "Under what license is Wikipedia content available?",
      options: [
        "All rights reserved",
        "Public domain",
        "Creative Commons Attribution-ShareAlike License",
        "GNU General Public License",
      ],
      correctAnswer: "Creative Commons Attribution-ShareAlike License",
    },
    {
      question: "How should Wikipedia editors interact with each other?",
      options: [
        "With respect and civility, even during disagreements",
        "By asserting dominance to establish editorial authority",
        "By avoiding all interaction to prevent conflicts",
        "By competing to make the most edits",
      ],
      correctAnswer: "With respect and civility, even during disagreements",
    },
    {
      question: "What does the fifth pillar 'Wikipedia has no firm rules' mean?",
      options: [
        "Editors can ignore all guidelines and policies",
        "The principles and spirit of rules matter more than literal wording",
        "Wikipedia has no rules at all",
        "Rules only apply to new editors",
      ],
      correctAnswer: "The principles and spirit of rules matter more than literal wording",
    },
  ]

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer)
    }
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setIsAnswerSubmitted(true)

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswerSubmitted(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const getScorePercentage = () => {
    return (score / questions.length) * 100
  }

  const isPassing = getScorePercentage() >= 80

  if (quizCompleted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Results</CardTitle>
          <CardDescription>
            You scored {score} out of {questions.length} ({getScorePercentage()}%)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center space-y-4">
            {isPassing ? (
              <>
                <div className="rounded-full bg-green-100 p-6">
                  <Award className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center">Congratulations!</h3>
                <p className="text-center">
                  You've earned the "Five Pillars" badge! You now understand the fundamental principles of Wikipedia.
                </p>
              </>
            ) : (
              <>
                <div className="rounded-full bg-amber-100 p-6">
                  <XCircle className="h-12 w-12 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-center">Almost there!</h3>
                <p className="text-center">
                  You need to score at least 80% to earn the badge. Review the material and try again.
                </p>
              </>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          {!isPassing && (
            <Button
              variant="outline"
              onClick={() => {
                setCurrentQuestion(0)
                setSelectedAnswer(null)
                setIsAnswerSubmitted(false)
                setScore(0)
                setQuizCompleted(false)
              }}
            >
              Try Again
            </Button>
          )}
          <Link href="/">
            <Button>Return to Quests</Button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>
            Question {currentQuestion + 1} of {questions.length}
          </CardTitle>
          <span className="text-sm text-muted-foreground">
            Score: {score}/{currentQuestion}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>
          <RadioGroup value={selectedAnswer || ""} className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => {
              const isCorrect = option === questions[currentQuestion].correctAnswer
              const isSelected = option === selectedAnswer

              let className = "flex items-center space-x-2 rounded-md border p-3 cursor-pointer"

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  className += " bg-green-50 border-green-200"
                } else if (isSelected && !isCorrect) {
                  className += " bg-red-50 border-red-200"
                }
              } else {
                className += " hover:bg-accent"
              }

              return (
                <div key={index} className={className} onClick={() => handleAnswerSelect(option)}>
                  <RadioGroupItem value={option} id={`option-${index}`} disabled={isAnswerSubmitted} />
                  <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                    {option}
                  </Label>
                  {isAnswerSubmitted && isCorrect && <CheckCircle className="h-5 w-5 text-green-500" />}
                  {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
                </div>
              )
            })}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-4">
        {!isAnswerSubmitted ? (
          <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null}>
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion}>
            {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

