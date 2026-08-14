"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
export default function sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-black bg-[#e3d7bdd6] p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <aside
        className={`fixed top-0 left-0 w-64 h-screen z-40 flex flex-col gap-10 md:translate-x-0 transition-transform duration-300 tracking-wide bg-[#EEE2D2] ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div>
          <div className="mt-16 mb-5 ml-10 -ml-2 ">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
        <nav className="flex ml-10 flex-col gap-4 text-lg uppercase tracking-wide ">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/favorites">Favorites</Link>
        </nav>
        <div className="w-50 h-px bg-gray-400 mt-8 ml-4"></div>
        <div className="flex gap-4 ml-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </aside>
    </div>
  );
}
