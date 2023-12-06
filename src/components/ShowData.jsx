import { useContext } from "react";
import Button from "./Button";
import { cn } from "../utils/cn";
import LocaleContext from "../contexts/LocaleContext";

export default function ShowData() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     async function getData() {
  //       try {
  //         const response = await fetch("/src/utils/data.json");
  //         if (!response.ok) {
  //           throw new Error("data response is not ok");
  //         }
  //         const data = await response.json();
  //         setData(data);
  //       } catch (error) {
  //         console.error("Error Fetching data: ", error);
  //       }
  //     }
  //     getData();
  //   }, []);
  const { data } = useContext(LocaleContext);
  if (data.length <= 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className={cn("w-11/12 mx-auto", "flex flex-col items-center")}>
      <div
        className={cn(
          "w-full sm:w-9/12 md:w-8/12 lg:w-6/12",
          "font-bold text-3xl sm:text-4xl",
          "mt-5"
        )}>
        <h1>Your Todo</h1>
      </div>
      {data.map((dataTodo) => (
        <article
          key={dataTodo.id}
          className={cn(
            "border rounded-md",
            "w-full sm:w-9/12 md:w-8/12 lg:w-6/12",
            "py-5 px-3 mt-5",
            "flex flex-col gap-y-2",
            "shadow-md",
            "overflow-hidden"
          )}>
          <p>{dataTodo.activity}</p>
          <i>{dataTodo.date}</i>
          <div>
            <Button intent="danger" id={dataTodo.id}>
              Delete
            </Button>
            <Button>Complete</Button>
          </div>
        </article>
      ))}
    </section>
  );
}
