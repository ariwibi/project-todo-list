import LocaleContext from "../contexts/LocaleContext";
import { useContext, useState } from "react";
import { cn } from "../utils/cn";
import Button from "./Button";
import { generateId } from "../utils/id";
import { generateDate } from "../utils/date";
import { useNavigate } from "react-router-dom";
export default function AddTodo() {
  const [activity, setActivity] = useState("");
  const { data, setData } = useContext(LocaleContext);
  const navigate = useNavigate();
  function toggleActivity(event) {
    setActivity(event.target.value);
  }
  function onSaveHandlerTodo(event) {
    event.preventDefault();
    const newActivity = {
      id: generateId(),
      activity,
      date: generateDate(),
      isComplete: false,
    };
    setData((prevData) => [...prevData, newActivity]);
    navigate("/");
  }
  return (
    <section className="w-11/12 mx-auto flex flex-col items-center mt-20">
      <div className="w-full sm:w-9/12 md:w-8/12 lg:w-6/12 mb-5 text-3xl sm:text-4xl font-bold">
        <h1>Input Todo</h1>
      </div>
      <form
        action=""
        className={cn(
          "w-full sm:w-9/12 md:w-8/12 lg:w-6/12 h-52",
          "border",
          "shadow-md",
          "p-5 md:p-10",
          "flex flex-col items-center justify-center",
          "rounded-md"
        )}
        onSubmit={onSaveHandlerTodo}>
        <input
          type="text"
          className={"w-full h-10 border-2 border-slate-800 rounded-md p-3 "}
          placeholder="whats your activity tomorrow..."
          onChange={toggleActivity}
        />
        <br />
        <Button>Add Todo</Button>
      </form>
    </section>
  );
}
