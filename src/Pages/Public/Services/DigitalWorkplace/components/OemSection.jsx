import React from "react";
import Icon from "../../../../../Component/Icon";

export default function OemSection() {
  return (
    <section className="dx ice" id="dw-oem">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">OEM ecosystem</span>
          <h2 className="dx-h">
            Global and Indian <span>workplace partners</span>
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
                <small>Devices</small>
                <b>Dell, HP, Lenovo, Apple</b>
              </div>
              <div>
                <small>Productivity</small>
                <b>Microsoft 365, Google Workspace</b>
              </div>
              <div>
                <small>{"Rooms & AV"}</small>
                <b>Cisco, Poly, Logitech, Yealink</b>
              </div>
              <div>
                <small>Automation</small>
                <b>UiPath, ServiceNow, Power Automate</b>
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
                <small>Workplace suite</small>
                <b>Zoho Workplace</b>
              </div>
              <div>
                <small>Device management</small>
                <b>Hexnode, ManageEngine</b>
              </div>
              <div>
                <small>Workflow</small>
                <b>Kissflow, Zoho Creator</b>
              </div>
              <div>
                <small>ITSM</small>
                <b>Freshservice</b>
              </div>
            </div>
          </div>
        </div>
        <div className="dx-callout">
          <Icon name="check" />
          <span>
            <b>Right-sized:</b> enterprise platforms or Indian SaaS, chosen for your scale and budget.
          </span>
        </div>
      </div>
    </section>
  );
}
