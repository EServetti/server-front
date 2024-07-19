import deleteCart from "../../../functions/deleteCart";
import update from "../../../functions/updateQuant";
import "../../../style/main-cart/singleCart.css";

function Cart({ title, img, price, quantity, _id, change, setChange }) {
  const inputId = `change-quantity-${_id}`

  function handleDel() {
    deleteCart(_id, change, setChange)
  }

  function handleUpd() {
    update(quantity, _id, inputId, change, setChange)
  }

  return (
    <div className="single-cart">
      <img className="cart-image" src={img} />
      <section className="cart-info">
        <h3>{title}</h3>
        <h4>${price}</h4>
        <h4>The quantity of: {quantity}</h4>
        <section className="update-cart-section">
        <input id={inputId} className="change-quantity" type="number" placeholder="change quantity" min={1}/>
        <button className="update-button" onClick={handleUpd}>change</button>
        </section>
      </section>
      <button className="delete-cart" onClick={handleDel}>Delete</button>
    </div>
  );
}

export default Cart;
