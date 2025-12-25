import { useState } from 'react';
import Snowfall from '@/components/Snowfall';
import MusicPlayer from '@/components/MusicPlayer';
import WelcomeSlide from '@/components/slides/WelcomeSlide';
import GoodGirlsSlide from '@/components/slides/GoodGirlsSlide';
import CountdownSlide from '@/components/slides/CountdownSlide';
import SuspenseSlide from '@/components/slides/SuspenseSlide';
import RevealSlide from '@/components/slides/RevealSlide';
import FinalSlide from '@/components/slides/FinalSlide';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => prev + 1);
  };

  const slides = [
    <WelcomeSlide key="welcome" onNext={nextSlide} />,
    <GoodGirlsSlide key="goodgirls" onNext={nextSlide} />,
    <CountdownSlide key="countdown" onNext={nextSlide} />,
    <SuspenseSlide key="suspense" onNext={nextSlide} />,
    <RevealSlide key="reveal" onNext={nextSlide} />,
    <FinalSlide key="final" />,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background overflow-x-hidden">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-christmas-red/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-christmas-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-christmas-gold/10 rounded-full blur-3xl" />
      </div>
      
      <Snowfall />
      <MusicPlayer />
      
      <main className="relative z-10">
        {slides[currentSlide]}
      </main>
      
      {/* Progress dots */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-christmas-gold w-6'
                : index < currentSlide
                ? 'bg-christmas-green'
                : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
