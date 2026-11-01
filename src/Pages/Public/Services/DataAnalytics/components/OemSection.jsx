import React from "react";
import Icon from "../../../../../Component/Icon";

export default function OemSection() {
  return (
    <section className="dx ice" id="da-oem">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">OEM ecosystem</span>
          <h2 className="dx-h">
            Global and Indian <span>analytics OEMs</span>
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
                <small>BI tools</small>
                <b>Power BI, Tableau, Qlik, Looker</b>
              </div>
              <div>
                <small>Data platforms</small>
                <b>Microsoft Fabric, Databricks, Snowflake</b>
              </div>
              <div>
                <small>Enterprise analytics</small>
                <b>SAP Analytics Cloud, Oracle Analytics</b>
              </div>
              <div>
                <small>Data integration</small>
                <b>Informatica, Fivetran</b>
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
                <small>BI tools</small>
                <b>Zoho Analytics, Helical Insight</b>
              </div>
              <div>
                <small>Data pipelines</small>
                <b>Hevo Data</b>
              </div>
              <div>
                <small>Data catalog</small>
                <b>Atlan</b>
              </div>
              <div>
                <small>AI analytics</small>
                <b>Fractal</b>
              </div>
            </div>
          </div>
        </div>
        <div className="dx-callout">
          <Icon name="check" />
          <span>
            <b>Right-sized:</b> Indian tools give SMEs fast, affordable dashboards.
          </span>
        </div>
      </div>
    </section>
  );
}
