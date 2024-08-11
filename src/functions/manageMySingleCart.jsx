import Swal from "sweetalert2";
import { path } from "../../port";

export async function changeMyProduct(stockId, priceId, _id, change, setChange) {
  const price = document.querySelector(`#${priceId}`).value
  const stock = document.querySelector(`#${stockId}`).value
  if(!stock && !price) {
    Swal.fire({
      title: "Please enter the new values",
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    });
  } else {
    const data = {}
    stock? data.stock = stock : null
    price? data.price = price : null    
    let updated = await fetch(`${path}/api/products/${_id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    updated = await updated.json()
    if (updated.statusCode === 200) {
      Swal.fire({
        title: "The product has been updated!",
        confirmButtonText: "Accept",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonColor: "#466365",
      });
      setChange(!change)
    } else {
      Swal.fire({
        title: updated.message,
        confirmButtonText: "Accept",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonColor: "#466365",
      });
    }
  }
}

export async function deleteMyProduct(_id, change, setChange) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to change this.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: "Yes, I'm sure",
    cancelButtonText: 'Cancel'
  }).then( async (result) => {
    if (result.isConfirmed) {
      let deleted = await fetch(`${path}/api/products/${_id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
      deleted = await deleted.json()
      if(deleted.statusCode === 200) {
        Swal.fire(
          'Product Deleted!',
          "The product has been deleted",
          'success'
        );
        setChange(!change)
      } else {
        Swal.fire({
          title: deleted.message,
          confirmButtonText: "Accept",
          timer: 5000,
          timerProgressBar: true,
          confirmButtonColor: "#466365",
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Canceled',
        'The products was not deleted',
        'error'
      );
    }
  });
}