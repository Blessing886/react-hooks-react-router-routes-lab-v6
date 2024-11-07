import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/movie/:id", element: <Movie /> },
  { path: "/directors", element: <Directors /> },
  { path: "/actors", element: <Actors /> },
  { path: "*", element: <ErrorPage /> }
];

export default routes;
