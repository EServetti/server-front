import { useState } from "react";
import filterMyProducts from "../../../functions/filterMyProducts";
import useFilterMyProducts from "../../../functions/filterMyProducts";

function LookSingleProduct({setMyProducts}) {
   async function handleClick() {
    const title = document.querySelector("#title-inp").value
    const filtered = await useFilterMyProducts(title)
    setMyProducts(filtered)
   }
  
  return (
    <section className="look-products">
      <input
        type="text"
        placeholder="Write here the product you're looking for"
        id="title-inp"
      />
      <button onClick={handleClick}>
        <img src="/img/look.png" />
      </button>
    </section>
  );
}


export default LookSingleProduct