import { useState } from "react";
import css from "./SearchForm.module.css";
import { FaSearch } from "react-icons/fa";
import { data } from "../../data";

const SearchForm = ({setResults}) => {
    const [input, setInput] = useState("")

    // const fetchData = (value) =>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then(json => {
    //         const results = json.filter((user)=> {
    //             return (
    //                 value && 
    //             user && 
    //             user.name && 
    //             user.name.toLowerCase().includes(value)
    //          );
    //             });
    //        setResults(results);
    //     });

    // }
    setResults(data)

    const handleChange =(value)=>{
        setInput(value)
        // fetchData(value)
    }

  return (
    <form className={css.searchForm}>
      <FaSearch className={css.icon} />
      <input placeholder="Search..." value={input} onChange={(e)=>handleChange(e.target.value)}/>
    </form>
  );
};

export default SearchForm;
