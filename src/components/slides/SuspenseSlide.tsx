import { useState, useEffect } from 'react';

interface SuspenseSlideProps {
  onNext: () => void;
}

const SuspenseSlide = ({ onNext }: SuspenseSlideProps) => {
  const [dots, setDots] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="text-8xl mb-8 animate-bounce-in">🎁</div>
      
      <h2 className="christmas-title text-christmas-gold glow-text mb-8">
        ¿Preparadas?{dots}
      </h2>
      
      <div className="flex gap-4 text-4xl mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <span className="animate-sparkle" style={{ animationDelay: '0s' }}>✨</span>
        <span className="animate-sparkle" style={{ animationDelay: '0.3s' }}>🌟</span>
        <span className="animate-sparkle" style={{ animationDelay: '0.6s' }}>✨</span>
      </div>
      
      <p className="christmas-text text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '1s' }}>
        Esto va a ser...
      </p>
      
      <p className="christmas-subtitle text-christmas-green animate-fade-in" style={{ animationDelay: '1.5s' }}>
        ¡INCREÍBLE!
      </p>
      
      {showButton && (
        <button
          onClick={onNext}
          className="christmas-button text-foreground mt-8 animate-bounce-in"
        >
          ¡Descubrir sorpresa! 🎊
        </button>
      )}
    </div>
  );
};

export default SuspenseSlide;
