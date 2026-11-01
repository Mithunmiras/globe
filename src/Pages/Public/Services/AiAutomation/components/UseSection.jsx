import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function UseSection() {
  return (
    <section className="dx ice" id="ai-use">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Use cases</span>
          <h2 className="dx-h">
            Ready-to-pilot <span>use cases</span>
          </h2>
          <p className="dx-lede">Each starts as a scoped pilot on real data, with success measures agreed up front.</p>
        </div>
        <div className="ai-uc" data-reveal="">
          <div style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="factory" />
            </span>
            <div>
              <b>Visual inspection</b>
              <small>Manufacturing</small>
              <span>Edge vision linked to MES</span>
            </div>
          </div>
          <div style={{ "--i": "1" }}>
            <span className="dx-ic c-gold">
              <Icon name="gear" />
            </span>
            <div>
              <b>Predictive maintenance</b>
              <small>Manufacturing</small>
              <span>IoT, ML, ERP work orders</span>
            </div>
          </div>
          <div style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="card" />
            </span>
            <div>
              <b>Invoice processing</b>
              <small>Finance</small>
              <span>Document AI, RPA, ERP</span>
            </div>
          </div>
          <div style={{ "--i": "3" }}>
            <span className="dx-ic c-gold">
              <Icon name="mail" />
            </span>
            <div>
              <b>Quotes from emails</b>
              <small>Sales</small>
              <span>AI agent with CRM and ERP</span>
            </div>
          </div>
          <div style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="book" />
            </span>
            <div>
              <b>Search drawings, SOPs</b>
              <small>Engineering</small>
              <span>Knowledge assistant on PLM</span>
            </div>
          </div>
          <div style={{ "--i": "5" }}>
            <span className="dx-ic c-gold">
              <Icon name="users" />
            </span>
            <div>
              <b>Policy helpdesk</b>
              <small>HR</small>
              <span>GenAI assistant in Teams</span>
            </div>
          </div>
          <div style={{ "--i": "6" }}>
            <span className="dx-ic c-blue">
              <Icon name="server" />
            </span>
            <div>
              <b>Ticket triage, auto-fix</b>
              <small>IT</small>
              <span>AIOps with runbooks</span>
            </div>
          </div>
          <Link to="/contact" className="ai-uc-cta">
            <Icon name="target" />
            <b>Find your first AI win</b>
            <span>AI readiness workshop</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
