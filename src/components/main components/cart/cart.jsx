//stylesheets
import useCart from "../../../functions/getCart.jsx";
import "../../../style/main-cart/cart.css";
//functions
import returnCarts from "../../../functions/returnCarts";
//modules
import { useState, useContext, useEffect } from "react";
//components
import PrevPage from "../index/prevPage";
import NextPage from "../index/nextPage";
import CancelBuy from "./cancelBuy";
import FinishBuy from "./finishBuy";
import { Helmet } from "react-helmet";
import { AppContext } from "../../../../AppContext";


function CartContainer() {
  const {globalState} = useContext(AppContext)
  const {online, userData} = globalState
  useEffect(() => {
    if(!globalState.loading && !online) {
      location.replace("/")
    }
  }, [globalState.loading, online, userData])


  const [page, setPage] = useState(1);
  const { carts, loading, change, setChange } = useCart();
  const cartsLength = carts && carts.statusCode === 200 ? carts.message.length : 0
  const nextExists = page < Math.ceil(cartsLength / 3) ? page : null
  const pageManager = {
    prevPage: page - 1 ? page -1 : null,
    nextPage: nextExists
  }

  function prev() {
    const prevPage = Number(page) - 1
    setPage(prevPage)
  }

  function next() {
    const nextPage = Number(page) + 1
    setPage(nextPage)
  }

  return (
    <div className="main-cart">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <div className="background-cart">
        {loading && <></>}
        {carts?.statusCode === 404 && (
          <h1>You don't have anything in cart, let's buy something!</h1>
        )}
        {carts?.statusCode === 200 && returnCarts(carts.message, page, change, setChange)}
      </div>
      <section className="pages-cart">
        <CancelBuy carts={cartsLength} change={change} setChange={setChange}/>
        <PrevPage page={pageManager} prev={prev}/>
        <NextPage page={pageManager} next={next}/>
        <FinishBuy carts={cartsLength}/>
      </section>
    </div>
  );
}

export default CartContainer;
