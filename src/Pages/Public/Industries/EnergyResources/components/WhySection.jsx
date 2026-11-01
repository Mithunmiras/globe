import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="ins-re-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/industries">Industries</Link>
          <Icon name="arrow" />
          <span>{"Resources & Energy"}</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Sector overview</span>
              <h2 className="dx-h">
                Resources <em>{"& Energy"}</em>
              </h2>
              <p className="dx-lede">
                Energy, utilities, mining and agriculture operate across remote and hazardous sites where connectivity
                is hard and downtime is costly. We connect, secure and instrument those operations so decisions are made
                on live data.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>{"Oil & gas operators"}</span>
              <span>{"Power generation & distribution"}</span>
              <span>Renewables developers</span>
              <span>Mining companies</span>
              <span>{"Agri-businesses & agri-tech"}</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Challenges we solve</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Remote sites with limited, unreliable connectivity</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>SCADA and control systems now exposed to cyber risk</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Asset data trapped in field devices and spreadsheets</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Growing sustainability and emissions reporting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
