import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <span className="text-7xl">🌸</span>
      <h1 className="mt-6 text-5xl font-extrabold text-plum-950">۴۰۴</h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-plum-600">
        صفحه‌ای که دنبال آن بودید پیدا نشد. شاید آدرس اشتباه وارد شده یا صفحه
        جابه‌جا شده است.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">بازگشت به خانه</Button>
        <Button href="/services" variant="outline">
          مشاهده خدمات
        </Button>
      </div>
      <Link
        href="/contact"
        className="mt-6 text-xs text-rose-soft-500 underline underline-offset-4 hover:text-rose-soft-600"
      >
        مشکلی پیش آمده؟ با ما تماس بگیرید
      </Link>
    </div>
  );
}
