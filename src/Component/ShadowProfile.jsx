import { useEffect, useRef } from "react";

// The leadership profile pages are self-contained mini-sites: their own
// stylesheet, markup and script live inside a shadow root so they cannot
// clash with the site stylesheet. `init(host, root)` wires the behaviour and
// returns a teardown function.
export default function ShadowProfile({ id, markup, css, init }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const root = host.shadowRoot || host.attachShadow({ mode: "open" });
    root.innerHTML = `<style>${css}</style>${markup}`;
    const teardown = init(host, root);
    return () => {
      if (typeof teardown === "function") teardown();
      root.innerHTML = "";
    };
  }, [css, markup, init]);

  return <div className="kpx-host" id={id} ref={hostRef} />;
}
