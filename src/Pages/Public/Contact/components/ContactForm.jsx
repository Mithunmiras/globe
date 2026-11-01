import React, { useState } from "react";
import Icon from "../../../../Component/Icon";
import MailtoFallback from "../../../../Component/MailtoFallback";
import APIRequest from "../../../../utils/APIRequest";
import ConfigAPIURL from "../../../../config/ConfigAPIURL";
import { readApiResult, validEmail } from "../../../../utils/forms";

const TOPICS = [
  "Consulting & Advisory",
  "Data Center & Infrastructure",
  "Cybersecurity & Resilience",
  "Cloud & Modernisation",
  "Enterprise Applications",
  "Data, Analytics & AI",
  "Digital Workplace & Automation",
  "Managed IT Services",
  "Partnership",
  "Other",
];

const REQUIRED = ["name", "company", "email", "message"];

export default function ContactForm() {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = form.elements;

    const missing = REQUIRED.filter((k) => !f[k].value.trim());
    if (missing.length) {
      setError(`Please fill in: ${missing.join(", ")}.`);
      f[missing[0]].focus();
      return;
    }
    if (!validEmail(f.email.value.trim())) {
      setError("Enter a valid work email, like name@company.com.");
      f.email.focus();
      return;
    }
    setError("");

    const d = {
      name: f.name.value.trim(),
      company: f.company.value.trim(),
      email: f.email.value.trim(),
      phone: f.phone.value.trim(),
      topic: f.topic.value,
      message: f.message.value.trim(),
    };

    setSending(true);
    const outcome = readApiResult(await APIRequest.request("POST", ConfigAPIURL.contact, JSON.stringify(d)));
    setSending(false);

    if (outcome.status === "ok") {
      setResult({ sent: true, first: d.name.split(" ")[0], email: d.email });
      form.reset();
    } else if (outcome.status === "invalid") {
      setError(outcome.message);
    } else {
      const body = `Name: ${d.name}\nCompany: ${d.company}\nEmail: ${d.email}\nPhone: ${d.phone || "-"}\nInterested in: ${d.topic}\n\n${d.message}`;
      setResult({ sent: false, subject: `Website enquiry: ${d.topic} (${d.company})`, body });
    }
  };

  return (
    <form className="form" id="contact-form" noValidate onSubmit={onSubmit}>
      <div className="row">
        <label htmlFor="cf-name">
          Full name *<input id="cf-name" name="name" autoComplete="name" required />
        </label>
        <label htmlFor="cf-company">
          Company *<input id="cf-company" name="company" autoComplete="organization" required />
        </label>
      </div>
      <div className="row">
        <label htmlFor="cf-email">
          Work email *<input id="cf-email" name="email" type="email" autoComplete="email" required />
        </label>
        <label htmlFor="cf-phone">
          Phone
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" />
        </label>
      </div>
      <label htmlFor="cf-topic">
        I'm interested in
        <select id="cf-topic" name="topic">
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label htmlFor="cf-msg">
        How can we help? *
        <textarea
          id="cf-msg"
          name="message"
          required
          placeholder="A few lines on your requirement, timelines and locations."
        />
      </label>
      <div className="err" id="cf-err" role="alert">
        {error}
      </div>
      <button className="btn btn-gold" type="submit" style={{ justifySelf: "start" }} disabled={sending}>
        {sending ? "Sending…" : "Send enquiry"}
        <Icon name="arrow" />
      </button>
      <div className="result" id="cf-result" hidden={!result}>
        {result && result.sent && (
          <>
            <b>Thank you, {result.first}. Your enquiry is with our team.</b>
            <span style={{ fontSize: "13.5px" }}>We reply within one business day at {result.email}.</span>
          </>
        )}
        {result && !result.sent && <MailtoFallback subject={result.subject} body={result.body} />}
      </div>
    </form>
  );
}
