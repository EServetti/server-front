import ProductCreate from "../components/main components/create/productCreate";
import MyProductCreate from "../components/main components/my-products/mySingleProduct";

export function returnMyProducts(content, change, setChange) {
    return content.map((each) => (
      <MyProductCreate
        key={each.title}
        title={each.title}
        _id={each._id}
        photo={each.photo}
        price={each.price}
        stock={each.stock}
        description={each.description}
        change={change}
        setChange={setChange}
      />
    ));
  }

  
