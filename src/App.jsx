import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About/About";
import News from "./pages/News/News";
import CardDetailsPage from "./pages/CardDetailsPage/CardDetailsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="top10" element={<About />} />
      <Route path="news" element={<News />} />
      <Route path=":id" element={<CardDetailsPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
