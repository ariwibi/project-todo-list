import { cn } from "../utils/cn";
import LiLink from "./LiLink";
import { useState } from "react";

export default function Navigation() {
  const [nav, setNav] = useState(false);

  function toggleNavbar() {
    setNav(nav === false ? true : false);
  }
  return (
    <>
      <nav
        className={cn(
          "w-full h-20",
          "px-5 sm:px-10",
          "text-white bg-slate-800",
          "flex justify-between items-center",
          "text-xl"
        )}>
        <div className={cn("cursor-pointer", "font-semibold")}>WibDev</div>
        <ul className={cn("gap-x-5 hidden sm:flex ")}>
          <LiLink url="/">Home</LiLink>
          <LiLink url="add">Add</LiLink>
          <LiLink url="about">Complete</LiLink>
        </ul>
        <button className="sm:hidden" onClick={toggleNavbar}>
          <div className={cn("sm:hidden", "flex flex-col gap-3")}>
            <span
              className={
                nav === true ? "hidden" : "border-t-2 border-white block w-10"
              }></span>
            <span
              className={
                nav === true ? "hidden" : "border-t-2 border-white block w-10"
              }></span>
            <span
              className={
                nav === true ? "hidden" : "border-t-2 border-white block w-10"
              }></span>
          </div>
        </button>

        <div
          className={
            nav === false
              ? "hidden"
              : "absolute h-60 w-52 top-2 right-2 bg-slate-700 px-10 py-5 sm:hidden rounded-md"
          }>
          <div className=" relative">
            <button className="sm:hidden " onClick={toggleNavbar}>
              <div className={cn("sm:hidden", "absolute top-2 right-2")}>
                <span className="border-t-2 border-white block w-10 absolute rotate-45"></span>
                <span className="border-t-2 border-white block w-10 -rotate-45 absolute"></span>
              </div>
            </button>
          </div>
          <ul className={cn("gap-y-3 flex flex-col mt-5")}>
            <LiLink url="/">Home</LiLink>
            <LiLink url="add">Add</LiLink>
            <LiLink url="about">Complete</LiLink>
          </ul>
        </div>
      </nav>
    </>
  );
}
