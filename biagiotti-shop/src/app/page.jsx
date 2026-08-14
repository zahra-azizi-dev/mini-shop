import React from "react";
import ProductGrid from "./components/ProductGrid";
import Sidebar from "./components/sidebar";
export default async function Page() {
  let response = await fetch(
    "https://6a6f2351a7e173d95e457736.mockapi.io/products",
  );
  const products = await response.json();
  console.log(products);
  console.log(products.length);
  // let products= data.products

  return (
 
 <div className="flex">
      <div className=" flex-1">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
