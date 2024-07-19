import Link from "../Link";
import CartButton from "./cartButton";
import UserData from "./userData";

function Loged1() {
  return (
    <>
      <section className="home-and-create">
        <Link to="/">HOME</Link>
        <Link to="/create">CREATE</Link>
      </section>
      <section className="cart-and-user">
        <UserData />
        <CartButton />
      </section>
    </>
  );
}
export default Loged1;
