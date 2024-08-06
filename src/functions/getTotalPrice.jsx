import { useEffect, useState } from "react";
import { path} from "../../port.js";


function useTotal(_id) {
  const [total, setTotal] = useState(null);
  const [load, setLoading] = useState(true);


  useEffect(() => {

    async function getTotal(_id) {
      const data = {
        uid: _id,
      };
      let total = await fetch(`${path}/api/tickets/total?state=reserved`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      total = await total.json();
      setTotal(total.message[0].total);
      setLoading(false);
    }

    getTotal(_id);
  }, []);

  return { total, load };
}

export default useTotal;
