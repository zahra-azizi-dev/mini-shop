import React from "react";
import Image from "next/image";
import { X, Heart } from "lucide-react";
import { useFavorite } from "../context/FavoritesContext";
export default function ProductModal({ product, onClose }) {
  const { isLiked, toggleFavorite } = useFavorite(product.id);
  return (
    <div
      className="fixed inset-0 bg-[#EEE2D2]/60 backdrop-blur-sm flex items-center justify-center "
      onClick={onClose}
    >
      <article
        onClick={(e) => e.stopPropagation()}
        className=" relative flex gap-7 max-w-3xl p-8 bg-amber-50 rounded-lg"
      >
        <button className="absolute top-2 left-2" onClick={onClose}>
          <X />
        </button>
        <div>
          <Image
            src={product.image}
            alt="product.title"
            width={350}
            height={300}
            unoptimized
            className="w-[350px] h-auto flex items-start rounded-2xl"
          />
        </div>
        <div className="flex-1 gap-4 mt-5">
          <h1 className="mt-2 text-3xl capitalize text-left ">
            {product.title}
          </h1>
          <p className="mt-2 text-lg">{product.description}</p>
          <div className="flex items-center gap-3 mt-3">
            <h3 className=" text-2xl">${product.price}</h3>
            <button
              onClick={toggleFavorite}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Heart fill={isLiked ? "red" : "none"} color="red" />
              <span>Add to Favorites</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
