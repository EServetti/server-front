import useMyProducts from "../../../functions/getMyProducts"
import { changeMyProduct, deleteMyProduct } from "../../../functions/manageMySingleCart"
import "../../../style/product.css"

function MyProductCreate({_id, title, photo, price, description, stock, change, setChange}) {
  const stockId = `inp-stock${_id}`
  const priceId = `inp-price${_id}`
  function handleChanges() {
    changeMyProduct(stockId, priceId, _id, change, setChange)
  }
  function handleDelete() {
    deleteMyProduct(_id, change, setChange)
  }
    return (
      <div className="my-product">
        <h3>{title}</h3>
        <img src={photo} alt={`Immage of product ${title}`}/>
        <h3 className="my-product-stock">$USD {price} <input id={priceId} className="inp-stock" placeholder="change price" type="number" min="0"/></h3>
        <h3 className="my-product-stock">stock: {stock} <input id={stockId} className="inp-stock" placeholder="change stock" type="number" min="0"/></h3>
        <button onClick={handleChanges} className="change-my-product">Send changes</button>
        <h3 className="_id">{_id}</h3>
        <p className="description">{description}</p>
        <button onClick={handleDelete} className="delete-my-product">Delete Product</button>
      </div>
    )
  }

export default MyProductCreate