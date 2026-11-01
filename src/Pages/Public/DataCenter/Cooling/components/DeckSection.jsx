import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DeckSection() {
  return (
    <section className="dx" id="dcs-cooling-deck">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Capability deck</span>
          <h2 className="dx-h">
            Cooling systems <span>we deliver</span>
          </h2>
          <p className="dx-lede">From the DGC Data Center capability deck.</p>
        </div>
        <div className="dx-tabs" data-tabs="">
          <div className="dx-tpanes">
            <div role="tabpanel" id="inf-cooling" aria-labelledby="inf-cooling-t" className="dx-tp">
              <div className="dx-ip">
                <div className="dx-ip-copy">
                  <span className="dx-k">Thermal management</span>
                  <h3>Cooling Systems</h3>
                  <p className="dx-lede">
                    Precision cooling with N+1 redundancy — from containment to liquid cooling for next-generation AI
                    density.
                  </p>
                  <h4 className="dx-h4">Air</h4>
                  <div className="dx-fgrid">
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="snow" />
                      </span>
                      <div>
                        <b>CRAC / CRAH Units</b>
                        <span>{"Precision air handling with humidity & temperature control"}</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="layers" />
                      </span>
                      <div>
                        <b>Hot / Cold Aisle Containment</b>
                        <span>Segregated airflow eliminates mixing, raises efficiency</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="server" />
                      </span>
                      <div>
                        <b>In-Row Cooling</b>
                        <span>Cooling brought closer to high-density rows</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="dx-h4">{"Liquid & economiser"}</h4>
                  <div className="dx-fgrid">
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="drop" />
                      </span>
                      <div>
                        <b>Direct-to-Chip Liquid</b>
                        <span>Coolant loops to CPU/GPU cold plates for 40–130+ kW racks</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="thermo" />
                      </span>
                      <div>
                        <b>Immersion Cooling</b>
                        <span>Dielectric fluid submersion for extreme AI/HPC density</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="leaf" />
                      </span>
                      <div>
                        <b>Free / Economizer Cooling</b>
                        <span>{"Outside-air & adiabatic cooling cuts energy use"}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dx-ip-art">
                  <figure className="dx-fig ">
                    <img src="/images/img-101-85107ec5e3.jpg" alt="Cooling system cutaway" loading="lazy" />
                  </figure>
                </div>
              </div>
              <div className="dx-metrics">
                <div className="dx-m">
                  <span>
                    <Icon name="server" />
                  </span>
                  <b>N+1</b>
                  <small>Cooling Redundancy</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="leaf" />
                  </span>
                  <b>PUE Target</b>
                  <small>1.2 – 1.5</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="chart" />
                  </span>
                  <b data-n="">Up to 130+</b>
                  <small>kW/Rack Liquid-Ready</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="eye" />
                  </span>
                  <b>24x7</b>
                  <small>Environmental Monitoring</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
