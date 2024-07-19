import { port } from "../../port"

function useGoogle() {
  location.replace(`http://localhost:${port}/session/google`)
}

export default useGoogle