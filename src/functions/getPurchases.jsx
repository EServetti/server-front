import { useEffect, useState } from "react";
import { path} from "../../port.js";

function usePurchases(){
  const [carts, setCarts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getCarts() {
      let carts = await fetch(`${path}/api/tickets?state=paid`,{
        credentials: "include"
      })
      carts = await carts.json()
      if(carts.statusCode === 200) {
        setCarts(carts)
        setLoading(false)
      }else {
        setCarts(null)
        setLoading(false)
      }
    }

    getCarts()
    
  }, [])

  return {carts, loading}
}

export default usePurchases