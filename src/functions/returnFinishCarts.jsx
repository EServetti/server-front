import FinishCart from "../components/main components/finish buy/finishCart";

function returnFinishCarts(arrayOfCarts) {

  return arrayOfCarts.map((cart) => (
    <FinishCart
      title={cart.title}
      photo={cart.photo}
      quantity={cart.quantity}
      subTotal={cart.subTotal}
      _id={cart._id}
      description={cart.description}
      key={cart._id}
    />
  ));
}

export default returnFinishCarts;
