"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    src: "/banners/banner-1.jpg",
    alt: "Mobiles sale",
    href: "/category/mobiles",
  },
  {
    id: 2,
    src: "/banners/banner-2.jpg",
    alt: "Laptops offers",
    href: "/category/laptops",
  },
  {
    id: 3,
    src: "/banners/banner-3.jpg",
    alt: "Fashion deals",
    href: "/category/fashion",
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto scroll
  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="">
      <div className="relative max-w-6xl mx-auto rounded overflow-hidden">
        {/* Slides container */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <a
              key={slide.id}
              href={slide.href}
              className="relative min-w-full shrink-0 h-[160px] sm:h-[220px] md:h-[280px]"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                className="object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </a>
          ))}
        </div>

        {/* Gradient bottom overlay (optional) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Prev / next buttons */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white"
          aria-label="Previous slide"
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white"
          aria-label="Next slide"
        >
          <FiChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
