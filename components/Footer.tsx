import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-plum-950 text-plum-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-soft-400 to-gold-400 text-lg font-bold text-white">
                ✦
              </span>
              <span className="text-xl font-bold text-white">
                لوکس <span className="text-rose-soft-300">آرورا</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-plum-200">
              آرایشگاه زنانه لوکس آرورا با سال‌ها تجربه، جدیدترین تکنیک‌های
              روز دنیا و بهترین متریال، میزبان زیبایی شماست.
            </p>
            <div className="mt-5 flex gap-3">
              {["اینستاگرام", "واتساپ", "تلگرام"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="rounded-full border border-plum-700 px-4 py-1.5 text-xs text-plum-200 transition-colors hover:border-rose-soft-400 hover:text-rose-soft-300"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">دسترسی سریع</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/services", label: "خدمات ما" },
                { href: "/gallery", label: "گالری نمونه کار" },
                { href: "/booking", label: "رزرو نوبت" },
                { href: "/about", label: "درباره ما" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-plum-200 transition-colors hover:text-rose-soft-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">تماس با ما</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-plum-200">
              <li>تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۲</li>
              <li dir="ltr" className="text-right">۰۲۱ - ۲۲ ۳۴ ۵۶ ۷۸</li>
              <li>شنبه تا پنجشنبه: ۹ صبح تا ۹ شب</li>
              <li dir="ltr" className="text-right">info@luxeaurora.ir</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-plum-800 pt-6 text-center text-xs text-plum-300">
          © {new Date().getFullYear()} لوکس آرورا — تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
