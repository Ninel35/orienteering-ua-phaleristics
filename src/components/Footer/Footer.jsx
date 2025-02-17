import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      &copy; Copyright. 2025, All rights reserved. <br /> Administrator contact:{" "}
      <a href="mailto:support@orienteering-history.com">
        support@orienteering-history.com
      </a>{" "}
      - Nina Raschupkina, Władysław Cepurdej
    </footer>
  );
};

export default Footer;
