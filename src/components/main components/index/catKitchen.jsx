
function Kitchen({filter, category, actual }){
    return (
      <span className={actual === "kitchen" ? "cat-kitchen-selected" : "cat-kitchen"}
       onClick={() => filter(category)}>Kitchen</span>
    )
   }
  
  export default Kitchen