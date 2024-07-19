import { useState, useEffect } from "react"
import { match } from "path-to-regexp"

function Router({routes = [], defaultComponent: DefaultComponent = () => <h1 className="def-comp">404: Not found!</h1>}) {
    const [currentPath, setCuerrentPath] = useState(window.location.pathname)
    useEffect( () => { 
      const changeCurrentPage = () => {
        setCuerrentPath(window.location.pathname)
      }
  
      window.addEventListener("nav", changeCurrentPage)
      window.addEventListener("popstate", changeCurrentPage)
  
      return() => {
        window.removeEventListener("nav", changeCurrentPage)
        window.removeEventListener("popstate", changeCurrentPage)
      }
    },[])

    let routeParams = {}

    const Page = routes.find(({path}) => {
      if(path === currentPath){
        return true
      }

      const matchedUrl = match(path, { decode: decodeURIComponent})
      const matched = matchedUrl(currentPath)
      if(!matched){
        return false
      }

      routeParams = matched.params 
      return true
    })?.component
    return Page ? <Page routeParams={routeParams}/> : <DefaultComponent/>
  }

  export default Router