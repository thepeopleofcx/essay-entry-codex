import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'What If It All Goes Right? - William & Mary',
  description: 'A Front-Line Dispatch from deep within the AI Transition',
  openGraph: {
    title: 'What If It All Goes Right?',
    description: 'A Front-Line Dispatch from deep within the AI Transition by William & Mary',
    type: 'article',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-ink">
      <body className="bg-grain font-sans text-cream antialiased">{children}</body>
    </html>
  );
}
