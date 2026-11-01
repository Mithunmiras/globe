import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function AllSection() {
  return (
    <section className="band" id="svc-all">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Our services</div>
            <h2>
              Eight services, <em>one accountable team</em>
            </h2>
          </div>
          <p>
            Explore all IT capabilities — from strategy and architecture to implementation, security and operations.
          </p>
        </div>
        <div className="svclist">
          <div className="svcrow">
            <Link to="/consulting" className="sr-main">
              <span className="sr-ic">
                <Icon name="compass" />
              </span>
              <span>
                <b>{"Consulting & Advisory"}</b>
                <small>
                  IT strategy, assessments, enterprise architecture, roadmaps, vendor selection, PMO, IT governance and
                  DPDP readiness.
                </small>
              </span>
            </Link>
            <div className="sr-subs">
              <Link to="/consulting#co-assess" className="chip">
                Assessments
              </Link>
              <Link to="/consulting#co-strategy" className="chip">
                {"Strategy & architecture"}
              </Link>
              <Link to="/consulting#co-vendor" className="chip">
                {"Vendor selection & PMO"}
              </Link>
              <Link to="/consulting#co-grc" className="chip">
                {"IT governance & DPDP"}
              </Link>
            </div>
            <Link to="/consulting" className="sr-go" aria-label={"Open Consulting & Advisory"}>
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="svcrow">
            <Link to="/data-center" className="sr-main">
              <span className="sr-ic">
                <Icon name="dc" />
              </span>
              <span>
                <b>{"Data Center & Infrastructure"}</b>
                <small>
                  Data centre design, power and cooling, racks, compute, storage, network, backup, DR, high-density and
                  AI infrastructure.
                </small>
              </span>
            </Link>
            <div className="sr-subs">
              <Link to="/data-center-power" className="chip">
                {"Power & cooling"}
              </Link>
              <Link to="/data-center-it-network" className="chip">
                {"Racks, compute & network"}
              </Link>
              <Link to="/data-center-ai#dc-ai" className="chip">
                {"High-density & AI"}
              </Link>
              <Link to="/it-infrastructure#in-map" className="chip">
                {"Network, server & storage"}
              </Link>
              <Link to="/it-infrastructure#in-storage" className="chip">
                {"Backup & DR"}
              </Link>
            </div>
            <Link to="/data-center" className="sr-go" aria-label={"Open Data Center & Infrastructure"}>
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="svcrow">
            <Link to="/cybersecurity" className="sr-main">
              <span className="sr-ic">
                <Icon name="shield" />
              </span>
              <span>
                <b>{"Cybersecurity & Resilience"}</b>
                <small>
                  Security assessments, SOC, SIEM/XDR, identity, Zero Trust, endpoint security, GRC, compliance and
                  incident response.
                </small>
              </span>
            </Link>
            <div className="sr-subs">
              <Link to="/cybersecurity#cs-outcome" className="chip">
                Security assessments
              </Link>
              <Link to="/cybersecurity#cs-soc" className="chip">
                {"SOC, SIEM & XDR"}
              </Link>
              <Link to="/cybersecurity#cs-identity" className="chip">
                {"Identity & Zero Trust"}
              </Link>
              <Link to="/cybersecurity#cs-gov" className="chip">
                {"GRC & compliance"}
              </Link>
              <Link to="/cybersecurity#cs-resilience" className="chip">
                Incident response
              </Link>
            </div>
            <Link to="/cybersecurity" className="sr-go" aria-label={"Open Cybersecurity & Resilience"}>
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="svcrow">
            <Link to="/cloud" className="sr-main">
              <span className="sr-ic">
                <Icon name="cloud" />
              </span>
              <span>
                <b>{"Cloud & Modernisation"}</b>
                <small>
                  Public, private and hybrid cloud, migration, cloud security, modernisation, FinOps, backup and
                  disaster recovery.
                </small>
              </span>
            </Link>
            <div className="sr-subs">
              <Link to="/cloud#cl-multi" className="chip">
                {"Public, private & hybrid"}
              </Link>
              <Link to="/cloud#cl-migration" className="chip">
                {"Migration & modernisation"}
              </Link>
              <Link to="/cloud#cl-security" className="chip">
                Cloud security
              </Link>
              <Link to="/cloud#cl-finops" className="chip">
                FinOps
              </Link>
              <Link to="/cloud#cl-dr" className="chip">
                {"Backup & DR"}
              </Link>
            </div>
            <Link to="/cloud" className="sr-go" aria-label={"Open Cloud & Modernisation"}>
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="svcrow">
            <Link to="/applications" className="sr-main">
              <span className="sr-ic">
                <Icon name="apps" />
              </span>
              <span>
                <b>Enterprise Applications</b>
                <small>
                  ERP, SAP, Oracle, CRM, PLM, MES, custom software, application integration, testing and application
                  support.
                </small>
              </span>
            </Link>
            <div className="sr-subs">
              <Link to="/applications#ap-erp" className="chip">
                ERP: SAP, Oracle, D365
              </Link>
              <Link to="/applications#ap-crm" className="chip">
                CRM
              </Link>
              <Link to="/applications#ap-plm" className="chip">
                {"PLM & MES"}
              </Link>
              <Link to="/applications#ap-custom" className="chip">
                {"Custom, integration & testing"}
              </Link>
              <Link to="/managed-services#ms-ams" className="chip">
                Application support
              </Link>
            </div>
            <Link to="/applications" className="sr-go" aria-label="Open Enterprise Applications">
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="svcrow">
            <Link to="/data-analytics" className="sr-main">
              <span className="sr-ic">
                <Icon name="chart" />
              </span>
              <span>
                <b>{"Data, Analytics & AI"}</b>
                <small>
                  Data engineering, data platforms, governance, BI dashboards, advanced analytics, GenAI, AI agents and
                  MLOps.
                </small>
              </span>
            </Link>
            <div className="sr-subs">
              <Link to="/data-analytics#da-platforms" className="chip">
                Data platforms
              </Link>
              <Link to="/data-analytics#da-dashboards" className="chip">
                BI dashboards
              </Link>
              <Link to="/data-analytics#da-advanced" className="chip">
                Advanced analytics
              </Link>
              <Link to="/ai-automation#ai-genai" className="chip">
                {"GenAI & AI agents"}
              </Link>
              <Link to="/ai-automation#ai-ml" className="chip">
                {"Machine learning & MLOps"}
              </Link>
            </div>
            <Link to="/data-analytics" className="sr-go" aria-label={"Open Data, Analytics & AI"}>
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="svcrow">
            <Link to="/digital-workplace" className="sr-main">
              <span className="sr-ic">
                <Icon name="laptop" />
              </span>
              <span>
                <b>{"Digital Workplace & Automation"}</b>
                <small>
                  End-user computing, collaboration, Microsoft 365, device management, workflow automation, RPA and IT
                  service automation.
                </small>
              </span>
            </Link>
            <div className="sr-subs">
              <Link to="/digital-workplace#dw-euc" className="chip">
                End-user computing
              </Link>
              <Link to="/digital-workplace#dw-m365" className="chip">
                Microsoft 365
              </Link>
              <Link to="/digital-workplace#dw-mdm" className="chip">
                Device management
              </Link>
              <Link to="/digital-workplace#dw-auto" className="chip">
                {"Workflow & RPA"}
              </Link>
              <Link to="/digital-workplace#dw-itsa" className="chip">
                IT service automation
              </Link>
            </div>
            <Link to="/digital-workplace" className="sr-go" aria-label={"Open Digital Workplace & Automation"}>
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="svcrow">
            <Link to="/managed-services" className="sr-main">
              <span className="sr-ic">
                <Icon name="headset" />
              </span>
              <span>
                <b>Managed IT Services</b>
                <small>
                  Managed infrastructure, NOC, SOC, cloud operations, application support, service desk, monitoring and
                  SLA-based operations.
                </small>
              </span>
            </Link>
            <div className="sr-subs">
              <Link to="/managed-services#ms-noc" className="chip">
                Managed NOC
              </Link>
              <Link to="/managed-services#ms-soc" className="chip">
                Managed SOC
              </Link>
              <Link to="/managed-services#ms-cloud" className="chip">
                Cloud operations
              </Link>
              <Link to="/managed-services#ms-desk" className="chip">
                Service desk
              </Link>
              <Link to="/managed-services#ms-ams" className="chip">
                Application support
              </Link>
            </div>
            <Link to="/managed-services" className="sr-go" aria-label="Open Managed IT Services">
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
