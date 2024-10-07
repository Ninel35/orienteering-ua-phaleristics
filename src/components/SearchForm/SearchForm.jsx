import { useEffect, useState } from "react";
import css from "./SearchForm.module.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchNewses } from "../../redux/articleSlice";

const SearchForm = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchNewses(input))
      }, [input])

    const handleChange =(value)=>{
        setInput(value)
    }

  return (
    <form className={css.searchForm}>
      <FaSearch className={css.icon} />
      <input placeholder="Search..." value={input} onChange={(e)=>handleChange(e.target.value)}/>
    </form>
  );
};

export default SearchForm;
