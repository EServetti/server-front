import "../../../style/main-my-products/myProducts.css"
import { Helmet } from "react-helmet"
import { manageIndex } from "../../../functions/managerIndex"
import useMyProducts from "../../../functions/getMyProducts"
import { returnMyProducts } from "../../../functions/manageMyProducts"
import LookSingleProduct from "./lookSingleProduct"
import { useState, useContext, useEffect } from "react"
import { AppContext } from "../../../../AppContext"


function myProducts() {
  const [myProdcuts, setMyProducts] = useState(null)
  const {loading, change, setChange} = useMyProducts(setMyProducts)

  const { globalState } = useContext(AppContext)
  const {online, userData } = globalState
  useEffect(() => {
    if(!globalState.loading && !online || !globalState.loading && userData.role === "user" ){
      location.replace("/")
    }
  },[globalState.loading, online, userData])

  return (
    <div className="main-my-products">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <h1 className="top-my-products">My products</h1>
      <LookSingleProduct setMyProducts={setMyProducts}/>
      <section className="my-prodcuts-section">
        {loading ? <h3>Loading...</h3> : !myProdcuts ? <h3>You haven't created any product yet!</h3> : returnMyProducts(myProdcuts, change, setChange)}
      </section>
      <section className="my-product-info">
        <p>Are you having any issue with your ptoducts? contact us at everithingforyourhome@gmail.com</p>
      </section>
    </div>
  )
}

export default myProducts