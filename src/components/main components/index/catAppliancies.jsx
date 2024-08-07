

function Appliancies({filter, category, actual}){
    return (
      <span className={actual === "appliances" ? "cat-appliancies-selected" : "cat-appliancies"} onClick={() => filter(category)}>Appliancies</span>
    )
   }
  export default Appliancies