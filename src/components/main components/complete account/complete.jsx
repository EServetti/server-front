//stylesheets
import "../../../style/main-complete/complete.css";
//modules
import { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
//functions
import useComplete from "../../../functions/completeAccount";

function CompleteAccount() {
  const { globalState } = useContext(AppContext);
  const { online, loading } = globalState;
  useEffect(() => {
    if (!loading && !online) {
      location.replace("/");
    }
    if(!loading && globalState.userData.complete) {
      location.replace("/");
    }
  }, [loading, online, globalState.userData])
  

  function handleClick(e) {
    e.preventDefault();
    useComplete();
  }

  return (
    <div className="main-complete">
      <div className="form-component">
        <h2>Complete your account:</h2>
        <form className="complete-form">
          <label htmlFor="full-name">Full name</label>
          <input type="text" id="full-name" />

          <label htmlFor="phone">Phone number:</label>
          <input type="tel" id="phone" required />

          <label className="doc-num" htmlFor="document-number">
            Identification number
          </label>
          <input type="number" id="document-number" />

          <span>
            Please upload a scanned copy of your identification document.
          </span>
          <label className="lab-document" htmlFor="document-file">
            Identification Document:
          </label>
          <input
            type="file"
            id="document-file"
            name="id_document"
            accept=".pdf,.jpg,.png"
            className="inp-document"
          />

          <label htmlFor="birthdate">Date of Birth:</label>
          <input
            type="date"
            min="1960-01-01"
            max="2008-12-31"
            id="birthdate"
            name="birthdate"
            required
          />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" />

          <button className="send-complete" onClick={handleClick}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompleteAccount;
