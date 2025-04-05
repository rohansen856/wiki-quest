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

export function WikipediaIsNotQuiz() {
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
      question:
        "Which of the following is NOT an appropriate use of Wikipedia?",
      options: [
        "Creating an article about a notable historical event",
        "Creating an article that promotes your business",
        "Expanding an article with information from reliable sources",
        "Adding citations to verify facts in an article",
      ],
      correctAnswer: "Creating an article that promotes your business",
      explanation:
        "Wikipedia is not a platform for promotion or advertising. Articles about businesses must be written from a neutral point of view and meet notability guidelines.",
      policyCode: "WP:NOTPROMOTION",
      policyLink:
        "https://en.wikipedia.org/wiki/Wikipedia:What_Wikipedia_is_not#Wikipedia_is_not_a_soapbox_or_means_of_promotion",
    },
    {
      question: "Why is Wikipedia not a place for original research?",
      options: [
        "Because original research is always inaccurate",
        "Because Wikipedia only accepts information that has been published in reliable sources",
        "Because original research is too advanced for most readers",
        "Because Wikipedia prefers outdated information",
      ],
      correctAnswer:
        "Because Wikipedia only accepts information that has been published in reliable sources",
      explanation:
        "Wikipedia's content is determined by previously published information rather than the beliefs, experiences, or research of its editors.",
      policyCode: "WP:NOR",
      policyLink:
        "https://en.wikipedia.org/wiki/Wikipedia:No_original_research",
    },
    {
      question:
        "What should you do if you want to add information about a new scientific theory you've developed?",
      options: [
        "Add it to Wikipedia immediately to share your discovery",
        "Create a new article dedicated to your theory",
        "Publish your theory in a peer-reviewed journal first, then cite that publication",
        "Add it to your user page on Wikipedia",
      ],
      correctAnswer:
        "Publish your theory in a peer-reviewed journal first, then cite that publication",
      explanation:
        "Wikipedia doesn't publish original research. New theories must first be published in reliable sources before they can be included in Wikipedia articles.",
      policyCode: "WP:OR",
      policyLink: "https://en.wikipedia.org/wiki/Wikipedia:Original_research",
    },
    {
      question: "Why is Wikipedia not a social networking site?",
      options: [
        "Because Wikipedia doesn't have enough server capacity",
        "Because Wikipedia is focused on building an encyclopedia, not personal connections",
        "Because Wikipedia users are not interested in socializing",
        "Because Wikipedia is only for academic use",
      ],
      correctAnswer:
        "Because Wikipedia is focused on building an encyclopedia, not personal connections",
      explanation:
        "Wikipedia's purpose is to build an encyclopedia. User pages, talk pages, and other features exist to support this goal, not for social networking.",
      policyCode: "WP:NOTSOCIAL",
      policyLink:
        "https://en.wikipedia.org/wiki/Wikipedia:What_Wikipedia_is_not#Wikipedia_is_not_a_blog,_webspace_provider,_social_networking,_or_memorial_site",
    },
    {
      question:
        "Which of the following would be inappropriate for a Wikipedia article?",
      options: [
        "A comprehensive biography of a notable politician",
        "A memorial page for your recently deceased pet",
        "An article about a significant historical event",
        "An article about a well-known scientific theory",
      ],
      correctAnswer: "A memorial page for your recently deceased pet",
      explanation:
        "Wikipedia is not a memorial site. Articles should only be created for subjects that meet notability guidelines and have significant coverage in reliable sources.",
      policyCode: "WP:NOTMEMORIAL",
      policyLink:
        "https://en.wikipedia.org/wiki/Wikipedia:What_Wikipedia_is_not#Wikipedia_is_not_a_blog,_webspace_provider,_social_networking,_or_memorial_site",
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
      const badges = [
        "Boundary Guardian",
        "Scope Sentinel",
        "Purpose Protector",
      ];
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
                  You've earned the "Wikipedia Boundaries" badge! You now
                  understand what Wikipedia is not meant to be.
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
              topic="not-wikipedia"
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
