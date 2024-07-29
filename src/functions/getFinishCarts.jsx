import { useEffect } from "react";
import { useState } from "react";
import { port } from "../../port.js";


function useFinishCarts() {
  const [carts, setCarts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCarts() {
      let carts = await fetch(`http://localhost:${port}/api/tickets`, {
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
