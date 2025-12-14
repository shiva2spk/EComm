"use client";

import Container from "../ui/Container";
import ProductCard from "./ProductCard";

const featured = [
  {
    id: "p1",
    name: "iPhone 15 Pro (256 GB, Blue Titanium)",
    price: 134900,
    mrp: 149900,
    image: "/products/iphone15pro.png",
    rating: 4.7,
    ratingCount: 1234,
    badge: "BESTSELLER",
  },
  {
    id: "p2",
    name: "ASUS TUF Gaming Laptop Ryzen 7, RTX 4060",
    price: 99999,
    mrp: 129999,
    image: "/products/asus-tuf.png",
    rating: 4.5,
    ratingCount: 876,
    badge: "TRENDING",
  },
  // With rating - NEW badge
  {
    id: "p3",
    name: "Samsung Galaxy S24 Ultra (512 GB, Titanium Gray)",
    price: 139999,
    mrp: 159999,
    image: "/products/samsung-s24.png",
    rating: 4.8,
    ratingCount: 2105,
    badge: "NEW",
  },
  // Without rating - discount only
  {
    id: "p4",
    name: "JBL Flip 6 Wireless Bluetooth Speaker (Black)",
    price: 7999,
    mrp: 9999,
    image: "/products/jbl-flip6.png",
    badge: "20% OFF",
  },
  // Without rating - MRP same (no discount)
  {
    id: "p5",
    name: "Sony WH-CH720N Wireless Noise Cancelling Headphones",
    price: 12990,
    image: "/products/sony-headphones.png",
  },
  // With rating - no badge
  {
    id: "p6",
    name: "Apple Watch Series 9 (45mm, GPS, Midnight)",
    price: 41900,
    mrp: 45900,
    image: "/products/applewatch9.png",
    rating: 4.6,
    ratingCount: 543,
  },
];


export default function FeaturedProducts() {
  return (
    <section className="mt-6">
      <Container>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Featured products
          </h2>
          <span className="text-xs sm:text-sm text-gray-500">
            Handpicked for you
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
