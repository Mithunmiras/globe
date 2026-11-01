import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="dcs-it-network-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/data-center">Data Center</Link>
          <Icon name="arrow" />
          <span>{"IT & Network"}</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">{"IT & Network"}</span>
              <h2 className="dx-h">
                White space, compute <span>and connectivity</span>
              </h2>
              <p className="dx-lede">
                Racks, servers, storage, platforms and the network fabric inside the facility, plus carrier connectivity
                to the outside world.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>Integrator</span>
              <span>Design coordinator</span>
              <span>Managed service provider</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Customer challenges</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Racks and cabling that limit growth</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Hardware lifecycle and firmware sprawl</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>East-west bandwidth for modern workloads</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Single-carrier dependency</p>
              </div>
              <div style={{ "--i": "4" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>No out-of-band path for recovery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
