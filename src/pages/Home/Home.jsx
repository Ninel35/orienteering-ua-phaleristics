import Filter from "../../components/Filter/Filter";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardList from "../../components/CardList/CardList";
import css from "./Home.module.css"

const Home = () => {

  return (
    <main >
      <SearchForm/>
      <div className={css.filterCardList}>
        <Filter /> 
        <CardList/>
      </div>
    </main>
  );
};
export default Home;
