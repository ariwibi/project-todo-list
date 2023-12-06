import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function RootLayout() {
  return (
    <>
      <header className="w-full">
        <Navigation />
      </header>
      <main className="w-full ">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
