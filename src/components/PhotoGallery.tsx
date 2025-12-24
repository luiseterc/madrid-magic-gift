import magicas1 from '@/assets/magicas-1.webp';
import magicas2 from '@/assets/magicas-2.jpg';
import magicas3 from '@/assets/magicas-3.jpg';
import magicas4 from '@/assets/magicas-4.webp';

const photos = [magicas1, magicas2, magicas3, magicas4];

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border-2 border-christmas-gold/30 shadow-lg hover:scale-105 transition-transform duration-300"
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <img
            src={photo}
            alt={`Mágicas Navidades ${index + 1}`}
            className="w-full h-32 md:h-48 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
