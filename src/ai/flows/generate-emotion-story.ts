'use server';

/**
 * @fileOverview An AI agent that generates a short story based on the emotion chosen by the user.
 *
 * - generateEmotionStory - A function that handles the emotion story generation process.
 * - GenerateEmotionStoryInput - The input type for the generateEmotionStory function.
 * - GenerateEmotionStoryOutput - The return type for the generateEmotionStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEmotionStoryInputSchema = z.object({
  emotion: z.string().describe('The emotion for which to generate a story.'),
});
export type GenerateEmotionStoryInput = z.infer<typeof GenerateEmotionStoryInputSchema>;

const GenerateEmotionStoryOutputSchema = z.object({
  story: z.string().describe('A short story based on the selected emotion.'),
});
export type GenerateEmotionStoryOutput = z.infer<typeof GenerateEmotionStoryOutputSchema>;

export async function generateEmotionStory(input: GenerateEmotionStoryInput): Promise<GenerateEmotionStoryOutput> {
  return generateEmotionStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEmotionStoryPrompt',
  input: {schema: GenerateEmotionStoryInputSchema},
  output: {schema: GenerateEmotionStoryOutputSchema},
  prompt: `You are a children's story writer. Generate a short story based on the following emotion: {{{emotion}}}. The story should be relatable to children.`,
});

const generateEmotionStoryFlow = ai.defineFlow(
  {
    name: 'generateEmotionStoryFlow',
    inputSchema: GenerateEmotionStoryInputSchema,
    outputSchema: GenerateEmotionStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
