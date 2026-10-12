import type { Service } from "@/components/ServiceCard";
import type { Testimonial } from "@/components/TestimonialCard";
import type { GalleryItem } from "@/components/GalleryGrid";

export const services: Service[] = [
  {
    id: "haircut",
    title: "کوتاهی و استایلینگ مو",
    description:
      "کوتاهی تخصصی متناسب با فرم صورت شما توسط استایلیست‌های حرفه‌ای، همراه با مشاوره رایگان.",
    price: "از ۶۵۰ هزار تومان",
    duration: "۶۰ دقیقه",
    icon: "✂️",
  },
  {
    id: "color",
    title: "رنگ و لایت و بالیاژ",
    description:
      "رنگ مو، آمبره، بالیاژ و هایلایت با بهترین مواد اروپایی بدون آسیب به بافت مو.",
    price: "از ۲٬۵۰۰ هزار تومان",
    duration: "۲ تا ۴ ساعت",
    icon: "🎨",
  },
  {
    id: "keratin",
    title: "کراتینه و احیای مو",
    description:
      "احیای عمیق موهای آسیب‌دیده، کراتینه، پروتئین‌تراپی و صافی دائم با ضمانت.",
    price: "از ۳٬۰۰۰ هزار تومان",
    duration: "۳ ساعت",
    icon: "✨",
  },
  {
    id: "makeup",
    title: "میکاپ حرفه‌ای",
    description:
      "میکاپ مهمانی، فشن و تخصصی با برندهای لوکس جهانی متناسب با سلیقه شما.",
    price: "از ۱٬۸۰۰ هزار تومان",
    duration: "۹۰ دقیقه",
    icon: "💄",
  },
  {
    id: "bridal",
    title: "پکیج VIP عروس",
    description:
      "شنیون، میکاپ، پاکسازی پوست و تمام خدمات روز عروسی در یک پکیج کامل و خاطره‌ساز.",
    price: "از ۱۵٬۰۰۰ هزار تومان",
    duration: "یک روز کامل",
    icon: "👰",
  },
  {
    id: "facial",
    title: "فیشیال و پاکسازی پوست",
    description:
      "پاکسازی عمیق، هیدرودرمی و جوانسازی پوست با دستگاه‌های پیشرفته و مواد ارگانیک.",
    price: "از ۱٬۲۰۰ هزار تومان",
    duration: "۷۵ دقیقه",
    icon: "🌸",
  },
  {
    id: "nails",
    title: "مانیکور، پدیکور و ناخن",
    description:
      "کاشت ناخن، ژلیش، دیزاین و طراحی ناخن با جدیدترین مدل‌های روز.",
    price: "از ۷۵۰ هزار تومان",
    duration: "۹۰ دقیقه",
    icon: "💅",
  },
  {
    id: "brows",
    title: "ابرو و مژه",
    description:
      "فرم‌دهی ابرو، لیفت مژه و ابرو، لمینت و رنگ‌سازی توسط متخصصین باتجربه.",
    price: "از ۵۰۰ هزار تومان",
    duration: "۴۵ دقیقه",
    icon: "👁️",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "نگار احمدی",
    service: "پکیج عروس",
    text: "روز عروسیم فوق‌العاده بود! تیم آرورا واقعاً حرفه‌ای‌ن، از شنیون تا میکاپ همه‌چیز بی‌نقص. هنوز که هنوزه عکس‌هامو نگاه می‌کنم و لذت می‌برم.",
    rating: 5,
  },
  {
    name: "مریم رضایی",
    service: "بالیاژ مو",
    text: "سه ساله مشتری ثابت آرورام. بالیاژمو دقیقاً همون‌طور که می‌خواستم درآوردن. موهام اصلاً آسیب ندید و رنگش بعد از ماه‌ها هنوز تازه‌ست.",
    rating: 5,
  },
  {
    name: "سارا کریمی",
    service: "فیشیال پوست",
    text: "پوستم بعد از فیشیال انگار نو شد! فضای سالن خیلی آروم و تمیزه و پرسنل واقعاً خوش‌برخوردن. حتماً دوباره میام.",
    rating: 5,
  },
  {
    name: "الهام موسوی",
    service: "کراتینه مو",
    text: "موهای فرفری و وز من بالاخره آروم گرفت! کراتینه‌ای که انجام دادن بعد از ۶ ماه هنوز مثل روز اوله. قیمت‌ها هم نسبت به کیفیت عالیه.",
    rating: 5,
  },
  {
    name: "پریسا نادری",
    service: "کاشت ناخن",
    text: "دیزاین ناخنم اون‌قدر قشنگ شده که همه سرکار ازم می‌پرسن کجا کردم. کار تمیز و دقیق، با حوصله و وسواس زیاد.",
    rating: 4,
  },
  {
    name: "شیما جلالی",
    service: "میکاپ مهمانی",
    text: "برای عروسی خواهرم میکاپ کردم و تا آخر شب هیچ تغییری نکرد. از دوام و کیفیت موادشون واقعاً راضیم.",
    rating: 5,
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: "بالیاژ طلایی", category: "رنگ مو", gradient: "from-gold-200 via-rose-soft-200 to-rose-soft-300", emoji: "💇‍♀️" },
  { id: 2, title: "شنیون کلاسیک عروس", category: "عروس", gradient: "from-rose-soft-200 via-cream-200 to-gold-200", emoji: "👰" },
  { id: 3, title: "میکاپ دخترانه", category: "میکاپ", gradient: "from-rose-soft-300 via-rose-soft-200 to-plum-200", emoji: "💄" },
  { id: 4, title: "کوتاهی باب", category: "مو", gradient: "from-plum-200 via-rose-soft-100 to-cream-100", emoji: "✂️" },
  { id: 5, title: "دیزاین ناخن مینیمال", category: "ناخن", gradient: "from-rose-soft-100 via-gold-100 to-cream-100", emoji: "💅" },
  { id: 6, title: "هایلایت سرد", category: "رنگ مو", gradient: "from-plum-300 via-rose-soft-200 to-rose-soft-100", emoji: "🎨" },
  { id: 7, title: "میکاپ عروس لوکس", category: "عروس", gradient: "from-cream-200 via-rose-soft-100 to-gold-200", emoji: "✨" },
  { id: 8, title: "کراتینه و صافی", category: "مو", gradient: "from-gold-100 via-cream-100 to-rose-soft-100", emoji: "🌟" },
  { id: 9, title: "ژلیش ناخن", category: "ناخن", gradient: "from-rose-soft-200 via-rose-soft-300 to-gold-200", emoji: "💖" },
  { id: 10, title: "فیشیال تخصصی", category: "پوست", gradient: "from-cream-100 via-rose-soft-100 to-rose-soft-200", emoji: "🌸" },
  { id: 11, title: "آمبره بلوز", category: "رنگ مو", gradient: "from-plum-300 via-plum-200 to-rose-soft-200", emoji: "🌊" },
  { id: 12, title: "لیفت مژه", category: "میکاپ", gradient: "from-rose-soft-100 via-plum-100 to-cream-100", emoji: "👁️" },
];

export const galleryCategories = [
  "همه",
  "مو",
  "رنگ مو",
  "میکاپ",
  "عروس",
  "ناخن",
  "پوست",
];
