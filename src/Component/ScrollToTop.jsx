import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { revealTarget } from "../utils/pageEffects";

const scrollTop = () => {
  window.scrollTo(0, 0);
  if (document.documentElement) document.documentElement.scrollTop = 0;
  if (document.body) document.body.scrollTop = 0;
};

// Every navigation starts at the top of the page, unless the link carries a
// #hash - then the matching section is scrolled into view (opening its tab
// first if it sits inside a tab panel). Pages are lazy-loaded, so the target
// may not be in the DOM yet: keep looking for a moment.
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (!hash) scrollTop();
  }, [pathname, hash, key]);

  useEffect(() => {
    if (!hash) return undefined;
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer;
    const find = () => {
      const el = document.getElementById(id);
      if (el) {
        revealTarget(el).scrollIntoView();
        if (el.matches("input,textarea,select")) el.focus({ preventScroll: true });
        return;
      }
      if (tries++ < 20) timer = setTimeout(find, 50);
    };
    find();
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}
