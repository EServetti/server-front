
function NextPage({page, next}){
    return (
        page && page.nextPage ? <button className="next-page" onClick={next}>Next page</button> : <button className="next-page-none"></button>
    )
  }

export default NextPage
