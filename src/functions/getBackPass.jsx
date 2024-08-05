import Swal from "sweetalert2";
import { path } from "../../port";

//Funcion que envia el mail de recuperacion
function sendRecoverMail() {
  const email = document.querySelector("#email").value;
  if (!email || !email.includes("@")) {
    Swal.fire({
      title: "Please enter your email",
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    });
  } else {
    async function sendRecover(email) {
      const data = {
        email
      }
      let change = await fetch(
        `${path}/api/sessions/password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        }
      );
      change = await change.json()
      Swal.fire({
        title: change.message,
        confirmButtonText: "Accept",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonColor: "#466365",
      });
    }
    sendRecover(email)
  }
}


// funcion que actualiza la nueva contraseña
export function useChangePass(uid) {
  const password = document.querySelector("#pass").value
  const password_2 = document.querySelector("#pass-2").value

  if(!password){
    Swal.fire({
      title: "Please enter the passwords!",
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    });
  } else if (password !== password_2) {
    Swal.fire({
      title: "The passwords must be the same!",
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    });
  } else {
    async function changePass(uid, password) {
      const data = {
        uid,
        password
      }
      let change = await fetch(
        `${path}/api/sessions/password`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        }
      );
      change = await change.json()
      if(change.statusCode === 200){
        Swal.fire({
          title: "The password has been changed!",
          confirmButtonText: "Accept",
          timer: 5000,
          timerProgressBar: true,
          confirmButtonColor: "#466365",
        }).then(() => {
          location.replace("/login")
        })
      } else {
        Swal.fire({
          title: change.message,
          confirmButtonText: "Accept",
          timer: 5000,
          timerProgressBar: true,
          confirmButtonColor: "#466365",
        })
      }
    }
    changePass(uid, password)
    
  }
}
export default sendRecoverMail;
