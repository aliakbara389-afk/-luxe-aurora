import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "داستان آرایشگاه زنانه لوکس آرورا؛ تیم ما، ارزش‌ها و تعهد ما به زیبایی شما.",
};

const team = [
  { name: "آرزو شریفی", role: "مدیر و متخصص ارشد مو", emoji: "👩‍🎨" },
  { name: "لیلا توکلی", role: "میکاپ آرتیست عروس", emoji: "💄" },
  { name: "نازنین حیدری", role: "متخصص پوست و فیشیال", emoji: "🌸" },
  { name: "مینا فرهادی", role: "کارشناس ناخن", emoji: "💅" },
];

const values = [
  {
    icon: "💎",
    title: "کیفیت بدون مصالحه",
    text: "هرگز در انتخاب مواد و برندها کوتاه نمی‌آییم؛ سلامتی و زیبایی شما خط قرمز ماست.",
  },
  {
    icon: "🤍",
    title: "احترام به سلیقه شما",
    text: "ما گوش می‌دهیم، مشاوره می‌دهیم، اما تصمیم نهایی همیشه با شماست.",
  },
  {
    icon: "📚",
    title: "آموزش مستمر",
    text: "تیم ما هر سال در دوره‌های بین‌المللی شرکت می‌کند تا همیشه به‌روز باشد.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-rose-soft-100 to-cream-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="داستان ما"
            title="آرورا؛ جایی که زیبایی معنا پیدا می‌کند"
            description="لوکس آرورا در سال ۱۳۹۳ با یک رؤیای ساده شروع شد: ساختن فضایی که هر زن با خیال راحت زیبایی خود را به آن بسپارد."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] bg-gradient-to-br from-plum-300 via-rose-soft-300 to-gold-200 shadow-2xl shadow-rose-soft-200">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                <span className="text-8xl">🏵️</span>
                <span className="px-8 text-lg font-bold text-white drop-shadow">
                  بیش از ۱۲ سال در کنار شما
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-plum-950">
              از یک سالن کوچک تا پرافتخارترین آرایشگاه منطقه
            </h2>
            <p className="mt-5 text-sm leading-8 text-plum-600">
              آرورا با یک میز کار و دو مشتری در هفته آغاز شد. امروز، با بیش از
              ۲۰ متخصص حرفه‌ای و هزاران مشتری وفادار، افتخار می‌کنیم که بخشی
              از مهم‌ترین روزهای زندگی شما بوده‌ایم — از اولین موقره‌گذاری مو
              تا درخشان‌ترین شب زندگی‌تان.
            </p>
            <p className="mt-4 text-sm leading-8 text-plum-600">
              ما هرگز یادگیری را متوقف نکرده‌ایم؛ هر سال در نمایشگاه‌ها و
              دوره‌های تخصصی اروپا و آسیا شرکت می‌کنیم تا جدیدترین تکنیک‌ها را
              مستقیم به سالن خود بیاوریم.
            </p>
            <div className="mt-8">
              <Button href="/booking">با ما آشنا شوید</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ارزش‌های ما"
            title="سه اصل که هرگز از آن کوتاه نمی‌آییم"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-glow rounded-3xl bg-cream-50 p-8 ring-1 ring-rose-soft-100"
              >
                <span className="text-4xl">{v.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-plum-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-plum-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="تیم ما"
            title="دست‌های هنرمند آرورا"
            description="با برخی از متخصصین اصلی ما آشنا شوید."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="card-glow rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-rose-soft-100"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-soft-200 to-gold-200 text-5xl">
                  {member.emoji}
                </div>
                <h3 className="mt-4 font-bold text-plum-900">{member.name}</h3>
                <p className="mt-1 text-xs text-rose-soft-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-plum-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold text-white">
              حرف‌های مشتریان ما
            </h2>
            <span className="mt-4 h-1 w-20 rounded-full bg-gradient-to-l from-rose-soft-400 to-gold-400" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(3, 6).map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
