import Link from "next/link";

export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
};

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card-glow group flex flex-col rounded-3xl border border-rose-soft-100 bg-white p-7 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-soft-100 to-gold-100 text-3xl">
        {service.icon}
      </div>
      <h3 className="mt-5 text-xl font-bold text-plum-950 group-hover:text-rose-soft-500">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-plum-600">
        {service.description}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-rose-soft-100 pt-4">
        <div className="text-xs text-plum-500">
          <span className="block">مدت زمان: {service.duration}</span>
          <span className="mt-1 block text-base font-bold text-rose-soft-600">
            {service.price}
          </span>
        </div>
        <Link
          href={`/booking?service=${service.id}`}
          className="rounded-full bg-rose-soft-50 px-4 py-2 text-xs font-bold text-rose-soft-600 transition-colors hover:bg-rose-soft-500 hover:text-white"
        >
          رزرو
        </Link>
      </div>
    </div>
  );
}
