import { useEffect, useState } from "react";
import { path} from "../../port.js";

function useMyProducts(setMyProducts){
  const [loading, setLoading] = useState(true)
  const [change, setChange] = useState(true)

  useEffect(() => {
    async function getCarts() {
      let prods = await fetch(`${path}/api/products/me`,{
        method: "GET",
        credentials: "include"
      })
      prods = await prods.json()
      if(prods.statusCode === 200) {
        setMyProducts(prods.message)
        setLoading(false)
      }else {
        setMyProducts(null)
        setLoading(false)
      }
    }

    getCarts()
    
  }, [change])

  return {loading, change, setChange}
}

export default useMyProducts