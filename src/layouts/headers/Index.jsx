import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../Component/Icon";
import NavItem from "../../Component/NavItem";
import { SERVICE_ROUTES } from "../../constants/digitalGlobe";
import logoIcon from "../../assets/logo-icon.png";

export default function Header() {
  const { pathname } = useLocation();
  const route = pathname === "/" ? "home" : pathname.slice(1);
  const [open, setOpen] = useState(false);

  const isService = SERVICE_ROUTES.includes(route);
  const isDataCenter = /^data-center/.test(route);
  const isIndustry = /^industries/.test(route);

  const closeMenus = () => {
    setOpen(false);
    const active = document.activeElement;
    if (active && active.closest && active.closest(".mega")) active.blur();
  };

  // a route change always closes the drawer and any open mega menu
  useEffect(() => {
    closeMenus();
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeMenus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // centre the wide Industries mega menu within the viewport
  useEffect(() => {
    const dd = document.getElementById("ind-dd");
    if (!dd) return undefined;
    const mega = dd.querySelector(".mega");
    const position = () => {
      const r = dd.getBoundingClientRect();
      const w = Math.min(1180, window.innerWidth - 40);
      mega.style.left = Math.round((window.innerWidth - w) / 2 - r.left) + "px";
      mega.style.right = "auto";
    };
    dd.addEventListener("mouseenter", position);
    dd.addEventListener("focusin", position);
    window.addEventListener("resize", position);
    position();
    return () => {
      dd.removeEventListener("mouseenter", position);
      dd.removeEventListener("focusin", position);
      window.removeEventListener("resize", position);
    };
  }, []);

  return (
    <header className="site-head">
      <div className="wrap head-row">
        <Link to="/" onClick={closeMenus} className="brand" aria-label="Digital Globe Consultancy home">
          <img src={logoIcon} alt="" />
          <span>
            <b>Digital Globe</b>
            <small>Consultancy</small>
          </span>
        </Link>
        <nav className="mainnav" aria-label="Main" id="mainnav">
          <NavItem to="/" onClick={closeMenus} data-nav="home">
            Home
          </NavItem>{" "}
          <NavItem to="/about" onClick={closeMenus} data-nav="about">
            About Us
          </NavItem>
          <div id="dc-dd" className={`nav-dd dc-dd${isDataCenter ? " on" : ""}`}>
            <NavItem
              to="/data-center"
              onClick={closeMenus}
              className="dd-trigger"
              data-nav="data-center"
              aria-haspopup="true"
            >
              Data Center
              <Icon name="down" />
            </NavItem>
            <div className="mega dl-mega" role="menu" aria-label="Data center">
              <div className="dl-top">
                <div className="dl-g">
                  <small className="dl-gh">Lifecycle</small>
                  <div className="dl-grid">
                    <Link to="/data-center-strategy" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="compass" />
                      </span>
                      <span>
                        <b>{"Strategy & Concept"}</b>
                        <small>Business case, feasibility, capacity and site</small>
                      </span>
                    </Link>
                    <Link to="/data-center-design" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="edit" />
                      </span>
                      <span>
                        <b>{"Design & Engineering"}</b>
                        <small>Master planning and multidisciplinary engineering</small>
                      </span>
                    </Link>
                    <Link to="/data-center-critical" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="bolt" />
                      </span>
                      <span>
                        <b>Critical Infrastructure</b>
                        <small>Power, cooling, building, fire and security</small>
                      </span>
                    </Link>
                    <Link to="/data-center-it-network" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="server" />
                      </span>
                      <span>
                        <b>{"IT & Network"}</b>
                        <small>Compute, storage, network and platforms</small>
                      </span>
                    </Link>
                    <Link to="/data-center-build" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="gear" />
                      </span>
                      <span>
                        <b>{"Build & Commission"}</b>
                        <small>Procurement, installation, integration and testing</small>
                      </span>
                    </Link>
                    <Link to="/data-center-operations" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="eye" />
                      </span>
                      <span>
                        <b>{"Operate & Maintain"}</b>
                        <small>24×7 operations, maintenance and monitoring</small>
                      </span>
                    </Link>
                    <Link to="/data-center-sustainability" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="leaf" />
                      </span>
                      <span>
                        <b>{"Optimise & Sustain"}</b>
                        <small>Energy, efficiency, capacity and sustainability</small>
                      </span>
                    </Link>
                    <Link to="/data-center-expansion" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="trend" />
                      </span>
                      <span>
                        <b>{"Expand & Modernise"}</b>
                        <small>Modular growth, AI workloads and future capacity</small>
                      </span>
                    </Link>
                  </div>
                  <div className="dl-thumbs">
                    <Link to="/data-center-strategy" onClick={closeMenus} role="menuitem" style={{ "--i": "0" }}>
                      <img src="/images/img-02-9247f20ff2.jpg" alt="" loading="lazy" />
                      <span>Strategy</span>
                    </Link>
                    <Link to="/data-center-design" onClick={closeMenus} role="menuitem" style={{ "--i": "1" }}>
                      <img src="/images/img-03-667c99b746.jpg" alt="" loading="lazy" />
                      <span>Design</span>
                    </Link>
                    <Link to="/data-center-build" onClick={closeMenus} role="menuitem" style={{ "--i": "2" }}>
                      <img src="/images/img-04-1a2fe92a5e.jpg" alt="" loading="lazy" />
                      <span>Build</span>
                    </Link>
                    <Link to="/data-center-operations" onClick={closeMenus} role="menuitem" style={{ "--i": "3" }}>
                      <img src="/images/img-05-749d8ea2f0.jpg" alt="" loading="lazy" />
                      <span>Operate</span>
                    </Link>
                    <Link to="/data-center-cooling" onClick={closeMenus} role="menuitem" style={{ "--i": "4" }}>
                      <img src="/images/img-06-a61d1013f2.jpg" alt="" loading="lazy" />
                      <span>Cooling</span>
                    </Link>
                    <Link to="/data-center-ai" onClick={closeMenus} role="menuitem" style={{ "--i": "5" }}>
                      <img src="/images/img-07-62fce3caf3.jpg" alt="" loading="lazy" />
                      <span>AI data center</span>
                    </Link>
                  </div>
                </div>
                <div className="dl-g sys">
                  <small className="dl-gh">Facility systems</small>
                  <div className="dl-grid one">
                    <Link to="/data-center-power" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="bolt" />
                      </span>
                      <span>
                        <b>Power</b>
                        <small>Utility to rack: UPS, generation, distribution</small>
                      </span>
                    </Link>
                    <Link to="/data-center-cooling" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="snow" />
                      </span>
                      <span>
                        <b>Cooling</b>
                        <small>Air, liquid and hybrid cooling and controls</small>
                      </span>
                    </Link>
                    <Link to="/data-center-fire-security" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="shield" />
                      </span>
                      <span>
                        <b>{"Fire & Security"}</b>
                        <small>Detection, suppression and layered security</small>
                      </span>
                    </Link>
                    <Link to="/data-center-monitoring" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="headset" />
                      </span>
                      <span>
                        <b>{"DCIM & Monitoring"}</b>
                        <small>BMS, EPMS, DCIM, CMMS and ITSM</small>
                      </span>
                    </Link>
                    <Link to="/data-center-ai" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="cpu" />
                      </span>
                      <span>
                        <b>AI Data Center</b>
                        <small>GPU/HPC, liquid cooling and AI fabric</small>
                      </span>
                    </Link>
                    <Link to="/data-center-standards" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="check" />
                      </span>
                      <span>
                        <b>{"Standards & Assurance"}</b>
                        <small>Certification pathways and evidence</small>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="dl-mfoot">
                <div className="dl-mf-h">
                  <small>Across every phase</small>
                  <b>Cross-cutting capabilities</b>
                  <NavItem to="/data-center" onClick={closeMenus} data-nav="data-center">
                    Data Center overview
                    <Icon name="arrow" />
                  </NavItem>
                </div>
                <ul className="dl-xc">
                  <li>
                    <Icon name="layout" />
                    <span>Project Management</span>
                  </li>
                  <li>
                    <Icon name="gov" />
                    <span>{"Safety & Compliance"}</span>
                  </li>
                  <li>
                    <Icon name="shield" />
                    <span>Cybersecurity</span>
                  </li>
                  <li>
                    <Icon name="target" />
                    <span>Risk Management</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Quality Assurance</span>
                  </li>
                  <li>
                    <Icon name="leaf" />
                    <span>Sustainability</span>
                  </li>
                  <li>
                    <Icon name="doc" />
                    <span>Documentation</span>
                  </li>
                  <li>
                    <Icon name="chart" />
                    <span>Lifecycle Cost Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="svc-dd" className={`nav-dd${isService ? " on" : ""}`}>
            <NavItem
              to="/services"
              onClick={closeMenus}
              className="dd-trigger"
              data-nav="services"
              aria-haspopup="true"
            >
              Services
              <Icon name="down" />
            </NavItem>
            <div className="mega" role="menu" aria-label="Services">
              <div className="mega-cols">
                <div className="mcol">
                  <NavItem to="/consulting" onClick={closeMenus} className="mt" role="menuitem" data-nav="consulting">
                    <Icon name="compass" />
                    <b>{"Consulting & Advisory"}</b>
                  </NavItem>
                  <Link to="/consulting" onClick={closeMenus} className="ms" role="menuitem">
                    Assessments
                  </Link>
                  <Link to="/consulting" onClick={closeMenus} className="ms" role="menuitem">
                    {"Strategy & architecture"}
                  </Link>
                  <Link to="/consulting" onClick={closeMenus} className="ms" role="menuitem">
                    {"Vendor selection & PMO"}
                  </Link>
                </div>
                <div className="mcol">
                  <NavItem to="/data-center" onClick={closeMenus} className="mt" role="menuitem" data-nav="data-center">
                    <Icon name="dc" />
                    <b>{"Data Center & Infrastructure"}</b>
                  </NavItem>
                  <Link to="/data-center-power" onClick={closeMenus} className="ms" role="menuitem">
                    {"Power & cooling"}
                  </Link>
                  <Link to="/data-center-it-network" onClick={closeMenus} className="ms" role="menuitem">
                    {"Racks, compute & network"}
                  </Link>
                  <Link to="/data-center-ai" onClick={closeMenus} className="ms" role="menuitem">
                    {"High-density & AI"}
                  </Link>
                </div>
                <div className="mcol">
                  <NavItem
                    to="/cybersecurity"
                    onClick={closeMenus}
                    className="mt"
                    role="menuitem"
                    data-nav="cybersecurity"
                  >
                    <Icon name="shield" />
                    <b>{"Cybersecurity & Resilience"}</b>
                  </NavItem>
                  <Link to="/cybersecurity" onClick={closeMenus} className="ms" role="menuitem">
                    Security assessments
                  </Link>
                  <Link to="/cybersecurity" onClick={closeMenus} className="ms" role="menuitem">
                    {"SOC, SIEM & XDR"}
                  </Link>
                  <Link to="/cybersecurity" onClick={closeMenus} className="ms" role="menuitem">
                    {"Identity & Zero Trust"}
                  </Link>
                </div>
                <div className="mcol">
                  <NavItem to="/cloud" onClick={closeMenus} className="mt" role="menuitem" data-nav="cloud">
                    <Icon name="cloud" />
                    <b>{"Cloud & Modernisation"}</b>
                  </NavItem>
                  <Link to="/cloud" onClick={closeMenus} className="ms" role="menuitem">
                    {"Public, private & hybrid"}
                  </Link>
                  <Link to="/cloud" onClick={closeMenus} className="ms" role="menuitem">
                    {"Migration & modernisation"}
                  </Link>
                  <Link to="/cloud" onClick={closeMenus} className="ms" role="menuitem">
                    Cloud security
                  </Link>
                </div>
                <div className="mcol">
                  <NavItem
                    to="/applications"
                    onClick={closeMenus}
                    className="mt"
                    role="menuitem"
                    data-nav="applications"
                  >
                    <Icon name="apps" />
                    <b>Enterprise Applications</b>
                  </NavItem>
                  <Link to="/applications" onClick={closeMenus} className="ms" role="menuitem">
                    ERP: SAP, Oracle, D365
                  </Link>
                  <Link to="/applications" onClick={closeMenus} className="ms" role="menuitem">
                    CRM
                  </Link>
                  <Link to="/applications" onClick={closeMenus} className="ms" role="menuitem">
                    {"PLM & MES"}
                  </Link>
                </div>
                <div className="mcol">
                  <NavItem
                    to="/data-analytics"
                    onClick={closeMenus}
                    className="mt"
                    role="menuitem"
                    data-nav="data-analytics"
                  >
                    <Icon name="chart" />
                    <b>{"Data, Analytics & AI"}</b>
                  </NavItem>
                  <Link to="/data-analytics" onClick={closeMenus} className="ms" role="menuitem">
                    Data platforms
                  </Link>
                  <Link to="/data-analytics" onClick={closeMenus} className="ms" role="menuitem">
                    BI dashboards
                  </Link>
                  <Link to="/data-analytics" onClick={closeMenus} className="ms" role="menuitem">
                    Advanced analytics
                  </Link>
                </div>
                <div className="mcol">
                  <NavItem
                    to="/digital-workplace"
                    onClick={closeMenus}
                    className="mt"
                    role="menuitem"
                    data-nav="digital-workplace"
                  >
                    <Icon name="laptop" />
                    <b>{"Digital Workplace & Automation"}</b>
                  </NavItem>
                  <Link to="/digital-workplace" onClick={closeMenus} className="ms" role="menuitem">
                    End-user computing
                  </Link>
                  <Link to="/digital-workplace" onClick={closeMenus} className="ms" role="menuitem">
                    Microsoft 365
                  </Link>
                  <Link to="/digital-workplace" onClick={closeMenus} className="ms" role="menuitem">
                    Device management
                  </Link>
                </div>
                <div className="mcol">
                  <NavItem
                    to="/managed-services"
                    onClick={closeMenus}
                    className="mt"
                    role="menuitem"
                    data-nav="managed-services"
                  >
                    <Icon name="headset" />
                    <b>Managed IT Services</b>
                  </NavItem>
                  <Link to="/managed-services" onClick={closeMenus} className="ms" role="menuitem">
                    Managed NOC
                  </Link>
                  <Link to="/managed-services" onClick={closeMenus} className="ms" role="menuitem">
                    Managed SOC
                  </Link>
                  <Link to="/managed-services" onClick={closeMenus} className="ms" role="menuitem">
                    Cloud operations
                  </Link>
                </div>
              </div>
              <div className="mega-foot">
                <span>Consulting-led. Vendor-neutral. Delivered and run by one team.</span>
                <NavItem to="/services" onClick={closeMenus} data-nav="services-all">
                  All services
                  <Icon name="arrow" />
                </NavItem>
              </div>
            </div>
          </div>
          <div id="ind-dd" className={`nav-dd dc-dd ind-dd${isIndustry ? " on" : ""}`}>
            <NavItem
              to="/industries"
              onClick={closeMenus}
              className="dd-trigger"
              data-nav="industries"
              aria-haspopup="true"
            >
              Industries
              <Icon name="down" />
            </NavItem>
            <div className="mega dl-mega" role="menu" aria-label="Industries">
              <div className="dl-top">
                <div className="dl-g">
                  <small className="dl-gh">Sectors</small>
                  <div className="dl-grid">
                    <Link to="/industries-financial-services" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="bank" />
                      </span>
                      <span>
                        <b>Financial Services</b>
                        <small>Banks, markets, insurers and fintechs</small>
                      </span>
                    </Link>
                    <Link to="/industries-public-sector-health" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="health" />
                      </span>
                      <span>
                        <b>{"Public Sector & Health"}</b>
                        <small>Government, defence, health, pharma, education</small>
                      </span>
                    </Link>
                    <Link to="/industries-manufacturing" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="factory" />
                      </span>
                      <span>
                        <b>{"Products & Manufacturing"}</b>
                        <small>Automotive, industrial, FMCG, retail, high tech</small>
                      </span>
                    </Link>
                    <Link to="/industries-energy-resources" onClick={closeMenus} className="dl-mi" role="menuitem">
                      <span className="dl-ic">
                        <Icon name="leaf" />
                      </span>
                      <span>
                        <b>{"Resources & Energy"}</b>
                        <small>Oil and gas, utilities, mining, agri-tech</small>
                      </span>
                    </Link>
                    <Link
                      to="/industries-technology-media-telecom"
                      onClick={closeMenus}
                      className="dl-mi"
                      role="menuitem"
                    >
                      <span className="dl-ic">
                        <Icon name="globe" />
                      </span>
                      <span>
                        <b>{"Communications, Media & Technology"}</b>
                        <small>Telecom, media, software, GCCs, colocation</small>
                      </span>
                    </Link>
                    <Link
                      to="/industries-services-infrastructure"
                      onClick={closeMenus}
                      className="dl-mi"
                      role="menuitem"
                    >
                      <span className="dl-ic">
                        <Icon name="truck" />
                      </span>
                      <span>
                        <b>{"Services & Infrastructure"}</b>
                        <small>Hospitality, logistics, real estate, services</small>
                      </span>
                    </Link>
                  </div>
                  <div className="dl-thumbs">
                    <Link
                      to="/industries-financial-services"
                      onClick={closeMenus}
                      role="menuitem"
                      style={{ "--i": "0" }}
                    >
                      <img src="/images/img-08-d45099ac5c.jpg" alt="" loading="lazy" />
                      <span>Finance</span>
                    </Link>
                    <Link
                      to="/industries-public-sector-health"
                      onClick={closeMenus}
                      role="menuitem"
                      style={{ "--i": "1" }}
                    >
                      <img src="/images/img-09-c214ac8037.jpg" alt="" loading="lazy" />
                      <span>{"Public & Health"}</span>
                    </Link>
                    <Link to="/industries-manufacturing" onClick={closeMenus} role="menuitem" style={{ "--i": "2" }}>
                      <img src="/images/img-10-c730a88655.jpg" alt="" loading="lazy" />
                      <span>Manufacturing</span>
                    </Link>
                    <Link to="/industries-energy-resources" onClick={closeMenus} role="menuitem" style={{ "--i": "3" }}>
                      <img src="/images/img-11-93cb3d9c3a.jpg" alt="" loading="lazy" />
                      <span>Energy</span>
                    </Link>
                    <Link
                      to="/industries-technology-media-telecom"
                      onClick={closeMenus}
                      role="menuitem"
                      style={{ "--i": "4" }}
                    >
                      <img src="/images/img-12-b050dbf75f.jpg" alt="" loading="lazy" />
                      <span>{"Tech & Media"}</span>
                    </Link>
                    <Link
                      to="/industries-services-infrastructure"
                      onClick={closeMenus}
                      role="menuitem"
                      style={{ "--i": "5" }}
                    >
                      <img src="/images/img-13-d14043565a.jpg" alt="" loading="lazy" />
                      <span>Services</span>
                    </Link>
                  </div>
                </div>
                <div className="dl-g sys">
                  <small className="dl-gh">Popular industries</small>
                  <div className="dl-grid one">
                    <Link
                      to="/industries-financial-services"
                      onClick={closeMenus}
                      className="dl-mi"
                      role="menuitem"
                    >
                      <span className="dl-ic">
                        <Icon name="bank" />
                      </span>
                      <span>
                        <b>Banking</b>
                        <small>Financial Services</small>
                      </span>
                    </Link>
                    <Link
                      to="/industries-public-sector-health"
                      onClick={closeMenus}
                      className="dl-mi"
                      role="menuitem"
                    >
                      <span className="dl-ic">
                        <Icon name="health" />
                      </span>
                      <span>
                        <b>{"Healthcare & hospitals"}</b>
                        <small>{"Public Sector & Health"}</small>
                      </span>
                    </Link>
                    <Link
                      to="/industries-manufacturing"
                      onClick={closeMenus}
                      className="dl-mi"
                      role="menuitem"
                    >
                      <span className="dl-ic">
                        <Icon name="factory" />
                      </span>
                      <span>
                        <b>Manufacturing</b>
                        <small>{"Products & Manufacturing"}</small>
                      </span>
                    </Link>
                    <Link
                      to="/industries-technology-media-telecom"
                      onClick={closeMenus}
                      className="dl-mi"
                      role="menuitem"
                    >
                      <span className="dl-ic">
                        <Icon name="tower" />
                      </span>
                      <span>
                        <b>Telecom</b>
                        <small>{"Communications, Media & Technology"}</small>
                      </span>
                    </Link>
                    <Link
                      to="/industries-technology-media-telecom"
                      onClick={closeMenus}
                      className="dl-mi"
                      role="menuitem"
                    >
                      <span className="dl-ic">
                        <Icon name="dc" />
                      </span>
                      <span>
                        <b>{"Colocation & hyperscale"}</b>
                        <small>{"Communications, Media & Technology"}</small>
                      </span>
                    </Link>
                    <Link
                      to="/industries-services-infrastructure"
                      onClick={closeMenus}
                      className="dl-mi"
                      role="menuitem"
                    >
                      <span className="dl-ic">
                        <Icon name="truck" />
                      </span>
                      <span>
                        <b>{"Logistics & warehousing"}</b>
                        <small>{"Services & Infrastructure"}</small>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="dl-mfoot">
                <div className="dl-mf-h">
                  <small>Across every sector</small>
                  <b>What we bring</b>
                </div>
                <ul className="dl-xc">
                  <li>
                    <Icon name="check" />
                    <span>Regulatory compliance</span>
                  </li>
                  <li>
                    <Icon name="shield" />
                    <span>Cyber resilience</span>
                  </li>
                  <li>
                    <Icon name="cloud" />
                    <span>Cloud adoption</span>
                  </li>
                  <li>
                    <Icon name="ai" />
                    <span>{"Data & AI"}</span>
                  </li>
                  <li>
                    <Icon name="gear" />
                    <span>Legacy modernisation</span>
                  </li>
                  <li>
                    <Icon name="headset" />
                    <span>24x7 operations</span>
                  </li>
                  <li>
                    <Icon name="leaf" />
                    <span>{"ESG & sustainability"}</span>
                  </li>
                  <li>
                    <Icon name="laptop" />
                    <span>Digital workplace</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <NavItem to="/contact" onClick={closeMenus} data-nav="contact">
            Contact Us
          </NavItem>{" "}
          <i className="nav-ind" aria-hidden="true" />
        </nav>
        <div className="head-meta">
          <Link to="/contact" onClick={closeMenus} className="btn btn-gold head-cta">
            Talk to an Expert
            <Icon name="arrow" />
          </Link>
        </div>
        <button
          className="menu-btn"
          id="menu-btn"
          type="button"
          aria-controls="drawer"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name="menu" />
        </button>
      </div>
      <div id="drawer" className={`drawer${open ? " open" : ""}`}>
        <nav className="wrap" aria-label="Mobile">
          <NavItem to="/" onClick={closeMenus} data-nav="home">
            Home
          </NavItem>{" "}
          <NavItem to="/about" onClick={closeMenus} data-nav="about">
            About Us
          </NavItem>{" "}
          <NavItem to="/data-center" onClick={closeMenus} data-nav="data-center">
            Data Center
          </NavItem>{" "}
          <Link to="/data-center-strategy" onClick={closeMenus} className="sub">
            {"Strategy & Concept"}
          </Link>{" "}
          <Link to="/data-center-design" onClick={closeMenus} className="sub">
            {"Design & Engineering"}
          </Link>{" "}
          <Link to="/data-center-critical" onClick={closeMenus} className="sub">
            Critical Infrastructure
          </Link>{" "}
          <Link to="/data-center-it-network" onClick={closeMenus} className="sub">
            {"IT & Network"}
          </Link>{" "}
          <Link to="/data-center-build" onClick={closeMenus} className="sub">
            {"Build & Commission"}
          </Link>{" "}
          <Link to="/data-center-operations" onClick={closeMenus} className="sub">
            {"Operate & Maintain"}
          </Link>{" "}
          <Link to="/data-center-sustainability" onClick={closeMenus} className="sub">
            {"Optimise & Sustain"}
          </Link>{" "}
          <Link to="/data-center-expansion" onClick={closeMenus} className="sub">
            {"Expand & Modernise"}
          </Link>{" "}
          <Link to="/data-center-power" onClick={closeMenus} className="sub">
            Power
          </Link>{" "}
          <Link to="/data-center-cooling" onClick={closeMenus} className="sub">
            Cooling
          </Link>{" "}
          <Link to="/data-center-fire-security" onClick={closeMenus} className="sub">
            {"Fire & Security"}
          </Link>{" "}
          <Link to="/data-center-monitoring" onClick={closeMenus} className="sub">
            {"DCIM & Monitoring"}
          </Link>{" "}
          <Link to="/data-center-ai" onClick={closeMenus} className="sub">
            AI Data Center
          </Link>{" "}
          <Link to="/data-center-standards" onClick={closeMenus} className="sub">
            {"Standards & Assurance"}
          </Link>{" "}
          <NavItem to="/services" onClick={closeMenus} data-nav="services">
            Services
          </NavItem>{" "}
          <NavItem to="/consulting" onClick={closeMenus} className="sub" data-nav="consulting">
            {"Consulting & Advisory"}
          </NavItem>{" "}
          <NavItem to="/data-center" onClick={closeMenus} className="sub" data-nav="data-center">
            {"Data Center & Infrastructure"}
          </NavItem>{" "}
          <NavItem to="/cybersecurity" onClick={closeMenus} className="sub" data-nav="cybersecurity">
            {"Cybersecurity & Resilience"}
          </NavItem>{" "}
          <NavItem to="/cloud" onClick={closeMenus} className="sub" data-nav="cloud">
            {"Cloud & Modernisation"}
          </NavItem>{" "}
          <NavItem to="/applications" onClick={closeMenus} className="sub" data-nav="applications">
            Enterprise Applications
          </NavItem>{" "}
          <NavItem to="/data-analytics" onClick={closeMenus} className="sub" data-nav="data-analytics">
            {"Data, Analytics & AI"}
          </NavItem>{" "}
          <NavItem to="/digital-workplace" onClick={closeMenus} className="sub" data-nav="digital-workplace">
            {"Digital Workplace & Automation"}
          </NavItem>{" "}
          <NavItem to="/managed-services" onClick={closeMenus} className="sub" data-nav="managed-services">
            Managed IT Services
          </NavItem>{" "}
          <NavItem to="/industries" onClick={closeMenus} data-nav="industries">
            Industries
          </NavItem>{" "}
          <NavItem to="/contact" onClick={closeMenus} data-nav="contact">
            Contact Us
          </NavItem>
        </nav>
      </div>
    </header>
  );
}
