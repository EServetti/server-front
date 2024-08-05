import { useEffect } from "react";
import { path } from "../../port";

function useVerify(email, verifyCode, setContent) {
  
  async function sendVerify(email, verifyCode) {
    const url = `${path}/api/sessions/verify?email=${email}&verifyCode=${verifyCode}`
    let change = await fetch(url)
    change = await change.json();
    if(change.statusCode === 200) {
      setContent(
        <>
        <h1>{change.message}</h1>
        <h3>You are already able to log in!</h3>
        </>
      )
    } else {
      setContent(
        <h1>404: Not found</h1>
      )
    }
  }
  sendVerify(email, verifyCode)
  useEffect(() => {

  }, [])
}

export default useVerify