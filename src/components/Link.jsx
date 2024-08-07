
export function navigate(href) {
    window.history.pushState({}, "", href);
    
    //creo un evento para registrar el cambio de url
    const navigationEvent = new Event("nav")
    window.dispatchEvent(navigationEvent)
  }

function Link({ target, to, ...props}) {
    const handleClick = (event) => {

        const isMainEvent = event.button === 0
        const isModifiedEvent = event.metaKey || event.altKey || event.shiftKey
        const isManageableEvent = target === undefined || target === "_self"

        if(isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to)
        }
    }
    return <a onClick={handleClick} href={to} target={target} {...props} />
}

export default Link