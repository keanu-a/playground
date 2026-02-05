import HoverUnderline from '@/components/HoverUnderline';
import StaggerReelText from '@/components/StaggerReelText';

export default function Home() {
  return (
    <div className="text-center">
      <div className='flex flex-col h-screen flex justify-center items-center'>
        <p>Stagger Reel Text</p>
        <StaggerReelText
          text='Keanu'
          className="text-9xl uppercase font-bold"
        />
      </div>

      <div className='flex flex-col h-screen flex justify-center items-center'>
        <p>Hover underline</p>
        <HoverUnderline text='Keanu' className='text-3xl' />
      </div>
    </div>
  );
}
