import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "آرایشگاه زنانه لوکس آرورا | Luxe Aurora",
    template: "%s | لوکس آرورا",
  },
  description:
    "آرایشگاه زنانه لوکس آرورا — خدمات تخصصی مو، پوست، میکاپ، عروس و ناخن در فضایی لوکس و آرام.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-plum-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
