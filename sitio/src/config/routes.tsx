import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";

import List from "../pages/List";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/items", element: <List /> },
      { path: "/items/:id", element: <Detail /> },
    ],
  },
]);

export default router;
