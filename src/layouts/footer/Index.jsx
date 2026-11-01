import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../Component/Icon";
import { CTA_HIDDEN_ROUTES } from "../../constants/digitalGlobe";
import logoIcon from "../../assets/logo-icon.png";

export default function Footer() {
  const { pathname } = useLocation();
  const route = pathname === "/" ? "home" : pathname.slice(1);
  const showCta = !CTA_HIDDEN_ROUTES.includes(route);

  return (
    <>
      <div className="end-wave" aria-hidden="true" />
      {showCta && (
        <section className="cta" id="global-cta">
          <div className="wrap">
            <div>
              <h2>
                Let's build <em>what's next.</em>
              </h2>
              <p>
                Tell us what you want to secure, modernize, connect or scale. Let's start with a conversation about your
                business and technology priorities.
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn-gold">
                Talk to an Expert
                <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </section>
      )}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <Link to="/" className="brand">
                <img src={logoIcon} alt="" />
                <span>
                  <b>Digital Globe</b>
                  <small>Consultancy</small>
                </span>
              </Link>
              <p style={{ marginTop: "14px", maxWidth: "34ch" }}>
                {
                  "Technology Transformation & Managed Services Partner. Engineering intelligent infrastructure for a digital-first world."
                }
              </p>
            </div>
            <div>
              <h4>Data Center</h4>
              <Link to="/data-center">Overview</Link>
              <Link to="/data-center-strategy">{"Strategy & Concept"}</Link>
              <Link to="/data-center-design">{"Design & Engineering"}</Link>
              <Link to="/data-center-critical">Critical Infrastructure</Link>
              <Link to="/data-center-build">{"Build & Commission"}</Link>
              <Link to="/data-center-operations">{"Operate & Maintain"}</Link>
              <Link to="/data-center-ai">AI Data Center</Link>
              <Link to="/data-center-standards">{"Standards & Assurance"}</Link>
            </div>
            <div>
              <h4>Services</h4>
              <Link to="/consulting">{"Consulting & Advisory"}</Link>
              <Link to="/data-center">{"Data Center & Infrastructure"}</Link>
              <Link to="/cybersecurity">{"Cybersecurity & Resilience"}</Link>
              <Link to="/cloud">{"Cloud & Modernisation"}</Link>
              <Link to="/applications">Enterprise Applications</Link>
              <Link to="/data-analytics">{"Data, Analytics & AI"}</Link>
              <Link to="/digital-workplace">{"Digital Workplace & Automation"}</Link>
              <Link to="/managed-services">Managed IT Services</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/about#board">Board of Directors</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/#home-cases">Case studies</Link>
              <Link to="/#newsletter">Newsletter</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div>
              <h4>Contact</h4>
              <p>
                <span data-set="addr1">Bannerghatta Road</span>,<br />
                <span data-set="addr2">Bengaluru – 560076, Karnataka, India</span>
              </p>
              <a href="tel:+919538730151">+91 95387 30151</a>
              <a href="mailto:sales@digitalglobe.co.in">sales@digitalglobe.co.in</a>
              <a href="https://www.digitalglobe.co.in" target="_blank" rel="noopener">
                www.digitalglobe.co.in
              </a>
            </div>
          </div>
          <div className="copy">
            <span>© 2026 Digital Globe Consultancy Private Limited. All rights reserved.</span>
            <span>Secure · Scalable · Sustainable</span>
          </div>
        </div>
      </footer>
    </>
  );
}
