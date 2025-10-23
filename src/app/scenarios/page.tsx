'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { emotions } from '@/lib/data';
import { Lightbulb, RotateCcw } from 'lucide-react';

const scenarios = [
  {
    text: "Your friend accidentally broke your favorite toy. How do you feel?",
    options: ["Anger", "Sadness", "Calm"],
    feedback: "It's okay to feel sad or even a little angry. It's important to talk about it with your friend."
  },
  {
    text: "You received a surprise gift for your birthday! How do you feel?",
    options: ["Joy", "Surprise", "Calm"],
    feedback: "Wow! Feeling joyful and surprised is a wonderful way to feel on your birthday!"
  },
  {
    text: "You tried to build a tall tower, but it keeps falling down. How do you feel?",
    options: ["Anger", "Sadness", "Calm"],
    feedback: "It can be frustrating when things don't go as planned. It's okay to feel upset. Maybe take a small break and try again."
  }
];

export default function ScenariosPage() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const scenario = scenarios[currentScenarioIndex];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCurrentScenarioIndex((prev) => (prev + 1) % scenarios.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Emotion Scenarios</h1>
          <p className="text-lg md:text-xl text-muted-foreground">What would you do in this situation?</p>
        </div>

        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">The Situation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-center min-h-[6rem]">{scenario.text}</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            {showFeedback ? (
              <div className="text-center p-4 bg-secondary rounded-lg w-full">
                 <Lightbulb className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">{scenario.feedback}</p>
                <Button onClick={handleNext} className="mt-4">
                    <RotateCcw className="mr-2 h-4 w-4" /> Next Scenario
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {scenario.options.map((option) => {
                  const emotion = emotions.find(e => e.name === option);
                  if (!emotion) return null;
                  return (
                    <Button key={option} variant="outline" className="h-24 flex-col gap-2 bg-card hover:bg-accent" onClick={() => handleAnswer(option)}>
                      <emotion.icon className="h-8 w-8 text-primary" />
                      <span className="font-semibold">{option}</span>
                    </Button>
                  );
                })}
              </div>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
