import React from "react";

export default function CasesSection() {
  return (
    <section className="band" id="home-cases">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Case studies</div>
            <h2>
              Work we have <em>delivered</em>
            </h2>
          </div>
          <p>Client names are withheld at their request.</p>
        </div>
        <div className="cases-grid" data-cases="home" data-limit="6" data-dyn="">
          <article className="case-card">
            <div className="case-media">
              <img src="assets/img/compute.jpg" alt="" />
              <span className="case-tag">Case study</span>
            </div>
            <div className="case-body">
              <span className="meta">{"Defence & Aerospace Manufacturing"}</span>
              <h3>Data centre modernisation for a defence manufacturer</h3>
              <p className="sub" style={{ fontSize: "14px", color: "var(--muted)" }}>
                Secure. Resilient. Ready to scale. Near site, primary DC and DR revamped across three sites.
              </p>
              <div className="case-kpis">
                <span>3 sites</span>
                <span>11 racks</span>
                <span>4 months to revamp</span>
              </div>
              <details>
                <summary>{"Scope & outcome"}</summary>
                <dl>
                  <div>
                    <dt>Scope</dt>
                    <dd>
                      Hyperconverged servers, virtual machines and desktops; HA core switches, campus Wi-Fi and NAC;
                      WAF, sandbox and Zero Trust network; asset management and video conferencing.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>Upgraded servers and storage, added capacity and defence-grade security.</dd>
                  </div>
                </dl>
              </details>
            </div>
          </article>
          <article className="case-card">
            <div className="case-media">
              <img src="assets/img/network.jpg" alt="" />
              <span className="case-tag">Case study</span>
            </div>
            <div className="case-body">
              <span className="meta">{"Conglomerate · India & international"}</span>
              <h3>One IT backbone for a multi-industry conglomerate</h3>
              <p className="sub" style={{ fontSize: "14px", color: "var(--muted)" }}>
                Data centre, DR, cyber security and connectivity for 30+ plants, mines and international offices, and
                2,500 MW of greenfield power.
              </p>
              <div className="case-kpis">
                <span>30+ plants connected</span>
                <span>12-rack primary DC</span>
                <span>2,500 MW greenfield power</span>
              </div>
              <details>
                <summary>{"Scope & outcome"}</summary>
                <dl>
                  <div>
                    <dt>Scope</dt>
                    <dd>
                      Primary data centre with real-time replication to a DR site; servers, central storage, network
                      core, firewalls and single-view monitoring across sugar, liquor, plywood, power, infrastructure,
                      EPC and FMCG businesses.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>
                      One unified IT foundation for eight businesses, secure operations across 30+ locations and
                      business continuity through DR.
                    </dd>
                  </div>
                </dl>
              </details>
            </div>
          </article>
          <article className="case-card">
            <div className="case-media">
              <img src="assets/img/ai-racks.jpg" alt="" />
              <span className="case-tag">Case study</span>
            </div>
            <div className="case-body">
              <span className="meta">AI infrastructure · Confidential</span>
              <h3>3,700-GPU fleet for an AI infrastructure provider</h3>
              <p className="sub" style={{ fontSize: "14px", color: "var(--muted)" }}>
                NVIDIA RTX PRO 6000, H200 and B300 servers specified, sourced and delivered for training, fine-tuning
                and inference.
              </p>
              <div className="case-kpis">
                <span>3,700 NVIDIA GPUs</span>
                <span>~734 TB GPU memory</span>
                <span>44,800 CPU cores</span>
              </div>
              <details>
                <summary>{"Scope & outcome"}</summary>
                <dl>
                  <div>
                    <dt>Scope</dt>
                    <dd>
                      Three compute tiers (500 RTX PRO 6000, 1,600 H200, 1,600 HGX B300); servers, racks, PDUs and
                      rear-door cooling; OEMs NVIDIA, Dell and Supermicro; 3-year next-business-day onsite support.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>
                      AI at scale with 800 Gb/s per port on every B300 server, delivered rack-ready with installation
                      and support.
                    </dd>
                  </div>
                </dl>
              </details>
            </div>
          </article>
          <article className="case-card">
            <div className="case-media">
              <div className="case-ph">300-acre campus</div>
              <span className="case-tag">Case study</span>
            </div>
            <div className="case-body">
              <span className="meta">Solar cell manufacturing · Greenfield</span>
              <h3>Powering a solar cell plant from the ground up</h3>
              <p className="sub" style={{ fontSize: "14px", color: "var(--muted)" }}>
                A 300-acre site taken from its first computer to full operations: data centre, network, endpoints, plant
                floor and campus IT from one partner.
              </p>
              <div className="case-kpis">
                <span>300-acre campus</span>
                <span>3,000 computers</span>
                <span>5,000 employees</span>
              </div>
              <details>
                <summary>{"Scope & outcome"}</summary>
                <dl>
                  <div>
                    <dt>Scope</dt>
                    <dd>
                      Six towers: primary DC and DR; core-to-access network, Wi-Fi and fibre backbone; OT network, MES
                      links and 10,000 AI-enabled CCTV cameras; end-user computing; collaboration rooms; IT/OT
                      segmentation, SOC, NOC and service desk.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>
                      A resilient, secure IT backbone as plant capacity scaled from 4 MW to 8–10 MW over six years.
                    </dd>
                  </div>
                </dl>
              </details>
            </div>
          </article>
          <article className="case-card">
            <div className="case-media">
              <img src="assets/img/cooling.jpg" alt="" />
              <span className="case-tag">Case study</span>
            </div>
            <div className="case-body">
              <span className="meta">{"AI & high-density data centre"}</span>
              <h3>High-density data hall for AI workloads</h3>
              <p className="sub" style={{ fontSize: "14px", color: "var(--muted)" }}>
                72 high-density racks with 35 kW rear-door heat exchangers and three-phase power, commissioned for 2.52
                MW of GPU heat removal.
              </p>
              <div className="case-kpis">
                <span>72 racks</span>
                <span>35 kW per rack</span>
                <span>2.52 MW heat removal</span>
              </div>
              <details>
                <summary>{"Scope & outcome"}</summary>
                <dl>
                  <div>
                    <dt>Scope</dt>
                    <dd>
                      42U 800 × 1,400 mm racks; three 32 A three-phase PDUs per rack; 35 kW chilled-water rear-door heat
                      exchangers (18 °C in, 24 °C out); install, test, commission and BMS integration.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>
                      Cooling that never stops, with dual power, live monitoring and a 1-year warranty plus AMC to year
                      five.
                    </dd>
                  </div>
                </dl>
              </details>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
