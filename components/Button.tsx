import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all";
  const variants = {
    primary:
      "bg-gradient-to-l from-rose-soft-500 to-gold-400 text-white shadow-lg shadow-rose-soft-200 hover:scale-[1.03] hover:shadow-xl",
    outline:
      "border-2 border-rose-soft-300 text-rose-soft-600 hover:bg-rose-soft-50",
    ghost: "text-plum-700 hover:bg-rose-soft-50",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
