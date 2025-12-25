import { useEffect } from 'react';

const FinalSlide = () => {
  useEffect(() => {
    // Add a subtle animation effect
    const timer = setTimeout(() => {
      // Could add additional effects here if needed
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
        <div className="text-6xl mb-8 animate-bounce-in">
          🎁
        </div>
        
        <h1 className="christmas-title text-christmas-red glow-text mb-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          Por cierto...
        </h1>
        
        <div className="christmas-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-3xl md:text-4xl text-foreground leading-relaxed mb-6">
            Os he dejado las entradas
          </p>
          <p className="text-4xl md:text-5xl text-christmas-gold font-bold glow-text">
            debajo del belén
          </p>
        </div>

        <div className="text-6xl mt-8 animate-bounce" style={{ animationDelay: '0.8s' }}>
          🎄✨
        </div>
        
        <p className="christmas-text text-christmas-green mt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          ¡Nos vemos muy pronto! 🎅❤️
        </p>
      </div>
    </div>
  );
};

export default FinalSlide;

