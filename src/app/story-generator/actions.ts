'use server';

import { z } from 'zod';
import { generateEmotionStory } from '@/ai/flows/generate-emotion-story';

const schema = z.object({
  emotion: z.string().min(1, { message: 'Please select an emotion.' }),
});

type StoryResult = {
  story?: string;
  error?: string;
};

export async function generateStoryAction(prevState: any, formData: FormData): Promise<StoryResult> {
  const validatedFields = schema.safeParse({
    emotion: formData.get('emotion'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.emotion?.join(', ') || 'Invalid input.',
    };
  }

  try {
    const result = await generateEmotionStory({ emotion: validatedFields.data.emotion });
    if (result.story) {
      return { story: result.story };
    }
    return { error: 'Could not generate a story from the AI.' };
  } catch (error) {
    console.error('Story generation failed:', error);
    return {
      error: 'Something went wrong while generating the story. Please try again later.',
    };
  }
}
