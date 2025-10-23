'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { generateStoryAction } from './actions';
import { emotions } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Bot, Loader2, Sparkles } from 'lucide-react';

const initialState = {
  story: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Writing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Story
        </>
      )}
    </Button>
  );
}

export function StoryGeneratorClient() {
  const [state, formAction] = useFormState(generateStoryAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Oh no!',
        description: state.error,
      });
    }
  }, [state.error, toast]);

  useEffect(() => {
    if (state.story) {
      storyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [state.story]);


  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <form ref={formRef} action={formAction} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">How are you feeling today?</h3>
              <RadioGroup name="emotion" className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {emotions.map((emotion) => (
                  <div key={emotion.name}>
                    <RadioGroupItem value={emotion.name} id={emotion.name} className="sr-only" />
                    <Label
                      htmlFor={emotion.name}
                      className="flex flex-col items-center justify-center p-4 border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground rounded-lg cursor-pointer [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-secondary"
                    >
                      <emotion.icon className="w-12 h-12 mb-2 text-primary" />
                      <span className="font-semibold">{emotion.name}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-center">
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>

      {state.story && (
         <div ref={storyRef} className="mt-8">
          <Card className="bg-accent">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-headline mb-4 flex items-center gap-2">
                <Bot className="h-6 w-6 text-primary" />
                Your Story!
              </h3>
              <div className="space-y-4 text-lg text-foreground/90">
                {state.story.split('\n').filter(p => p.trim() !== "").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
         </div>
      )}
    </div>
  );
}
