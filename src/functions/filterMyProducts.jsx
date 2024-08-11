import { useState, useEffect } from "react";
import { path } from "../../port";

async function useFilterMyProducts(title) {
  let arrayOfProducts = await fetch(`${path}/api/products/me`, {
    method: "GET",
    credentials: "include",
  });
  arrayOfProducts = await arrayOfProducts.json();
  if (arrayOfProducts.statusCode === 200) {
    const products = arrayOfProducts.message;
    const filt = products.filter((product) => product.title.includes(title));
    return filt;
  }
  return null
}

export default useFilterMyProducts;
