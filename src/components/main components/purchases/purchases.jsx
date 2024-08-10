import { useEffect, useContext } from "react";
import "../../../style/main-purchases/purchases.css";
import usePurchases from "../../../functions/getPurchases";
import { AppContext } from "../../../../AppContext";
import PurchaseCart, { returnPurchasesCart } from "./purchaseCart";
import { Helmet } from "react-helmet";

function Purchases() {
  const { globalState } = useContext(AppContext);
  const { online, userData } = globalState;
  useEffect(() => {
    if (!globalState.loading && !online) {
      location.replace("/");
    }
  }, [globalState.loading, online, userData]);

  const { carts, loading } = usePurchases();

  return (
    <div className="main-purchases">
      <Helmet>
        <title>Purchases</title>
      </Helmet>
      <h1 className="purchases-top">Your purchases</h1>
      <section className="purchases-section">
        {loading ? <h3>loading</h3> : carts?  returnPurchasesCart(carts.message) : <h2 className="not-purchases">You haven't bought anything</h2>}
      </section>
      <section className="purchases-info">
        <h1>Delivery Information</h1>
        <p>Deliveries are made on business days and typically take between 5 to 15 days to arrive. You will receive an email notification once your delivery has been completed. If you encounter any issues or have any questions, please contact us at everithingforyourhome@gmail.com.</p>
      </section>
    </div>
  );
}

export default Purchases;
