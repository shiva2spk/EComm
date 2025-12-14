"use client";

import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Container from "../ui/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
    <header className="border-b bg-white border-gray-300">
  <div className="h-11 sm:h-12 flex items-center justify-between px-3 lg:px-6 max-w-6xl mx-auto">
    
    {/* Category links (desktop) */}
    <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-700">
      <Link href="/category/mobiles" className="hover:text-blue-600">
        Mobiles
      </Link>
      <Link href="/category/laptops" className="hover:text-blue-600">
        Laptops
      </Link>
      <Link href="/category/fashion" className="hover:text-blue-600">
        Fashion
      </Link>
      <Link href="/category/grocery" className="hover:text-blue-600">
        Grocery
      </Link>
    </nav>

    {/* Mobile menu toggle (right) */}
    <button
      type="button"
      className="md:hidden inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 hover:bg-gray-100"
      onClick={() => setOpen((v) => !v)}
      aria-label="Toggle navigation"
    >
      {open ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
    </button>
  </div>

  {/* Mobile menu (4 categories) */}
  {open && (
    <div className="md:hidden border-t bg-white">
      <nav className="px-4 py-3 space-y-2 text-res font-medium text-gray-700">
        <Link href="/category/mobiles" className="block py-1 hover:text-blue-600">
          Mobiles
        </Link>
        <Link href="/category/laptops" className="block py-1 hover:text-blue-600">
          Laptops
        </Link>
        <Link href="/category/fashion" className="block py-1 hover:text-blue-600">
          Fashion
        </Link>
        <Link href="/category/grocery" className="block py-1 hover:text-blue-600">
          Grocery
        </Link>
      </nav>
    </div>
  )}
    </header>
</Container>
  );
}
