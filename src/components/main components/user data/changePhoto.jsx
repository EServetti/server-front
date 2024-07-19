import { useRef, useState } from "react";
import usePhoto from "../../../functions/updatePhoto";

function ChangePhoto() {
  const fileRef = useRef(null)
  const [inpCont, setInpCont] = useState("Change photo")

  //mostrar el nombre de la imagen seleccionada 
  function handleChange() {
    const file = fileRef.current.files[0]
    if(file) {
      const name = file.name
      setInpCont(name)
    }
  }

  function handleClick() {
    const file = fileRef.current.files[0]
    usePhoto(file)
  }

  return (
    <span className="update-photo">
      <input ref={fileRef} id="photo" className="photo" type="file" accept="image/*" onChange={handleChange} />
      <label htmlFor="photo" className="label-photo" >
        {inpCont}
      </label>
      <button className="change-photo-button" onClick={handleClick}>Change</button>
    </span>
  );
}

export default ChangePhoto;
