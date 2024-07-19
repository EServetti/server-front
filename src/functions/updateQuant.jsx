import Swal from "sweetalert2";
import { port } from "../../port";

async function update(quantity, _id, inputId, change, setChange) {
  const quant = document.querySelector(`#${inputId}`).value
  if(quant === "" || quant == quantity) {
    Swal.fire({
      title: "You must enter the new quantity!",
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    })
  }else {
    const data = {
      quantity: quant
    }
    let updated =await fetch(`http://localhost:${port}/api/carts/${_id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    updated = await updated.json()
    if(updated.statusCode === 200){
      setChange(!change)
    } else {
      Swal.fire({
        title: updated.message,
        confirmButtonText: "Accept",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonColor: "#466365",
      }).then(() => {
        location.replace("/")
      })
    }
  }
}

export default update