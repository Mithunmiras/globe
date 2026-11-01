import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function GridSection() {
  return (
    <section className="band ixp-sec" id="ind-grid">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Six sectors, 28 industries</div>
            <h2>
              Find your <em>industry</em>
            </h2>
          </div>
          <p>
            Choose a sector to see the industries we serve, then open any industry for the priorities we hear and what
            we deliver.
          </p>
        </div>
        <div className="ixp" data-tabs="">
          <div className="ixp-tabs" role="tablist" aria-label="Sectors">
            <button
              type="button"
              role="tab"
              id="ixp-fs-t"
              aria-controls="ixp-fs"
              aria-selected="true"
              style={{ "--i": "0" }}
            >
              <Icon name="bank" />
              <span>
                <b>Financial Services</b>
                <small>4 industries</small>
              </span>
            </button>
            <button
              type="button"
              role="tab"
              id="ixp-ph-t"
              aria-controls="ixp-ph"
              aria-selected="false"
              style={{ "--i": "1" }}
            >
              <Icon name="health" />
              <span>
                <b>{"Public Sector & Health"}</b>
                <small>5 industries</small>
              </span>
            </button>
            <button
              type="button"
              role="tab"
              id="ixp-pm-t"
              aria-controls="ixp-pm"
              aria-selected="false"
              style={{ "--i": "2" }}
            >
              <Icon name="factory" />
              <span>
                <b>{"Products & Manufacturing"}</b>
                <small>6 industries</small>
              </span>
            </button>
            <button
              type="button"
              role="tab"
              id="ixp-re-t"
              aria-controls="ixp-re"
              aria-selected="false"
              style={{ "--i": "3" }}
            >
              <Icon name="leaf" />
              <span>
                <b>{"Resources & Energy"}</b>
                <small>4 industries</small>
              </span>
            </button>
            <button
              type="button"
              role="tab"
              id="ixp-cmt-t"
              aria-controls="ixp-cmt"
              aria-selected="false"
              style={{ "--i": "4" }}
            >
              <Icon name="globe" />
              <span>
                <b>{"Communications, Media & Technology"}</b>
                <small>5 industries</small>
              </span>
            </button>
            <button
              type="button"
              role="tab"
              id="ixp-si-t"
              aria-controls="ixp-si"
              aria-selected="false"
              style={{ "--i": "5" }}
            >
              <Icon name="truck" />
              <span>
                <b>{"Services & Infrastructure"}</b>
                <small>4 industries</small>
              </span>
            </button>
          </div>
          <div className="ixp-stage">
            <div className="ixp-p" role="tabpanel" id="ixp-fs" aria-labelledby="ixp-fs-t">
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 91.7,30.6 88.5,64.1 69.4,91.7 35.9,88.5 8.3,69.4 11.5,35.9 30.6,8.3"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="88.5" y2="64.1" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L88.5,64.1" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="11.5" y2="35.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L11.5,35.9" />
                  </circle>
                  <circle className="nv-nd" cx="91.7" cy="30.6" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="69.4" cy="91.7" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="8.3" cy="69.4" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="30.6" cy="8.3" r="1.6" style={{ "--i": "3" }} />
                </svg>
                <span className="nv-core ph">
                  <img src="/images/img-08-d45099ac5c.jpg" alt="" loading="lazy" />
                  <Icon name="bank" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="bank" />
                  Banking
                </span>
                <span className="nv-chip" style={{ left: "88.5%", top: "64.1%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="trend" />
                  Capital markets
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="umbrella" />
                  Insurance
                </span>
                <span className="nv-chip" style={{ left: "11.5%", top: "35.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="card" />
                  Fintech
                </span>
              </div>
              <div className="ixp-body">
                <span className="dx-pill">Financial Services</span>
                <p className="ixp-lede">
                  Always-on, regulator-ready technology for banks, markets, insurers and fintechs.
                </p>
                <div className="ixp-rows">
                  <Link to="/industries-financial-services#ins-fs-c0" style={{ "--i": "0" }}>
                    <span className="ixp-ic">
                      <Icon name="bank" />
                    </span>
                    <span className="ixp-tx">
                      <b>Banking</b>
                      <small>
                        Always-on infrastructure, 24x7 SOC and regulator-aligned controls for core banking, digital
                        channels and branch networks.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-financial-services#ins-fs-c1" style={{ "--i": "1" }}>
                    <span className="ixp-ic">
                      <Icon name="trend" />
                    </span>
                    <span className="ixp-tx">
                      <b>Capital Markets</b>
                      <small>
                        Low-latency networks, resilient trading infrastructure and audit-ready security for brokers,
                        exchanges and asset managers.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-financial-services#ins-fs-c2" style={{ "--i": "2" }}>
                    <span className="ixp-ic">
                      <Icon name="umbrella" />
                    </span>
                    <span className="ixp-tx">
                      <b>Insurance</b>
                      <small>
                        Modernised policy and claims applications, analytics and protected customer data across agents
                        and digital channels.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-financial-services#ins-fs-c3" style={{ "--i": "3" }}>
                    <span className="ixp-ic">
                      <Icon name="card" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Fintech & Payments"}</b>
                      <small>
                        PCI DSS-aligned platforms, scalable cloud and fraud-aware monitoring for payment and lending
                        businesses.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                </div>
                <Link to="/industries-financial-services" className="btn btn-gold">
                  Open Financial Services
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
            <div className="ixp-p" role="tabpanel" id="ixp-ph" aria-labelledby="ixp-ph-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 88.2,24.3 91.0,51.5 86.2,78.4 61.3,89.4 34.2,93.2 16.0,72.9 4.0,48.4 17.7,24.7 37.4,5.8"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="91.0" y2="51.5" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L91.0,51.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="61.3" y2="89.4" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L61.3,89.4" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="16.0" y2="72.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L16.0,72.9" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="17.7" y2="24.7" style={{ "--i": "4" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "4" }}>
                    <animateMotion dur="4.00s" repeatCount="indefinite" path="M50,50 L17.7,24.7" />
                  </circle>
                  <circle className="nv-nd" cx="88.2" cy="24.3" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="86.2" cy="78.4" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="4.0" cy="48.4" r="1.6" style={{ "--i": "3" }} />
                  <circle className="nv-nd" cx="37.4" cy="5.8" r="1.6" style={{ "--i": "4" }} />
                </svg>
                <span className="nv-core ph">
                  <img src="/images/img-09-c214ac8037.jpg" alt="" loading="lazy" />
                  <Icon name="health" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="gov" />
                  Government
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="plane" />
                  Aerospace
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="health" />
                  Healthcare
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="pill" />
                  Life sciences
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="cap" />
                  Education
                </span>
              </div>
              <div className="ixp-body">
                <span className="dx-pill">{"Public Sector & Health"}</span>
                <p className="ixp-lede">
                  Secure, auditable and always-available systems for citizens, patients and learners.
                </p>
                <div className="ixp-rows">
                  <Link to="/industries-public-sector-health#ins-ph-c0" style={{ "--i": "0" }}>
                    <span className="ixp-ic">
                      <Icon name="gov" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Government & Public Service"}</b>
                      <small>
                        Secure, auditable infrastructure and citizen-service applications built to public-sector
                        standards.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-public-sector-health#ins-ph-c1" style={{ "--i": "1" }}>
                    <span className="ixp-ic">
                      <Icon name="plane" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Aerospace & Defence"}</b>
                      <small>
                        Segmented, high-assurance networks, engineering compute and controlled data handling for
                        programmes and suppliers.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-public-sector-health#ins-ph-c2" style={{ "--i": "2" }}>
                    <span className="ixp-ic">
                      <Icon name="health" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Healthcare & Hospitals"}</b>
                      <small>
                        Resilient hospital networks, protected patient data and always-available clinical systems.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-public-sector-health#ins-ph-c3" style={{ "--i": "3" }}>
                    <span className="ixp-ic">
                      <Icon name="pill" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Life Sciences & Pharma"}</b>
                      <small>
                        Validated infrastructure, lab and manufacturing systems, and data integrity for regulated
                        operations.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-public-sector-health#ins-ph-c4" style={{ "--i": "4" }}>
                    <span className="ixp-ic">
                      <Icon name="cap" />
                    </span>
                    <span className="ixp-tx">
                      <b>Education</b>
                      <small>
                        Campus networks, cloud classrooms, student data protection and digital learning platforms.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                </div>
                <Link to="/industries-public-sector-health" className="btn btn-gold">
                  {"Open Public Sector & Health"}
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
            <div className="ixp-p" role="tabpanel" id="ixp-pm" aria-labelledby="ixp-pm-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 85.3,20.5 90.4,42.9 93.2,65.8 76.3,81.4 57.9,95.3 35.9,88.5 14.7,79.5 9.6,57.1 6.8,34.2 23.7,18.6 42.1,4.7"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="90.4" y2="42.9" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L90.4,42.9" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="76.3" y2="81.4" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L76.3,81.4" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="9.6" y2="57.1" style={{ "--i": "4" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "4" }}>
                    <animateMotion dur="4.00s" repeatCount="indefinite" path="M50,50 L9.6,57.1" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="23.7" y2="18.6" style={{ "--i": "5" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "5" }}>
                    <animateMotion dur="4.35s" repeatCount="indefinite" path="M50,50 L23.7,18.6" />
                  </circle>
                  <circle className="nv-nd" cx="85.3" cy="20.5" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="93.2" cy="65.8" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="57.9" cy="95.3" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="14.7" cy="79.5" r="1.6" style={{ "--i": "3" }} />
                  <circle className="nv-nd" cx="6.8" cy="34.2" r="1.6" style={{ "--i": "4" }} />
                  <circle className="nv-nd f" cx="42.1" cy="4.7" r="1.6" style={{ "--i": "5" }} />
                </svg>
                <span className="nv-core ph">
                  <img src="/images/img-10-c730a88655.jpg" alt="" loading="lazy" />
                  <Icon name="factory" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="car" />
                  Automotive
                </span>
                <span className="nv-chip" style={{ left: "90.4%", top: "42.9%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="factory" />
                  Manufacturing
                </span>
                <span className="nv-chip" style={{ left: "76.3%", top: "81.4%", "--i": "2", "--tx": "-88%" }}>
                  <Icon name="beaker" />
                  Chemicals
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "3", "--tx": "-50%" }}>
                  <Icon name="bag" />
                  FMCG
                </span>
                <span className="nv-chip" style={{ left: "9.6%", top: "57.1%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="cart" />
                  Retail
                </span>
                <span className="nv-chip" style={{ left: "23.7%", top: "18.6%", "--i": "5", "--tx": "-12%" }}>
                  <Icon name="cpu" />
                  High tech
                </span>
              </div>
              <div className="ixp-body">
                <span className="dx-pill">{"Products & Manufacturing"}</span>
                <p className="ixp-lede">
                  Connected plants, integrated supply chains and secure OT/IT for makers and sellers.
                </p>
                <div className="ixp-rows">
                  <Link to="/industries-manufacturing#ins-pm-c0" style={{ "--i": "0" }}>
                    <span className="ixp-ic">
                      <Icon name="car" />
                    </span>
                    <span className="ixp-tx">
                      <b>Automotive</b>
                      <small>
                        Plant connectivity, ERP and supply-chain systems, and secure OT/IT integration for OEMs and
                        component makers.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-manufacturing#ins-pm-c1" style={{ "--i": "1" }}>
                    <span className="ixp-ic">
                      <Icon name="factory" />
                    </span>
                    <span className="ixp-tx">
                      <b>Industrial Manufacturing</b>
                      <small>Smart-factory networks, MES/ERP integration and predictive maintenance with AI.</small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-manufacturing#ins-pm-c2" style={{ "--i": "2" }}>
                    <span className="ixp-ic">
                      <Icon name="beaker" />
                    </span>
                    <span className="ixp-tx">
                      <b>Chemicals</b>
                      <small>
                        Safety-critical site infrastructure, process data platforms and resilient operations.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-manufacturing#ins-pm-c3" style={{ "--i": "3" }}>
                    <span className="ixp-ic">
                      <Icon name="bag" />
                    </span>
                    <span className="ixp-tx">
                      <b>Consumer Goods (FMCG)</b>
                      <small>Distributor and supply-chain applications, demand analytics and scalable cloud.</small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-manufacturing#ins-pm-c4" style={{ "--i": "4" }}>
                    <span className="ixp-ic">
                      <Icon name="cart" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Retail & E-commerce"}</b>
                      <small>
                        High-availability storefronts, payments security and customer analytics across stores and
                        online.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-manufacturing#ins-pm-c5" style={{ "--i": "5" }}>
                    <span className="ixp-ic">
                      <Icon name="cpu" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Electronics & High Tech"}</b>
                      <small>
                        Engineering compute, secure IP handling and AI-ready infrastructure for design and test.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                </div>
                <Link to="/industries-manufacturing" className="btn btn-gold">
                  {"Open Products & Manufacturing"}
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
            <div className="ixp-p" role="tabpanel" id="ixp-re" aria-labelledby="ixp-re-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 91.7,30.6 88.5,64.1 69.4,91.7 35.9,88.5 8.3,69.4 11.5,35.9 30.6,8.3"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="88.5" y2="64.1" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L88.5,64.1" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="11.5" y2="35.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L11.5,35.9" />
                  </circle>
                  <circle className="nv-nd" cx="91.7" cy="30.6" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="69.4" cy="91.7" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="8.3" cy="69.4" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="30.6" cy="8.3" r="1.6" style={{ "--i": "3" }} />
                </svg>
                <span className="nv-core ph">
                  <img src="/images/img-11-93cb3d9c3a.jpg" alt="" loading="lazy" />
                  <Icon name="leaf" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="fire" />
                  {"Oil & gas"}
                </span>
                <span className="nv-chip" style={{ left: "88.5%", top: "64.1%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="bolt" />
                  Utilities
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="pick" />
                  Mining
                </span>
                <span className="nv-chip" style={{ left: "11.5%", top: "35.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="wheat" />
                  Agri-tech
                </span>
              </div>
              <div className="ixp-body">
                <span className="dx-pill">{"Resources & Energy"}</span>
                <p className="ixp-lede">
                  Rugged connectivity, OT security and operational data for remote, critical sites.
                </p>
                <div className="ixp-rows">
                  <Link to="/industries-energy-resources#ins-re-c0" style={{ "--i": "0" }}>
                    <span className="ixp-ic">
                      <Icon name="fire" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Energy, Oil & Gas"}</b>
                      <small>Remote-site connectivity, OT security and operational data platforms.</small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-energy-resources#ins-re-c1" style={{ "--i": "1" }}>
                    <span className="ixp-ic">
                      <Icon name="bolt" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Utilities & Power"}</b>
                      <small>Grid and plant networks, SCADA-aware security and field-force applications.</small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-energy-resources#ins-re-c2" style={{ "--i": "2" }}>
                    <span className="ixp-ic">
                      <Icon name="pick" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Natural Resources & Mining"}</b>
                      <small>Rugged field infrastructure, asset monitoring and safety analytics.</small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-energy-resources#ins-re-c3" style={{ "--i": "3" }}>
                    <span className="ixp-ic">
                      <Icon name="wheat" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Agriculture & Agri-tech"}</b>
                      <small>Farm-to-market applications, IoT data and analytics for yield and supply planning.</small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                </div>
                <Link to="/industries-energy-resources" className="btn btn-gold">
                  {"Open Resources & Energy"}
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
            <div className="ixp-p" role="tabpanel" id="ixp-cmt" aria-labelledby="ixp-cmt-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 88.2,24.3 91.0,51.5 86.2,78.4 61.3,89.4 34.2,93.2 16.0,72.9 4.0,48.4 17.7,24.7 37.4,5.8"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="91.0" y2="51.5" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L91.0,51.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="61.3" y2="89.4" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L61.3,89.4" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="16.0" y2="72.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L16.0,72.9" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="17.7" y2="24.7" style={{ "--i": "4" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "4" }}>
                    <animateMotion dur="4.00s" repeatCount="indefinite" path="M50,50 L17.7,24.7" />
                  </circle>
                  <circle className="nv-nd" cx="88.2" cy="24.3" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="86.2" cy="78.4" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="4.0" cy="48.4" r="1.6" style={{ "--i": "3" }} />
                  <circle className="nv-nd" cx="37.4" cy="5.8" r="1.6" style={{ "--i": "4" }} />
                </svg>
                <span className="nv-core ph">
                  <img src="/images/img-12-b050dbf75f.jpg" alt="" loading="lazy" />
                  <Icon name="globe" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="tower" />
                  Telecom
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="film" />
                  Media
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="code" />
                  Software
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="headset" />
                  GCCs
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="dc" />
                  Colocation
                </span>
              </div>
              <div className="ixp-body">
                <span className="dx-pill">{"Communications, Media & Technology"}</span>
                <p className="ixp-lede">Carrier-scale infrastructure, cloud-native platforms and AI-ready capacity.</p>
                <div className="ixp-rows">
                  <Link to="/industries-technology-media-telecom#ins-cmt-c0" style={{ "--i": "0" }}>
                    <span className="ixp-ic">
                      <Icon name="tower" />
                    </span>
                    <span className="ixp-tx">
                      <b>Telecom</b>
                      <small>High-density data center, network and NOC operations at carrier scale.</small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-technology-media-telecom#ins-cmt-c1" style={{ "--i": "1" }}>
                    <span className="ixp-ic">
                      <Icon name="film" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Media & Entertainment"}</b>
                      <small>High-throughput storage, content workflows and secure distribution.</small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-technology-media-telecom#ins-cmt-c2" style={{ "--i": "2" }}>
                    <span className="ixp-ic">
                      <Icon name="code" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Software & Platforms"}</b>
                      <small>
                        Cloud-native platforms, DevSecOps and AI-ready GPU infrastructure for product companies.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-technology-media-telecom#ins-cmt-c3" style={{ "--i": "3" }}>
                    <span className="ixp-ic">
                      <Icon name="headset" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"IT, ITES & GCCs"}</b>
                      <small>Scalable delivery-centre infrastructure, end-user services and managed NOC/SOC.</small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-technology-media-telecom#ins-cmt-c4" style={{ "--i": "4" }}>
                    <span className="ixp-ic">
                      <Icon name="dc" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Data Center & Colocation Providers"}</b>
                      <small>
                        Design-build, power, cooling, CDUs and 24x7 operations for operators and hyperscale tenants.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                </div>
                <Link to="/industries-technology-media-telecom" className="btn btn-gold">
                  {"Open Communications, Media & Technology"}
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
            <div className="ixp-p" role="tabpanel" id="ixp-si" aria-labelledby="ixp-si-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 91.7,30.6 88.5,64.1 69.4,91.7 35.9,88.5 8.3,69.4 11.5,35.9 30.6,8.3"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="88.5" y2="64.1" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L88.5,64.1" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="11.5" y2="35.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L11.5,35.9" />
                  </circle>
                  <circle className="nv-nd" cx="91.7" cy="30.6" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="69.4" cy="91.7" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="8.3" cy="69.4" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="30.6" cy="8.3" r="1.6" style={{ "--i": "3" }} />
                </svg>
                <span className="nv-core ph">
                  <img src="/images/img-13-d14043565a.jpg" alt="" loading="lazy" />
                  <Icon name="truck" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="bed" />
                  Hospitality
                </span>
                <span className="nv-chip" style={{ left: "88.5%", top: "64.1%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="truck" />
                  Logistics
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="building" />
                  Real estate
                </span>
                <span className="nv-chip" style={{ left: "11.5%", top: "35.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="briefcase" />
                  Prof. services
                </span>
              </div>
              <div className="ixp-body">
                <span className="dx-pill">{"Services & Infrastructure"}</span>
                <p className="ixp-lede">
                  Connected properties, real-time logistics and secure, productive service businesses.
                </p>
                <div className="ixp-rows">
                  <Link to="/industries-services-infrastructure#ins-si-c0" style={{ "--i": "0" }}>
                    <span className="ixp-ic">
                      <Icon name="bed" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Travel & Hospitality"}</b>
                      <small>
                        Guest-facing applications, property networks and payment security across hotels and travel
                        brands.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-services-infrastructure#ins-si-c1" style={{ "--i": "1" }}>
                    <span className="ixp-ic">
                      <Icon name="truck" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Logistics & Warehousing"}</b>
                      <small>Warehouse networks, WMS/ERP integration and real-time tracking dashboards.</small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-services-infrastructure#ins-si-c2" style={{ "--i": "2" }}>
                    <span className="ixp-ic">
                      <Icon name="building" />
                    </span>
                    <span className="ixp-tx">
                      <b>{"Real Estate & Construction"}</b>
                      <small>Smart-building systems, site connectivity and project applications.</small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                  <Link to="/industries-services-infrastructure#ins-si-c3" style={{ "--i": "3" }}>
                    <span className="ixp-ic">
                      <Icon name="briefcase" />
                    </span>
                    <span className="ixp-tx">
                      <b>Professional Services</b>
                      <small>
                        Secure collaboration, document management and productivity on Microsoft 365 and cloud.
                      </small>
                    </span>
                    <i>
                      <Icon name="arrow" />
                    </i>
                  </Link>
                </div>
                <Link to="/industries-services-infrastructure" className="btn btn-gold">
                  {"Open Services & Infrastructure"}
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
