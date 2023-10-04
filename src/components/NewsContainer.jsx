import React, { useContext, useEffect } from "react";
import MainCards from "./MainCards";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/NewsAction";

const NewsContainer = () => {
  const { allNews, dispatch } = useContext(NewsContext);

  const getdata = async () => {
    const data = await fetchNews("indore");

    dispatch({
      type: "GET_NEWS",
      payload:data,
    });
  };

  useEffect(() => {
    getdata();
  },[]);

  if (!allNews || allNews.nength === 0) {
    return <h1 className="text-center my-5">Loading News...</h1>;
  }

  return (
    <div>
     {
      allNews.map((news , index)=> (
      <MainCards key={index} news={news} />
      ))}
    </div>
  );
};

export default NewsContainer;
