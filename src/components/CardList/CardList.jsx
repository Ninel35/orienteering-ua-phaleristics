import { useEffect } from "react";
import CardItem from "../CardItem/CardItem";
import css from "./CardList.module.css";
import { useSelector } from "react-redux";

const CardList = ({ location }) => {
  const news = useSelector((state) => state.news);
  const filter = useSelector((state) => state.filter.filter);
  const year = useSelector((state) => state.filter.year);

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  }, []);

  if (news.loading) return <div>Завантаження... </div>;
  if (news.error) return <div>Виникла помилка</div>;
  if (!news.newses.length) return <div>Новин не знайдено </div>;

  const filteredNews = news.newses
    .filter((result) => (year ? result.year === year : true))
    .filter((result) => (filter ? result.categories.includes(filter) : true))
    .sort((a, b) => a.year - b.year);

  return (
    <ul className={css.listCard}>
      {filteredNews.map((result) => (
        <CardItem result={result} key={result.id} location={location} />
      ))}
    </ul>
  );
};

export default CardList;
