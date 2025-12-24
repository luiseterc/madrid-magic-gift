import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import PhotoGallery from '../PhotoGallery';
import YouTubeEmbed from '../YouTubeEmbed';

const RevealSlide = () => {
  useEffect(() => {
    // Fire confetti multiple times
    const fireConfetti = () => {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        zIndex: 1000,
      };

      function fire(particleRatio: number, opts: confetti.Options) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
        colors: ['#ff0000', '#00ff00', '#ffd700'],
      });
      fire(0.2, {
        spread: 60,
        colors: ['#ff0000', '#00ff00', '#ffd700'],
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        colors: ['#ff0000', '#00ff00', '#ffd700'],
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        colors: ['#ff0000', '#00ff00', '#ffd700'],
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
        colors: ['#ff0000', '#00ff00', '#ffd700'],
      });
    };

    fireConfetti();
    
    // Fire more confetti after a short delay
    const timer1 = setTimeout(fireConfetti, 500);
    const timer2 = setTimeout(fireConfetti, 1000);
    const timer3 = setTimeout(fireConfetti, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center py-12">
      <h1 className="christmas-title text-christmas-gold glow-text mb-4 animate-bounce-in">
        ¡NOS VAMOS A MADRID!
      </h1>
      
      <h2 className="christmas-subtitle text-christmas-green mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        Al Parque Mágicas Navidades de Torrejón
      </h2>
      
      <p className="christmas-text text-foreground/90 mb-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        ¡Vamos a ver a Santa Claus! 🎅
      </p>
      
      <p className="text-xl text-christmas-gold mb-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
        📅 28 de Diciembre
      </p>
      
      <div className="w-full mb-8 animate-scale-in" style={{ animationDelay: '0.9s' }}>
        <PhotoGallery />
      </div>
      
      <div className="w-full mb-8 animate-scale-in" style={{ animationDelay: '1.2s' }}>
        <h3 className="christmas-subtitle text-foreground mb-4">
          ¡Mirad qué maravilla! ✨
        </h3>
        <YouTubeEmbed />
      </div>
      
      <div className="christmas-card mt-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <p className="christmas-text text-foreground/90">
          Con mucho cariño para <span className="text-christmas-gold font-bold">Claudia</span>,{' '}
          <span className="text-christmas-gold font-bold">Blanca</span> y toda la familia.
        </p>
        <p className="text-3xl mt-4">🎄❤️🎅</p>
        <p className="christmas-subtitle text-christmas-red mt-4">¡Feliz Navidad!</p>
      </div>
    </div>
  );
};

export default RevealSlide;
