"use client";

import { useState } from "react";
import type { Service } from "./ServiceCard";

type BookingFormProps = {
  services: Service[];
  defaultServiceId?: string;
};

const timeSlots = [
  "۹:۰۰ صبح",
  "۱۰:۳۰ صبح",
  "۱۲:۰۰ ظهر",
  "۲:۰۰ عصر",
  "۳:۳۰ عصر",
  "۵:۰۰ عصر",
  "۶:۳۰ عصر",
  "۸:۰۰ شب",
];

export default function BookingForm({
  services,
  defaultServiceId,
}: BookingFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: defaultServiceId ?? services[0]?.id ?? "",
    date: "",
    time: timeSlots[0],
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-rose-soft-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-soft-100 text-3xl">
          ✓
        </div>
        <h3 className="mt-5 text-2xl font-bold text-plum-950">
          درخواست رزرو شما ثبت شد!
        </h3>
        <p className="mt-3 text-sm leading-7 text-plum-600">
          {form.name} عزیز، نوبت شما برای روز {form.date} ساعت {form.time}{" "}
          ثبت اولیه شد. همکاران ما برای تأیید نهایی با شماره {form.phone}{" "}
          تماس می‌گیرند.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full bg-gradient-to-l from-rose-soft-500 to-gold-400 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-rose-soft-200"
        >
          ثبت رزرو جدید
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-2xl border border-rose-soft-200 bg-cream-50 px-4 py-3 text-sm text-plum-900 placeholder:text-plum-400 focus:border-rose-soft-400 focus:outline-none focus:ring-2 focus:ring-rose-soft-100";
  const labelCls = "mb-2 block text-sm font-bold text-plum-800";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-rose-soft-100 bg-white p-8 shadow-sm sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            نام و نام خانوادگی *
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="مثلاً سارا محمدی"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            شماره موبایل *
          </label>
          <input
            id="phone"
            required
            type="tel"
            dir="ltr"
            value={form.phone}
            onChange={update("phone")}
            placeholder="0912 345 6789"
            className={`${inputCls} text-right`}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelCls}>
            نوع خدمت *
          </label>
          <select
            id="service"
            value={form.service}
            onChange={update("service")}
            className={inputCls}
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title} — {s.price}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className={labelCls}>
            تاریخ مراجعه *
          </label>
          <input
            id="date"
            required
            type="date"
            value={form.date}
            onChange={update("date")}
            className={inputCls}
          />
        </div>
        <div className="sm:col-span-2">
          <span className={labelCls}>ساعت مراجعه *</span>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setForm((f) => ({ ...f, time: slot }))}
                className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition-colors ${
                  form.time === slot
                    ? "border-rose-soft-500 bg-rose-soft-500 text-white"
                    : "border-rose-soft-200 bg-cream-50 text-plum-700 hover:border-rose-soft-400"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="note" className={labelCls}>
            توضیحات (اختیاری)
          </label>
          <textarea
            id="note"
            rows={4}
            value={form.note}
            onChange={update("note")}
            placeholder="اگر نکته خاصی مدنظرتان است بنویسید..."
            className={inputCls}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-gradient-to-l from-rose-soft-500 to-gold-400 py-4 text-base font-bold text-white shadow-lg shadow-rose-soft-200 transition-transform hover:scale-[1.01]"
      >
        ثبت درخواست رزرو ✦
      </button>
    </form>
  );
}
