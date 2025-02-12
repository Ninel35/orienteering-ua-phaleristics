import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header className={css.header}>
      <h1>Phaleristics of Orienteering.UA</h1>
      <Navigation></Navigation>
    </header>
  );
};
export default Header;
