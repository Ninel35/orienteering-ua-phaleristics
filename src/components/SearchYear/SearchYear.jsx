import { useDispatch } from "react-redux";
import { setYearAction } from "../../redux/filterSlice";

const SearchYear = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    evt.preventDefault();
    dispatch(setYearAction(evt.target.value));
  };

  return (
    <select onChange={handleChange} defaultValue="">
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
    </select>
  );
};

export default SearchYear;
