import { useContext, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/NewsAction";

const NavBar = () => {
  const [text, setText] = useState("");

  const { dispatch } = useContext(NewsContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchNews(text);

    dispatch({
      type: "GET_NEWS",
      payload: data,
    });

    setText("");
  };

  const handleTopic = async (topic) => {
    const data = await fetchNews(topic);

    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  const handleclick = () => {
    const Showsidebar = document.querySelector(".sidebar");
    Showsidebar.style.display = "block";
  };
 
  const handleclose = () => {
    const CloseSidebar = document.querySelector(".sidebar");
    CloseSidebar.style.display = "none";
  };

  return (
    <nav className="NavBar">
      <h4 className="heading">Breaking News</h4>
      <ul className="nav-links">
        <li>
          <a onClick={() => handleTopic("Home")}>Home</a>
        </li>
        <li>
          <a onClick={() => handleTopic("Sports")}>Sports</a>
        </li>
        <li>
          <a onClick={() => handleTopic("bollywood")}>Entertainment</a>
        </li>
        <li>
          <a onClick={() => handleTopic("Lifestyle")}>LifeStyle</a>
        </li>
        <li>
          <a onClick={() => handleTopic("Indian market")}>Market</a>
        </li>
      </ul>

      <ul className="sidebar">
        <a onClick={handleclose} className="sidebar-Menu-icon" href="#">
          <FaRegWindowClose />
        </a>

        <li>
          <a onClick={() => handleTopic("Home")}>Home</a>
        </li>
        <li>
          <a onClick={() => handleTopic("Sports")}>Sports</a>
        </li>
        <li>
          <a onClick={() => handleTopic("bollywood")}>Entertainment</a>
        </li>
        <li>
          <a onClick={() => handleTopic("Lifestyle")}>LifeStyle</a>
        </li>

        <li>
          <a onClick={() => handleTopic("Indian market")}>Market</a>
        </li>
      </ul>

    
      <div className="nav-icons" onSubmit={handleSearch}>
        <form role="search">
          <a className="notification" href="#">
            {" "}
            <FaRegBell />
          </a>
          <input
            type="text"
            placeholder="Search News"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <a onClick={handleclick} className="Menu-icon" href="#">
            <FaAlignJustify />
          </a>
        </form>
      </div>
    </nav>
  );
};
export default NavBar;
