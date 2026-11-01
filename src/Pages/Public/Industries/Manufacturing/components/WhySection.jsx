import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="ins-pm-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/industries">Industries</Link>
          <Icon name="arrow" />
          <span>{"Products & Manufacturing"}</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Sector overview</span>
              <h2 className="dx-h">
                Products <em>{"& Manufacturing"}</em>
              </h2>
              <p className="dx-lede">
                From the shop floor to the store shelf, manufacturers and retailers need plants, warehouses and channels
                that are connected, secure and data-driven. We bring IT and OT together so production and sales run on
                reliable information.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>{"OEMs & component makers"}</span>
              <span>{"Process & discrete manufacturers"}</span>
              <span>FMCG brands</span>
              <span>{"Retailers & e-commerce"}</span>
              <span>{"Electronics & semiconductor firms"}</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Challenges we solve</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Disconnected plant, ERP and supply-chain systems</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>OT networks exposed as plants go digital</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Unplanned downtime and quality escapes</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Peak-season demand that legacy platforms cannot absorb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
