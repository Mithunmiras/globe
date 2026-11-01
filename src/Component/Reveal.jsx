import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";

export default function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const variants = {
    up:    { hidden: { opacity: 0, y: 40 },     visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -50 },    visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 },     visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  };
  const v = variants[direction] || variants.up;
  return (
    <Motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={v}
      transition={{ duration: 0.75, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </Motion.div>
  );
}
