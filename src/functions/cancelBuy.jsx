import { port } from "../../port";
import Swal from "sweetalert2";

async function cancelBuy(_id, change, setChange) {
  console.log(_id);
  const data = {
    _id: _id
  }
  let canceled = await fetch(`http://localhost:${port}/api/carts/all`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  canceled = await canceled.json();
  if (canceled.statusCode === 200) {
    Swal.fire({
      title: canceled.message,
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    }).then(() => {
      setChange(!change)
    })
  } else {
    Swal.fire({
      title: canceled.message,
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    }).then(() => {
      location.replace("/")
    })
  }
}

export default cancelBuy;
