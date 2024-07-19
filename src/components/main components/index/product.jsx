import "../../../style/product.css"
import ProductButton from "./productButton"

function Product({_id, title, photo, price}) {
    return (
      <div className="product">
        <h3>{title}</h3>
        <img src={photo} alt={`Immage of product ${title}`}/>
        <h3>${price}</h3>
        <h3 className="_id">{_id}</h3>
        <ProductButton _id={_id}/>
      </div>
    )
  }

export default Product