"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Award, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { QuizFeedback } from "@/components/quiz-feedback";

export function PillarQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [totalCoins, setTotalCoins] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);

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
      explanation:
        "Wikipedia is an encyclopedia that contains information on all branches of knowledge. It is not a platform for other purposes like social networking, blogging, or dictionary definitions.",
      policyCode: "WP:ENCYCLOPEDIA",
      policyLink:
        "https://en.wikipedia.org/wiki/Wikipedia:What_Wikipedia_is_not#Wikipedia_is_an_encyclopedia",
    },
    {
      question: "What does 'neutral point of view' mean in Wikipedia?",
      options: [
        "Articles should only present the most popular viewpoint",
        "Articles should only include facts, not opinions",
        "Articles should be written from the editor's perspective",
      ],
      correctAnswer:
        "Articles should represent all significant viewpoints fairly and without bias",
      explanation:
        "Neutral point of view means representing all significant viewpoints fairly, proportionately, and without bias. This is fundamental to Wikipedia's approach to content.",
      policyCode: "WP:NPOV",
      policyLink:
        "https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view",
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
      explanation:
        "Wikipedia content is available under the Creative Commons Attribution-ShareAlike License, which allows anyone to use, modify, and share the content as long as they attribute the source and share under the same license.",
      policyCode: "WP:CCBYSA",
      policyLink: "https://en.wikipedia.org/wiki/Wikipedia:Copyrights",
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
      explanation:
        "Wikipedia editors should interact with respect and civility, even when they disagree. This fosters a collaborative environment where constructive editing can take place.",
      policyCode: "WP:CIVIL",
      policyLink: "https://en.wikipedia.org/wiki/Wikipedia:Civility",
    },
    {
      question:
        "What does the fifth pillar 'Wikipedia has no firm rules' mean?",
      options: [
        "Editors can ignore all guidelines and policies",
        "The principles and spirit of rules matter more than literal wording",
        "Wikipedia has no rules at all",
        "Rules only apply to new editors",
      ],
      correctAnswer:
        "The principles and spirit of rules matter more than literal wording",
      explanation:
        "This pillar means that while Wikipedia has policies and guidelines, they can evolve over time and sometimes exceptions are necessary. The spirit of the rules matters more than their literal interpretation.",
      policyCode: "WP:IAR",
      policyLink: "https://en.wikipedia.org/wiki/Wikipedia:Ignore_all_rules",
    },
  ];

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setIsAnswerSubmitted(true);
    const isCorrect =
      selectedAnswer === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
      // Add 10-20 coins for correct answer
      const coinsEarned = Math.floor(Math.random() * 11) + 10;
      setTotalCoins(totalCoins + coinsEarned);

      // Add a badge for correct answer
      const badges = ["Pillar Pro", "Foundation Master", "Wiki Architect"];
      const newBadge = badges[Math.floor(Math.random() * badges.length)];
      if (!earnedBadges.includes(newBadge)) {
        setEarnedBadges([...earnedBadges, newBadge]);
      }
    } else {
      // Add 2 coins for trying
      setTotalCoins(totalCoins + 2);

      // Add a "Learner" badge if they don't have it
      if (!earnedBadges.includes("Curious Explorer")) {
        setEarnedBadges([...earnedBadges, "Curious Explorer"]);
      }
    }

    setFeedback(isCorrect);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setFeedback(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const getScorePercentage = () => {
    return (score / questions.length) * 100;
  };

  const isPassing = getScorePercentage() >= 80;

  if (quizCompleted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Results</CardTitle>
          <CardDescription>
            You scored {score} out of {questions.length} ({getScorePercentage()}
            %)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center space-y-4">
            {isPassing ? (
              <>
                <div className="rounded-full bg-green-100 p-6">
                  <Award className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center">
                  Congratulations!
                </h3>
                <p className="text-center">
                  You've earned the "Five Pillars" badge! You now understand the
                  fundamental principles of Wikipedia.
                </p>
                <div className="mt-4 text-center">
                  <p className="font-medium">🎉 Total rewards earned:</p>
                  <p>💰 {totalCoins} coins</p>
                  <p>🏆 Badges: {earnedBadges.join(", ")}</p>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-full bg-amber-100 p-6">
                  <XCircle className="h-12 w-12 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-center">Almost there!</h3>
                <p className="text-center">
                  You need to score at least 80% to earn the badge. Review the
                  material and try again.
                </p>
                <div className="mt-4 text-center">
                  <p className="font-medium">🎉 Rewards earned so far:</p>
                  <p>💰 {totalCoins} coins</p>
                  <p>🏆 Badges: {earnedBadges.join(", ")}</p>
                </div>
              </>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          {!isPassing && (
            <Button
              variant="outline"
              onClick={() => {
                setCurrentQuestion(0);
                setSelectedAnswer(null);
                setIsAnswerSubmitted(false);
                setScore(0);
                setQuizCompleted(false);
                setFeedback(null);
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
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>
            Question {currentQuestion + 1} of {questions.length}
          </CardTitle>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Score: {score}/{currentQuestion}
            </span>
            <span className="text-sm font-medium text-amber-600">
              💰 {totalCoins} coins
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            {questions[currentQuestion].question}
          </h3>
          <RadioGroup value={selectedAnswer || ""} className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => {
              const isCorrect =
                option === questions[currentQuestion].correctAnswer;
              const isSelected = option === selectedAnswer;

              let className =
                "flex items-center space-x-2 rounded-md border p-3 cursor-pointer";

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  className += " bg-green-50 border-green-200";
                } else if (isSelected && !isCorrect) {
                  className += " bg-red-50 border-red-200";
                }
              } else {
                className += " hover:bg-accent";
              }

              return (
                <div
                  key={index}
                  className={className}
                  onClick={() => handleAnswerSelect(option)}
                >
                  <RadioGroupItem
                    value={option}
                    id={`option-${index}`}
                    disabled={isAnswerSubmitted}
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-grow cursor-pointer"
                  >
                    {option}
                  </Label>
                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              );
            })}
          </RadioGroup>

          {feedback !== null && (
            <QuizFeedback
              isCorrect={feedback}
              correctAnswer={
                !feedback ? questions[currentQuestion].correctAnswer : undefined
              }
              explanation={
                !feedback ? questions[currentQuestion].explanation : undefined
              }
              policyCode={
                !feedback ? questions[currentQuestion].policyCode : undefined
              }
              policyLink={
                !feedback ? questions[currentQuestion].policyLink : undefined
              }
              topic="five-pillars"
            />
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-4">
        {!isAnswerSubmitted ? (
          <Button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
          >
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion}>
            {currentQuestion < questions.length - 1
              ? "Next Question"
              : "See Results"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
