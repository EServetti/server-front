import Swal from "sweetalert2"
import { path} from "../../port.js"

function useComplete() {
  const bithDate = document.querySelector("#birthdate").value
  const date = new Date(bithDate)
  const today = new Date()
  let age = today.getFullYear() - date.getFullYear()
  //Ajusta segun si cumplio ya los años o no
  const monthDiff = today.getMonth() - date.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
      age --;
  }

  const phone = document.querySelector("#phone").value

  if (!age || !phone) {
    Swal.fire({
      title: "Please enter at least phone number and birthdate",
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    });
  }else {
    async function completeAccount(age, phone) {

      const data = {
        age,
        phone,
        complete: true
      }
      let change = await fetch(`${path}/users`, {
        method: "PUT",
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      change = await change.json()
      if(change.statusCode === 200) {
        Swal.fire({
          title: change.message,
          confirmButtonText: "Accept",
          timer: 5000,
          timerProgressBar: true,
          confirmButtonColor: "#466365",
        }).then(() => {
          location.replace("/account")
        })
      } else {
        location.replace("/")
      }
    }
    completeAccount(age, phone)
  }
}

export default useComplete