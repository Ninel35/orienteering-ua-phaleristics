import { useDispatch } from "react-redux";
import { setYearAction } from "../../redux/filterSlice";
import css from "./SearchYear.module.css";

const SearchYear = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    evt.preventDefault();
    dispatch(setYearAction(evt.target.value));
  };

  return (
    <select className={css.select} onChange={handleChange} defaultValue="">
      <option value="">Роки</option>
      <option value="1962">1962</option>
      <option value="1963">1963</option>
      <option value="1964">1964</option>
      <option value="1965">1965</option>
      <option value="1966">1966</option>
      <option value="1967">1967</option>
      <option value="1968">1968</option>
      <option value="1969">1969</option>
      <option value="1970">1970</option>
      <option value="1971">1971</option>
      <option value="1972">1972</option>
      <option value="1973">1973</option>
      <option value="1974">1974</option>
      <option value="1975">1975</option>
      <option value="1975">1976</option>
      <option value="1975">1977</option>
      <option value="1975">1978</option>
      <option value="1975">1979</option>
      <option value="1975">1980</option>
      <option value="1975">1981</option>
      <option value="1975">1982</option>
      <option value="1975">1983</option>
      <option value="1975">1984</option>
      <option value="1975">1985</option>
      <option value="1975">1986</option>
      <option value="1975">1987</option>
      <option value="1975">1988</option>
      <option value="1975">1989</option>
      <option value="1975">1990</option>

    </select>
  );
};

export default SearchYear;
