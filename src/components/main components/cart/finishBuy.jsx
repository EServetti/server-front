import "../../../style/main-cart/cancelFinish.css";
import Link from "../../Link.jsx";
import { useContext } from "react";
import { AppContext } from "../../../../AppContext.jsx";

function FinishBuy({ carts }) {
  return <>{carts !== 0 ? <Button /> : ""}</>;
}

function Button() {
  const { globalState, loading } = useContext(AppContext);
  const _id = globalState.loading ? null : globalState.userData._id;
  const path = `/finish`;
  return (
    <Link to={path} className={"finish-button"}>
      Finish buy
    </Link>
  );
}

export default FinishBuy;
