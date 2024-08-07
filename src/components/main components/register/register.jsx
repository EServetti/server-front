import { useEffect, useState } from "react";
import "../../../style/main-register/register.css";
import handleClick from "../../../functions/manageRegister.jsx";
import LogGoogle from "../login/googleButton.jsx"
import { Helmet } from "react-helmet";
import { useContext } from "react";
import {AppContext} from "../../../../AppContext.jsx"

// document.querySelector();
function Register() {
  const [passView, setPassView ] = useState(false)
  const {globalState} = useContext(AppContext)
  const {online} = globalState
  useEffect(() => {
    if(online){
      location.replace("/")
    }
  }, [online])
  

  useEffect(() => {
    document.querySelector("#register").addEventListener("click", handleClick);

    return document.removeEventListener("click", handleClick);
  }, []);

  function managePass(e) {
    e.preventDefault()
    setPassView(!passView)
  }

  return (
    <div className="main-register">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <span className="register-title">Welcome to our store</span>
      <section className="register-box">
        <form>
          <p>Register</p>
          <span className="email-name">
            <input type="text" id="email" placeholder="email" />
            <input type="text" id="name" placeholder="name" />
          </span>
          <span className="passwords">
            <span className="pass-register-span">
            <input type={ !passView ? "password" : "text"} id="password" placeholder="password" />
            <button onClick={managePass}>
              <img src={ !passView ? "/img/hide.png" : "/img/view.png"}/>
            </button>
            </span>
            <input
              type={ !passView ? "password" : "text"}
              id="password-2"
              placeholder="repeat the password"
            />
          </span>
          <button type="button" id="register">
            Create your account
          </button>
        </form>
        <p>or</p>
        <LogGoogle/>
      </section>
    </div>
  );
}

export default Register;
