interface GalleryImage {
  url: string;
  description: string;
  caption?: string;
}

interface TourGalleryProps {
  images: GalleryImage[];
}

export default function TourGallery({ images }: TourGalleryProps) {
  if (!images || images.length === 0) return null;
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <figure key={idx} className="rounded-lg overflow-hidden shadow-sm bg-white">
            <img
              src={img.url}
              alt={img.description}
              className="w-full h-56 object-cover object-center"
              loading="lazy"
            />
            {img.caption && (
              <figcaption className="px-4 py-2 text-sm text-gray-600 bg-gray-50">{img.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
} 