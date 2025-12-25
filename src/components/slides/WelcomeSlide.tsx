interface WelcomeSlideProps {
  onNext: () => void;
}

const WelcomeSlide = ({ onNext }: WelcomeSlideProps) => {
  const videoSrc = import.meta.env.BASE_URL + 'papanoel.mp4';
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="animate-bounce-in">
        <video
          src={videoSrc}
          controls
          playsInline
          className="w-72 h-72 md:w-96 md:h-96 object-cover float-animation mx-auto mb-6 rounded-2xl shadow-2xl"
        />
      </div>
      
      <h1 className="christmas-title text-christmas-gold glow-text mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        ¡Ho Ho Ho!
      </h1>
      
      <h2 className="christmas-subtitle text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        ¡Hola Claudia y Blanca!
      </h2>
      
      <p className="christmas-text text-foreground/90 max-w-md mb-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
        Soy Papá Noel y tengo un mensaje muy especial para vosotras y toda la familia...
      </p>
      
      <button
        onClick={onNext}
        className="christmas-button text-foreground animate-fade-in"
        style={{ animationDelay: '1s' }}
      >
        ¿Qué será? 🎄
      </button>
    </div>
  );
};

export default WelcomeSlide;
