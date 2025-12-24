const YouTubeEmbed = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative pb-[56.25%] rounded-2xl overflow-hidden border-4 border-christmas-gold/40 shadow-2xl pulse-glow">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/o0Cm2bf7xd8?autoplay=0&rel=0"
          title="Mágicas Navidades Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;
