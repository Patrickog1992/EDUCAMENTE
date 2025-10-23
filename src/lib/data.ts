import { Smile, Frown, Angry, Bot, BrainCircuit, ToyBrick, PartyPopper, Meh } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export type Emotion = {
  name: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  description: string;
};

export const emotions: Emotion[] = [
  { name: 'Joy', icon: Smile, description: 'Feeling really happy and cheerful!' },
  { name: 'Sadness', icon: Frown, description: 'Feeling down or unhappy.' },
  { name: 'Anger', icon: Angry, description: 'Feeling mad or very annoyed.' },
  { name: 'Surprise', icon: PartyPopper, description: 'Feeling amazed by something unexpected.' },
  { name: 'Calm', icon: Meh, description: 'Feeling peaceful and relaxed.' },
];


export const features = [
    {
        title: "Emotion Wheel",
        description: "Spin the wheel to learn about different feelings.",
        href: "/emotion-wheel",
        icon: BrainCircuit
    },
    {
        title: "Facial Expressions",
        description: "Make faces and see if you can match the emotion!",
        href: "/facial-expressions",
        icon: Smile
    },
    {
        title: "Emotion Scenarios",
        description: "What would you do? Explore feelings in different situations.",
        href: "/scenarios",
        icon: ToyBrick
    },
    {
        title: "AI Story Time",
        description: "Pick an emotion and our AI will write a special story for you.",
        href: "/story-generator",
        icon: Bot
    }
];
