"use client";

import { useState } from "react";

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  gradient: string;
  emoji: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
  categories: string[];
};

export default function GalleryGrid({ items, categories }: GalleryGridProps) {
  const [active, setActive] = useState("همه");

  const filtered =
    active === "همه" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
              active === cat
                ? "bg-gradient-to-l from-rose-soft-500 to-gold-400 text-white shadow-md"
                : "bg-white text-plum-700 ring-1 ring-rose-soft-200 hover:bg-rose-soft-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="card-glow group relative aspect-square overflow-hidden rounded-3xl"
          >
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br text-6xl ${item.gradient}`}
            >
              <span className="transition-transform duration-500 group-hover:scale-125">
                {item.emoji}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-plum-950/90 to-transparent p-4 pt-10 transition-transform duration-300 group-hover:translate-y-0">
              <div className="text-sm font-bold text-white">{item.title}</div>
              <div className="text-xs text-rose-soft-200">{item.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
