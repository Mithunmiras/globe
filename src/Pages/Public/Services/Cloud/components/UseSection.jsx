import React from "react";
import Icon from "../../../../../Component/Icon";

export default function UseSection() {
  return (
    <section className="dx ice" id="cl-use">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Use cases</span>
          <h2 className="dx-h">
            Where the right cloud mix <span>pays off</span>
          </h2>
        </div>
        <div className="cx-cov" data-reveal="">
          <div className="b" style={{ "--i": "0" }}>
            <span>
              <Icon name="erp" />
              <b>SAP and ERP</b>
            </span>
            <p>S/4HANA on a hyperscaler; DR in a second Indian region</p>
          </div>
          <div className="g" style={{ "--i": "1" }}>
            <span>
              <Icon name="factory" />
              <b>Manufacturing</b>
            </span>
            <p>MES at the plant; PLM and IoT analytics in cloud</p>
          </div>
          <div className="o" style={{ "--i": "2" }}>
            <span>
              <Icon name="bank" />
              <b>BFSI and government</b>
            </span>
            <p>Indian cloud for regulated data; hyperscaler for digital</p>
          </div>
          <div className="t" style={{ "--i": "3" }}>
            <span>
              <Icon name="ai" />
              <b>Private GenAI</b>
            </span>
            <p>Assistants on Indian GPU cloud, data in India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
