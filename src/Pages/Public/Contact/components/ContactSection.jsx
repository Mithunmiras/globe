import React from "react";
import Icon from "../../../../Component/Icon";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="band">
      <div className="wrap split" style={{ alignItems: "start" }}>
        <div className="card" style={{ padding: "28px" }}>
          <h2 style={{ fontSize: "26px", marginBottom: "6px" }}>Send an enquiry</h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "20px" }}>
            Enquiries go to{" "}
            <span className="copyable" style={{ color: "var(--ink)" }}>
              coo@digitalglobe.co.in
            </span>
          </p>
          <ContactForm />
        </div>
        <div style={{ display: "grid", gap: "16px" }}>
          <div className="map" role="img" aria-label="Stylised map marking the office on Bannerghatta Road, Bengaluru">
            <div className="pin">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" fill="#0A1A44" />
              </svg>
            </div>
            <div className="addr">
              <div>
                <b data-set="addr1">Bannerghatta Road</b>
                <br />
                <span style={{ color: "var(--muted)", fontSize: "13.5px" }} data-set="addr2">
                  Bengaluru – 560076, Karnataka, India
                </span>
              </div>
              <a
                className="btn btn-line"
                data-set-href="maps"
                href={"https://www.google.com/maps/search/?api=1&query=Bannerghatta+Road+Bengaluru+560076"}
                target="_blank"
                rel="noopener"
              >
                Open in Google Maps
                <Icon name="arrow" />
              </a>
            </div>
          </div>
          <div className="card" style={{ display: "grid", gap: "14px" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              <Icon name="mail" style={{ color: "var(--brand)" }} />
              <div>
                <b>Sales</b>
                <br />
                <a className="copyable" href="mailto:coo@digitalglobe.co.in">
                  coo@digitalglobe.co.in
                </a>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <Icon name="phone" style={{ color: "var(--brand)" }} />
              <div>
                <b>Phone</b>
                <br />
                <a className="copyable" href="tel:+919538730151">
                  +91 95387 30151
                </a>
                <br />
                <a className="copyable" data-fixed="" href="tel:+919513503151">
                  +91 95135 03151
                </a>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <Icon name="users" style={{ color: "var(--brand)" }} />
              <div>
                <b>Leadership</b>
                <br />
                <span data-set="ceo">{"Kavyallata Rao, Co-founder & CMD"}</span>
                <br />
                <span className="copyable" style={{ fontSize: "13.5px" }} data-set="ceoEmail">
                  kavyallatarao@digitalglobe.co.in
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <Icon name="pin" style={{ color: "var(--brand)" }} />
              <div>
                <b>Office</b>
                <br />
                Digital Globe Consultancy Pvt. Ltd.
                <br />
                <span data-set="addr1">Bannerghatta Road</span>,{" "}
                <span data-set="addr2">Bengaluru – 560076, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
