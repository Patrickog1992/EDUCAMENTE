import Link from "next/link";
import { Header } from "@/components/header";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { features } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-foreground">Welcome to EducaMente!</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A fun place to learn about your feelings and emotions. Let's start an adventure!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title} className="group">
              <Card className="h-full transform transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl">
                <CardHeader className="flex flex-col items-center text-center p-6">
                  <div className="p-4 bg-secondary rounded-full mb-4">
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl mb-2">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <footer className="py-6 text-center text-muted-foreground">
        <p>Made with ❤️ for little learners.</p>
      </footer>
    </div>
  );
}
