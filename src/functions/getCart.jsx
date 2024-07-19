import { useEffect, useState } from "react";
import { port } from "../../port.js";

function useCart(_id){
  const [carts, setCarts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [change, setChange] = useState(false)

  useEffect(() => {
    async function getCarts(_id) {
      let carts = await fetch(`http://localhost:${port}/api/tickets/${_id}`,{
        credentials: "include"
      })
      carts = await carts.json()
      setCarts(carts)
      setLoading(false)
    }

    getCarts(_id)
    
  }, [change])

  return {carts, loading, change, setChange}
}

export default useCart