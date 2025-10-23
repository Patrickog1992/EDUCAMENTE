'use client';
    
import { useState } from 'react';
import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { emotions } from '@/lib/data';
import { Button } from '@/components/ui/button';

type Emotion = typeof emotions[0];

export default function EmotionWheelPage() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Emotion Wheel</h1>
          <p className="text-lg md:text-xl text-muted-foreground">Click on an emotion to learn more about it!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {emotions.map((emotion) => (
            <Button
              key={emotion.name}
              variant="outline"
              className="h-auto p-6 flex flex-col gap-2 items-center bg-card hover:bg-accent shadow-sm"
              onClick={() => setSelectedEmotion(emotion)}
            >
              <emotion.icon className="h-12 w-12 text-primary" />
              <span className="font-semibold text-lg">{emotion.name}</span>
            </Button>
          ))}
        </div>

        {selectedEmotion && (
          <div className="w-full max-w-md animate-in fade-in-0 zoom-in-95">
            <Card>
              <CardHeader className="items-center text-center">
                <selectedEmotion.icon className="h-16 w-16 text-primary mb-2" />
                <CardTitle className="font-headline text-3xl">{selectedEmotion.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground">{selectedEmotion.description}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
