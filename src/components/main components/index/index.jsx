//stylesheets
import "../../../style/main-home/pageManager.css";
import "../../../style/main-home/mainIndex.css";
import "../../../style/main-home/mainTop.css";
//components
import PrevPage from "./prevPage.jsx";
import NextPage from "./nextPage.jsx";
import House from "./catHouse.jsx";
import Kitchen from "./catKitchen.jsx";
import Appliancies from "./catAppliancies.jsx";
import { manageIndex } from "../../../functions/managerIndex.jsx";
import LookProducts from "./lookProducts.jsx";
//modules
import { Helmet } from "react-helmet";
import { useState } from "react";


function MainIndex() {
  const { content, setContent, page, category, prev, next, filter, returnContent } =
    manageIndex();

  return (
    <div className="main-index">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="pages-top">
      <section className="index-page">
        Page {page ? page.page : "0"} <br/> of {page ? page.totalPages : "0"}
      </section>
      <div className="main-top">
        <LookProducts setContent={setContent}/>
        <section className="category">
          <span>Any category in special?</span>
          <section className="categories">
            <House filter={filter} category="house" actual={category} />
            <Kitchen filter={filter} category="kitchen" actual={category} />
            <Appliancies
              filter={filter}
              category="appliances"
              actual={category}
            />
          </section>
        </section>
      </div>
      </div>
      <div className="products-cont">
        {content && content.length === 0 ? <p className="loading">We couldn't find the product</p> : content ? returnContent(content) : <p className="loading">Loading...</p>}
      </div>
      <div className="page-manager">
        <PrevPage page={page} prev={prev} />
        <NextPage page={page} next={next} />
      </div>
    </div>
  );
}
export default MainIndex;
