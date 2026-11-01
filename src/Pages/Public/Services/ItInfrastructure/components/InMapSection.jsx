import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function InMapSection() {
  return (
    <section className="dx " id="in-map">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Capability map</span>
          <h2 className="dx-h">
            One partner, <span>four infrastructure domains</span>
          </h2>
        </div>
        <div className="ix-doms" data-reveal="">
          <Link to="/it-infrastructure#in-server" className="ix-dom" style={{ "--i": "0" }}>
            <span className="ix-dom-h">
              <Icon name="server" />
              <b>Data center</b>
            </span>
            <ul>
              <li>{"Servers & HCI"}</li>
              <li>{"Storage & SAN"}</li>
              <li>HPC clusters</li>
              <li>AI / GPU servers</li>
              <li>Virtualization</li>
              <li>{"Backup & DR"}</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/it-infrastructure#in-network" className="ix-dom" style={{ "--i": "1" }}>
            <span className="ix-dom-h">
              <Icon name="net" />
              <b>Network</b>
            </span>
            <ul>
              <li>Core switching</li>
              <li>Edge switching</li>
              <li>Enterprise Wi-Fi</li>
              <li>{"SDN & SD-WAN"}</li>
              <li>Load balancers</li>
              <li>Cabling</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/it-infrastructure#in-security" className="ix-dom" style={{ "--i": "2" }}>
            <span className="ix-dom-h">
              <Icon name="shield" />
              <b>Security</b>
            </span>
            <ul>
              <li>Firewalls</li>
              <li>{"WAF & API"}</li>
              <li>{"ZTNA & SASE"}</li>
              <li>Access control</li>
              <li>Segmentation</li>
              <li>DDoS defence</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/it-infrastructure#in-collab" className="ix-dom" style={{ "--i": "3" }}>
            <span className="ix-dom-h">
              <Icon name="video" />
              <b>Workplace</b>
            </span>
            <ul>
              <li>Teams</li>
              <li>Google Workspace</li>
              <li>{"Webex & Zoom"}</li>
              <li>Video rooms</li>
              <li>Boardroom AV</li>
              <li>{"BYOD & BYOM"}</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
}
