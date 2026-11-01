import React from "react";
import Icon from "../../../../../Component/Icon";

export default function MapSection() {
  return (
    <section className="dx svmap-sec" id="digital-workplace-map">
      <div className="wrap">
        <div className="svmap">
          <div className="svmap-tx">
            <div className="dx-head">
              <span className="dx-pill">At a glance</span>
              <h2 className="dx-h">
                {"Digital Workplace &"} <span>Automation</span>
              </h2>
              <p className="dx-lede">Secure, simple tools for hybrid teams, managed from one console.</p>
            </div>
            <ul className="svmap-list">
              <li style={{ "--i": "0" }}>
                <Icon name="apps" />
                <span>Microsoft 365</span>
              </li>
              <li style={{ "--i": "1" }}>
                <Icon name="laptop" />
                <span>Endpoint management</span>
              </li>
              <li style={{ "--i": "2" }}>
                <Icon name="users" />
                <span>Collaboration</span>
              </li>
              <li style={{ "--i": "3" }}>
                <Icon name="gear" />
                <span>Workflow automation</span>
              </li>
              <li style={{ "--i": "4" }}>
                <Icon name="key" />
                <span>Identity</span>
              </li>
              <li style={{ "--i": "5" }}>
                <Icon name="headset" />
                <span>Service desk</span>
              </li>
            </ul>
          </div>
          <div className="nv" aria-hidden="true">
            <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
              <polygon
                className="nv-poly"
                points="64.1,11.5 85.3,20.5 90.4,42.9 93.2,65.8 76.3,81.4 57.9,95.3 35.9,88.5 14.7,79.5 9.6,57.1 6.8,34.2 23.7,18.6 42.1,4.7"
              />
              <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
              <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
              <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
              </circle>
              <line className="nv-ln" x1="50" y1="50" x2="90.4" y2="42.9" style={{ "--i": "1" }} />
              <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L90.4,42.9" />
              </circle>
              <line className="nv-ln" x1="50" y1="50" x2="76.3" y2="81.4" style={{ "--i": "2" }} />
              <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L76.3,81.4" />
              </circle>
              <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "3" }} />
              <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
              </circle>
              <line className="nv-ln" x1="50" y1="50" x2="9.6" y2="57.1" style={{ "--i": "4" }} />
              <circle className="nv-pk" r="1.1" style={{ "--i": "4" }}>
                <animateMotion dur="4.00s" repeatCount="indefinite" path="M50,50 L9.6,57.1" />
              </circle>
              <line className="nv-ln" x1="50" y1="50" x2="23.7" y2="18.6" style={{ "--i": "5" }} />
              <circle className="nv-pk" r="1.1" style={{ "--i": "5" }}>
                <animateMotion dur="4.35s" repeatCount="indefinite" path="M50,50 L23.7,18.6" />
              </circle>
              <circle className="nv-nd" cx="85.3" cy="20.5" r="1.6" style={{ "--i": "0" }} />
              <circle className="nv-nd f" cx="93.2" cy="65.8" r="1.6" style={{ "--i": "1" }} />
              <circle className="nv-nd" cx="57.9" cy="95.3" r="1.6" style={{ "--i": "2" }} />
              <circle className="nv-nd f" cx="14.7" cy="79.5" r="1.6" style={{ "--i": "3" }} />
              <circle className="nv-nd" cx="6.8" cy="34.2" r="1.6" style={{ "--i": "4" }} />
              <circle className="nv-nd f" cx="42.1" cy="4.7" r="1.6" style={{ "--i": "5" }} />
            </svg>
            <span className="nv-core">
              <Icon name="laptop" />
            </span>
            <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
              <Icon name="apps" />
              Microsoft 365
            </span>
            <span className="nv-chip" style={{ left: "90.4%", top: "42.9%", "--i": "1", "--tx": "-88%" }}>
              <Icon name="laptop" />
              Endpoint management
            </span>
            <span className="nv-chip" style={{ left: "76.3%", top: "81.4%", "--i": "2", "--tx": "-88%" }}>
              <Icon name="users" />
              Collaboration
            </span>
            <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "3", "--tx": "-50%" }}>
              <Icon name="gear" />
              Workflow automation
            </span>
            <span className="nv-chip" style={{ left: "9.6%", top: "57.1%", "--i": "4", "--tx": "-12%" }}>
              <Icon name="key" />
              Identity
            </span>
            <span className="nv-chip" style={{ left: "23.7%", top: "18.6%", "--i": "5", "--tx": "-12%" }}>
              <Icon name="headset" />
              Service desk
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
