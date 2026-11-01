import React, { useState } from "react";
import Icon from "../../../../Component/Icon";
import MailtoFallback from "../../../../Component/MailtoFallback";
import APIRequest from "../../../../utils/APIRequest";
import ConfigAPIURL from "../../../../config/ConfigAPIURL";
import { readApiResult, validEmail } from "../../../../utils/forms";

export default function NewsletterForm() {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value.trim();
    const name = form.elements.name.value.trim();

    if (!validEmail(email)) {
      setError("Enter a valid email address.");
      form.elements.email.focus();
      return;
    }
    setError("");

    setSending(true);
    const outcome = readApiResult(await APIRequest.request("POST", ConfigAPIURL.newsletter, JSON.stringify({ name, email })));
    setSending(false);

    if (outcome.status === "ok") {
      setResult({ sent: true, email, message: outcome.message });
      form.reset();
    } else if (outcome.status === "invalid") {
      setError(outcome.message);
    } else {
      setResult({
        sent: false,
        subject: "Subscribe to the DGC Brief",
        body: `Please add me to the DGC Brief newsletter.\n\nName: ${name || "-"}\nEmail: ${email}\nTopics: All`,
      });
    }
  };

  return (
    <form className="nl-line" id="news-form" noValidate onSubmit={onSubmit}>
      <span className="nl-ic">
        <Icon name="mail" />
      </span>
      <div className="nl-copy">
        <b>The DGC Brief</b>
        <span>A monthly note on data centers, security, compliance and AI. One email a month.</span>
      </div>
      <input type="hidden" name="name" defaultValue="" />
      <label className="sr" htmlFor="nl-email">
        Work email
      </label>
      <input id="nl-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
      <button className="btn btn-gold" type="submit" disabled={sending}>
        {sending ? "Subscribing…" : "Subscribe"}
        <Icon name="arrow" />
      </button>
      <div className="err" id="nl-err" role="alert">
        {error}
      </div>
      <div className="result" id="nl-result" hidden={!result}>
        {result && result.sent && (
          <>
            <b>You're subscribed.</b>
            <span style={{ fontSize: "13.5px" }}>The next DGC Brief goes to {result.email}.</span>
          </>
        )}
        {result && !result.sent && <MailtoFallback subject={result.subject} body={result.body} />}
      </div>
    </form>
  );
}
