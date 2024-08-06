import { useContext } from "react";
import { AppContext } from "../../../AppContext.jsx";
import CloseSession from "./closeSession.jsx";
import LinkDetails from "./LinkDetails.jsx";
import { useRef } from "react";

function UserData() {
  const { globalState } = useContext(AppContext);
  const { userData } = globalState;
  const { photo } = userData;
  const { name } = userData
  const detailsRef = useRef(null);

  function closeDet(detailsRef) {
    if (detailsRef.current) {
        detailsRef.current.removeAttribute('open');
    }
  }

  return (
    <details ref={detailsRef}>
      <summary>
        <img className="user-photo" src={photo} ></img>
      </summary>
      <div className="user-details">
      <span>Hello {name}</span>
        <LinkDetails className="my-account" to="/account" closeDet={closeDet} detailsRef={detailsRef}>
          My account
        </LinkDetails>
        <LinkDetails className="my-account" to="/purchases" closeDet={closeDet} detailsRef={detailsRef}>
          My purchases
        </LinkDetails>
        <CloseSession />
      </div>
    </details>
  );
}
export default UserData;
