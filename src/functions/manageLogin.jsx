import Swal from "sweetalert2";
import { path } from "../../port.js";
import { navigate } from "../components/Link.jsx";


async function handleClick(globalState, setGlobalState) {

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const data = {
    email: email,
    password: password,
  };
  let logged = await fetch(`${path}/api/sessions/login`, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
  })
  logged = await logged.json()
  if (logged.statusCode === 200) {
    navigate("/")
  } else {
    Swal.fire({
      title: logged.message,
      confirmButtonText: "Accept",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#466365",
    });
  }
}

export default handleClick