import { useContext } from "react";
import Link from "../Link";
import { AppContext } from "../../../AppContext";

function CartButton() {
  const {globalState, loading} = useContext(AppContext)
  const _id = globalState.userData._id
  const path = `/cart/${_id}`

  return (
    <Link to={path}>
      <img className="cart-nav" src="/img/shopping-cart.png" />
    </Link>
  );
}

export default CartButton;
