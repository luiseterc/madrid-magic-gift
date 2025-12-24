import santaClaus from '@/assets/santa-claus.png';

interface GoodGirlsSlideProps {
  onNext: () => void;
}

const GoodGirlsSlide = ({ onNext }: GoodGirlsSlideProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="christmas-card max-w-xl animate-scale-in">
        <div className="flex justify-center mb-4">
          <span className="text-6xl animate-wiggle">⭐</span>
        </div>
        
        <h2 className="christmas-subtitle text-christmas-gold mb-6">
          He estado observando...
        </h2>
        
        <p className="christmas-text text-foreground/90 mb-4">
          He visto que <span className="text-christmas-gold font-bold">Claudia</span> y{' '}
          <span className="text-christmas-gold font-bold">Blanca</span> se han portado{' '}
          <span className="text-christmas-green font-bold text-2xl">MUY BIEN</span> este año.
        </p>
        
        <p className="christmas-text text-foreground/90 mb-6">
          Y que en vuestra familia os queréis mucho muchísimo... ¡Eso me hace muy feliz! 🎅❤️
        </p>
        
        <img
          src={santaClaus}
          alt="Papá Noel contento"
          className="w-24 h-24 mx-auto mb-6 animate-wiggle"
        />
        
        <button
          onClick={onNext}
          className="christmas-button text-foreground"
        >
          Continuar 🎁
        </button>
      </div>
    </div>
  );
};

export default GoodGirlsSlide;
