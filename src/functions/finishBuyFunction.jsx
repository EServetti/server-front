import Swal from "sweetalert2";
import { path } from "../../port";

async function fetchFinish() {
  let res = await fetch(`${path}/api/payment/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });
  res = await res.json();
  if(res.statusCode === 200){
    location.replace(res.message)
  } else {
    Swal.fire({
      title: res.message,
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    });
  }
}

export default fetchFinish;
