import Link from "../Link";
import CartButton from "./cartButton";
import UserData from "./userData";

function Loged2() {
  return (
    <>
      <section className="home-and-create">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/my-products">Manage products</Link>
      </section>
      <section className="cart-and-user">
        <UserData />
      </section>
    </>
  );
}
export default Loged2;