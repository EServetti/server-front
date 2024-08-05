import { useEffect, useState } from "react";
import { path} from "../../port.js";

function useCart(){
  const [carts, setCarts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [change, setChange] = useState(false)

  useEffect(() => {
    async function getCarts() {
      let carts = await fetch(`${path}/api/tickets`,{
        credentials: "include"
      })
      carts = await carts.json()
      setCarts(carts)
      setLoading(false)
    }

    getCarts()
    
  }, [change])

  return {carts, loading, change, setChange}
}

export default useCart