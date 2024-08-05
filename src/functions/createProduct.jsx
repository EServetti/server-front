import { path} from "../../port";
import Swal from "sweetalert2";

async function createProduct(product) {
  let response = await fetch(`${path}/api/products`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product)
  })
  response = await response.json()
  if(response.statusCode !== 201){
    Swal.fire({
      title: response.message,
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    })
  } else {
    Swal.fire({
      title: `The product ${response.message.title} has been created!`,
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    })
    return response;
  }
}

export default createProduct