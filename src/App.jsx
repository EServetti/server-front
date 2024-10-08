//stylesheets
import "./App.css";
//components
import NavBar from "./components/navBar components/navBar";
import Router from "./components/Router";
//components
import MainIndex from "./components/main components/index/index.jsx";
import RegisterCont from "./components/main components/register/register.jsx";
import LoginCont from "./components/main components/login/login.jsx";
import ProductDataCont from "./components/main components/product data/productData.jsx";
import CartContainer from "./components/main components/cart/cart.jsx";
import FinishBuyCont from "./components/main components/finish buy/finishBuyCont.jsx";
import MyAccount from "./components/main components/user data/account.jsx";
import Footer from "./components/footer components/footer.jsx";
import CompleteAccount from "./components/main components/complete account/complete.jsx";
import RecoverPass from "./components/main components/recover password/recoverPass.jsx";
import ChangePass from "./components/main components/recover password/changePass.jsx";
import Verify from "./components/main components/register/verify.jsx";
import CreateProduct from "./components/main components/create/createProduct.jsx";
import Thanks from "./components/main components/thanks/thank-you.jsx";
import Purchases from "./components/main components/purchases/purchases.jsx";
import { path } from "../port.js";
import myProducts from "./components/main components/my-products/myProducts.jsx";

// todas las rutas del sitio web
const routes = [
  {
    path: "/",
    component: MainIndex,
  },
  {
    path: "/login",
    component: LoginCont,
  },
  {
    path: "/register",
    component: RegisterCont,
  },
  {
    path: "/verify/:email/:verifyCode",
    component: Verify,
  },
  {
    path: "/product/:nid",
    component: ProductDataCont,
  },
  {
    path: "/cart",
    component: CartContainer,
  },
  {
    path: "/finish",
    component: FinishBuyCont,
  },
  {
    path: "/account",
    component: MyAccount,
  },
  {
    path: "/complete-account",
    component: CompleteAccount,
  },
  {
    path: "/recover-password",
    component: RecoverPass,
  },
  {
    path: "/recover-password/:uid",
    component: ChangePass,
  },
  {
    path: "/create",
    component: CreateProduct,
  },
  {
    path: "/thank-you",
    component: Thanks,
  },
  {
    path: "/purchases",
    component: Purchases,
  },
  {
    path: "/my-products",
    component: myProducts,
  },
];

function App() {
  return (
    <div className="main-cont">
      <nav>
        <NavBar />
      </nav>
      <main>
        <Router routes={routes} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
