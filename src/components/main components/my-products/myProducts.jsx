import "../../../style/main-my-products/myProducts.css"
import { Helmet } from "react-helmet"
import { manageIndex } from "../../../functions/managerIndex"
import useMyProducts from "../../../functions/getMyProducts"
import { returnMyProducts } from "../../../functions/manageMyProducts"

function myProducts() {
  const {loading, products} = useMyProducts()
  return (
    <div className="main-my-products">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <h1 className="top-my-products">My products</h1>
      <section className="my-prodcuts-section">
        {loading ? <h3>Loading...</h3> : !products ? <h3>You haven't created any product yet!</h3> : returnMyProducts(products.message)}
      </section>
      <section className="my-product-info">
        <p>Are you having any issue with your ptoducts? contact us at everithingforyourhome@gmail.com</p>
      </section>
    </div>
  )
}

export default myProducts