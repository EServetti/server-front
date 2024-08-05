import { path } from "../../port.js";
import Swal from "sweetalert2";

async function deleteCart(_id, change, setChange) {
  try {
    let deleted = await fetch(`${path}/api/carts/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    deleted = await deleted.json();
    if (deleted.statusCode === 200) {
      Swal.fire({
        title: deleted.message,
        confirmButtonText: "Accept",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonColor: "#466365",
      }).then(() => {
        setChange(!change)
      });
    } else {
      Swal.fire({
        title: deleted.message,
        confirmButtonText: "Accept",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonColor: "#466365",
      }).then(() => {
        location.replace("/")
      })
    }
  } catch (error) {
    console.log(error);
  }
}

export default deleteCart;
