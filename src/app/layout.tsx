import type { Metadata } from 'next';
import '../styles/globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Frontend Playground',
  description: "Keanu's playground to test frontend animations and designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Nav />
        <div>
          {children}
        </div>
        </body>
    </html>
  );
}
