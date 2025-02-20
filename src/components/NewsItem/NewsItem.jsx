import { Link } from "react-router-dom";
import css from "./NewsItem.module.css";

const NewsItem = ({ result, location }) => {
  const handleClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  };
  return (
    <li className={css.card}>
      <p className={css.titleComp}>{result.title}</p>
      {/* <img
        className={css.picture}
        src={result?.photo[0]?.url}
        alt={result.title}
      /> */}
      <p className={css.titleMobile}>{result.title}</p>
      <Link
        to={result.id}
        className={css.readMoreBtn}
        state={{ backLink: location }}
        onClick={handleClick}
      >
        Читати більше
      </Link>
    </li>
  );
};

export default NewsItem;
