import { Header } from '@/components/header';
import { StoryGeneratorClient } from './story-generator-client';

export default function StoryGeneratorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-foreground">AI Story Time</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose a feeling, and we'll create a magical story just for you!
          </p>
        </div>
        <StoryGeneratorClient />
      </main>
    </div>
  );
}
