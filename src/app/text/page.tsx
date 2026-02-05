import ColorChangeText from '@/components/ColorChangeText';
import StaggerReelText from '@/components/StaggerReelText';

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen items-center text-center gap-8 bg-white">
      <div>
        <p>Stagger Reel Text</p>
        <StaggerReelText
          text='Keanu'
          className="text-9xl uppercase font-bold"
        />
      </div>

      {/* <div>
        <p>Color Change Text</p>
        <ColorChangeText className="text-9xl uppercase font-bold" />
      </div> */}
    </div>
  );
}
