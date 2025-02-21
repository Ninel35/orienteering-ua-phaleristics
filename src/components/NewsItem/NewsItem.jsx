import { Link } from "react-router-dom";
import css from "./NewsItem.module.css";

const NewsItem = ({ result, location }) => {
  const handleClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  };
  return (
    <li className={css.card}>
      <div>
        <Link
          to={result.id}
          className={css.readMoreBtn}
          state={{ backLink: location }}
          onClick={handleClick}
        >
          <h2 className={css.titleComp}>{result.title}</h2>
        </Link>
        <p className={css.intro}>{result.text.slice(0, 300) + "..."}</p>
      </div>
      <img
        className={css.picture}
        src={result?.photo[0]?.url}
        alt={result.title}
      />
    </li>
  );
};

export default NewsItem;
