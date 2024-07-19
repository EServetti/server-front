
import Link, { navigate } from "../../Link"

function ProductButton({_id}) {

  const path = `product/${_id}`
  return(
    <Link to={path} className="see-product">See product</Link>
  )
}

export default ProductButton