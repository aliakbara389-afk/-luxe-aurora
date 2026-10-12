export type Testimonial = {
  name: string;
  service: string;
  text: string;
  rating: number;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-rose-soft-100 bg-white p-7 shadow-sm">
      <div className="flex gap-1 text-gold-400" aria-label={`${testimonial.rating} ستاره`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-8 text-plum-700">
        «{testimonial.text}»
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-rose-soft-100 pt-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rose-soft-300 to-gold-300 text-lg font-bold text-white">
          {testimonial.name.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-bold text-plum-900">
            {testimonial.name}
          </div>
          <div className="text-xs text-plum-500">{testimonial.service}</div>
        </div>
      </figcaption>
    </figure>
  );
}
