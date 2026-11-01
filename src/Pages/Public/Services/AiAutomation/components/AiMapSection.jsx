import React from "react";
import Icon from "../../../../../Component/Icon";

export default function AiMapSection() {
  return (
    <section className="dx " id="ai-map">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Capability map</span>
          <h2 className="dx-h">
            Eight capabilities, <span>strategy to operations</span>
          </h2>
          <p className="dx-lede">AI connected to your systems — integrated, not isolated.</p>
        </div>
        <div className="cx-ring-wrap" data-reveal="">
          <div className="cx-side">
            <div className="cx-node l" style={{ "--i": "0" }}>
              <span className="dx-ic c-blue">
                <Icon name="compass" />
              </span>
              <div>
                <b>AI strategy</b>
                <span>Readiness, use cases, roadmap</span>
              </div>
            </div>
            <div className="cx-node l" style={{ "--i": "1" }}>
              <span className="dx-ic c-gold">
                <Icon name="db" />
              </span>
              <div>
                <b>Data foundations</b>
                <span>Platforms, pipelines, quality</span>
              </div>
            </div>
            <div className="cx-node l" style={{ "--i": "2" }}>
              <span className="dx-ic c-blue">
                <Icon name="ai" />
              </span>
              <div>
                <b>Generative AI</b>
                <span>Knowledge assistants, copilots</span>
              </div>
            </div>
            <div className="cx-node l" style={{ "--i": "3" }}>
              <span className="dx-ic c-gold">
                <Icon name="spark" />
              </span>
              <div>
                <b>AI agents</b>
                <span>AI that completes tasks across systems</span>
              </div>
            </div>
          </div>
          <div className="cx-ring" aria-hidden="true">
            <i className="r1" />
            <i className="r2" />
            <i className="r3" />
            <span className="cx-core">
              <Icon name="spark" />
              <b>Digital Globe</b>
              <small>Connected AI</small>
            </span>
          </div>
          <div className="cx-side">
            <div className="cx-node r" style={{ "--i": "0" }}>
              <span className="dx-ic c-blue">
                <Icon name="chart" />
              </span>
              <div>
                <b>Predictive ML</b>
                <span>Forecasting, maintenance, quality</span>
              </div>
            </div>
            <div className="cx-node r" style={{ "--i": "1" }}>
              <span className="dx-ic c-gold">
                <Icon name="eye" />
              </span>
              <div>
                <b>Computer vision</b>
                <span>Inspection, safety, tracking</span>
              </div>
            </div>
            <div className="cx-node r" style={{ "--i": "2" }}>
              <span className="dx-ic c-blue">
                <Icon name="gear" />
              </span>
              <div>
                <b>Intelligent automation</b>
                <span>RPA, documents, workflows</span>
              </div>
            </div>
            <div className="cx-node r" style={{ "--i": "3" }}>
              <span className="dx-ic c-gold">
                <Icon name="shield" />
              </span>
              <div>
                <b>Responsible AI</b>
                <span>Governance, security, DPDP</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cx-sys">
          <Icon name="layers" />
          Wired into ERP, CRM, PLM, MES and Microsoft 365 · model-neutral · responsible by design · full stack: data,
          GPUs, cloud, security.
        </div>
      </div>
    </section>
  );
}
