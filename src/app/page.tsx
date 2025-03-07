import StaggerReelText from '@/components/StaggerReelText';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <Link href="/">
        <StaggerReelText
          text="keanu"
          className="text-9xl uppercase font-bold"
        />
      </Link>
    </div>
  );
}
