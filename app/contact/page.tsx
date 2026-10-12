"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const contactInfo = [
  {
    icon: "📍",
    title: "آدرس",
    text: "تهران، خیابان ولیعصر، بالاتر از پارک ساعی، کوچه نسرین، پلاک ۱۲",
  },
  {
    icon: "📞",
    title: "تلفن",
    text: "۰۲۱ - ۲۲ ۳۴ ۵۶ ۷۸",
  },
  {
    icon: "🕐",
    title: "ساعات کاری",
    text: "شنبه تا پنجشنبه: ۹ صبح تا ۹ شب",
  },
  {
    icon: "✉️",
    title: "ایمیل",
    text: "info@luxeaurora.ir",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputCls =
    "w-full rounded-2xl border border-rose-soft-200 bg-cream-50 px-4 py-3 text-sm text-plum-900 placeholder:text-plum-400 focus:border-rose-soft-400 focus:outline-none focus:ring-2 focus:ring-rose-soft-100";

  return (
    <div>
      <section className="bg-gradient-to-b from-rose-soft-100 to-cream-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="تماس با ما"
            title="مشتاق شنیدن صدای شما هستیم"
            description="برای هر سؤال، پیشنهاد یا هماهنگی، از راه‌های زیر با ما در ارتباط باشید."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-rose-soft-100"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-soft-100 text-2xl">
                  {info.icon}
                </span>
                <div>
                  <h3 className="font-bold text-plum-900">{info.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-plum-600">
                    {info.text}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex h-48 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-soft-200 to-gold-200 text-center shadow-sm">
              <div>
                <span className="text-4xl">🗺️</span>
                <p className="mt-2 text-sm font-bold text-plum-800">
                  نقشه محل آرایشگاه
                </p>
                <p className="text-xs text-plum-600">(در نسخه نهایی متصل می‌شود)</p>
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-rose-soft-200 bg-white p-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-soft-100 text-3xl">
                  ✓
                </div>
                <h3 className="mt-5 text-2xl font-bold text-plum-950">
                  پیام شما ارسال شد!
                </h3>
                <p className="mt-3 text-sm text-plum-600">
                  {form.name} عزیز، به‌زودی پاسخ شما را می‌دهیم.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border-2 border-rose-soft-300 px-6 py-2.5 text-sm font-bold text-rose-soft-600 hover:bg-rose-soft-50"
                >
                  ارسال پیام جدید
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="rounded-3xl border border-rose-soft-100 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-plum-950">
                  فرم تماس
                </h3>
                <div className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="c-name" className="mb-2 block text-sm font-bold text-plum-800">
                      نام شما *
                    </label>
                    <input
                      id="c-name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                      placeholder="نام و نام خانوادگی"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="mb-2 block text-sm font-bold text-plum-800">
                      شماره موبایل *
                    </label>
                    <input
                      id="c-phone"
                      required
                      type="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`${inputCls} text-right`}
                      placeholder="0912 345 6789"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-msg" className="mb-2 block text-sm font-bold text-plum-800">
                      پیام شما *
                    </label>
                    <textarea
                      id="c-msg"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={inputCls}
                      placeholder="پیامتان را بنویسید..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-l from-rose-soft-500 to-gold-400 py-4 text-base font-bold text-white shadow-lg shadow-rose-soft-200 transition-transform hover:scale-[1.01]"
                  >
                    ارسال پیام
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
