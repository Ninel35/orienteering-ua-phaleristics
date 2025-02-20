import css from "./NewsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import NewsItem from "../NewsItem/NewsItem";
import { useEffect } from "react";
import { fetchLatestNewses } from "../../redux/latestSlice";

const NewsList = ({ location }) => {
  const news = useSelector((state) => state.latestNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestNewses());
    // const scrollPosition = sessionStorage.getItem("scrollPosition");
    // if (scrollPosition) {
    //   window.scrollTo(0, parseInt(scrollPosition, 10));
    // }
  }, []);

  if (news.loading) return <div>Завантаження... </div>;
  if (news.error) return <div>Виникла помилка</div>;
  if (!news.newses.length) return <div>Новин не знайдено </div>;

  return (
    <ul className={css.listCard}>
      {news.newses.map((result) => (
        <NewsItem result={result} key={result.id} location={location} />
      ))}
    </ul>
  );
};

export default NewsList;
