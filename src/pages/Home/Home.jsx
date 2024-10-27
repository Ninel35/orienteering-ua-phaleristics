import Filter from "../../components/Filter/Filter";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardList from "../../components/CardList/CardList";
import css from "./Home.module.css"
import { useLocation } from "react-router-dom";

const Home = () => {

  const location = useLocation();

  return (
    <main >
      <SearchForm/>
      <div className={css.filterCardList}>
        <Filter /> 
        <CardList location={location}/>
      </div>
    </main>
  );
};
export default Home;
