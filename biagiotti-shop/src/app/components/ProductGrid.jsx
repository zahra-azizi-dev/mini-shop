"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import ProductModal from "./ProductModal";
export default function ProductGrid({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-1 md:gap-4 md:p-6">
        {products.slice(0, 6).map((val, i) => (
          <ProductCard
            key={i}
            product={val}
            onView={() => setSelectedProduct(val)}
          />
        ))}
        <div className="relative col-span-2 row-span-2 overflow-hidden rounded">
          <Image
            src="/download.jpg"
            alt="Perfect Shades"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white">
            <span className="text-sm uppercase tracking-wide">make up</span>
            <h2 className="text-2xl font-semibold">Perfect Shades</h2>
          </div>
        </div>

        {products.slice(6, 12).map((val, i) => (
          <ProductCard
            key={i + 6}
            product={val}
            onView={() => setSelectedProduct(val)}
          />
        ))}
        <div className="relative col-span-2 row-span-2 overflow-hidden rounded">
          <Image
            src="/dior.jpg"
            alt="Rose Heaven"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white">
            <span className="text-sm uppercase tracking-wide">make up</span>
            <h2 className="text-2xl font-semibold">Rose Heaven</h2>
          </div>
        </div>

        {products.slice(12).map((val, i) => (
          <ProductCard
            key={i + 12}
            product={val}
            onView={() => setSelectedProduct(val)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
