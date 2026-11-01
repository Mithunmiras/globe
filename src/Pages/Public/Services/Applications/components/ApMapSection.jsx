import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function ApMapSection() {
  return (
    <section className="dx " id="ap-map">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Capability map</span>
          <h2 className="dx-h">
            Five application families, <span>one partner</span>
          </h2>
          <p className="dx-lede">From the design office to the boardroom — implemented, integrated and supported.</p>
        </div>
        <div className="ix-doms n5" data-reveal="">
          <Link to="/applications#ap-erp" className="ix-dom" style={{ "--i": "0" }}>
            <span className="ix-dom-h">
              <Icon name="erp" />
              <b>ERP</b>
            </span>
            <ul>
              <li>S/4HANA · Business One</li>
              <li>Oracle · NetSuite</li>
              <li>Dynamics 365</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/applications#ap-crm" className="ix-dom" style={{ "--i": "1" }}>
            <span className="ix-dom-h">
              <Icon name="users" />
              <b>CRM</b>
            </span>
            <ul>
              <li>Salesforce · Zoho CRM</li>
              <li>Service · Marketing</li>
              <li>Portals</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/applications#ap-plm" className="ix-dom" style={{ "--i": "2" }}>
            <span className="ix-dom-h">
              <Icon name="layers" />
              <b>{"PLM & MES"}</b>
            </span>
            <ul>
              <li>Dassault · Teamcenter</li>
              <li>Opcenter · DELMIA</li>
              <li>IT/OT</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/applications#ap-design" className="ix-dom" style={{ "--i": "3" }}>
            <span className="ix-dom-h">
              <Icon name="cpu" />
              <b>Design</b>
            </span>
            <ul>
              <li>CAD · Simulation · CAM</li>
              <li>Licences</li>
              <li>Hardware</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/applications#ap-custom" className="ix-dom" style={{ "--i": "4" }}>
            <span className="ix-dom-h">
              <Icon name="code" />
              <b>Custom</b>
            </span>
            <ul>
              <li>Web apps · Mobile</li>
              <li>Low-code · APIs</li>
              <li>AI apps</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
        <div className="ap-prom" data-reveal="">
          <div style={{ "--i": "0" }}>
            <Icon name="layers" />
            <span>ERP, CRM, PLM, MES linked</span>
          </div>
          <div style={{ "--i": "1" }}>
            <Icon name="compass" />
            <span>Vendor-neutral</span>
          </div>
          <div style={{ "--i": "2" }}>
            <Icon name="factory" />
            <span>Manufacturing know-how</span>
          </div>
          <div style={{ "--i": "3" }}>
            <Icon name="server" />
            <span>Apps plus infrastructure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
