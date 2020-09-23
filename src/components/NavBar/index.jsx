import React from "react";

import "./NavBar.scss";
import logo from "../../assets/logo.svg";
import exit from "../../assets/exit.svg";
import user from "../../assets/user.svg";
import icon1 from "../../assets/icon1.svg";
import posts from "../../assets/posts.svg";
import { NavLink } from "react-router-dom";

const NavBar = ({ setExit }) => {
  const Exit = () => {
    if (window.confirm("вы действительно хотите выйти")) {
      setExit(false);
    }
  };

  return (
    <div className={"navbar__form"}>
      <div className="navbar__form__header">
        <img src={logo} />
      </div>
      <div className="navbar__form__main">
        <div className="navbar__form__info">
          <img src={user} />
          <div className="navbar__form__info--text">
            <p>Имя Фамилия Отчество</p>
            <span>Рейтинг: 0</span>
          </div>
        </div>
        <ul>
          <NavLink activeClassName="active" to="/personal">
            <li className="navbar__form__section">
              <img src={icon1} />
              <p>Личный кабинет</p>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active" to="/">
            <li className="navbar__form__section">
              <img src={posts} />
              <p>Публикации</p>
            </li>
          </NavLink>
        </ul>
      </div>

      <div className="navbar__form__exit">
        <button onClick={Exit} className="button">
          <img src={exit} />
          <p>Выход</p>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
