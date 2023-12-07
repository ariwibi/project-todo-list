import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import { useContext } from "react";
import { onDeleteTodo } from "../utils/delete";
const button = cva(["text-xl", "rounded-sm", "first:mr-3 first:mb-3"], {
  variants: {
    intent: {
      primary: [
        "bg-slate-700",
        "text-white",
        "border-none",
        "hover:bg-slate-800",
      ],
      danger: ["bg-red-500", "text-white", "border-none", "hover:bg-red-600"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});
export default function Button({ children, intent, onClick }) {
  const { data, setData } = useContext(LocaleContext);
  return (
    <button className={button({ intent })} onClick={onClick} type="submit">
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.string,
  intent: PropTypes.string,
  onClick: PropTypes.func,
};
