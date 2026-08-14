"use client";
import Image from "next/image";
import React from "react";
import { useFavorite } from "../context/FavoritesContext";
import { useContext } from "react";
import { Heart, Eye } from "lucide-react";
export default function ProductCard({ product, onView }) {
  const { isLiked, toggleFavorite } = useFavorite(product.id);
  return (
    <article className=" relative w-full group aspect-square overflow-hidden">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        unoptimized
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#EEE2D2]/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-lg font-semibold">${product.price}</span>
        <Heart
          onClick={toggleFavorite}
          fill={isLiked ? "red" : "none"}
          color="red"
          className="cursor-pointer"
        />
        <Eye onClick={onView} className="cursor-pointer" />
      </div>
      <h1 className="mt-2 text-center">{product.title}</h1>
      {/* <p>{product.price}</p> */}
    </article>
  );
}
