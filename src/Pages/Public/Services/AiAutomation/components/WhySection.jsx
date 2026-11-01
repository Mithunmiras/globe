import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="ai-why">
      <div className="wrap">
        <div className="dx-why">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Why Digital Globe Consultancy</span>
              <h2 className="dx-h">
                AI connected to the systems <span>your business runs on.</span>
              </h2>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Find your first AI win
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="dx-wgrid">
            <div className="dx-w lead">
              <span className="dx-ic c-gold">
                <Icon name="layers" />
              </span>
              <b>Integrated, not isolated</b>
              <span>Wired into ERP, CRM, PLM, MES and Microsoft 365</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="compass" />
              </span>
              <b>Model-neutral</b>
              <span>Best model per task, swappable later</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="shield" />
              </span>
              <b>Responsible by design</b>
              <span>Privacy, guardrails, DPDP from day one</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="server" />
              </span>
              <b>Full stack</b>
              <span>Data, GPUs, cloud and security from one team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
