import { useEffect, useState } from "react";
import { path} from "../../port.js";

function useMyProducts(){
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getCarts() {
      let prods = await fetch(`${path}/api/products/me`,{
        method: "GET",
        credentials: "include"
      })
      prods = await prods.json()
      if(prods.statusCode === 200) {
        setProducts(prods)
        setLoading(false)
      }else {
        setProducts(null)
        setLoading(false)
      }
    }

    getCarts()
    
  }, [])

  return {products, loading}
}

export default useMyProducts