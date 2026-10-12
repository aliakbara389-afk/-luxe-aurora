import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { services, testimonials } from "@/lib/data";

const stats = [
  { value: "+۱۲", label: "سال تجربه" },
  { value: "+۱۵٬۰۰۰", label: "مشتری راضی" },
  { value: "+۲۰", label: "متخصص حرفه‌ای" },
  { value: "۴٫۹", label: "امتیاز از ۵" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-rose-soft-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold-200/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-rose-soft-600 shadow-sm ring-1 ring-rose-soft-100">
              ✦ آرایشگاه زنانه لوکس در قلب تهران
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.3] text-plum-950 sm:text-5xl lg:text-6xl">
              زیبایی شما،
              <br />
              <span className="text-shimmer">امضای ماست</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-plum-600 sm:text-lg">
              در لوکس آرورا، با تیمی از بهترین متخصصین، جدیدترین تکنیک‌های روز
              دنیا و فضایی آرام و لوکس، تجربه‌ای متفاوت از زیبایی را برایتان
              رقم می‌زنیم.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/booking">رزرو نوبت آنلاین</Button>
              <Button href="/services" variant="outline">
                مشاهده خدمات
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/80 p-4 text-center shadow-sm ring-1 ring-rose-soft-100"
                >
                  <div className="text-2xl font-extrabold text-rose-soft-500">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-plum-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="animate-float-slow relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-gradient-to-br from-rose-soft-300 via-rose-soft-200 to-gold-200 shadow-2xl shadow-rose-soft-200">
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
                <span className="text-8xl">💇‍♀️</span>
                <span className="px-8 text-xl font-bold text-plum-800">
                  تجربه لوکس زیبایی
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-3xl bg-white p-5 shadow-xl ring-1 ring-rose-soft-100">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-soft-100 text-2xl">
                  ⭐
                </span>
                <div>
                  <div className="text-sm font-extrabold text-plum-900">
                    ۴.۹ از ۵
                  </div>
                  <div className="text-xs text-plum-500">
                    +۲٬۵۰۰ نظر مثبت
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 rounded-3xl bg-white p-4 shadow-xl ring-1 ring-rose-soft-100">
              <span className="text-3xl">🌸</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="خدمات ما"
            title="محبوب‌ترین خدمات آرورا"
            description="از کوتاهی و رنگ مو تا میکاپ عروس و مراقبت پوست — همه چیز برای درخشش شما."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="outline">
              مشاهده همه خدمات
            </Button>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🏆", title: "متخصصین برجسته", desc: "تیم مجرب با مدرک‌های بین‌المللی" },
                  { icon: "🌿", title: "مواد ارگانیک", desc: "برندهای معتبر و ضدحساسیت" },
                  { icon: "🕊️", title: "فضای آرام", desc: "محیطی لوکس و دل‌نشین" },
                  { icon: "🛡️", title: "بهداشت تضمینی", desc: "استریل کامل تمام ابزارها" },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="card-glow rounded-3xl bg-white p-6 shadow-sm ring-1 ring-rose-soft-100"
                  >
                    <span className="text-3xl">{f.icon}</span>
                    <h3 className="mt-3 font-bold text-plum-900">{f.title}</h3>
                    <p className="mt-1 text-xs leading-6 text-plum-600">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                align="start"
                eyebrow="چرا آرورا؟"
                title="تفاوت در جزئیات است"
                description="ما باور داریم زیبایی واقعی از توجه به جزئیات شکل می‌گیرد. از لحظه ورود شما به سالن تا لحظه خروج، هر ثانیه تجربه‌ای ویژه خواهد بود."
              />
              <div className="mt-8">
                <Button href="/about" variant="outline">
                  بیشتر درباره ما بدانید
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-plum-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full bg-plum-800 px-4 py-1 text-xs font-bold text-rose-soft-300">
              نظرات مشتریان
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              آن‌ها که آرورا را تجربه کرده‌اند
            </h2>
            <span className="mt-4 h-1 w-20 rounded-full bg-gradient-to-l from-rose-soft-400 to-gold-400" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-l from-rose-soft-500 to-gold-400 p-12 text-center shadow-2xl shadow-rose-soft-200 sm:p-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
            <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl">
              آماده‌اید بدرخشید؟
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/90">
              همین حالا نوبت خود را رزرو کنید و از مشاوره رایگان متخصصین ما
              بهره‌مند شوید.
            </p>
            <div className="relative mt-8">
              <Button
                href="/booking"
                className="!bg-white !bg-none !text-rose-soft-600 shadow-xl"
              >
                رزرو نوبت آنلاین ←
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
