import { path } from "../../port";
import Swal from "sweetalert2";

async function cancelBuy(change, setChange) {
  let canceled = await fetch(`${path}/api/carts/all`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
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
