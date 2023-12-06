import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { cn } from "../utils/cn";

export default function LiLink({ url, children }) {
  return (
    <li
      className={cn(
        "px-3",
        "hover:bg-slate-100 hover:text-slate-950",
        "rounded-xl",
        "transition-all ease-in duration-150"
      )}>
      <Link to={url}>{children}</Link>
    </li>
  );
}
LiLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
