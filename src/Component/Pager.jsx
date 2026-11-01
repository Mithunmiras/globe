import { Link } from "react-router-dom";
import Icon from "./Icon";
import { PAGE_ORDER } from "../constants/digitalGlobe";

const toPath = (route) => (route === "home" ? "/" : `/${route}`);

// Previous / Next links at the foot of each page, following PAGE_ORDER.
export default function Pager({ route }) {
  const i = PAGE_ORDER.findIndex((p) => p.route === route);
  if (i < 0) return null;
  const prev = PAGE_ORDER[i - 1];
  const next = PAGE_ORDER[i + 1];

  return (
    <nav className="wrap pager" aria-label="Page navigation">
      {prev && (
        <Link className="pv" to={toPath(prev.route)}>
          <span className="pg-ar">
            <Icon name="arrow" />
          </span>
          <span className="pg-tx">
            <small>Previous</small>
            <b>{prev.label}</b>
          </span>
          <span className="pg-ic">
            <Icon name={prev.icon || "layout"} />
          </span>
        </Link>
      )}
      {next && (
        <Link className={`nx${i === 0 ? " solo" : ""}`} to={toPath(next.route)}>
          <span className="pg-ic">
            <Icon name={next.icon || "layout"} />
          </span>
          <span className="pg-tx">
            <small>Next</small>
            <b>{next.label}</b>
          </span>
          <span className="pg-ar">
            <Icon name="arrow" />
          </span>
        </Link>
      )}
    </nav>
  );
}
