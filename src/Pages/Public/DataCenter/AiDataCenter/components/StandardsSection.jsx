import React from "react";
import Icon from "../../../../../Component/Icon";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-ai-std">
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
            <b>ASHRAE liquid-cooling guidance</b>
            <p>Referenced for liquid-cooled IT environments; manufacturer requirements take priority.</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Technical standard</em>
            <b>ANSI/BICSI 002</b>
            <p>Design best practices, including high-density spaces.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Technical standard</em>
            <b>ISO/IEC 22237 series</b>
            <p>Facility and infrastructure guidance.</p>
          </div>
        </div>
        <div className="dcs-note">
          <Icon name="doc" />
          <div>
            <b>No fixed promises</b>
            <p>
              Rack density, PUE and cooling outcomes are not promised without a defined design, operating conditions and
              evidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
