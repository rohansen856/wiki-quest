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

export function VerifiabilityQuiz() {
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
      question: "What does verifiability mean in Wikipedia?",
      options: [
        "That all information must be true",
        "That information can be checked against reliable, published sources",
        "That all information must be verified by Wikipedia administrators",
        "That information must be popular or widely known",
      ],
      correctAnswer:
        "That information can be checked against reliable, published sources",
      explanation:
        "Verifiability means readers can check that information comes from reliable, published sources. It's not about absolute truth, but about whether claims can be verified.",
      policyCode: "WP:V",
      policyLink: "https://en.wikipedia.org/wiki/Wikipedia:Verifiability",
    },
    {
      question:
        "Which of the following is generally considered a reliable source?",
      options: [
        "A personal blog",
        "A social media post",
        "A peer-reviewed academic journal",
        "A self-published book",
      ],
      correctAnswer: "A peer-reviewed academic journal",
      explanation:
        "Peer-reviewed academic journals are generally considered reliable sources because they undergo rigorous review by experts before publication.",
      policyCode: "WP:RS",
      policyLink: "https://en.wikipedia.org/wiki/Wikipedia:Reliable_sources",
    },
    {
      question: "When should you add a citation to Wikipedia?",
      options: [
        "Only when adding controversial information",
        "Only when specifically asked by another editor",
        "For any material challenged or likely to be challenged",
        "Only for direct quotes",
      ],
      correctAnswer: "For any material challenged or likely to be challenged",
      explanation:
        "Citations should be provided for any material that is challenged or likely to be challenged, as well as for quotations and contentious material about living persons.",
      policyCode: "WP:CITE",
      policyLink: "https://en.wikipedia.org/wiki/Wikipedia:Citing_sources",
    },
    {
      question: "Who has the burden of providing citations?",
      options: [
        "Wikipedia administrators",
        "The editor who adds or restores material",
        "The editor who challenges the material",
        "The subject of the article",
      ],
      correctAnswer: "The editor who adds or restores material",
      explanation:
        "The burden of evidence lies with the editor who adds or restores material. If you add content, you should be prepared to provide a citation if asked.",
      policyCode: "WP:BURDEN",
      policyLink:
        "https://en.wikipedia.org/wiki/Wikipedia:Verifiability#Burden_of_evidence",
    },
    {
      question:
        "What should you do if you can't find a reliable source for information?",
      options: [
        "Add the information anyway, and note that it needs a citation",
        "Create your own source by publishing the information on a blog",
        "Rewrite the statement in a way that is easier to verify, or remove it",
        "Ask an administrator to verify it for you",
      ],
      correctAnswer:
        "Rewrite the statement in a way that is easier to verify, or remove it",
      explanation:
        "If you can't find reliable sources for a statement, you should either rewrite it in a way that can be verified or remove it entirely. Wikipedia only includes verifiable information.",
      policyCode: "WP:UNSOURCED",
      policyLink:
        "https://en.wikipedia.org/wiki/Wikipedia:Verifiability#Burden_of_evidence",
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
        "Source Sleuth",
        "Citation Champion",
        "Verification Virtuoso",
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
                  You've earned the "Verifiability Expert" badge! You now
                  understand the importance of citing reliable sources in
                  Wikipedia.
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
              topic="verifiability"
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
