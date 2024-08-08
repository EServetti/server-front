import { path} from "../../port"
import Swal from "sweetalert2";

async function addToCart(_id, online) {


  const data = {
    product_id: _id,
    quantity: 1
  }
  let added = await fetch(`${path}/api/carts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data)
  });
  added = await added.json()
  if(added.statusCode === 201){
    Swal.fire({
      title: "The product was added to cart!",
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    })
  }
  //Si la sesión cerro se relodea la pagina
  else if(added.statusCode === 401 && online){
    Swal.fire({
      title: "You must log in first!",
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    }).then(() => {
      location.reload()
    })
  }else if(added.statusCode === 400) {
    Swal.fire({
      title: added.message,
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    })
  } else {
    Swal.fire({
      title: "You must log in first!",
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    })
  }
}
export default addToCart