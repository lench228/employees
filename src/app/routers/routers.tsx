import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./routes.tsx";
import Layout from "../layout";

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [...PublicRoutes],
  },
]);
