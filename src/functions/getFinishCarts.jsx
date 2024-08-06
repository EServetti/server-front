import { useEffect } from "react";
import { useState } from "react";
import { path } from "../../port.js";


function useFinishCarts() {
  const [carts, setCarts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCarts() {
      let carts = await fetch(`${path}/api/tickets?state=reserved`, {
        credentials: "include",
      });
      carts = await carts.json();
      setCarts(carts.message);
      setLoading(false);
    }

    getCarts();
  }, []);
  return { carts, loading };
}

export default useFinishCarts;
