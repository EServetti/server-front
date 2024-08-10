//stylesheets
import "../../../style/main-user-data/userData.css";
//modules
import { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext.jsx";
//functions
//components
import ChangePhoto from "./changePhoto.jsx";
import Link from "../../Link.jsx"
import { Helmet } from "react-helmet";

function MyAccount() {
  const { globalState } = useContext(AppContext);
  const {loading} = globalState
  const online = globalState.online;
  const user = globalState.userData;
  useEffect(() => {
    if(!loading && !online) {
      location.replace("/")
    }
  }, [online])

  //en caso de que sea una cuenta de google (en la que la propiedad email)
  //es un id numerico no se muestra el email
  let email = user?.email;
  if (email && !email.includes(`@`)) {
    email = null;
  }
  //en caso de que la cuenta no este completa no se muestra ni age ni phone
  const age = !online ? null : user.complete ? user.age : null;
  const phone = !online ? null : user.complete ? user.phone : null;

  return (
    <div className="main-user">
      <Helmet>
        <title>User</title>
      </Helmet>
      <section className="user-data">
        {!online ? (
          <img src="/img/defaultUser.webp" />
        ) : (
          <img src={user.photo} />
        )}
        <ChangePhoto />
        <section className="user-info">
          <span>Username: {!online ? "" : user.name}</span>
          <span>{!online ? "" : email ? "Email: " + email : ""}</span>
          <span>{!online ? "" : age ? "Age: " + age : ""}</span>
          <span>{!online ? "" : phone ? "Phone: " + phone : ""}</span>
          {user?.complete ? <p>Do you want to become a seller? contact us at everithingforyourhome@gmail.com</p> : <section className="complete-account">
          <span>You almost complete your account,</span>
          <Link to="/complete-account" className="complete-link">Fill this form to complete it</Link>
          </section>}
        </section>
      </section>
    </div>
  );
}

export default MyAccount;
