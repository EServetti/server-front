import addToCart from "../../../functions/addToCartFunction";

function AddToCart({_id, online}) {
  function handleClick() {
    addToCart(_id, online)
  }

  return (
    <button className="add-to-cart" onClick={handleClick}>
      Add to cart{" "}
      <img className="add-cart-immage" src="/img/shopping-cart.png" />
    </button>
  );
}

export default AddToCart