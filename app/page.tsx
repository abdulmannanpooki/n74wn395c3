'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Check, Code, Cpu, Database, Server, Users } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');

  const features = [
    {
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency to deliver the best user experience.',
      icon: Cpu,
    },
    {
      title: 'Robust Security',
      description: 'Built with security-first principles to protect your data and privacy.',
      icon: Server,
    },
    {
      title: 'Scalable Architecture',
      description: 'Easily scale your application as your user base grows.',
      icon: Database,
    },
    {
      title: 'Developer Friendly',
      description: 'Clean APIs and excellent documentation for rapid development.',
      icon: Code,
    },
    {
      title: 'User Management',
      description: 'Powerful tools to manage users and permissions effortlessly.',
      icon: Users,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="max-w-xl text-center lg:text-left">
          <Badge className="mb-4 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-primary-foreground bg-primary/10 dark:bg-primary/20">
            New
          </Badge>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Build modern web apps with ease
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Next.js + Tailwind CSS + shadcn/ui — a perfect stack for fast, beautiful, and scalable applications.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-lg aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80"
            alt="Modern workspace"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="rounded-md bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* Newsletter Section */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-semibold mb-4">Stay updated</h3>
        <p className="text-muted-foreground mb-8">
          Subscribe to our newsletter to get the latest updates and offers.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Subscribed with ${email}`);
            setEmail('');
          }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0"
            aria-label="Email address"
          />
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Subscribe
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <Check className="h-8 w-8 text-primary" />
            <span className="font-semibold text-lg text-foreground">NextLanding</span>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} NextLanding. All rights reserved.</p>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-primary transition-colors"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.928 2.206-4.928 4.928 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.158-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.808 2.105-6.115 2.105-.397 0-.79-.023-1.175-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.962-.695 1.8-1.562 2.46-2.549z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
