import type { Metadata } from "next";
import { Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "رزرو نوبت",
  description: "رزرو آنلاین نوبت در آرایشگاه زنانه لوکس آرورا؛ سریع، آسان و با تأیید تلفنی.",
};

async function BookingContent({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const valid = services.some((s) => s.id === service);
  return (
    <BookingForm
      services={services}
      defaultServiceId={valid ? service : undefined}
    />
  );
}

export default function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  return (
    <div>
      <section className="bg-gradient-to-b from-rose-soft-100 to-cream-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="رزرو آنلاین"
            title="نوبت خود را رزرو کنید"
            description="فرم زیر را پر کنید؛ همکاران ما در اولین فرصت برای تأیید نهایی با شما تماس می‌گیرند."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="rounded-3xl border border-rose-soft-100 bg-white p-10 text-center text-sm text-plum-500">
                در حال بارگذاری فرم رزرو...
              </div>
            }
          >
            <BookingContent searchParams={searchParams} />
          </Suspense>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: "📞", text: "تأیید نوبت حداکثر تا ۲ ساعت کاری" },
              { icon: "💳", text: "پرداخت در محل یا آنلاین" },
              { icon: "↩️", text: "لغو رایگان تا ۲۴ ساعت قبل" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 text-xs font-medium text-plum-700 shadow-sm ring-1 ring-rose-soft-100"
              >
                <span className="text-xl">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
