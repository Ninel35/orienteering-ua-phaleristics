import { useEffect} from "react";
import css from "./SearchForm.module.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewses } from "../../redux/articleSlice";
import { setSearchAction } from "../../redux/searchSlice";

const SearchForm = () => {
    const search = useSelector((state)=> state.search.search)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchNewses(search))
      }, [search])

    const handleChange =(value)=>{
      dispatch(setSearchAction(value)) 
    }

  return (
    <form className={css.searchForm}>
      <FaSearch className={css.icon} />
      <input placeholder="Пошук..." value={search} onChange={(e)=>handleChange(e.target.value)}/>
    </form>
  );
};

export default SearchForm;
