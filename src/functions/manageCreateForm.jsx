import { useState, useCallback } from "react";

function useForm() {
    // manejo de inputs y producto en tiempo real
    //input de file
    const [fileName, setFileName] = useState("Image of the product");
    const [product, setProduct] = useState({
      title: "",
      description: "",
      photo: "",
      price: "",
      stock: "",
    });
    const handleChange = useCallback((e) => {
      const { id, value, files } = e.target;
      if (id === "photo" && files.length > 0) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProduct((prevProduct) => ({
            ...prevProduct,
            photo: reader.result,
          }));
        };
        reader.readAsDataURL(files[0]);
        setFileName(files[0].name);
      } else {
        setProduct((prevProduct) => ({
          ...prevProduct,
          [id]: value,
        }));
      }
    }, []);

    return { handleChange,fileName, setFileName, product, setProduct}
  }

export default useForm