import StaggerReelText from '@/components/StaggerReelText';

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <StaggerReelText
        text="keanu"
        className="text-9xl uppercase cursor-default font-bold"
      />
    </div>
  );
}
