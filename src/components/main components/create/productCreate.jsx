import "../../../style/product.css"

function ProductCreate({_id, title, photo, price, description, stock}) {
    return (
      <div className="product">
        <h3>{title}</h3>
        <img src={photo} alt={`Immage of product ${title}`}/>
        <h3>${price}</h3>
        <h3>stock: {stock}</h3>
        <h3 className="_id">{_id}</h3>
        <p className="description">{description}</p>
      </div>
    )
  }

export default ProductCreate