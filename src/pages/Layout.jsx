import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between border-box">
      <header className="w-full">
        <Navigation />
      </header>
      <main className="w-full ">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
