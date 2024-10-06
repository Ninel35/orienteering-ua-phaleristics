import { useState } from "react";
import Filter from "../../components/Filter/Filter";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardList from "../../components/CardList/CardList";


const Home = () => {

    // const [results, setResults] = useState([]);

  return (
    <main >
      <SearchForm/>
      {/* <Filter /> */}
{/* <CardList results={results}/> */}
<CardList/>
    </main>
  );
};
export default Home;
