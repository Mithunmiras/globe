import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function ServicesSection() {
  return (
    <section className="band" id="home-services">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Services</div>
            <h2>
              What we <em>do</em>
            </h2>
          </div>
          <p>
            Explore all IT capabilities — from strategy and architecture to implementation, security and operations.{" "}
            <Link to="/services" style={{ color: "var(--brand-ink)", fontWeight: "600", whiteSpace: "nowrap" }}>
              All services →
            </Link>
          </p>
        </div>
        <div className="svc2-grid n8" data-reveal="">
          <Link to="/consulting" className="svc2 lead" style={{ "--i": "0" }}>
            <span className="svc2-ic">
              <Icon name="compass" />
            </span>
            <b>{"Consulting & Advisory"}</b>
            <small>
              IT strategy, assessments, enterprise architecture, roadmaps, vendor selection, PMO, IT governance and DPDP
              readiness.
            </small>
            <i className="svc2-go">
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center" className="svc2" style={{ "--i": "1" }}>
            <span className="svc2-ic">
              <Icon name="dc" />
            </span>
            <b>{"Data Center & Infrastructure"}</b>
            <small>
              Data centre design, power and cooling, racks, compute, storage, network, backup, DR, high-density and AI
              infrastructure.
            </small>
            <i className="svc2-go">
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cybersecurity" className="svc2" style={{ "--i": "2" }}>
            <span className="svc2-ic">
              <Icon name="shield" />
            </span>
            <b>{"Cybersecurity & Resilience"}</b>
            <small>
              Security assessments, SOC, SIEM/XDR, identity, Zero Trust, endpoint security, GRC, compliance and incident
              response.
            </small>
            <i className="svc2-go">
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cloud" className="svc2" style={{ "--i": "3" }}>
            <span className="svc2-ic">
              <Icon name="cloud" />
            </span>
            <b>{"Cloud & Modernisation"}</b>
            <small>
              Public, private and hybrid cloud, migration, cloud security, modernisation, FinOps, backup and disaster
              recovery.
            </small>
            <i className="svc2-go">
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/applications" className="svc2" style={{ "--i": "4" }}>
            <span className="svc2-ic">
              <Icon name="apps" />
            </span>
            <b>Enterprise Applications</b>
            <small>
              ERP, SAP, Oracle, CRM, PLM, MES, custom software, application integration, testing and application
              support.
            </small>
            <i className="svc2-go">
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-analytics" className="svc2" style={{ "--i": "5" }}>
            <span className="svc2-ic">
              <Icon name="chart" />
            </span>
            <b>{"Data, Analytics & AI"}</b>
            <small>
              Data engineering, data platforms, governance, BI dashboards, advanced analytics, GenAI, AI agents and
              MLOps.
            </small>
            <i className="svc2-go">
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/digital-workplace" className="svc2" style={{ "--i": "6" }}>
            <span className="svc2-ic">
              <Icon name="laptop" />
            </span>
            <b>{"Digital Workplace & Automation"}</b>
            <small>
              End-user computing, collaboration, Microsoft 365, device management, workflow automation, RPA and IT
              service automation.
            </small>
            <i className="svc2-go">
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/managed-services" className="svc2" style={{ "--i": "7" }}>
            <span className="svc2-ic">
              <Icon name="headset" />
            </span>
            <b>Managed IT Services</b>
            <small>
              Managed infrastructure, NOC, SOC, cloud operations, application support, service desk, monitoring and
              SLA-based operations.
            </small>
            <i className="svc2-go">
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
}
