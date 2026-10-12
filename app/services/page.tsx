import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "خدمات",
  description: "خدمات تخصصی آرایشگاه زنانه لوکس آرورا: مو، رنگ، کراتینه، میکاپ، عروس، پوست و ناخن.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-rose-soft-100 to-cream-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="لیست خدمات"
            title="خدمات تخصصی آرورا"
            description="تمام خدمات ما با بهترین مواد و برندهای روز دنیا و توسط متخصصین باتجربه ارائه می‌شود. قیمت نهایی پس از مشاوره رایگان تعیین می‌گردد."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-rose-soft-100">
            <h3 className="text-2xl font-bold text-plum-950">
              مطمئن نیستید کدام خدمت برای شما مناسب است؟
            </h3>
            <p className="mt-3 text-sm leading-7 text-plum-600">
              متخصصین ما در یک جلسه مشاوره رایگان، بهترین انتخاب را متناسب با
              ویژگی‌های شما پیشنهاد می‌دهند.
            </p>
            <div className="mt-6">
              <Button href="/booking">دریافت مشاوره رایگان</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
