import sendRecoverMail from "../../functions/getBackPass.jsx";
import "../../style/main-recover/recoverPass.css";

function RecoverPass() {
  function handleClick(e) {
    e.preventDefault()
    sendRecoverMail()
  }

  return (
    <div className="main-recover">
      <section className="recover-section">
        <span>
          If you lost your password we're going to send you a mail to restore it
        </span>
        <form className="recover-form">
          <label htmlFor="email">Please enter your email here to get a mail to change the password</label>
          <input id="email" type="text" placeholder="email" />
          <button onClick={handleClick} className="send-recover-email">Send email</button>
        </form>
      </section>
    </div>
  );
}

export default RecoverPass;
