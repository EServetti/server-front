
function PrevPage({page, prev}){
  return (
    page && page.prevPage ? <button className="prev-page" onClick={prev}>Prev page</button> :  <button className="prev-page-none"></button>
  )
}
export default PrevPage