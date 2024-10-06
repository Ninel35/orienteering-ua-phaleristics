import css from "./CardItem.module.css";

const CardItem = ({ result }) => {
 console.log(result)
  return <li className={css.card}>{result.title}
 
  <img className={css.picture}  src={result.photo.url} alt={result.title}  width="200"/>
  </li>
};

export default CardItem;
