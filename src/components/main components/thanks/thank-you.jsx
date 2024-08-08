import { useContext } from "react"
import "../../../style/main-thanks/thanks.css"
import Link from "../../Link"
import { AppContext } from "../../../../AppContext"
import { useEffect } from "react"

function Thanks() {
  const {globalState} =useContext(AppContext)
  const {online, userData} = globalState
  useEffect(() => {
    if(!globalState.loading && !online) {
      location.replace("/")
    }
  }, [globalState.loading, online, userData])
  return (
    <div className="main-thanks">
    <h1>Thanks for buying!</h1>
    <p className="thanks-text">We appreciate your confidence. The product is being prepared for shipment. You can see the status of the delivery 
      <Link to="/purchases"> here</Link>
    </p>
    </div>
  )
}

export default Thanks