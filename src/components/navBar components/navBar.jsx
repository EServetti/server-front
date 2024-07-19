//stylesheet
import "../../style/navBar/navBar.css";
//components
import NoLoged from "./noLogedNav";
import Loged0 from "./loged0Nav.jsx";
import Loged1 from "./loged1Nav.jsx";
//modules
import { useContext } from "react";
import { AppContext } from "../../../AppContext.jsx";


function NavBar() {
  const {globalState, setGlobalState} = useContext(AppContext)

  const {online, userData, loading} = globalState

  return (
    <div className="navBar">
      <span className="commerce-logo" >
        Everything for your home
      </span>
      {loading && <></>}
      {!online && <NoLoged />}
      {online && userData.role === 0 && <Loged0 />}
      {online && userData.role === 1 && <Loged1 />}
    </div>
  );
}

export default NavBar;
