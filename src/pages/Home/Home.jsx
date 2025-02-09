import Filter from "../../components/Filter/Filter";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardList from "../../components/CardList/CardList";
import css from "./Home.module.css";
import { useLocation } from "react-router-dom";
import SearchYear from "../../components/SearchYear/SearchYear";

const Home = () => {
  const location = useLocation();

  return (
    <main>
      <div className={css.search}>
        <SearchYear />
        <SearchForm />
      </div>
      <div className={css.filterCardList}>
        <Filter />
        <CardList location={location} />
      </div>
    </main>
  );
};
export default Home;
