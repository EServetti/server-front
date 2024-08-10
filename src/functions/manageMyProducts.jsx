import ProductCreate from "../components/main components/create/productCreate";

export function returnMyProducts(content) {
    return content.map((each) => (
      <ProductCreate
        key={each.title}
        title={each.title}
        _id={each._id}
        photo={each.photo}
        price={each.price}
        stock={each.stock}
        description={each.description}
      />
    ));
  }

  
