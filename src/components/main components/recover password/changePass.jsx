import "../../../style/main-recover/recoverPass.css";
import { useChangePass } from "../../../functions/getBackPass.jsx";

function ChangePass({routeParams}) {
    function handleClick(e) {
        e.preventDefault()
        useChangePass(routeParams.uid)
    }

    return (
      <div className="main-recover">
        <section className="recover-section">
          <span>
            Enter here your new password
          </span>
          <form className="change-form">
            <label htmlFor="pass">Enter the new password here:</label>
            <input id="pass" type="password" />
            <label htmlFor="pass-2">Repeat the password:</label>
            <input id="pass-2" type="password" />
            <button onClick={handleClick} className="send-change-email">Send email</button>
          </form>
        </section>
      </div>
    );
  }
  
export default ChangePass