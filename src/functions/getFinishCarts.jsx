import { useEffect } from "react";
import { useState } from "react";
import { port } from "../../port.js";


function useFinishCarts(_id) {
  const [carts, setCarts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCarts(_id) {
      let carts = await fetch(`http://localhost:${port}/api/tickets/${_id}`, {
        credentials: "include",
      });
      carts = await carts.json();
      setCarts(carts.message);
      setLoading(false);
    }

    getCarts(_id);
  }, []);
  return { carts, loading };
}

export default useFinishCarts;
