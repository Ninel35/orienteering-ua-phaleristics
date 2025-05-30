import Filter from "../../components/Filter/Filter";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardList from "../../components/CardList/CardList";
import css from "./Home.module.css";
import { useParams, useLocation } from "react-router-dom";
import SearchYear from "../../components/SearchYear/SearchYear";

const Home = () => {
  const {categoryId}= useParams()
  const location = useLocation();

  return (
    <main>
      <div className={css.search}>
        <SearchYear />
        <SearchForm />
      </div>
      <div className={css.filterCardList}>
        <Filter activeCategory={categoryId}/>
        <CardList location={location} categoryId={categoryId}/>
      </div>
    </main>
  );
};
export default Home;
