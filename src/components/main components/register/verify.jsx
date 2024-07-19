import "../../../style/main-register/register.css"
import useVerify from "../../../functions/verify";
import { useState } from "react";

function Verify({routeParams}) {
  const [content, setContent] = useState(
    <h3>Loading...</h3>
  )
  useVerify(routeParams.email, routeParams.verifyCode, setContent)


  return (
    <div className="main-verify">
      {content}
    </div>
  )
}

export default Verify