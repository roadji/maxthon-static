interface Testimonial {
  content: string;
  author: string;
  school?: string;
}

interface TourTestimonialsProps {
  testimonials: Testimonial[];
}

export default function TourTestimonials({ testimonials }: TourTestimonialsProps) {
  if (!testimonials || testimonials.length === 0) return null;
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">What Schools Say</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <blockquote key={idx} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
            <p className="text-gray-700 italic mb-4">“{t.content}”</p>
            <footer className="text-sm text-gray-600">
              — {t.author}{t.school && `, ${t.school}`}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
} 