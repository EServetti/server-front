import { useContext } from "react";
import Link from "../Link";
import { AppContext } from "../../../AppContext";

function CartButton() {
  const path = `/cart`

  return (
    <Link to={path}>
      <img className="cart-nav" src="/img/shopping-cart.png" />
    </Link>
  );
}

export default CartButton;
