import Swal from "sweetalert2";
import { path } from "../../port.js";
import navigate from "../components/Link.jsx"

function handleClick() {
    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    const password_2 = document.querySelector("#password-2").value;

    if (password !== password_2) {
        Swal.fire({
          title: "Passwords must be equal!",
          confirmButtonText: "Accept",
          timer: 5000,
          timerProgressBar: true,
          confirmButtonColor: "#466365",
        });
    } else {
        const data = {
            email,
            password,
            name
        }
        registerUser(data);
    }
}

async function registerUser(data) {
    let register = await fetch(`${path}/api/sessions/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    register = await register.json();

    if (register.statusCode === 201) {
        Swal.fire({
            title: "We've sent you a verification mail",
            confirmButtonText: "Accept",
            timer: 5000,
            timerProgressBar: true,
            confirmButtonColor: "#466365",
        })
        return navigate("/login");
    } else {
        Swal.fire({
            title: register.message,
            confirmButtonText: "Accept",
            timer: 5000,
            timerProgressBar: true,
            confirmButtonColor: "#466365",
        });
    }
}
export default handleClick