import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import AddPage from "./pages/AddPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LocaleContext from "./contexts/LocaleContext";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/src/utils/data.json");
        if (!response.ok) {
          throw new Error("data tidak di temukan");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("error dengan pesan : ", error);
      }
    }
    getData();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LocaleContext.Provider value={{ data, setData }}>
          <RootLayout />
        </LocaleContext.Provider>
      ),
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
