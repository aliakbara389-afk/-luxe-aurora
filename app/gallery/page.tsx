import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import Button from "@/components/Button";
import { galleryItems, galleryCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "گالری",
  description: "نمونه کارهای آرایشگاه زنانه لوکس آرورا: رنگ مو، میکاپ، شنیون عروس و دیزاین ناخن.",
};

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-rose-soft-100 to-cream-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="نمونه کارها"
            title="گالری آرورا"
            description="گوشه‌ای از هزاران کار انجام‌شده در آرورا را ببینید — هر تصویر، یک داستان زیبایی."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={galleryItems} categories={galleryCategories} />
        </div>
      </section>

      <section className="pb-20 text-center">
        <p className="text-sm text-plum-600">
          نمونه‌کارهای بیشتر را در صفحه اینستاگرام ما ببینید.
        </p>
        <div className="mt-5">
          <Button href="/booking" variant="outline">
            دوست دارید شما هم این‌طور بدرخشید؟ رزرو کنید
          </Button>
        </div>
      </section>
    </div>
  );
}
