import { useContext } from "react";
import Button from "./Button";
import { cn } from "../utils/cn";
import LocaleContext from "../contexts/LocaleContext";
import { onDeleteTodo } from "../utils/delete";
import { onCompleteHandler } from "../utils/isCompleted";

export default function Complete() {
  const { data, setData } = useContext(LocaleContext);
  if (data.length <= 0) {
    return <p>Loading...</p>;
  }

  const onProgress = data.filter((itemData) => itemData.isComplete);
  if (onProgress <= 0) {
    return <p>Belum ada data</p>;
  }
  return (
    <section
      className={cn(
        "w-11/12 mx-auto",
        "flex flex-col items-center bg-pink-300",
        onProgress <= 0 ? "-mt-28" : ""
      )}>
      <div
        className={cn(
          "w-full sm:w-9/12 md:w-8/12 lg:w-6/12",
          "font-bold text-3xl sm:text-4xl",
          "mt-5"
        )}>
        <h1>Your Todo Completed</h1>
      </div>
      {onProgress.map((dataTodo) => (
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
            <Button
              intent="danger"
              onClick={() => onDeleteTodo({ data, setData, id: dataTodo.id })}>
              Delete
            </Button>
            <Button
              onClick={() =>
                onCompleteHandler({ data, setData, id: dataTodo.id })
              }>
              unComplete
            </Button>
          </div>
        </article>
      ))}
    </section>
  );
}
