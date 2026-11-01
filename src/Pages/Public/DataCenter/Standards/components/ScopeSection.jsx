import React from "react";
import Icon from "../../../../../Component/Icon";

export default function ScopeSection() {
  return (
    <section className="dx ice" id="dcs-standards-scope">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Service scope</span>
          <h2 className="dx-h">
            Credential <span>types</span>
          </h2>
          <p className="dx-lede">Choose a component to see its scope, considerations and outputs.</p>
        </div>
        <div className="dsy" data-tabs="">
          <div className="dsy-chips" role="tablist" aria-label="Components">
            <button
              type="button"
              role="tab"
              id="dcs-standards-c0-t"
              aria-controls="dcs-standards-c0"
              aria-selected="true"
              style={{ "--i": "0" }}
            >
              <Icon name="building" />
              <span>Uptime Institute Tier Certification</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-standards-c1-t"
              aria-controls="dcs-standards-c1"
              aria-selected="false"
              style={{ "--i": "1" }}
            >
              <Icon name="net" />
              <span>ANSI/TIA-942</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-standards-c2-t"
              aria-controls="dcs-standards-c2"
              aria-selected="false"
              style={{ "--i": "2" }}
            >
              <Icon name="users" />
              <span>BICSI DCDC</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-standards-c3-t"
              aria-controls="dcs-standards-c3"
              aria-selected="false"
              style={{ "--i": "3" }}
            >
              <Icon name="book" />
              <span>ISO/IEC 22237 series; ANSI/BICSI 002</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-standards-c4-t"
              aria-controls="dcs-standards-c4"
              aria-selected="false"
              style={{ "--i": "4" }}
            >
              <Icon name="leaf" />
              <span>LEED</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-standards-c5-t"
              aria-controls="dcs-standards-c5"
              aria-selected="false"
              style={{ "--i": "5" }}
            >
              <Icon name="check" />
              <span>ISO 9001, 27001, 14001, 45001, 22301, 50001, 41001</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-standards-c6-t"
              aria-controls="dcs-standards-c6"
              aria-selected="false"
              style={{ "--i": "6" }}
            >
              <Icon name="snow" />
              <span>ASHRAE Standard 90.4 and thermal guidelines</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-standards-c7-t"
              aria-controls="dcs-standards-c7"
              aria-selected="false"
              style={{ "--i": "7" }}
            >
              <Icon name="fire" />
              <span>NFPA standards and local codes</span>
            </button>
          </div>
          <div className="dsy-stage">
            <div className="dsy-p" role="tabpanel" id="dcs-standards-c0" aria-labelledby="dcs-standards-c0-t">
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon className="nv-poly" points="64.1,11.5 93.2,65.8 35.9,88.5 6.8,34.2" />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <circle className="nv-nd" cx="93.2" cy="65.8" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="6.8" cy="34.2" r="1.6" style={{ "--i": "1" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="building" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Design
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "1", "--tx": "-50%" }}>
                  <Icon name="layers" />
                  Uptime Institute Tier Certification
                </span>
              </div>
              <div className="dsy-body">
                <h3>Uptime Institute Tier Certification</h3>
                <p className="dsy-lead">Facility/project certification.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>
                    Stated only when verified; design, constructed facility and operational sustainability scopes kept
                    distinct.
                  </p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-standards-c1" aria-labelledby="dcs-standards-c1-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon className="nv-poly" points="64.1,11.5 34.2,93.2" />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <circle className="nv-nd" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "0" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="net" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  ANSI/TIA-942
                </span>
              </div>
              <div className="dsy-body">
                <h3>ANSI/TIA-942</h3>
                <p className="dsy-lead">Facility/project certification and reference standard.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Applicable edition and certification scope described; route and issuing organisation verified.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-standards-c2" aria-labelledby="dcs-standards-c2-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon className="nv-poly" points="64.1,11.5 34.2,93.2" />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <circle className="nv-nd" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "0" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="users" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  BICSI DCDC
                </span>
              </div>
              <div className="dsy-body">
                <h3>BICSI DCDC</h3>
                <p className="dsy-lead">Individual professional credential.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Listed only for a team member who currently holds it.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-standards-c3" aria-labelledby="dcs-standards-c3-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon className="nv-poly" points="64.1,11.5 93.2,65.8 35.9,88.5 6.8,34.2" />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <circle className="nv-nd" cx="93.2" cy="65.8" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="6.8" cy="34.2" r="1.6" style={{ "--i": "1" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="book" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Referenced as guidance
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "1", "--tx": "-50%" }}>
                  <Icon name="layers" />
                  ISO/IEC 22237 series; ANSI/BICSI 002
                </span>
              </div>
              <div className="dsy-body">
                <h3>ISO/IEC 22237 series; ANSI/BICSI 002</h3>
                <p className="dsy-lead">Technical standards and guidance.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Referenced as guidance, not as company certifications.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-standards-c4" aria-labelledby="dcs-standards-c4-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon className="nv-poly" points="64.1,11.5 34.2,93.2" />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <circle className="nv-nd" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "0" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="leaf" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  LEED
                </span>
              </div>
              <div className="dsy-body">
                <h3>LEED</h3>
                <p className="dsy-lead">Green building certification.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Project certification where eligible; rating system and status stated accurately.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-standards-c5" aria-labelledby="dcs-standards-c5-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon className="nv-poly" points="64.1,11.5 34.2,93.2" />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <circle className="nv-nd" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "0" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="check" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  ISO 9001, 27001, 14001, 45001, 22301, 50001, 41001
                </span>
              </div>
              <div className="dsy-body">
                <h3>ISO 9001, 27001, 14001, 45001, 22301, 50001, 41001</h3>
                <p className="dsy-lead">Corporate management systems.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Displayed only if a valid certificate is held for the stated scope.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-standards-c6" aria-labelledby="dcs-standards-c6-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon className="nv-poly" points="64.1,11.5 93.2,65.8 35.9,88.5 6.8,34.2" />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <circle className="nv-nd" cx="93.2" cy="65.8" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="6.8" cy="34.2" r="1.6" style={{ "--i": "1" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="snow" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Engineering guidance
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "1", "--tx": "-50%" }}>
                  <Icon name="layers" />
                  ASHRAE Standard 90.4 and thermal guidelines
                </span>
              </div>
              <div className="dsy-body">
                <h3>ASHRAE Standard 90.4 and thermal guidelines</h3>
                <p className="dsy-lead">Engineering guidance.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Referenced as applicable guidance, not company certification.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-standards-c7" aria-labelledby="dcs-standards-c7-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon className="nv-poly" points="64.1,11.5 93.2,65.8 35.9,88.5 6.8,34.2" />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <circle className="nv-nd" cx="93.2" cy="65.8" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="6.8" cy="34.2" r="1.6" style={{ "--i": "1" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="fire" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Life safety
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "1", "--tx": "-50%" }}>
                  <Icon name="layers" />
                  NFPA standards and local codes
                </span>
              </div>
              <div className="dsy-body">
                <h3>NFPA standards and local codes</h3>
                <p className="dsy-lead">Life safety.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Stated only after specialist and jurisdictional review.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="dcs-h4">How we use certification language</h4>
        <div className="cx-cols" data-reveal="">
          <div className="cx-col b" style={{ "--i": "0" }}>
            <div className="cx-col-h">
              <Icon name="check" />
              <b>“Certified”</b>
            </div>
            <ul>
              <li>Only when the entity holds a valid certificate for the stated scope</li>
            </ul>
          </div>
          <div className="cx-col g" style={{ "--i": "1" }}>
            <div className="cx-col-h">
              <Icon name="target" />
              <b>“Certification-ready”</b>
            </div>
            <ul>
              <li>Readiness support only; no guaranteed outcome</li>
            </ul>
          </div>
          <div className="cx-col t" style={{ "--i": "2" }}>
            <div className="cx-col-h">
              <Icon name="layers" />
              <b>“Designed to align with”</b>
            </div>
            <ul>
              <li>Only when the design basis and evidence support it</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
