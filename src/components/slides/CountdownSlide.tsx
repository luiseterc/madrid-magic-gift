import Countdown from '../Countdown';

interface CountdownSlideProps {
  onNext: () => void;
}

const CountdownSlide = ({ onNext }: CountdownSlideProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h2 className="christmas-subtitle text-christmas-gold glow-text mb-4 animate-fade-in">
        Por eso he decidido...
      </h2>
      
      <p className="christmas-text text-foreground/90 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        ¡Daros un regalo muy especial a TODA la familia!
      </p>
      
      <div className="christmas-card mb-8 animate-scale-in" style={{ animationDelay: '0.5s' }}>
        <h3 className="text-xl md:text-2xl text-foreground mb-4 font-christmas">
          Cuenta atrás para el gran día:
        </h3>
        <p className="text-christmas-gold text-lg mb-4">28 de Diciembre</p>
        <Countdown />
      </div>
      
      <p className="christmas-text text-foreground/80 mb-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        ¿Queréis saber cuál es la sorpresa? 🤔
      </p>
      
      <button
        onClick={onNext}
        className="christmas-button text-foreground animate-fade-in"
        style={{ animationDelay: '1s' }}
      >
        ¡¡Sííí!! 🎉
      </button>
    </div>
  );
};

export default CountdownSlide;
