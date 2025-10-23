import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-card shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary">
          <BrainCircuit className="h-8 w-8" />
          <span>EducaMente</span>
        </Link>
      </div>
    </header>
  );
}
