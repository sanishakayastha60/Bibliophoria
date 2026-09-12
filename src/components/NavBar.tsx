"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, Menu, X } from "lucide-react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative m-4 rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div
          id="left"
          className="font-bold text-xl text-[var(--secondary-brand)]"
        >
          <Link href="#">Bibliphoria</Link>
        </div>
        <div id="right">
          <ul className="hidden md:flex gap-4">
            <li>
              <Link
                href="#"
                className="relative text-[var(--primary-text)] transition-colors after:duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--secondary-brand)] hover:after:-bottom-1 hover:after:w-full hover:text-[var(--secondary-brand)]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-[var(--primary-text)] transition-colors after:duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--secondary-brand)] hover:after:-bottom-1 hover:after:w-full hover:text-[var(--secondary-brand)]"
              >
                Library
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-[var(--primary-text)] transition-colors after:duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--secondary-brand)] hover:after:-bottom-1 hover:after:w-full hover:text-[var(--secondary-brand)]"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 relative text-[var(--primary-text)] transition-colors after:duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--secondary-brand)] hover:after:-bottom-1 hover:after:w-full hover:text-[var(--secondary-brand)]"
              >
                <Plus size={22} />
                Add New
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="md:hidden relative z-10 p-2 pointer-events-auto "
          type="button"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 z-50 w-full rounded-2xl bg-white p-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="#"
                className="relative text-[var(--primary-text)] transition-colors after:duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--secondary-brand)] focus:after:-bottom-1 focus:after:w-full focus:text-[var(--secondary-brand)]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-[var(--primary-text)] transition-colors after:duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--secondary-brand)] focus:after:-bottom-1 focus:after:w-full focus:text-[var(--secondary-brand)]"
              >
                Library
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative text-[var(--primary-text)] transition-colors after:duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--secondary-brand)] focus:after:-bottom-1 focus:after:w-full focus:text-[var(--secondary-brand)]"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center relative text-[var(--primary-text)] transition-colors after:duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--secondary-brand)] focus:after:-bottom-1 focus:after:w-full focus:text-[var(--secondary-brand)]"
              >
                <Plus size={18} />
                Add New
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
