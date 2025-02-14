import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header className={css.header}>
      <h1>Orienteering History of Ukraine</h1>
      <Navigation></Navigation>
    </header>
  );
};
export default Header;
