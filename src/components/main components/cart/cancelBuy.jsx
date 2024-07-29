import "../../../style/main-cart/cancelFinish.css";
import cancelBuy from "../../../functions/cancelBuy";

function CancelBuy({carts, change, setChange }) {
  return <>{carts !== 0 ? <Button change={change} setChange={setChange} /> : ""}</>;
}

function Button({change, setChange }) {
  function handleClick() {
    cancelBuy( change, setChange);
  }
  return (
    <button className="cancel-button" onClick={handleClick}>
      Cancel buy
    </button>
  );
}

export default CancelBuy;
