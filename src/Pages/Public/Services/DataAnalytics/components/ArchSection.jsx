import React from "react";
import Icon from "../../../../../Component/Icon";

export default function ArchSection() {
  return (
    <section className="dx " id="da-arch">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Data stack · Architecture</span>
          <h2 className="dx-h">
            The modern <span>analytics architecture</span>
          </h2>
        </div>
        <ol className="cx-pipe gl" data-reveal="">
          <li style={{ "--i": "0" }}>
            <Icon name="erp" />
            <b>Sources</b>
            <span>ERP, CRM, MES, files</span>
          </li>
          <li style={{ "--i": "1" }}>
            <Icon name="arrow" />
            <b>Ingest</b>
            <span>Batch and streaming</span>
          </li>
          <li style={{ "--i": "2" }}>
            <Icon name="db" />
            <b>Store</b>
            <span>Lakehouse layers</span>
          </li>
          <li style={{ "--i": "3" }}>
            <Icon name="layers" />
            <b>Model</b>
            <span>Semantic layer, KPIs</span>
          </li>
          <li style={{ "--i": "4" }}>
            <Icon name="chart" />
            <b>Consume</b>
            <span>Dashboards, AI, apps</span>
          </li>
        </ol>
        <div className="da-medal" data-reveal="">
          <div className="br" style={{ "--i": "0" }}>
            <b>Bronze</b>
            <span>Raw data, exactly as received from each source</span>
          </div>
          <div className="sv" style={{ "--i": "1" }}>
            <b>Silver</b>
            <span>Cleaned, matched and joined across systems</span>
          </div>
          <div className="gd" style={{ "--i": "2" }}>
            <b>Gold</b>
            <span>Business-ready tables and certified KPIs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
