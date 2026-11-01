import React from "react";
import Icon from "../../../../../Component/Icon";

export default function OemSection() {
  return (
    <section className="dx ice" id="ms-oem">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">OEM ecosystem</span>
          <h2 className="dx-h">
            Platforms we <span>operate with</span>
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
                <small>ITSM</small>
                <b>ServiceNow, Jira Service Management</b>
              </div>
              <div>
                <small>Monitoring</small>
                <b>Datadog, SolarWinds, Zabbix</b>
              </div>
              <div>
                <small>Security</small>
                <b>Microsoft Sentinel, Splunk, CrowdStrike</b>
              </div>
              <div>
                <small>Backup</small>
                <b>Veeam, Commvault, Rubrik</b>
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
                <small>{"ITSM & IT ops"}</small>
                <b>Freshservice, ManageEngine</b>
              </div>
              <div>
                <small>Endpoint</small>
                <b>Microsoft Intune, Hexnode</b>
              </div>
              <div>
                <small>Cloud</small>
                <b>Yotta, CtrlS, Sify, E2E Networks</b>
              </div>
              <div>
                <small>Collaboration</small>
                <b>Microsoft 365, Zoho Workplace</b>
              </div>
            </div>
          </div>
        </div>
        <div className="dx-callout">
          <Icon name="check" />
          <span>
            <b>Tool-neutral:</b> we run your existing tools or bring a ready platform.
          </span>
        </div>
      </div>
    </section>
  );
}
