import React from "react";
import Icon from "../../../../../Component/Icon";

export default function OemSection() {
  return (
    <section className="dx ice" id="ap-oem">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">OEM ecosystem</span>
          <h2 className="dx-h">
            Global and Indian <span>application OEMs</span>
          </h2>
        </div>
        <div className="dx-oem" data-reveal="">
          <div className="dx-oem-c">
            <h4>
              <Icon name="globe" />
              Global OEMs
            </h4>
            <div className="dx-oem-g">
              <div>
                <small>ERP</small>
                <b>SAP, Oracle, Microsoft</b>
              </div>
              <div>
                <small>CRM</small>
                <b>Salesforce, Microsoft, HubSpot</b>
              </div>
              <div>
                <small>{"PLM & MES"}</small>
                <b>Dassault Systèmes, Siemens, PTC</b>
              </div>
              <div>
                <small>{"CAD & CAE"}</small>
                <b>Autodesk, Ansys (Synopsys), Hexagon</b>
              </div>
            </div>
          </div>
          <div className="dx-oem-c in">
            <h4>
              <Icon name="pin" />
              {"Indian & India-founded"}
            </h4>
            <div className="dx-oem-g">
              <div>
                <small>{"ERP & accounting"}</small>
                <b>Tally, Ramco Systems, Zoho Books</b>
              </div>
              <div>
                <small>CRM</small>
                <b>Zoho CRM, Freshworks, LeadSquared</b>
              </div>
              <div>
                <small>Low-code</small>
                <b>Zoho Creator, Kissflow</b>
              </div>
              <div>
                <small>{"HR & payroll"}</small>
                <b>Darwinbox, Keka, greytHR</b>
              </div>
            </div>
          </div>
        </div>
        <div className="dx-callout">
          <Icon name="check" />
          <span>
            <b>Best of both:</b> global suites for depth, Indian SaaS for value and local compliance.
          </span>
        </div>
      </div>
    </section>
  );
}
