import React, { useRef, useState } from "react";
import { BRAND } from "../constants/digitalGlobe";

// Shown when the enquiry / newsletter API cannot be reached: the message is
// laid out ready to send, either through the visitor's mail app or by copy.
export default function MailtoFallback({ subject, body }) {
  const preRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const to = BRAND.email;
  const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const selectText = () => {
    const range = document.createRange();
    range.selectNodeContents(preRef.current);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${to}\nSubject: ${subject}\n\n${body}`);
      setCopied(true);
    } catch {
      selectText();
    }
  };

  return (
    <>
      <b>Your message is ready.</b>
      <span style={{ fontSize: "13.5px" }}>
        Use "Open in email" to send it from your mail app, or copy it to <span className="copyable">{to}</span>.
      </span>
      <pre ref={preRef}>{`Subject: ${subject}\n\n${body}`}</pre>
      <div className="rowb">
        <a className="btn btn-gold" href={href}>
          Open in email
        </a>
        <button type="button" className="btn btn-line" onClick={copy}>
          {copied ? "Copied" : "Copy message"}
        </button>
      </div>
    </>
  );
}
