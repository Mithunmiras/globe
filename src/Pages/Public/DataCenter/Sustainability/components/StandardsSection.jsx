import React from "react";
import Icon from "../../../../../Component/Icon";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-sustainability-std">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">{"Standards & guidance"}</span>
          <h2 className="dx-h">
            Technologies, standards <span>and pathways</span>
          </h2>
          <p className="dx-lede">
            Referenced as applicable guidance. Certification status is stated only where verified for a specific scope.
          </p>
        </div>
        <div className="dcs-std" data-reveal="">
          <div style={{ "--i": "0" }}>
            <em>Engineering guidance</em>
            <b>ASHRAE Standard 90.4</b>
            <p>Energy standard for data centers, referenced where relevant.</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Management system reference</em>
            <b>ISO 50001</b>
            <p>Energy management; displayed only where a valid certificate is held.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Management system reference</em>
            <b>ISO 14001</b>
            <p>Environmental management; displayed only where held.</p>
          </div>
          <div style={{ "--i": "3" }}>
            <em>Green building</em>
            <b>LEED</b>
            <p>Project certification where eligible; rating system and status stated accurately.</p>
          </div>
        </div>
        <div className="dcs-note">
          <Icon name="doc" />
          <div>
            <b>Measurement discipline</b>
            <p>
              PUE and WUE are reported with calculation boundaries, time period and data quality. A design target is
              never presented as an achieved operational result.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
