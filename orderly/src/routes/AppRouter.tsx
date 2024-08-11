//Layout
import MainLayout from "@layouts/MainLayout/MainLayout";
//Pages
import Shop from "@pages/Shop/Shop";
import Home from "@pages/Home/Home";
import Error from "@pages/Error/Error";
//React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
