import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="da-why">
      <div className="wrap">
        <div className="dx-why">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Why Digital Globe Consultancy</span>
              <h2 className="dx-h">
                Numbers everyone trusts, <span>on every screen that matters.</span>
              </h2>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Build your first dashboard
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="dx-wgrid">
            <div className="dx-w lead">
              <span className="dx-ic c-gold">
                <Icon name="erp" />
              </span>
              <b>We know the source systems</b>
              <span>ERP, CRM, MES and PLM data understood, not just extracted</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="compass" />
              </span>
              <b>Tool-neutral</b>
              <span>Power BI, Tableau, Qlik, Zoho or open source — your choice</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="shield" />
              </span>
              <b>Governed by design</b>
              <span>One KPI definition, secure access, quality checks</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="spark" />
              </span>
              <b>Ready for AI</b>
              <span>{"The same data foundation powers forecasts and AI Q&A"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
