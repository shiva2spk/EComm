"use client";

import Link from "next/link";

type ProductCardProps = {
  id: string | number;
  name: string;
  price: number;
  mrp?: number;
  image: string;
  href?: string;
  rating?: number;
  ratingCount?: number;
  badge?: "NEW" | "BESTSELLER" | "TRENDING" | string;
};

export default function ProductCard({
  id,
  name,
  price,
  mrp,
  image,
  href = `/product/${id}`,
  rating,
  ratingCount,
  badge,
}: ProductCardProps) {
  const hasDiscount = mrp && mrp > price;
  const discountPercent = hasDiscount ? Math.round(((mrp - price) / mrp) * 100) : null;

  return (
    <Link
  href={href}
  className="group flex flex-col rounded-lg sm:rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md hover:border-blue-500 transition h-[300px] sm:h-[340px] md:h-[360px]"
>
  {/* Image section - taller for mobile */}
  <div className="relative h-[160px] sm:h-[200px] md:h-[220px] bg-gray-50">
    <img
      src={image}
      alt={name}
      className="h-full w-full object-contain p-2 sm:p-3 group-hover:scale-105 transition-transform duration-200"
    />
    {/* badges same */}
  </div>

  {/* Content - more bottom space */}
  <div className="flex flex-col flex-1 px-2 pb-3 pt-2 sm:px-3 sm:pb-4 sm:pt-2.5">
    {/* Name */}
    <div className="min-h-[2.2rem] sm:min-h-[2.5rem] md:min-h-[3rem]">
      <h3 className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-gray-900 line-clamp-2 leading-tight">
        {name}
      </h3>
    </div>

    {/* Rating */}
    <div className="h-4 sm:h-5 mt-1.5 flex items-center">
      {rating !== undefined && (
        <div className="flex items-center gap-1">
          <span className="inline-flex items-center rounded-sm bg-green-600 px-1 py-px text-[9px] sm:text-[10px] font-semibold text-white">
            {rating.toFixed(1)}
            <span className="ml-0.5 text-[8px] sm:text-[9px]">★</span>
          </span>
          {ratingCount !== undefined && (
            <span className="text-[10px] sm:text-[11px] text-gray-500 ml-1">
              ({ratingCount.toLocaleString()})
            </span>
          )}
        </div>
      )}
    </div>

    {/* Price */}
    <div className="h-5 sm:h-6 mt-1.5 flex items-baseline gap-1 sm:gap-2">
      <span className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-gray-900">
        ₹{price.toLocaleString("en-IN")}
      </span>
      {hasDiscount && (
        <>
          <span className="text-[11px] sm:text-[12px] text-gray-400 line-through">
            ₹{mrp!.toLocaleString("en-IN")}
          </span>
          {discountPercent && (
            <span className="text-[10px] sm:text-[11px] font-semibold text-green-600">
              {discountPercent}% off
            </span>
          )}
        </>
      )}
    </div>

    {/* Spacer */}
    <div className="flex-1 min-h-[1rem]" />

    {/* CTA */}
    <button
      type="button"
      className="mb-1 h-8 sm:h-9 inline-flex items-center justify-center rounded-md border border-blue-600 px-2 sm:px-3 text-[11px] sm:text-[12px] font-medium text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition"
    >
      Add to cart
    </button>
  </div>
</Link>

  );
}
