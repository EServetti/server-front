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
import { Helmet } from "react-helmet";
import fetchFinish from "../../../functions/finishBuyFunction.jsx";

function FinishBuyCont() {
  const { globalState } = useContext(AppContext)
  const {online, userData } = globalState
  useEffect(() => {
    if(!globalState.loading && !online ){
      location.replace("/")
    }
  },[globalState.loading, online, userData])


  const { carts, loading } = useFinishCarts();
  const { total, load } = useTotal();

  function handleClick() {
    fetchFinish()
  }
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
      <button
          className="pay-button"
          onClick={handleClick}
        >
          PAY
        </button>
    </div>
  );
}

export default FinishBuyCont;
