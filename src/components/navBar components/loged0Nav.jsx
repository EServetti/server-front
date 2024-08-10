import Link from "../Link";
import CartButton from "./cartButton";
import UserData from "./userData";

function Loged0() {
  return (
    <>
      <section>
        <Link to="/">Home</Link>
      </section>
      <section className="cart-and-user">
        <UserData />
        <CartButton />
      </section>
    </>
  );
}
export default Loged0;
