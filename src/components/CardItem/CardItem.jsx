import { Link } from "react-router-dom";
import css from "./CardItem.module.css";

const CardItem = ({ result, location }) => {
  return (
    <li className={css.card}>
        <p className={css.titleComp}>{result.title}</p>
        <img
          className={css.picture}
          src={result.photo[0]?.url}
          alt={result.title}
        />
         <p className={css.titleMobile}>{result.title}</p>
      <Link to={result.id} className={css.readMoreBtn} state={{backLink:location}}>Read more</Link>
    </li>
  );
};

export default CardItem;
