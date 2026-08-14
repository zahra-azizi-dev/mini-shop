"use client";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import ProductCard from "../components/ProductCard";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://6a6f2351a7e173d95e457736.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const likedProducts = products.filter((item) => favorites.includes(item.id));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {likedProducts.map((val, i) => {
       return <ProductCard key={i} product={val} />;
      })}
    </div>
  );
}
