import { path } from "../../port.js"
import { useState, useEffect } from "react"

function useProduct(_id) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function seeProduct(_id) {
      let prod = await fetch(`${path}/api/products/${_id}`)
      prod = await prod.json()
      setProduct(prod)
      setLoading(false)
    }
    seeProduct(_id)
  },[])
  return {product, loading}
}


export default useProduct