import { useEffect, useLayoutEffect, useRef } from "react";
import { DEFAULT_TITLE } from "../constants/digitalGlobe";
import { initPageEffects } from "../utils/pageEffects";

// Wrapper every routed page renders inside: it carries the `.page` hooks the
// stylesheet keys on (data-route), sets the document title, and wires up the
// scroll / motion / widget behaviour for the page it contains.
export default function Page({ route, title, className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    document.title = title || DEFAULT_TITLE;
  }, [title]);

  // layout effect so below-the-fold content is armed before the first paint
  useLayoutEffect(() => initPageEffects(ref.current), []);

  return (
    <section
      ref={ref}
      className={["page active", className].filter(Boolean).join(" ")}
      data-route={route}
      data-title={title}
    >
      {children}
    </section>
  );
}
