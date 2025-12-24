import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with correct base path for GitHub Pages
    const audioPath = `${import.meta.env.BASE_URL}christmas-music.mp3`;
    audioRef.current = new Audio(audioPath);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (!hasInteracted) {
      setHasInteracted(true);
    }

    if (isMuted) {
      audioRef.current.play().catch(console.error);
      setIsMuted(false);
    } else {
      audioRef.current.pause();
      setIsMuted(true);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-4 right-4 z-[100] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 christmas-card pulse-glow"
      aria-label={isMuted ? 'Activar música' : 'Silenciar música'}
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6 text-christmas-gold" />
      ) : (
        <Volume2 className="w-6 h-6 text-christmas-gold animate-pulse" />
      )}
    </button>
  );
};

export default MusicPlayer;
