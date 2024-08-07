import { path} from "../../port.js"

async function logout () {
    let response = await fetch(`${path}/api/sessions/signout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
    })
    response = await response.json()
    console.log(response);
    // if (response.statusCode === 200) {
    //   return location.replace("/")
    // }
    return response
}

export default logout