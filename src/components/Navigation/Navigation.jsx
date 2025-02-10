import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useState } from "react";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav>
      {isSidebarOpen && (
        <ul className={css.sidebar}>
          <li
            onClick={() => {
              setIsSidebarOpen(false);
            }}
            className={css.closeBtn}
          >
            <NavLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#5f6368"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              Головна сторінка
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top10"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              Топ 10 спортсменів України
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              Новини
            </NavLink>
          </li>
        </ul>
      )}
      <ul>
        <li className={css.mobileOn}>
          <NavLink to="/">Головна сторінка</NavLink>
        </li>
        <li className={css.mobileOn}>
          <NavLink to="/top10">Топ 10 спортсменів України</NavLink>
        </li>
        <li className={css.mobileOn}>
          <NavLink to="/news">Новини</NavLink>
        </li>
        <li
          onClick={() => {
            setIsSidebarOpen(true);
          }}
          className={css.mobileOff}
        >
          <NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#5f6368"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
