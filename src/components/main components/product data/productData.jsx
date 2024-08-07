//stylesheets
import "../../../style/main-product-data/productData.css";
//functions
import useProduct from "../../../functions/getProduct.jsx";
import AddToCart from "./addToCart";
import { useContext } from "react";
import { AppContext } from "../../../../AppContext";
import { Helmet } from "react-helmet";


function ProductDataCont({ routeParams }) {
  const { nid } = routeParams;
  const info = useProduct(nid);
  const { product, loading } = info;
  const prod = product ? product.message : null;

  const {globalState} = useContext(AppContext)
  const {online} = globalState

  return (
    <div className="main-product-data">
      <Helmet>
        <title>Product</title>
      </Helmet>
      <div className="product-box">
        <section className="product-info">
          <img
            className="product-img"
            src={loading ? "" : prod.photo}
            alt="product-img"
          />
          <section className="title-and-price">
            <h3>{loading ? "" : prod.title}</h3>
            <h3 className="product-category">
              Category: {loading ? "" : prod.category}
            </h3>
            <h3 className="product-price">{loading ? "" : `$USD ${prod.price}`}</h3>
          </section>
        </section>
        <section className="product-description">
          <p className="description">{loading ? "" : prod.description}</p>
          <span className="add-cart-span">
            Do you like it?{" "}
            <AddToCart _id={nid} online={online}/>
          </span>
        </section>
      </div>
    </div>
  );
}

export default ProductDataCont;
