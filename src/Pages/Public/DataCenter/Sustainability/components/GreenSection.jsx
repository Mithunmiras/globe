import React from "react";
import Icon from "../../../../../Component/Icon";

export default function GreenSection() {
  return (
    <section className="dx ice" id="dc-green">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Sustainability for a brighter tomorrow</span>
          <h2 className="dx-h">
            Sustainable Data Centers <span>for a Better Tomorrow</span>
          </h2>
          <p className="dx-lede">High performance. Lower footprint. A cleaner, greener digital future.</p>
        </div>
        <div className="dx-green">
          <div className="dx-gart">
            <img src="/images/img-108-754086f471.jpg" alt="Green data center building" loading="lazy" />
            <div className="dx-gstats">
              <div>
                <b data-n="">Up to 40%</b>
                <small>Lower Energy Usage</small>
              </div>
              <div>
                <b data-n="">Up to 60%</b>
                <small>Lower Carbon Emissions</small>
              </div>
              <div>
                <b data-n="">Up to 50%</b>
                <small>Less Water Consumption</small>
              </div>
              <div>
                <b data-n="">100%</b>
                <small>Renewable Energy Ready</small>
              </div>
            </div>
          </div>
          <div className="dx-glist">
            <div>
              <Icon name="leaf" />
              <p>
                <b>Energy Efficiency</b>
                <span>Optimized cooling, intelligent power management and low PUE.</span>
              </p>
            </div>
            <div>
              <Icon name="spark" />
              <p>
                <b>Renewable Energy Integration</b>
                <span>Designed for clean energy sources and future-ready operations.</span>
              </p>
            </div>
            <div>
              <Icon name="drop" />
              <p>
                <b>Resource Conservation</b>
                <span>Efficient water usage and closed-loop cooling systems.</span>
              </p>
            </div>
            <div>
              <Icon name="leaf" />
              <p>
                <b>Lower Carbon Footprint</b>
                <span>Sustainable design, materials and operations.</span>
              </p>
            </div>
            <div>
              <Icon name="building" />
              <p>
                <b>Green Building Standards</b>
                <span>Aligned with global sustainability certifications.</span>
              </p>
            </div>
            <div>
              <Icon name="users" />
              <p>
                <b>{"Community & ESG Impact"}</b>
                <span>Driving responsible growth for a better tomorrow.</span>
              </p>
            </div>
            <div>
              <Icon name="gear" />
              <p>
                <b>Lifecycle Optimization</b>
                <span>Maximized equipment life and circular economy practices.</span>
              </p>
            </div>
            <div>
              <Icon name="globe" />
              <p>
                <b>A Cleaner, Healthier Planet</b>
                <span>Reliable digital infrastructure for generations to come.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
