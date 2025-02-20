import { Outlet } from "react-router-dom";
import NewsList from "../../components/NewsList/NewsList";

const News = () => {
  return (
    <>
      <NewsList />
      <Outlet />
    </>
  );
};
export default News;
