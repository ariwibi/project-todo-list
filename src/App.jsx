import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import AddPage from "./pages/AddPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "add",
          element: <AddPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
