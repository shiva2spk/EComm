"use client";

import Link from "next/link";
import { FiSmartphone, FiMonitor, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import Container from "../ui/Container";

const categories = [
  {
    id: 1,
    name: "Mobiles",
    href: "/category/mobiles",
    icon: FiSmartphone,
  },
  {
    id: 2,
    name: "Laptops & PCs",
    href: "/category/laptops",
    icon: FiMonitor,
  },
  {
    id: 3,
    name: "Fashion",
    href: "/category/fashion",
    icon: FiShoppingBag,
  },
  {
    id: 4,
    name: "Grocery",
    href: "/category/grocery",
    icon: FiShoppingCart,
  },
];

export default function TopCategories() {
  return (
    <section className="mt-6">
      <Container>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Top categories
          </h2>
          <Link
            href="/categories"
            className="text-xs sm:text-sm text-blue-600 hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-3 sm:px-4 sm:py-3 hover:border-blue-500 hover:bg-blue-50/60 transition-shadow duration-150 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="text-base sm:text-lg" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] sm:text-[15px] font-medium text-gray-900">
                    {cat.name}
                  </span>
                  <span className="text-[11px] sm:text-[12px] text-gray-500">
                    Shop now
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
