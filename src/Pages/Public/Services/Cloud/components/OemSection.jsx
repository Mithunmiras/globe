import React from "react";
import Icon from "../../../../../Component/Icon";

export default function OemSection() {
  return (
    <section className="dx ice" id="cl-oem">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">OEM ecosystem</span>
          <h2 className="dx-h">
            Global and Indian <span>cloud partners</span>
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
                <small>Hyperscalers</small>
                <b>AWS, Azure, Google Cloud, Oracle</b>
              </div>
              <div>
                <small>Hybrid platforms</small>
                <b>VMware, Nutanix, Red Hat OpenShift</b>
              </div>
              <div>
                <small>Cloud security</small>
                <b>Zscaler, Palo Alto Prisma, Wiz</b>
              </div>
              <div>
                <small>{"Data & ops"}</small>
                <b>Snowflake, Databricks, Datadog</b>
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
                <small>Sovereign cloud</small>
                <b>Yotta, CtrlS, Sify, Tata Communications</b>
              </div>
              <div>
                <small>{"GPU & AI cloud"}</small>
                <b>E2E Networks, Yotta Shakti, NxtGen</b>
              </div>
              <div>
                <small>Telco cloud</small>
                <b>Airtel, Jio</b>
              </div>
              <div>
                <small>Government cloud</small>
                <b>ESDS, RailTel</b>
              </div>
            </div>
          </div>
        </div>
        <div className="dx-callout">
          <Icon name="check" />
          <span>
            <b>Data residency:</b> Indian providers keep data in India for DPDP, RBI and SEBI needs.
          </span>
        </div>
      </div>
    </section>
  );
}
