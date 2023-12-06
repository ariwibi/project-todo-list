import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
const button = cva(["text-xl", "rounded-sm", "first:mr-3"], {
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
export default function Button({ children, intent }) {
  return <button className={button({ intent })}>{children}</button>;
}
Button.propTypes = {
  children: PropTypes.string,
  intent: PropTypes.string,
};
