import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import RootLayout from "./layouts/RootLayout";
import News from "./pages/News/News";
import CardDetailsPage from "./pages/CardDetailsPage/CardDetailsPage";
import Top10 from "./pages/Top10/Top10";
import About from "./pages/About/About";
import Top10Veterans from "./pages/Top10Veterans/Top10Veterans";
import NewsDetailsPage from "./pages/NewsDetailsPage/NewsDetailsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="top10" element={<Top10 />} />
      <Route path="news" element={<News />} />
      <Route path="news/:newsId" element={<NewsDetailsPage />} />
      <Route path="about" element={<About />} />
      <Route path="masters" element={<Top10Veterans />} />
      <Route path=":id" element={<CardDetailsPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
