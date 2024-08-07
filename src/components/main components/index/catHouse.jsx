 function House({filter, category, actual}){
  return (
    <span className={actual === "house" ? "cat-house-selected" : "cat-house"} 
    onClick={() => filter(category)}>House</span>
  )
 }

export default House