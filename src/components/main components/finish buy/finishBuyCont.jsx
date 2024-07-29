//stylesheets
import "../../../style/main-finish/finish.css";
//modules
import { useState, useContext, useEffect } from "react";
import {AppContext} from "../../../../AppContext.jsx"
//functions
import returnFinishCarts from "../../../functions/returnFinishCarts";
import useFinishCarts from "../../../functions/getFinishCarts.jsx";
import useTotal from "../../../functions/getTotalPrice";
//components
import CreditCardInput from "../../../style/main-finish/cardInput";
import { Helmet } from "react-helmet";

function FinishBuyCont() {
  const [method, setMethod] = useState("");
  const { globalState } = useContext(AppContext)
  const {online, userData } = globalState
  useEffect(() => {
    if(!globalState.loading && !online ){
      location.replace("/")
    }
  },[globalState.loading, online, userData])


  const { carts, loading } = useFinishCarts();
  const { total, load } = useTotal();

  return (
    <div className="main-finish">
      <Helmet>
        <title>Finish</title>
      </Helmet>
      <h1 className="finish-title">Finish Buy</h1>
      <div className="finish-cont">
        {loading && ""}
        {carts && returnFinishCarts(carts)}
      </div>
      <section className="total-price">
        Total price: ${load ? "" : total}
      </section>
      <section className="payment">
        <h1>Payment Form</h1>
        <form id="payment-form" className="payment-form">
          <section className="customer-inputs">
            <h3>Personal data</h3>
            <input
              placeholder="Full name"
              type="text"
              id="fullName"
              name="fullName"
              required
            />

            <input
              placeholder="Tel number"
              type="tel"
              id="phone"
              name="phone"
              required
            />

            <input
              placeholder="Address"
              type="text"
              id="address"
              name="address"
              required
            />

            <input
              placeholder="City"
              type="text"
              id="city"
              name="city"
              required
            />

            <input
              placeholder="State/Province"
              type="text"
              id="state"
              name="state"
              required
            />

            <input
              placeholder="ZIP/Postal Code"
              type="text"
              id="zip"
              name="zip"
              required
            />

            <input
              placeholder="Country"
              type="text"
              id="country"
              name="country"
              required
            />
          </section>
          <section className="pay-contant">
            <select
              className="methods"
              type="text"
              id="methods"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="" disabled>
                Select a method
              </option>
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
              <option value="Paypal">Paypal</option>
            </select>
            <span className="method">
              {method}
              {method === "Visa" && (
                <img className="Visa" src="/img/visa.png" />
              )}
              {method === "Mastercard" && (
                <img className="Mastercard" src="/img/mastercard.png" />
              )}
              {method === "Paypal" && (
                <img className="Paypal" src="/img/paypal.png" />
              )}
            </span>
            <label for="card-number">Card number</label>
            <CreditCardInput />
            <label for="owner">Owner name</label>
            <input
              className="owner"
              id="owner"
              type="text"
              placeholder="as it appears on the card"
              required
            />
            <label for="expDate">Expiration date</label>
            <input className="expDate" id="expDate" type="date" required />
            <label for="cvv">CVV</label>
            <input className="cvv" id="cvv" type="number" required />
          </section>
        </form>
        <button
          className="pay-button"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          PAY
        </button>
      </section>
    </div>
  );
}

export default FinishBuyCont;
