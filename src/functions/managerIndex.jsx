import { path } from "../../port.js";
import { useEffect, useState } from "react";
import Product from "../components/main components/index/product.jsx";

export function manageIndex() {


  const [content, setContent] = useState(null);
  const [page, setPage] = useState(null);
  const [category, setCategory] = useState(null)

  //Effect que trae los products al cargar la pagina y guarda la info del paginate
  useEffect(() => {
    fetch(`${path}/api/products/paginate?limit=9&page=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setContent(data.message.docs);
        setPage(data.info);
      });
  }, []);

  function returnContent() {
    return content.map((each) => (
      <Product
        key={each.title}
        title={each.title}
        _id={each._id}
        photo={each.photo}
        price={each.price}
      />
    ));
  }

  function changePage (newPage,catQuery) {
    fetch(
      `${path}/api/products/paginate?limit=9&page=${newPage}${catQuery}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setContent(data.message.docs);
        setPage(data.info);
      });
  }
  

  //volver a la pagina anterior
  function prev() {
    const infoPage = page;
    const { prevPage } = infoPage;
    const catQuery = category ? `&category=${category}` : ""
    changePage(prevPage, catQuery)
  }

  //pasar a la proxima pagina
  function next() {
    const infoPage = page;
    const { nextPage } = infoPage;
    const catQuery = category ? `&category=${category}` : ""
    changePage(nextPage, catQuery)
  }

  
  //filtrar por category
  function filter(category) {
    fetch(
      `http://localhost:8080/api/products/paginate?category=${category}&limit=9&page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setContent(data.message.docs);
        setPage(data.info);
        setCategory(category)
      });
  }

  return {content, setContent, page, category, filter, next, prev, returnContent}
}
  
