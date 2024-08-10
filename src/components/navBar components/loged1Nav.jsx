import Link from "../Link";
import CartButton from "./cartButton";
import UserData from "./userData";

function Loged1() {
  return (
    <>
      <section className="home-and-create">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/my-products">My products</Link>
      </section>
      <section className="cart-and-user">
        <UserData />
        <CartButton />
      </section>
    </>
  );
}
export default Loged1;
