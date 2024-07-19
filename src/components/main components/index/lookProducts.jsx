import { useState } from "react"
import filterByTitle from "../../../functions/filterByTitle"

function LookProducts({setContent}) {
  const [inpCont, setInpCont ] = useState(null)
  function handleChange(e) {
    setInpCont(e.target.value)
  }
  async function handleClick( ){
    const all = await filterByTitle(inpCont)
    if(all) {
      setContent(all)
    }
    return
  }

  return(
    <section className="look-products">
      <input type="text" placeholder="Lookin for a product?" onChange={handleChange}/>
      <button onClick={handleClick}>
        <img src="/img/look.png"/>
      </button>
    </section>
  )
}

export default LookProducts