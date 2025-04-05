import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Coins, Award } from "lucide-react";

interface QuizFeedbackProps {
  isCorrect: boolean;
  correctAnswer?: string;
  explanation?: string;
  policyCode?: string;
  policyLink?: string;
  topic: string;
}

export function QuizFeedback({
  isCorrect,
  correctAnswer,
  explanation,
  policyCode,
  policyLink,
  topic,
}: QuizFeedbackProps) {
  // Generate topic-specific badges
  const getBadgeName = () => {
    const topicBadges: Record<string, string[]> = {
      "five-pillars": ["Pillar Pro", "Foundation Master", "Wiki Architect"],
      "not-wikipedia": [
        "Boundary Guardian",
        "Scope Sentinel",
        "Purpose Protector",
      ],
      verifiability: [
        "Source Sleuth",
        "Citation Champion",
        "Verification Virtuoso",
      ],
      "no-original-research": [
        "Research Ranger",
        "Source Scholar",
        "Fact Finder",
      ],
      "neutral-point": [
        "Neutrality Ninja",
        "Balance Keeper",
        "Fairness Facilitator",
      ],
      copyrights: ["Copyright Captain", "License Luminary", "Attribution Ace"],
    };

    const defaultBadges = [
      "Wiki Wizard",
      "Knowledge Knight",
      "Editor Extraordinaire",
    ];
    const badges = topicBadges[topic] || defaultBadges;
    return badges[Math.floor(Math.random() * badges.length)];
  };

  // Generate celebratory GIFs descriptions
  const getCelebratoryGif = () => {
    const gifs = [
      "🎉 A dancing cat in a graduation cap!",
      "🎊 Confetti raining down on a smiling Wikipedia logo!",
      "🏆 A cartoon editor doing a victory dance!",
      "⭐ Sparkling stars around an encyclopedia!",
      "🚀 A rocket soaring upward with 'Knowledge' written on it!",
    ];
    return gifs[Math.floor(Math.random() * gifs.length)];
  };

  // Generate motivational GIFs descriptions
  const getMotivationalGif = () => {
    const gifs = [
      "💪 A penguin trying again and succeeding!",
      "🌱 A small plant growing into a tree of knowledge!",
      "🧠 A brain lighting up with a new idea!",
      "🔍 A detective finding an important clue!",
      "🧩 A puzzle piece fitting perfectly into place!",
    ];
    return gifs[Math.floor(Math.random() * gifs.length)];
  };

  // Generate coins
  const getCoins = () => {
    return isCorrect ? Math.floor(Math.random() * 11) + 10 : 2; // 10-20 for correct, 2 for incorrect
  };

  const coins = getCoins();
  const badgeName = isCorrect ? getBadgeName() : "Curious Explorer";
  const gif = isCorrect ? getCelebratoryGif() : getMotivationalGif();

  return (
    <Alert
      className={
        isCorrect
          ? "bg-green-50 border-green-200"
          : "bg-amber-50 border-amber-200"
      }
    >
      <AlertTitle className="flex items-center text-lg font-bold">
        {isCorrect
          ? "🎯 Correct! Excellent job!"
          : "🤔 Not quite right, but that's okay!"}
      </AlertTitle>
      <AlertDescription className="space-y-3">
        {!isCorrect && (
          <div className="mt-2">
            <p>
              <strong>The correct answer is:</strong> {correctAnswer}
            </p>
            <p>{explanation}</p>
            {policyCode && policyLink && (
              <p className="text-sm mt-1">
                Learn more:{" "}
                <a
                  href={policyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {policyCode}
                </a>
              </p>
            )}
          </div>
        )}

        <div className="flex items-center mt-3 space-x-2">
          <div className="flex items-center text-amber-600">
            <Coins className="h-5 w-5 mr-1" />
            <span className="font-medium">+{coins} coins</span>
          </div>
          <Badge className={isCorrect ? "bg-purple-500" : "bg-blue-500"}>
            <Award className="h-3 w-3 mr-1" />
            {badgeName}
          </Badge>
        </div>

        <div className="mt-2 p-2 bg-white rounded-md border text-center italic">
          {gif}
        </div>
      </AlertDescription>
    </Alert>
  );
}
