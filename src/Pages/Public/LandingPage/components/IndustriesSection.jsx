import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function IndustriesSection() {
  return (
    <section className="band white" id="home-industries">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Industries</div>
            <h2>
              Built for <em>28 industries</em>
            </h2>
          </div>
          <p>From banking and hospitals to plants, ports and data center operators.</p>
        </div>
        <div className="ind-car" id="ind-car" aria-roledescription="carousel" aria-label="Industries we serve">
          <div className="ic-track" id="ic-track" tabIndex="0">
            <Link
              to="/industries"
              className="ic-slide g-fs"
              role="group"
              aria-roledescription="slide"
              aria-label="1 of 28: Banking"
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-08-d45099ac5c.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="bank" className="ic-big" />
                <span className="ico">
                  <Icon name="bank" />
                </span>
              </span>
              <small>Financial Services</small>
              <b>Banking</b>
              <p>
                Always-on infrastructure, 24x7 SOC and regulator-aligned controls for core banking, digital channels and
                branch networks.
              </p>
              <span className="ic-tags">
                <i>Cybersecurity</i>
                <i>Data Center</i>
                <i>Cloud</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-fs"
              role="group"
              aria-roledescription="slide"
              aria-label="2 of 28: Capital Markets"
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-51-658bfd622f.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="trend" className="ic-big" />
                <span className="ico">
                  <Icon name="trend" />
                </span>
              </span>
              <small>Financial Services</small>
              <b>Capital Markets</b>
              <p>
                Low-latency networks, resilient trading infrastructure and audit-ready security for brokers, exchanges
                and asset managers.
              </p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Cybersecurity</i>
                <i>Data Center</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-fs"
              role="group"
              aria-roledescription="slide"
              aria-label="3 of 28: Insurance"
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-52-3d45e32535.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="umbrella" className="ic-big" />
                <span className="ico">
                  <Icon name="umbrella" />
                </span>
              </span>
              <small>Financial Services</small>
              <b>Insurance</b>
              <p>
                Modernised policy and claims applications, analytics and protected customer data across agents and
                digital channels.
              </p>
              <span className="ic-tags">
                <i>Applications</i>
                <i>{"AI & Automation"}</i>
                <i>Cybersecurity</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-fs"
              role="group"
              aria-roledescription="slide"
              aria-label={"4 of 28: Fintech & Payments"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-53-23a4c1e3ec.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="card" className="ic-big" />
                <span className="ico">
                  <Icon name="card" />
                </span>
              </span>
              <small>Financial Services</small>
              <b>{"Fintech & Payments"}</b>
              <p>
                PCI DSS-aligned platforms, scalable cloud and fraud-aware monitoring for payment and lending businesses.
              </p>
              <span className="ic-tags">
                <i>Cloud</i>
                <i>Cybersecurity</i>
                <i>{"AI & Automation"}</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-ph"
              role="group"
              aria-roledescription="slide"
              aria-label={"5 of 28: Government & Public Service"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-09-c214ac8037.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="gov" className="ic-big" />
                <span className="ico">
                  <Icon name="gov" />
                </span>
              </span>
              <small>{"Public Sector & Health"}</small>
              <b>{"Government & Public Service"}</b>
              <p>Secure, auditable infrastructure and citizen-service applications built to public-sector standards.</p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Cybersecurity</i>
                <i>Applications</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-ph"
              role="group"
              aria-roledescription="slide"
              aria-label={"6 of 28: Aerospace & Defence"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-54-8bba614bd9.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="plane" className="ic-big" />
                <span className="ico">
                  <Icon name="plane" />
                </span>
              </span>
              <small>{"Public Sector & Health"}</small>
              <b>{"Aerospace & Defence"}</b>
              <p>
                Segmented, high-assurance networks, engineering compute and controlled data handling for programmes and
                suppliers.
              </p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Cybersecurity</i>
                <i>Data Center</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-ph"
              role="group"
              aria-roledescription="slide"
              aria-label={"7 of 28: Healthcare & Hospitals"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-55-9fd3b842d2.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="health" className="ic-big" />
                <span className="ico">
                  <Icon name="health" />
                </span>
              </span>
              <small>{"Public Sector & Health"}</small>
              <b>{"Healthcare & Hospitals"}</b>
              <p>Resilient hospital networks, protected patient data and always-available clinical systems.</p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Cybersecurity</i>
                <i>Cloud</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-ph"
              role="group"
              aria-roledescription="slide"
              aria-label={"8 of 28: Life Sciences & Pharma"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-56-7760ae68d1.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="pill" className="ic-big" />
                <span className="ico">
                  <Icon name="pill" />
                </span>
              </span>
              <small>{"Public Sector & Health"}</small>
              <b>{"Life Sciences & Pharma"}</b>
              <p>
                Validated infrastructure, lab and manufacturing systems, and data integrity for regulated operations.
              </p>
              <span className="ic-tags">
                <i>Data Center</i>
                <i>Applications</i>
                <i>Cybersecurity</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-ph"
              role="group"
              aria-roledescription="slide"
              aria-label="9 of 28: Education"
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-57-e379f27ce4.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="cap" className="ic-big" />
                <span className="ico">
                  <Icon name="cap" />
                </span>
              </span>
              <small>{"Public Sector & Health"}</small>
              <b>Education</b>
              <p>Campus networks, cloud classrooms, student data protection and digital learning platforms.</p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Cloud</i>
                <i>Applications</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-pm"
              role="group"
              aria-roledescription="slide"
              aria-label="10 of 28: Automotive"
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-10-c730a88655.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="car" className="ic-big" />
                <span className="ico">
                  <Icon name="car" />
                </span>
              </span>
              <small>{"Products & Manufacturing"}</small>
              <b>Automotive</b>
              <p>
                Plant connectivity, ERP and supply-chain systems, and secure OT/IT integration for OEMs and component
                makers.
              </p>
              <span className="ic-tags">
                <i>Applications</i>
                <i>{"IT & Infrastructure"}</i>
                <i>Cybersecurity</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-pm"
              role="group"
              aria-roledescription="slide"
              aria-label="11 of 28: Industrial Manufacturing"
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-58-9c90b247f2.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="factory" className="ic-big" />
                <span className="ico">
                  <Icon name="factory" />
                </span>
              </span>
              <small>{"Products & Manufacturing"}</small>
              <b>Industrial Manufacturing</b>
              <p>Smart-factory networks, MES/ERP integration and predictive maintenance with AI.</p>
              <span className="ic-tags">
                <i>Applications</i>
                <i>{"AI & Automation"}</i>
                <i>{"IT & Infrastructure"}</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-pm"
              role="group"
              aria-roledescription="slide"
              aria-label="12 of 28: Chemicals"
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-59-3f3db1d9c2.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="beaker" className="ic-big" />
                <span className="ico">
                  <Icon name="beaker" />
                </span>
              </span>
              <small>{"Products & Manufacturing"}</small>
              <b>Chemicals</b>
              <p>Safety-critical site infrastructure, process data platforms and resilient operations.</p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Applications</i>
                <i>Cybersecurity</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-pm"
              role="group"
              aria-roledescription="slide"
              aria-label="13 of 28: Consumer Goods (FMCG)"
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-60-491d5bd7d7.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="bag" className="ic-big" />
                <span className="ico">
                  <Icon name="bag" />
                </span>
              </span>
              <small>{"Products & Manufacturing"}</small>
              <b>Consumer Goods (FMCG)</b>
              <p>Distributor and supply-chain applications, demand analytics and scalable cloud.</p>
              <span className="ic-tags">
                <i>Applications</i>
                <i>{"AI & Automation"}</i>
                <i>Cloud</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-pm"
              role="group"
              aria-roledescription="slide"
              aria-label={"14 of 28: Retail & E-commerce"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-61-a5418fa7f0.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="cart" className="ic-big" />
                <span className="ico">
                  <Icon name="cart" />
                </span>
              </span>
              <small>{"Products & Manufacturing"}</small>
              <b>{"Retail & E-commerce"}</b>
              <p>High-availability storefronts, payments security and customer analytics across stores and online.</p>
              <span className="ic-tags">
                <i>Cloud</i>
                <i>Cybersecurity</i>
                <i>{"AI & Automation"}</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-pm"
              role="group"
              aria-roledescription="slide"
              aria-label={"15 of 28: Electronics & High Tech"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-62-7f5bf97400.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="cpu" className="ic-big" />
                <span className="ico">
                  <Icon name="cpu" />
                </span>
              </span>
              <small>{"Products & Manufacturing"}</small>
              <b>{"Electronics & High Tech"}</b>
              <p>Engineering compute, secure IP handling and AI-ready infrastructure for design and test.</p>
              <span className="ic-tags">
                <i>Data Center</i>
                <i>Cybersecurity</i>
                <i>{"AI & Automation"}</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-re"
              role="group"
              aria-roledescription="slide"
              aria-label={"16 of 28: Energy, Oil & Gas"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-11-93cb3d9c3a.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="fire" className="ic-big" />
                <span className="ico">
                  <Icon name="fire" />
                </span>
              </span>
              <small>{"Resources & Energy"}</small>
              <b>{"Energy, Oil & Gas"}</b>
              <p>Remote-site connectivity, OT security and operational data platforms.</p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Cybersecurity</i>
                <i>Applications</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-re"
              role="group"
              aria-roledescription="slide"
              aria-label={"17 of 28: Utilities & Power"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-63-e0e2762053.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="bolt" className="ic-big" />
                <span className="ico">
                  <Icon name="bolt" />
                </span>
              </span>
              <small>{"Resources & Energy"}</small>
              <b>{"Utilities & Power"}</b>
              <p>Grid and plant networks, SCADA-aware security and field-force applications.</p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Cybersecurity</i>
                <i>Applications</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-re"
              role="group"
              aria-roledescription="slide"
              aria-label={"18 of 28: Natural Resources & Mining"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-64-8ef8573e31.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="pick" className="ic-big" />
                <span className="ico">
                  <Icon name="pick" />
                </span>
              </span>
              <small>{"Resources & Energy"}</small>
              <b>{"Natural Resources & Mining"}</b>
              <p>Rugged field infrastructure, asset monitoring and safety analytics.</p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>{"AI & Automation"}</i>
                <i>Applications</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-re"
              role="group"
              aria-roledescription="slide"
              aria-label={"19 of 28: Agriculture & Agri-tech"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-65-3cc02c21cb.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="wheat" className="ic-big" />
                <span className="ico">
                  <Icon name="wheat" />
                </span>
              </span>
              <small>{"Resources & Energy"}</small>
              <b>{"Agriculture & Agri-tech"}</b>
              <p>Farm-to-market applications, IoT data and analytics for yield and supply planning.</p>
              <span className="ic-tags">
                <i>Applications</i>
                <i>{"AI & Automation"}</i>
                <i>Cloud</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-cmt"
              role="group"
              aria-roledescription="slide"
              aria-label="20 of 28: Telecom"
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-12-b050dbf75f.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="tower" className="ic-big" />
                <span className="ico">
                  <Icon name="tower" />
                </span>
              </span>
              <small>{"Communications, Media & Technology"}</small>
              <b>Telecom</b>
              <p>High-density data center, network and NOC operations at carrier scale.</p>
              <span className="ic-tags">
                <i>Data Center</i>
                <i>{"IT & Infrastructure"}</i>
                <i>Cloud</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-cmt"
              role="group"
              aria-roledescription="slide"
              aria-label={"21 of 28: Media & Entertainment"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-66-549e117934.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="film" className="ic-big" />
                <span className="ico">
                  <Icon name="film" />
                </span>
              </span>
              <small>{"Communications, Media & Technology"}</small>
              <b>{"Media & Entertainment"}</b>
              <p>High-throughput storage, content workflows and secure distribution.</p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Cloud</i>
                <i>Cybersecurity</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-cmt"
              role="group"
              aria-roledescription="slide"
              aria-label={"22 of 28: Software & Platforms"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-67-82ae21661c.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="code" className="ic-big" />
                <span className="ico">
                  <Icon name="code" />
                </span>
              </span>
              <small>{"Communications, Media & Technology"}</small>
              <b>{"Software & Platforms"}</b>
              <p>Cloud-native platforms, DevSecOps and AI-ready GPU infrastructure for product companies.</p>
              <span className="ic-tags">
                <i>Cloud</i>
                <i>{"AI & Automation"}</i>
                <i>Cybersecurity</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-cmt"
              role="group"
              aria-roledescription="slide"
              aria-label={"23 of 28: IT, ITES & GCCs"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-68-d145d43354.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="headset" className="ic-big" />
                <span className="ico">
                  <Icon name="headset" />
                </span>
              </span>
              <small>{"Communications, Media & Technology"}</small>
              <b>{"IT, ITES & GCCs"}</b>
              <p>Scalable delivery-centre infrastructure, end-user services and managed NOC/SOC.</p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Cybersecurity</i>
                <i>Cloud</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-cmt"
              role="group"
              aria-roledescription="slide"
              aria-label={"24 of 28: Data Center & Colocation Providers"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-69-27e063cc66.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="dc" className="ic-big" />
                <span className="ico">
                  <Icon name="dc" />
                </span>
              </span>
              <small>{"Communications, Media & Technology"}</small>
              <b>{"Data Center & Colocation Providers"}</b>
              <p>Design-build, power, cooling, CDUs and 24x7 operations for operators and hyperscale tenants.</p>
              <span className="ic-tags">
                <i>Data Center</i>
                <i>{"IT & Infrastructure"}</i>
                <i>{"AI & Automation"}</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-si"
              role="group"
              aria-roledescription="slide"
              aria-label={"25 of 28: Travel & Hospitality"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-13-d14043565a.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="bed" className="ic-big" />
                <span className="ico">
                  <Icon name="bed" />
                </span>
              </span>
              <small>{"Services & Infrastructure"}</small>
              <b>{"Travel & Hospitality"}</b>
              <p>Guest-facing applications, property networks and payment security across hotels and travel brands.</p>
              <span className="ic-tags">
                <i>Applications</i>
                <i>{"IT & Infrastructure"}</i>
                <i>Cybersecurity</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-si"
              role="group"
              aria-roledescription="slide"
              aria-label={"26 of 28: Logistics & Warehousing"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-70-2f356a82f8.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="truck" className="ic-big" />
                <span className="ico">
                  <Icon name="truck" />
                </span>
              </span>
              <small>{"Services & Infrastructure"}</small>
              <b>{"Logistics & Warehousing"}</b>
              <p>Warehouse networks, WMS/ERP integration and real-time tracking dashboards.</p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Applications</i>
                <i>{"AI & Automation"}</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-si"
              role="group"
              aria-roledescription="slide"
              aria-label={"27 of 28: Real Estate & Construction"}
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-71-dd1567c847.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="building" className="ic-big" />
                <span className="ico">
                  <Icon name="building" />
                </span>
              </span>
              <small>{"Services & Infrastructure"}</small>
              <b>{"Real Estate & Construction"}</b>
              <p>Smart-building systems, site connectivity and project applications.</p>
              <span className="ic-tags">
                <i>{"IT & Infrastructure"}</i>
                <i>Applications</i>
                <i>Data Center</i>
              </span>
            </Link>
            <Link
              to="/industries"
              className="ic-slide g-si"
              role="group"
              aria-roledescription="slide"
              aria-label="28 of 28: Professional Services"
            >
              <span className="ic-art has-ph" aria-hidden="true">
                <img className="ph" src="/images/img-72-f856d51665.jpg" alt="" loading="lazy" />
                <i className="ic-orb" />
                <Icon name="briefcase" className="ic-big" />
                <span className="ico">
                  <Icon name="briefcase" />
                </span>
              </span>
              <small>{"Services & Infrastructure"}</small>
              <b>Professional Services</b>
              <p>Secure collaboration, document management and productivity on Microsoft 365 and cloud.</p>
              <span className="ic-tags">
                <i>Cloud</i>
                <i>Applications</i>
                <i>Cybersecurity</i>
              </span>
            </Link>
          </div>
          <div className="ic-ctrl">
            <div className="ic-dots" id="ic-dots" />
            <span className="ic-num" id="ic-num" aria-hidden="true" />
            <div className="ic-btns">
              <button type="button" className="ic-btn" data-dir="-1" aria-label="Previous industries">
                <Icon name="arrow" />
              </button>
              <button type="button" className="ic-btn" id="ic-pp" aria-label="Pause">
                <Icon name="pause" />
              </button>
              <button type="button" className="ic-btn" data-dir="1" aria-label="Next industries">
                <Icon name="arrow" />
              </button>
              <Link to="/industries" className="btn btn-line">
                View all industries
                <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
