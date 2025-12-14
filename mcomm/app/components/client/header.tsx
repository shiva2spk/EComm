"use client";

import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";
import Container from "../ui/Container";

export default function Header() {
  const [search, setSearch] = useState("");


  return (
    <Container>
        <header className="w-full p-2 border-b border-gray-200 bg-white flex items-center justify-between px-3 sm:px-4 lg:px-6 gap-2 sm:gap-4">
        {/* Logo */}
            <Link
            href="/"
            className="flex items-center gap-1 shrink-0"
            >
            <img
                src="/logo.png"
                alt="Logo"
                className="h-7 w-auto sm:h-8"   // mobile chota, sm+ thoda bada
            />
            <span className="hidden sm:inline text-res font-bold text-gray-900">
                Shopmart
            </span>
            </Link>


        {/* Search + icon button */}
        <div className="flex h-9 sm:h-10 items-stretch rounded-md border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 overflow-hidden
        text-res">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="flex-1 min-w-0 px-3 text-xs text-res outline-none border-none w-full h-full"
            />
            <button
                type="submit"
                className="w-8 sm:w-10 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition outline-none border-none"
                aria-label="Search"
            >
                <FiSearch className="text-sm sm:text-base" />
            </button>
            </div>



        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-4 text-res font-medium text-gray-700">
            <Link href="/login" className="hover:text-blue-600 text-res">
            Login
            </Link>|
            <Link href="/register" className="hover:text-blue-600 text-res">
            Register
            </Link>


            <Link
            href="/cart"
            className="relative flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition"
            >
            <FiShoppingCart className="text-base text-gray-700 text-res" />
            <span className="hidden sm:inline">Cart</span>
            <span className="absolute -top-1 -right-1 h-4 sm:h-5 min-w-4 sm:min-w-5 px-0.5 sm:px-1 rounded-full bg-red-500 text-[10px] sm:text-[12px] text-white flex items-center justify-center">
                0
            </span>
            </Link>
        </div>
        </header>
    </Container>
  );
}
