import { useContext, useEffect, useState } from "react";
import "../../../style/main-login/login.css";
import handleClick from "../../../functions/manageLogin.jsx";
import LogGoogle from "./googleButton.jsx";
import Link from "../../Link.jsx"
import { Helmet } from "react-helmet";
import {AppContext} from "../../../../AppContext.jsx"

function Login() {
  const [passView, setPassView ] = useState(false)
  const {globalState} = useContext(AppContext)
  const {online} = globalState
  useEffect(() => {
    if(online){
      location.replace("/")
    }
  }, [online])
  
  useEffect(()=>{
    document.querySelector("#login").addEventListener("click", handleClick)
    return (
      document.removeEventListener("click", handleClick)
    )
  }, [])

  function managePass(e) {
    e.preventDefault()
    setPassView(!passView)
  }
  return (
    <div className="main-login">
    <Helmet>
      <title>Login</title>
    </Helmet>
      <span className="login-title">Welcome back</span>
      <section className="login-box">
        <form>
          <p>Log in</p>
          <input type="text" id="email" placeholder="email" />
          <span className="pass-span">
          <input type={ !passView ? "password" : "text"} id="password" placeholder="password"/>
          <button onClick={managePass}>
            <img src={ !passView ? "/img/hide.png" : "/img/view.png"}/></button>
          </span>
          <button type="button" id="login">Log in</button>
        </form>
        <p>or</p>
        <LogGoogle/>
        <Link to="/recover-password" className="link-lost">Have you lost your password?</Link>
      </section>
    </div>
  );
}

export default Login;
