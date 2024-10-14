import css from "./CardItem.module.css";

const CardItem = ({ result }) => {
  return (
    <li className={css.card}>
      <p>{result.title}</p>
      <img
        className={css.picture}
        src={result.photo.url}
        alt={result.title}
        // width="150"
      />
      <button className={css.readMoreBtn}>Read more</button>
    </li>
  );
};

export default CardItem;
