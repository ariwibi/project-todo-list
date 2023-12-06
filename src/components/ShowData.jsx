import { useState, useEffect } from "react";
import Button from "./Button";
import { cn } from "../utils/cn";

export default function ShowData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/src/utils/data.json");
        if (!response.ok) {
          throw new Error("data response is not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error Fetching data: ", error);
      }
    }
    getData();
  }, []);
  if (data.length <= 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className={cn("w-11/12 mx-auto", "flex flex-col items-center")}>
      {data.map((dataTodo) => (
        <article
          key={dataTodo.id}
          className={cn(
            "border rounded-md",
            "w-full h-32",
            " px-3 mt-5",
            "flex flex-col justify-center gap-y-2",
            "shadow-md"
          )}>
          <p>{dataTodo.activity}</p>
          <i>{dataTodo.date}</i>
          <div>
            <Button intent="danger">Delete</Button>
            <Button>Complete</Button>
          </div>
        </article>
      ))}
    </section>
  );
}
