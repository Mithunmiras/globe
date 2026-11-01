import React from "react";
import { Link } from "react-router-dom";

export default function BoardSection() {
  return (
    <section className="band white" id="board">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Board of directors</div>
            <h2>
              Board of <em>Directors</em>
            </h2>
          </div>
          <p>The board sets Digital Globe's direction and governance.</p>
        </div>
        <div className="board" id="board-list" data-dyn="">
          <article className="card bd-card">
            <div className="bd-ph">
              <img src="/images/img-49-3b2a6674cd.jpg" alt="Githikka Rao" />
            </div>
            <div className="person">
              <div>
                <div className="role">Founder</div>
                <h3>Githikka Rao</h3>
              </div>
              <p className="bio">
                Founder of Digital Globe Consultancy, currently pursuing MBBS while exploring technology and IT. A
                former international-level Taekwondo athlete with 120+ medals and 2 trophies, she also brings over 15
                years of Bharatanatyam training and 8 years as a district-level skater.
              </p>
              <button type="button" className="bio-more">
                Read more
              </button>
              <Link to="/githikka-rao" className="prof-link">
                View full profile →
              </Link>
            </div>
          </article>
          <article className="card bd-card">
            <div className="bd-ph">
              <img src="/images/img-50-0fd6714801.jpg" alt="Kavyallata Rao" />
            </div>
            <div className="person">
              <div>
                <div className="role">{"Co-founder & CMD"}</div>
                <h3>Kavyallata Rao</h3>
              </div>
              <p className="bio">
                CXO-level business leader with 20+ years driving enterprise growth in IT and technology services, most
                recently with Eplus and NTT Data. She is a certified Independent Director (IICA) and a trusted C-suite
                advisor who turns key accounts into long-term strategic partnerships.
              </p>
              <button type="button" className="bio-more">
                Read more
              </button>
              <Link to="/kavyallata-rao" className="prof-link">
                View full profile →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
