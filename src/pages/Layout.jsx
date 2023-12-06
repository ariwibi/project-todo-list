import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function RootLayout() {
  return (
    <>
      <header className="w-full">
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
