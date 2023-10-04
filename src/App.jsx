import React from "react";
import NavBar from "./components/NavBar";
import TrendingNews from "./components/TrendingNews";
import { NewsProvider } from "./context/news/NewsContext";
import NewsContainer from "./components/NewsContainer";
import { Quoteprovider } from "./context/Quote/QuoteContext";


const App = () => {
  return (
    <NewsProvider>
      <NavBar />
      <div className="container">
        <Quoteprovider>
          <TrendingNews />
        </Quoteprovider>
        <NewsContainer />
      </div>
    </NewsProvider  >

  )
}
export default App

