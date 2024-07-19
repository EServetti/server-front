import useGoogle from "../../../functions/continueGoogle";

function LogGoogle() {
  function handleClick(){
    useGoogle()
  }

  return (
    <button className="sign-google" id="google" onClick={handleClick}>
      <img src="https://icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" />
      <span>Continue with Google</span>
    </button>
  );
}

export default LogGoogle