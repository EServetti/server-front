import { port } from "../../port.js"

async function logout () {
    let response = await fetch(`http://localhost:${port}/api/sessions/signout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
    })
    response = await response.json()
    return response
}

export default logout