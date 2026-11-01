import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function FoundersSection() {
  return (
    <section className="band" id="home-founders">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Leadership</div>
            <h2>
              Led by our <em>founders</em>
            </h2>
          </div>
          <p>
            The people accountable for every engagement.{" "}
            <Link to="/about#team-list" style={{ color: "var(--brand-ink)", fontWeight: "600", whiteSpace: "nowrap" }}>
              Meet the leadership →
            </Link>
          </p>
        </div>
        <div className="fd-grid" data-reveal="">
          <article className="fd-card" style={{ "--i": "0" }}>
            <div className="fd-ph">
              <img src="/images/img-49-3b2a6674cd.jpg" alt="Githikka Rao" loading="lazy" />
            </div>
            <div className="fd-body">
              <span className="fd-role">Founder</span>
              <h3>Githikka Rao</h3>
              <p>
                Founder of Digital Globe Consultancy, currently pursuing MBBS while exploring technology and IT. A
                former international-level Taekwondo athlete with 120+ medals and 2 trophies, she also brings over 15
                years of Bharatanatyam training and 8 years as a district-level skater.
              </p>
              <Link to="/githikka-rao" className="fd-link">
                View full profile
                <Icon name="arrow" />
              </Link>
            </div>
          </article>
          <article className="fd-card" style={{ "--i": "1" }}>
            <div className="fd-ph">
              <img src="/images/img-50-0fd6714801.jpg" alt="Kavyallata Rao" loading="lazy" />
            </div>
            <div className="fd-body">
              <span className="fd-role">{"Co-founder & CMD"}</span>
              <h3>Kavyallata Rao</h3>
              <p>
                CXO-level business leader with 20+ years driving enterprise growth in IT and technology services, most
                recently with Eplus and NTT Data. A certified Independent Director (IICA) and trusted C-suite advisor.
              </p>
              <Link to="/kavyallata-rao" className="fd-link">
                View full profile
                <Icon name="arrow" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
