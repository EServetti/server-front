import "../../../style/main-cart/cancelFinish.css";
import cancelBuy from "../../../functions/cancelBuy";

function CancelBuy({ _id, carts, change, setChange }) {
  return <>{carts !== 0 ? <Button _id={_id} change={change} setChange={setChange} /> : ""}</>;
}

function Button({ _id, change, setChange }) {
  function handleClick() {
    cancelBuy(_id, change, setChange);
  }
  return (
    <button className="cancel-button" onClick={handleClick}>
      Cancel buy
    </button>
  );
}

export default CancelBuy;
