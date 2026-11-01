// Scroll, motion and widget behaviour for the Digital Globe pages.
//
// The page sections are static markup, so the interactive bits (tabs, the
// industries carousel, counters, reveal-on-scroll, hero video controls ...)
// are attached to the mounted page element and torn down again when the page
// unmounts. Every effect is idempotent, so React StrictMode's double-mount in
// development is harmless.

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const reducedMotion = () => !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
const hasIO = () => "IntersectionObserver" in window;
const finePointer = () => !!(window.matchMedia && window.matchMedia("(hover:hover) and (pointer:fine)").matches);

/** Observe elements once; `onEnter(el)` fires the first time each one is visible. */
function observeOnce(els, onEnter, options) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        io.unobserve(e.target);
        onEnter(e.target);
      }
    });
  }, options);
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

/* ------------------------------------------------------------------ */
/* tab panels: a link or button can target something inside a hidden   */
/* tab, so open the tab first and return the element to scroll to      */
/* ------------------------------------------------------------------ */
export function revealTarget(el) {
  if (!el || el.getAttribute("role") !== "tabpanel") return el;
  const tab = document.getElementById(el.getAttribute("aria-labelledby"));
  if (tab) tab.click();
  return el.closest("[data-tabs]") || el;
}

function tabs(root) {
  const cleanups = [];
  $$("[data-tabs]", root).forEach((box) => {
    const list = $$('[role="tab"]', box).filter((t) => t.closest("[data-tabs]") === box);
    const select = (tab, focus) => {
      list.forEach((b) => {
        const on = b === tab;
        b.setAttribute("aria-selected", on ? "true" : "false");
        b.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(b.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
      $$(".dx-hot", box).forEach((h) => h.classList.toggle("on", h.dataset.tabGo === tab.getAttribute("aria-controls")));
      if (focus) tab.focus();
      const strip = tab.closest(".dx-tablist.h");
      if (strip && tab.scrollIntoView) {
        strip.scrollTo({
          left: tab.offsetLeft - strip.clientWidth / 2 + tab.clientWidth / 2,
          behavior: reducedMotion() ? "auto" : "smooth",
        });
      }
    };
    list.forEach((tab, i) => {
      tab.tabIndex = tab.getAttribute("aria-selected") === "true" ? 0 : -1;
      const onClick = () => select(tab);
      const onKey = (e) => {
        let next = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = list[(i + 1) % list.length];
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = list[(i - 1 + list.length) % list.length];
        else if (e.key === "Home") next = list[0];
        else if (e.key === "End") next = list[list.length - 1];
        if (next) {
          e.preventDefault();
          select(next, true);
        }
      };
      tab.addEventListener("click", onClick);
      tab.addEventListener("keydown", onKey);
      cleanups.push(() => {
        tab.removeEventListener("click", onClick);
        tab.removeEventListener("keydown", onKey);
      });
    });
    $$(".dx-hot", box).forEach((hot) => {
      const onClick = () => {
        const tab = list.find((b) => b.getAttribute("aria-controls") === hot.dataset.tabGo);
        if (tab) select(tab);
      };
      hot.addEventListener("click", onClick);
      cleanups.push(() => hot.removeEventListener("click", onClick));
    });
    const first = list.find((b) => b.getAttribute("aria-selected") === "true");
    if (first) select(first);
  });
  return () => cleanups.forEach((fn) => fn());
}

/* ------------------------------------------------------------------ */
/* reveal on scroll (things below the fold fade/slide in)               */
/* ------------------------------------------------------------------ */
function revealOnScroll(root) {
  if (reducedMotion() || !hasIO()) return undefined;
  const armed = [];
  const timers = [];
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.remove("rv-pre");
        io.unobserve(el);
        timers.push(
          setTimeout(() => {
            el.classList.remove("rv");
            el.style.transitionDelay = "";
          }, 950)
        );
      });
    },
    { rootMargin: "0px 0px -40px 0px" }
  );
  const vh = window.innerHeight;
  $$(".card,.steps li,.sec-head,.media,.tbl-wrap,.logo-tile,.quote,.issue,.takeaway", root).forEach((el, i) => {
    if (el.closest(".hero") || el.classList.contains("rv-pre")) return;
    if (el.getBoundingClientRect().top > vh) {
      el.classList.add("rv", "rv-pre");
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      armed.push(el);
      io.observe(el);
    }
  });
  return () => {
    io.disconnect();
    timers.forEach(clearTimeout);
    armed.forEach((el) => {
      el.classList.remove("rv", "rv-pre");
      el.style.transitionDelay = "";
    });
  };
}

/** Add a class to groups of elements once they scroll into view. */
function revealGroups(root, selector, className, threshold) {
  const els = $$(selector, root);
  if (!els.length) return undefined;
  if (reducedMotion() || !hasIO()) {
    els.forEach((el) => el.classList.add(className));
    return undefined;
  }
  return observeOnce(els, (el) => el.classList.add(className), { threshold });
}

/* ------------------------------------------------------------------ */
/* running numbers                                                      */
/* ------------------------------------------------------------------ */
function parseNumber(t) {
  const m = t.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const raw = m[2];
  return {
    pre: m[1],
    val: parseFloat(raw.replace(/,/g, "")),
    dec: (raw.split(".")[1] || "").length,
    comma: raw.indexOf(",") > -1,
    suf: m[3],
  };
}
function formatNumber(v, p) {
  let s = v.toFixed(p.dec);
  if (p.comma) {
    const parts = s.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    s = parts.join(".");
  }
  return p.pre + s + p.suf;
}

function counters(root) {
  if (!hasIO()) return undefined;
  const els = $$(".stat-row b, .stat b, b[data-n]", root);
  const ranks = $$(".dx-rank", root);
  if (!els.length && !ranks.length) return undefined;
  const reduced = reducedMotion();
  const run = (el) => {
    const txt = el.dataset.final || el.textContent.trim();
    el.dataset.final = txt;
    const p = parseNumber(txt);
    if (!p || reduced) {
      el.textContent = txt;
      return;
    }
    const from = p.val >= 99 && p.val < 100 && p.dec >= 2 ? 90 : 0;
    const dur = 1600;
    let t0 = null;
    el.classList.add("counting");
    const step = (ts) => {
      if (!t0) t0 = ts;
      const k = Math.min(1, (ts - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = formatNumber(from + (p.val - from) * eased, p);
      if (k < 1) requestAnimationFrame(step);
      else {
        el.textContent = txt;
        el.classList.remove("counting");
      }
    };
    el.textContent = formatNumber(from, p);
    requestAnimationFrame(step);
  };
  const stopNumbers = observeOnce(els, run, { threshold: 0.6 });
  const stopRanks = observeOnce(ranks, (el) => el.classList.add("go"), { threshold: 0.15 });
  return () => {
    stopNumbers();
    stopRanks();
  };
}

/* ------------------------------------------------------------------ */
/* hero / header videos                                                 */
/* ------------------------------------------------------------------ */
function heroVideos(root) {
  const reduced = reducedMotion();
  const cleanups = [];
  $$(".vhero", root).forEach((sec) => {
    const video = $("video", sec);
    const btn = $(".vh-pp", sec);
    if (!video) return;
    // the photo slideshow shows until the video is really playing
    if (sec.classList.contains("has-sl")) {
      const on = () => {
        if (video.currentTime > 0.05 || !video.paused) video.classList.add("vh-on");
      };
      video.addEventListener("playing", on);
      video.addEventListener("timeupdate", on);
      cleanups.push(() => {
        video.removeEventListener("playing", on);
        video.removeEventListener("timeupdate", on);
      });
    }
    if (!btn) return;
    const label = (paused) => {
      btn.setAttribute("aria-label", paused ? "Play background video" : "Pause background video");
      const use = $("use", btn);
      if (use) use.setAttribute("href", paused ? "#i-play" : "#i-pause");
    };
    const isPlayingState = () => btn.getAttribute("aria-label").indexOf("Pause") === 0;
    if (reduced) {
      video.removeAttribute("autoplay");
      video.pause();
      label(true);
    } else {
      try {
        if (video.readyState === 0 && video.load) video.load();
      } catch {
        /* the poster stays on screen */
      }
      video.play().catch(() => {});
    }
    const onClick = () => {
      if (video.paused) {
        video.play().catch(() => {});
        label(false);
      } else {
        video.pause();
        label(true);
      }
    };
    const onVisibility = () => {
      if (document.hidden) video.pause();
      else if (isPlayingState()) video.play().catch(() => {});
    };
    btn.addEventListener("click", onClick);
    document.addEventListener("visibilitychange", onVisibility);
    cleanups.push(() => {
      btn.removeEventListener("click", onClick);
      document.removeEventListener("visibilitychange", onVisibility);
      video.pause();
    });
  });
  return () => cleanups.forEach((fn) => fn());
}

/** Inline video galleries: only play while they are on screen. */
function videoGalleries(root) {
  if (!hasIO()) {
    $$(".vs-grid", root).forEach((g) => g.classList.add("vs-in"));
    return undefined;
  }
  const videos = $$("video[data-vs]", root);
  const grids = $$(".vs-grid", root);
  if (!videos.length && !grids.length) return undefined;
  const rm = reducedMotion();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        const v = en.target;
        if (en.isIntersecting) {
          if (rm) return;
          if (v.preload === "none") {
            v.preload = "auto";
            v.load();
          }
          const pr = v.play();
          if (pr && pr.catch) pr.catch(() => {});
        } else {
          try {
            v.pause();
          } catch {
            /* ignore */
          }
        }
      });
    },
    { threshold: 0.2 }
  );
  const onPlaying = (e) => e.target.classList.add("vs-on");
  videos.forEach((v) => {
    v.addEventListener("playing", onPlaying);
    io.observe(v);
  });
  const stopGrids = observeOnce(grids, (g) => g.classList.add("vs-in"), { threshold: 0.15 });
  return () => {
    io.disconnect();
    stopGrids();
    videos.forEach((v) => v.removeEventListener("playing", onPlaying));
  };
}

/* ------------------------------------------------------------------ */
/* industries carousel                                                  */
/* ------------------------------------------------------------------ */
function industriesCarousel(root) {
  const car = $("#ind-car", root);
  if (!car) return undefined;
  const track = $("#ic-track", car);
  const dots = $("#ic-dots", car);
  const pp = $("#ic-pp", car);
  const slides = $$(".ic-slide", track);
  if (!track || !dots || !pp || !slides.length) return undefined;
  const rm = reducedMotion();
  let paused = rm;
  let hover = false;
  let timer = null;
  let count = 0;
  let scrollTimer;

  const per = () => {
    const w = slides[0].getBoundingClientRect().width + 14;
    return Math.max(1, Math.round(track.clientWidth / w));
  };
  const pages = () => Math.max(1, Math.ceil(slides.length / per()));
  const current = () => {
    const w = slides[0].getBoundingClientRect().width + 14;
    return Math.min(pages() - 1, Math.round(track.scrollLeft / (w * per())));
  };
  const go = (k) => {
    const total = pages();
    const idx = (k + total) % total;
    const target = slides[Math.min(slides.length - 1, idx * per())];
    track.scrollTo({ left: target.offsetLeft - track.offsetLeft - 2, behavior: rm ? "auto" : "smooth" });
  };
  const mark = () => {
    const c = current();
    $$("button", dots).forEach((b, k) => b.setAttribute("aria-current", k === c ? "true" : "false"));
    const num = $("#ic-num", car);
    if (num) num.textContent = String(c + 1).padStart(2, "0") + " / " + String(pages()).padStart(2, "0");
  };
  const restart = () => {
    clearInterval(timer);
    timer = setInterval(tick, 4500);
  };
  function tick() {
    if (!paused && !hover && !document.hidden && car.offsetParent !== null) go(current() + 1);
  }
  const build = () => {
    const total = pages();
    if (total === count) return;
    count = total;
    dots.innerHTML = "";
    for (let k = 0; k < total; k++) {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Show industries page " + (k + 1));
      b.addEventListener("click", () => {
        go(k);
        restart();
      });
      dots.appendChild(b);
    }
    mark();
  };
  const setPaused = (v) => {
    paused = v;
    pp.setAttribute("aria-label", v ? "Play" : "Pause");
    const use = $("use", pp);
    if (use) use.setAttribute("href", v ? "#i-play" : "#i-pause");
  };

  const listeners = [];
  const on = (target, type, fn, opts) => {
    target.addEventListener(type, fn, opts);
    listeners.push(() => target.removeEventListener(type, fn, opts));
  };
  $$(".ic-btn[data-dir]", car).forEach((b) =>
    on(b, "click", () => {
      go(current() + Number(b.dataset.dir));
      restart();
    })
  );
  on(pp, "click", () => setPaused(!paused));
  on(car, "mouseenter", () => (hover = true));
  on(car, "mouseleave", () => (hover = false));
  on(car, "focusin", () => (hover = true));
  on(car, "focusout", () => (hover = false));
  on(track, "keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(current() + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(current() - 1);
    }
  });
  on(
    track,
    "scroll",
    () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(mark, 80);
    },
    { passive: true }
  );
  on(window, "resize", () => {
    count = 0;
    build();
  });
  setPaused(paused);
  build();
  restart();

  return () => {
    clearInterval(timer);
    clearTimeout(scrollTimer);
    listeners.forEach((fn) => fn());
    dots.innerHTML = "";
  };
}

/* ------------------------------------------------------------------ */
/* data-centre landscape map: highlight a country across the map       */
/* ------------------------------------------------------------------ */
function landscape(root) {
  const cleanups = [];
  $$("[data-gdl]", root).forEach((box) => {
    if (hasIO()) cleanups.push(observeOnce([box], (el) => el.classList.add("go"), { threshold: 0.2 }));
    else box.classList.add("go");
    const highlight = (cc, on) => $$(`[data-cc="${cc}"]`, box).forEach((n) => n.classList.toggle("hl", on));
    const onOver = (e) => {
      const n = e.target.closest && e.target.closest("[data-cc]");
      if (n) highlight(n.getAttribute("data-cc"), true);
    };
    const onOut = (e) => {
      const n = e.target.closest && e.target.closest("[data-cc]");
      if (!n) return;
      const next = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest("[data-cc]");
      if (!next || next.getAttribute("data-cc") !== n.getAttribute("data-cc")) highlight(n.getAttribute("data-cc"), false);
    };
    box.addEventListener("mouseover", onOver);
    box.addEventListener("mouseout", onOut);
    cleanups.push(() => {
      box.removeEventListener("mouseover", onOver);
      box.removeEventListener("mouseout", onOut);
    });
  });
  return () => cleanups.forEach((fn) => fn());
}

/** Keep the story panel in view when a rail tab is switched. */
function infraRail(root) {
  const story = $("#in-story", root);
  if (!story) return undefined;
  const cleanups = $$(".ix-rail [role=tab]", story).map((t) => {
    const fn = () => {
      const r = story.getBoundingClientRect();
      if (r.top < 0 || r.top > window.innerHeight * 0.6) {
        story.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth" });
      }
    };
    t.addEventListener("click", fn);
    return () => t.removeEventListener("click", fn);
  });
  return () => cleanups.forEach((fn) => fn());
}

/* ------------------------------------------------------------------ */
/* text + image motion                                                  */
/* ------------------------------------------------------------------ */
function textMotion(root) {
  if (reducedMotion()) return undefined;
  const HEADINGS = ".sec-head h2,.dx-head h2,.dx-h,.ix-ch-head h2,.ix-scene header h3,.kp-copy h1,.kp-2 h2,.da-h,.cl-sub";
  const LEDES = ".sec-head>p,.dx-head .dx-lede,.dx-lede,.ix-ch-head .dx-lede,.kp-lead";
  const KICKERS = ".sec-head .kicker,.dx-head .dx-pill";
  const mark = (sel, cls) => $$(sel, root).forEach((el) => el.classList.add(cls));
  mark(HEADINGS, "tx");
  mark(LEDES, "tx-f");
  mark(KICKERS, "tx-k");
  const els = $$(".tx,.tx-f,.tx-k", root);
  if (!hasIO()) {
    els.forEach((el) => el.classList.add("tx-in"));
    return undefined;
  }
  // reveal all the text of a block together, keyed on the block's container
  const groups = new Map();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        (groups.get(en.target) || []).forEach((t) => t.classList.add("tx-in"));
        io.unobserve(en.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0 }
  );
  els.forEach((el) => {
    const wrap = el.parentElement || el;
    if (!groups.has(wrap)) {
      groups.set(wrap, []);
      io.observe(wrap);
    }
    groups.get(wrap).push(el);
  });
  return () => io.disconnect();
}

function imageReveal(root) {
  if (reducedMotion() || !hasIO()) return undefined;
  const skip = ".vs-card,.avatar,.ptm,.marquee,.lw,.brand,.vhero,.ic-art,.ind-art,.ap-sat,header,footer,[data-dyn]";
  const imgs = $$("img", root).filter(
    (im) => !im.closest(skip) && !im.classList.contains("dx-globe") && !/logo|flag-|dgc-mark/.test(im.getAttribute("src") || "")
  );
  if (!imgs.length) return undefined;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("im-in");
          io.unobserve(en.target);
        }
      });
    },
    { rootMargin: "0px 0px -5% 0px" }
  );
  imgs.forEach((im) => {
    im.classList.add("im-r");
    io.observe(im);
  });
  // anything already above the fold after a fast scroll should not stay hidden
  let tk;
  const onScroll = () => {
    clearTimeout(tk);
    tk = setTimeout(() => {
      imgs.forEach((im) => {
        if (!im.classList.contains("im-in") && im.offsetParent && im.getBoundingClientRect().top < window.innerHeight) {
          im.classList.add("im-in");
        }
      });
    }, 120);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => {
    io.disconnect();
    clearTimeout(tk);
    window.removeEventListener("scroll", onScroll);
  };
}

/** Split text nodes into word spans (element children count as one word). */
function splitWords(el) {
  let n = 0;
  Array.from(el.childNodes).forEach((nd) => {
    if (nd.nodeType === 3) {
      if (!nd.textContent.trim()) return;
      const frag = document.createDocumentFragment();
      nd.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
          return;
        }
        const s = document.createElement("span");
        s.className = "w";
        s.setAttribute("data-w", "");
        s.style.setProperty("--w", n++);
        s.textContent = part;
        frag.appendChild(s);
      });
      el.replaceChild(frag, nd);
    } else if (nd.nodeType === 1 && nd.tagName !== "BR") {
      nd.classList.add("w");
      nd.setAttribute("data-wu", "");
      nd.style.setProperty("--w", n++);
    }
  });
}

const SCRAMBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/&";
function scramble(el) {
  if (el._scr || el.children.length) return;
  const fin = el.dataset.fin || el.textContent;
  el.dataset.fin = fin;
  if (fin.length > 48) return;
  el._scr = 1;
  let t0 = null;
  const dur = 900;
  el.classList.add("scr");
  const frame = (ts) => {
    if (!t0) t0 = ts;
    const k = Math.min(1, (ts - t0) / dur);
    const revealed = Math.floor(k * fin.length);
    let out = "";
    for (let i = 0; i < fin.length; i++) {
      const ch = fin[i];
      out += i < revealed || ch === " " || ch === "·" ? ch : SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0];
    }
    el.textContent = out;
    if (k < 1) requestAnimationFrame(frame);
    else {
      el.textContent = fin;
      el._scr = 0;
    }
  };
  requestAnimationFrame(frame);
}

function advancedTextMotion(root) {
  const cleanups = [];
  // tagline: split into characters (also under reduced motion)
  let c = 0;
  $$(".tg .tg-w", root).forEach((w) => {
    if (w.dataset.split) return;
    w.dataset.split = "1";
    const text = w.textContent;
    w.textContent = "";
    text.split("").forEach((ch) => {
      const s = document.createElement("span");
      s.className = "tg-c";
      s.style.setProperty("--c", c++);
      s.textContent = ch;
      w.appendChild(s);
    });
  });
  $$(".tg .tg-it", root).forEach((it, k) => {
    if (it.dataset.sparks) return;
    it.dataset.sparks = "1";
    it.style.setProperty("--d", k * 1.0 + "s");
    for (let i = 0; i < 8; i++) {
      const sp = document.createElement("i");
      sp.className = "tg-sp";
      const a = (i / 8) * Math.PI * 2;
      const r = 0.9 + Math.random() * 0.5;
      sp.style.setProperty("--x", (Math.cos(a) * r).toFixed(2) + "em");
      sp.style.setProperty("--y", (Math.sin(a) * r * 0.7).toFixed(2) + "em");
      it.appendChild(sp);
    }
  });
  if (reducedMotion()) return undefined;

  $$(".tx", root).forEach((h) => {
    if (h.closest(".vhero") || h.dataset.words) return;
    h.dataset.words = "1";
    splitWords(h);
    h.classList.add("tx-w");
    const ws = h.querySelectorAll(".w");
    if (ws.length > 1) {
      const em = h.querySelector("em.w,span.w:not([data-w])");
      (em || ws[ws.length - 1]).classList.add("wl");
    }
  });
  $$(".vhero .vh-copy h1:not(.tg)", root).forEach((h) => {
    if (h.dataset.words) return;
    h.dataset.words = "1";
    splitWords(h);
    h.classList.add("hw");
  });

  // scramble-decode the small kickers
  const kickers = $$(".sec-head .kicker,.dx-head .dx-pill,.vh-copy .kicker", root).filter((k) => !k.children.length);
  if (hasIO()) {
    cleanups.push(
      observeOnce(
        kickers.filter((k) => !k.closest(".vhero")),
        scramble,
        { rootMargin: "0px 0px -8% 0px" }
      )
    );
  }
  const heroTimer = setTimeout(() => $$(".vh-copy .kicker", root).forEach((k) => !k.children.length && scramble(k)), 200);
  cleanups.push(() => clearTimeout(heroTimer));

  // sub-page headers: animate the highlighted (em) words letter by letter
  $$(".vhero:not(#hero-video) .vh-copy h1 em", root).forEach((em) => {
    if (em.dataset.ec) return;
    em.dataset.ec = "1";
    const txt = em.textContent;
    em.setAttribute("aria-label", txt);
    em.classList.remove("w");
    em.classList.add("em-anim");
    em.textContent = "";
    let n = 0;
    txt.split(/(\s+)/).forEach((word) => {
      if (!word) return;
      if (/^\s+$/.test(word)) {
        em.appendChild(document.createTextNode(" "));
        return;
      }
      const ws = document.createElement("span");
      ws.className = "ew";
      ws.setAttribute("aria-hidden", "true");
      word.split("").forEach((ch) => {
        const s = document.createElement("span");
        s.className = "ec";
        s.style.setProperty("--c", n++);
        s.textContent = ch;
        ws.appendChild(s);
      });
      em.appendChild(ws);
    });
  });

  // 3D tilt cards + magnetic buttons (mouse only)
  if (finePointer()) {
    const TILT = ".vh-chips a,.fd-card,.dcs-dir a,.svc2,.ix-tile,.dcs-rel a,.ic-slide,.ind-card,.dsy-p";
    const onMove = (e) => {
      const t = e.target.closest && e.target.closest(TILT);
      if (t) {
        t.classList.add("tilt");
        const r = t.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        const m = t.classList.contains("dsy-p") ? 2 : 5;
        t.style.transform = `perspective(900px) rotateX(${(-y * m).toFixed(2)}deg) rotateY(${(x * m).toFixed(2)}deg) translateY(-3px)`;
      }
      const b = e.target.closest && e.target.closest(".btn");
      if (b) {
        b.classList.add("mag");
        const q = b.getBoundingClientRect();
        b.style.transform = `translate(${((e.clientX - q.left - q.width / 2) * 0.18).toFixed(1)}px,${(
          (e.clientY - q.top - q.height / 2) *
          0.25
        ).toFixed(1)}px)`;
      }
    };
    const onOut = (e) => {
      const t = e.target.closest && e.target.closest(TILT + ",.btn");
      if (t && !t.contains(e.relatedTarget)) t.style.transform = "";
    };
    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerout", onOut, { passive: true });
    cleanups.push(() => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerout", onOut);
    });
  }
  return () => cleanups.forEach((fn) => fn());
}

function timelines(root) {
  const lists = $$(".dx-timeline", root);
  lists.forEach((ol) => Array.from(ol.children).forEach((li, i) => li.style.setProperty("--n", i)));
  const iconCards = $$(".icards.n6", root);
  if (!hasIO()) {
    lists.forEach((e) => e.classList.add("tl-in"));
    iconCards.forEach((e) => e.classList.add("rv-go"));
    return undefined;
  }
  const stops = [
    observeOnce(lists, (e) => e.classList.add("tl-in"), { threshold: 0.25 }),
    observeOnce(iconCards, (e) => e.classList.add("rv-go"), { threshold: 0.15 }),
  ];
  return () => stops.forEach((fn) => fn());
}

/* ------------------------------------------------------------------ */
/* delegated clicks: "read more" toggles, jump buttons                  */
/* ------------------------------------------------------------------ */
function delegatedClicks(root) {
  const onClick = (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const bio = target.closest(".bio-more");
    if (bio) {
      const person = bio.closest(".person");
      if (person) {
        const open = person.classList.toggle("open");
        bio.textContent = open ? "Show less" : "Read more";
      }
      return;
    }

    const more = target.closest("[data-more]");
    if (more) {
      const panel = document.getElementById(more.dataset.more);
      if (!panel) return;
      const open = panel.hidden;
      panel.hidden = !open;
      more.setAttribute("aria-expanded", open ? "true" : "false");
      const span = more.querySelector("span");
      if (span) {
        if (!more.dataset.label) more.dataset.label = span.textContent;
        span.textContent = open ? more.dataset.less || "See less" : more.dataset.label;
      }
      more.classList.toggle("on", open);
      return;
    }

    const jump = target.closest("[data-jump]");
    if (jump) {
      const el = document.getElementById(jump.dataset.jump);
      if (el) revealTarget(el).scrollIntoView();
    }
  };
  root.addEventListener("click", onClick);
  return () => root.removeEventListener("click", onClick);
}

/* ------------------------------------------------------------------ */
export function initPageEffects(root) {
  if (!root) return undefined;
  const effects = [
    tabs,
    revealOnScroll,
    (r) => revealGroups(r, "[data-reveal]", "in", 0.12),
    (r) => revealGroups(r, ".icards, .board, #team-list, .as-grid", "in-view", 0.08),
    (r) => revealGroups(r, "#home-founders", "fd-in", 0.2),
    counters,
    heroVideos,
    videoGalleries,
    industriesCarousel,
    landscape,
    infraRail,
    textMotion,
    imageReveal,
    advancedTextMotion,
    timelines,
    delegatedClicks,
  ];
  const cleanups = effects.map((fn) => fn(root)).filter(Boolean);
  return () => cleanups.forEach((fn) => fn());
}
