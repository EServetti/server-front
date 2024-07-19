import Swal from "sweetalert2";
import { port } from "../../port";

function usePhoto(file) {
  async function updatePhoto(file) {
    if (!photo.files || !photo.files[0]) {
      Swal.fire({
        title: "Please select a new image first",
        confirmButtonText: "Accept",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonColor: "#466365",
      });
    } else {
      const formData = new FormData();
      formData.append("photo", photo.files[0]);
      const change = await fetch(`http://localhost:${port}/users`, {
        method: "PUT",
        credentials: "include",
        body: formData,
      });
      const response = await change.json();
      if(response.statusCode == 200 ){
        Swal.fire({
          title: response.message,
          confirmButtonText: "Accept",
          timer: 5000,
          timerProgressBar: true,
          confirmButtonColor: "#466365",
        }).then(()=> {
          location.reload()
        })
      } else {
        location.replace("/")
      }
    }
  }

  updatePhoto()
}

export default usePhoto;
