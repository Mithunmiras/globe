import React from "react";
import { Link } from "react-router-dom";

export default function LeadershipSection() {
  return (
    <section className="band" id="leadership">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Leadership team</div>
            <h2>
              The people behind <em>the delivery</em>
            </h2>
          </div>
          <p>Leaders across technology, operations, growth, marketing and information management.</p>
        </div>
        <div className="g g3" id="team-list" data-dyn="">
          <article className="card person clamp">
            <div className="avatar" aria-hidden="true">
              Y
            </div>
            <div>
              <div className="role">{"CTO & CIO"}</div>
              <h3>Yogesh</h3>
            </div>
            <p className="bio">
              Technology leader with 22+ years across IT infrastructure, data centres, cloud, cybersecurity, ERP and
              AI/ML, spanning manufacturing, defence, aerospace and energy. He has led IT operations across 25
              locations and an SAP S/4HANA transformation that migrated 30M+ records.
            </p>
            <button type="button" className="bio-more">
              Read more
            </button>
            <Link to="/yogesh-prajapati" className="prof-link">
              View full profile →
            </Link>
          </article>
          <article className="card person">
            <div className="avatar" aria-hidden="true">
              SA
            </div>
            <div>
              <div className="role">Chief Operating Officer</div>
              <h3>Shilpa A</h3>
            </div>
            <p className="bio">
              15+ years in product and project delivery across banking, finance, healthcare, loyalty and e-commerce, for
              clients like IQVIA, Indian Bank and Edenred. She is CSM and CSPO certified and runs Agile delivery from
              requirements through go-live.
            </p>
            <button type="button" className="bio-more">
              Read more
            </button>
          </article>
          <article className="card person">
            <div className="avatar" aria-hidden="true">
              SK
            </div>
            <div>
              <div className="role">Chief Growth Officer</div>
              <h3>Sreenivasan KR</h3>
            </div>
            <p className="bio">
              {
                "29+ years in strategic consulting and market intelligence, including over a decade at IDC and a VP role at Frost & Sullivan. He drives market entry, go-to-market and growth strategy across ICT, BFSI, telecom and manufacturing."
              }
            </p>
            <button type="button" className="bio-more">
              Read more
            </button>
          </article>
          <article className="card person">
            <div className="avatar" aria-hidden="true">
              KS
            </div>
            <div>
              <div className="role">Chief Marketing Officer</div>
              <h3>Kalpana Srilalitha</h3>
            </div>
            <p className="bio">
              {
                "Fractional Chief Product & Design Officer at Datakue, with 30+ years in tech since founding one of Bangalore’s early web firms in 1997. She brings brand, UI/UX and AI-led digital transformation, backed by executive education at IIM Bangalore and ISB."
              }
            </p>
            <button type="button" className="bio-more">
              Read more
            </button>
          </article>
          <article className="card person">
            <div className="avatar" aria-hidden="true">
              KG
            </div>
            <div>
              <div className="role">Chief Sales Officer</div>
              <h3>Kesav Gowda</h3>
            </div>
            <p className="bio">
              Leads Arakesh Computers, which has supplied IT hardware, servers, networking and RF components since 2000.
              Its clients range from government and defence to MNCs and educational institutions, and it covers sales,
              implementation and annual maintenance.
            </p>
            <button type="button" className="bio-more">
              Read more
            </button>
          </article>
          <article className="card person">
            <div className="avatar" aria-hidden="true">
              K
            </div>
            <div>
              <div className="role">Chief Product Officer</div>
              <h3>Kamal</h3>
            </div>
            <p className="bio">
              Leads Decibels & Pixels Solutions, which has delivered Audio-Visual Systems Integration, Lighting
              Control, Smart Home, Security and Network solutions since 2012. Backed by 28 years of industry
              expertise, its projects range from NOCs and SOCs to Customer Briefing Centers and Auditoriums.
            </p>
            <button type="button" className="bio-more">
              Read more
            </button>
          </article>
          <article className="card person">
            <div className="avatar" aria-hidden="true">
              G
            </div>
            <div>
              <div className="role">Chief Product Officer</div>
              <h3>Guruprasad</h3>
            </div>
            <p className="bio">
              Leads Guru Financial Services, a loans and insurance consultancy with 25+ years of helping individuals,
              professionals and businesses get the right finance at the right time. He works with 40+ government,
              private and MNC banks across home, mortgage, project, SME/MSME and business loans, as well as life,
              general and health insurance.
            </p>
            <button type="button" className="bio-more">
              Read more
            </button>
          </article>
          <article className="card person">
            <div className="avatar" aria-hidden="true">
              UG
            </div>
            <div>
              <div className="role">Chief Human Resources Officer</div>
              <h3>Uma G Reddy</h3>
            </div>
            <p className="bio">
              Entrepreneur and people strategist with 20+ years across HR, recruitment and business development. She is
              the founder of Hiring Studios India and Primeworth Workspace Solutions, and connects businesses with the
              right talent, partners and spaces.
            </p>
            <button type="button" className="bio-more">
              Read more
            </button>
          </article>
          <article className="card person">
            <div className="avatar" aria-hidden="true">
              PS
            </div>
            <div>
              <div className="role">Chief AI Officer</div>
              <h3>Priya S</h3>
            </div>
            <p className="bio">
              Certified AI professional with 13+ years of corporate experience, and Founder and CEO of Digitner Tech
              Solutions, a prototype-first technology firm serving customers across India, Malaysia and Mexico. She
              leads AI-driven product building, from AI agents and WhatsApp automation to web and mobile platforms. MS
              in Software Engineering from VIT Vellore (final-year project at University of Malaya) and Executive
              Management from IIM Calcutta.
            </p>
            <button type="button" className="bio-more">
              Read more
            </button>
          </article>
          <article className="card person">
            <div className="avatar" aria-hidden="true">
              KV
            </div>
            <div>
              <div className="role">Chief Civil Officer</div>
              <h3>Keshava V Chari</h3>
            </div>
            <p className="bio">
              Founder and Managing Partner of ADNI Group (AdNi Project Managers, Subarashi Join Bricks and Golden Roof
              Constructions), with 15+ years in construction project management. He is a UVCE civil engineer who built
              his career at Shapoorji Pallonji, Tata and RMZ projects, and he brings expertise in PMC, 5D BIM, precast
              construction and construction digitalisation.
            </p>
            <button type="button" className="bio-more">
              Read more
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
