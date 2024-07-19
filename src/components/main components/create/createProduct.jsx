//stylesheets
import "../../../style/main-create/createProduct.css";
//modules
import { useContext, useEffect, useState, useMemo  } from "react";
import { AppContext } from "../../../../AppContext";
import { Helmet } from "react-helmet";
import { io } from "socket.io-client";
import Swal from "sweetalert2";
//functions
import { port } from "../../../../port.js";
import ProductCreate from "./productCreate.jsx";
import useForm from "../../../functions/manageCreateForm.jsx";
import createProduct from "../../../functions/createProduct.jsx";
//components

function CreateProduct() {
  const [content, setContent] = useState(null);
  const [socket, setSocket ] = useState(null)
  const { globalState } = useContext(AppContext);
  const { online, loading } = globalState;
  const { userData } = globalState;
  useEffect(() => {
    if (!loading && !online) {
      location.replace("/");
    } else if (!loading && userData.role === 0) {
      location.replace("/");
    }
  }, [loading, online, userData]);

  
  const returnCreateContent = useMemo(() => {
    if (!content) return null;
    return content.reverse().map((product) => (
      <ProductCreate
        key={product.title} 
        title={product.title}
        description={product.description}
        photo={product.photo ? product.photo : "/img/defaultProduct.png"}
        price={product.price}
        stock={product.stock}
      />
    ));
  }, [content]);

  useEffect(() => {
    const newSocket = io(`http://localhost:${port}`);

    newSocket.on("connect", () => {
      newSocket.emit("fetch-products");
    });

    newSocket.on("products", (all) => {
      setContent(all);
    });

    setSocket(newSocket)

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const { handleChange, fileName, product } = useForm()

  async function handleCreate(e) {
    e.preventDefault()
    const result = await createProduct(product)
    if(result?.statusCode == 201) {
      socket.emit("created")
    }
  }
  

  return (
    <div className="main-create">
      <Helmet>
        <title>Create</title>
      </Helmet>
      <div className="create-top">
        <h1>Create a product</h1>
      </div>
      <div className="create-form">
        <h3>Creation form</h3>
        <p>Please check all the info before creating.</p>
        <section className="form-and-product">
          <form onChange={handleChange}>
            <span>Enter the data</span>
            <input
              type="text"
              id="title"
              placeholder="title of the product"
              required
            />
            <input
              type="text"
              id="description"
              maxLength="120"
              placeholder="description of the product"
            />
            <select type="text" id="category" defaultValue={"none"}>
              <option value="none" disabled>
                Category of the product
              </option>
              <option value="hogar">house</option>
              <option value="cocina">kitchen</option>
              <option value="electrodomésticos">home appliances</option>
            </select>
            <label htmlFor="photo">{fileName}</label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .gif"
              id="photo"
              placeholder="image of the product"
              className="create-photo-input"
            />
            <input
              type="number"
              min="1"
              id="price"
              placeholder="price of the product"
            />
            <input
              type="number"
              min="1"
              id="stock"
              placeholder="stock of the product"
            />
            <button onClick={handleCreate}>Create</button>
          </form>
          <ProductCreate
            title={product.title}
            description={product.description}
            photo={product.photo ? product.photo : "/img/defaultProduct.png"}
            price={product.price}
            stock={product.stock}
          />
        </section>
      </div>
      <div className="create-cont">
        {returnCreateContent}
      </div>
    </div>
  );
}

export default CreateProduct;
