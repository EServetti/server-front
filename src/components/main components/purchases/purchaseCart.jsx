function PurchaseCart({title, photo, quantity, subTotal, state, date}) {
  return (
      <div className="purchase-cart">
          <img className="purchase-img" src={photo}/>
          <section className="purchase-info">
              <section className="info-product-purchase">
              <h3>{title}</h3>
              <h3>The quantity of: {quantity}</h3>
              <h3>${subTotal}</h3>
              <h3>State: {state}</h3>
              <h3>Payment date: {date}</h3>
              </section>
          </section>
      </div>
  )
}

export function returnPurchasesCart(arrayOfCarts) {
  return arrayOfCarts.map((cart) => (
    <PurchaseCart
      key={cart.title}
      title={cart.title}
      photo={cart.photo}
      quantity={cart.quantity}
      subTotal={cart.subTotal}
      state={cart.state}
      date={cart.date}
    />
  ));
}

export default PurchaseCart