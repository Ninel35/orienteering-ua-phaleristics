import { Link } from "react-router-dom";
import css from "./CardItem.module.css";

const CardItem = ({ result, location }) => {
  return (
    <li className={css.card}>
      <p>{result.title}</p>
      <img
        className={css.picture}
        src={result.photo.url}
        alt={result.title}
        // width="150"
      />
      <Link to={result.id} className={css.readMoreBtn} state={{backLink:location}}>Read more</Link>
    </li>
  );
};

export default CardItem;
