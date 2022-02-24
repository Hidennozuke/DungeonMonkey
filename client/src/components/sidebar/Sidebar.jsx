import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Реклама</span>
        <img className="sidePhoto"
          src="https://sun9-23.userapi.com/sun9-61/impf/c604618/v604618795/c017/m2uravTzCQ8.jpg?size=600x600&quality=96&sign=6eba237eddd2663f001e68a3502e862a&type=album"
          alt=""
        />
        <p>
        Добро пожаловать в наш салон Елены прекрасной! Делитесь своими историями, отзывами, актуальными трендами, связанными с миром красоты! 
        <span> Телефон 8-800-555-35-35 </span>
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Категории</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Подпишись</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
