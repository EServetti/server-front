import logout from "../../functions/manageLogout.jsx";
import { navigate } from "../Link.jsx";

function CloseSession() {
  const handleClick = async () => {
    await logout()
  };
  return (
    <button className="close-session" onClick={handleClick}>
      <img
        className="close-session-img"
        src="/img/logout.png"
        alt="close-session"
      />
    </button>
  );
}
export default CloseSession;
