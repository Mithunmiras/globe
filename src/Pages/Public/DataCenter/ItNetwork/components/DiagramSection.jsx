import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-it-network-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            Layers of the <span>data hall</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="ix-layers" data-reveal="">
            <div className="ix-layer" style={{ "--i": "0" }}>
              <span className="ix-lic">
                <Icon name="globe" />
              </span>
              <b>{"Carriers & meet-me room"}</b>
              <span>Transit, peering, cross-connects</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "1" }}>
              <span className="ix-lic">
                <Icon name="net" />
              </span>
              <b>Network fabric</b>
              <span>Core, spine-leaf, security, out-of-band</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "2" }}>
              <span className="ix-lic">
                <Icon name="cpu" />
              </span>
              <b>Compute</b>
              <span>Enterprise servers, GPU/HPC</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "3" }}>
              <span className="ix-lic">
                <Icon name="db" />
              </span>
              <b>{"Storage & backup"}</b>
              <span>SAN, NAS, object, immutable copies</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "4" }}>
              <span className="ix-lic">
                <Icon name="cloud" />
              </span>
              <b>Platforms</b>
              <span>Virtualisation, containers, operating systems</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "5" }}>
              <span className="ix-lic">
                <Icon name="server" />
              </span>
              <b>{"Racks & cabling"}</b>
              <span>Rack power, cooling interface, sensors, inventory</span>
              <i className="ix-pulse" />
            </div>
          </div>
          <figcaption>Illustrative layers; relationships matter more than any single product.</figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="trend" />
            </span>
            <b>Growth</b>
            <span>Space, power and ports reserved</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>Failure domains</b>
            <span>Faults contained, not spread</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="net" />
            </span>
            <b>Diversity</b>
            <span>Separate paths and carriers</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="doc" />
            </span>
            <b>Labelling</b>
            <span>Every cable and asset traceable</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="gear" />
            </span>
            <b>Lifecycle</b>
            <span>Firmware, support and refresh planned</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="lock" />
            </span>
            <b>Secure management</b>
            <span>Out-of-band and least privilege</span>
          </div>
        </div>
      </div>
    </section>
  );
}
