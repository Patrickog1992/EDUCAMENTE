'use client';
    
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const expressions = [
  { name: 'Joy', image: PlaceHolderImages.find(img => img.id === 'joyful-face')! },
  { name: 'Sadness', image: PlaceHolderImages.find(img => img.id === 'sad-face')! },
  { name: 'Anger', image: PlaceHolderImages.find(img => img.id === 'angry-face')! },
  { name: 'Surprise', image: PlaceHolderImages.find(img => img.id === 'surprised-face')! },
].filter(e => e.image);

export default function FacialExpressionsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || expressions.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center">
          <p>Loading expressions...</p>
        </main>
      </div>
    )
  }

  const currentExpression = expressions[currentIndex];

  const handleNext = () => {
    setShowFeedback(false);
    setCurrentIndex((prev) => (prev + 1) % expressions.length);
  };

  const handlePrev = () => {
    setShowFeedback(false);
    setCurrentIndex((prev) => (prev - 1 + expressions.length) % expressions.length);
  };

  const handleMimic = () => {
    setShowFeedback(true);
    setTimeout(() => {
        handleNext();
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Facial Expressions</h1>
          <p className="text-lg md:text-xl text-muted-foreground">Can you make this face?</p>
        </div>

        <Card className="w-full max-w-sm overflow-hidden">
          <CardContent className="p-0 relative">
            {showFeedback ? (
              <div className="aspect-square w-full flex flex-col items-center justify-center bg-secondary">
                <Check className="h-24 w-24 text-primary" />
                <p className="text-2xl font-semibold mt-4 text-foreground">Great Job!</p>
              </div>
            ) : (
              currentExpression &&
              <Image
                src={currentExpression.image.imageUrl}
                alt={`A child showing ${currentExpression.name}`}
                data-ai-hint={currentExpression.image.imageHint}
                width={400}
                height={400}
                className="aspect-square object-cover w-full"
                priority
              />
            )}
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-2xl font-bold font-headline">{currentExpression?.name}</p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button variant="outline" size="icon" onClick={handlePrev}>
            <ArrowLeft />
          </Button>
          <Button size="lg" onClick={handleMimic}>
            I mimicked it!
          </Button>
          <Button variant="outline" size="icon" onClick={handleNext}>
            <ArrowRight />
          </Button>
        </div>
      </main>
    </div>
  );
}
