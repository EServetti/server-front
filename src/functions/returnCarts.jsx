import { useState } from "react";
import Cart from "../components/main components/cart/singleCart";

function returnCarts(arrayOfCarts, page, change, setChange) {

  const large = arrayOfCarts.length
  for (let i = 0; i < large; i += 3) {
    const pageNumber = Math.floor(i / 3) + 1;
    for (let p = i; p < i + 3 && p < large; p++) {
      arrayOfCarts[p].page = pageNumber;
    }
  }
  const currentPage = arrayOfCarts.filter((c) => c.page === page)

  return currentPage.map((cart) => (
    <Cart
      key={cart._id}
      title={cart.title}
      img={cart.photo}
      price={cart.subTotal}
      quantity={cart.quantity}
      _id={cart._id}
      change={change}
      setChange={setChange}
    />
  ));
}

export default returnCarts;
