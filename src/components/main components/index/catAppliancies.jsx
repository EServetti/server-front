

function Appliancies({filter, category, actual}){
    return (
      <span className={actual === "electrodomésticos" ? "cat-appliancies-selected" : "cat-appliancies"} onClick={() => filter(category)}>Appliancies</span>
    )
   }
  export default Appliancies