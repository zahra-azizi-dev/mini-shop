"use client";
import { createContext, useState, useContext } from "react";
export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorite(productId) {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const isLiked = favorites.includes(productId);
  function toggleFavorite() {
    if (isLiked) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  }
  return{isLiked,toggleFavorite}
}
