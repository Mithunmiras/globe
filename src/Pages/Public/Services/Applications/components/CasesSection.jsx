import React from "react";

export default function CasesSection() {
  return (
    <section className="band" id="applications-cases">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Case studies</div>
            <h2>
              Work we have <em>delivered</em>
            </h2>
          </div>
          <p>Client names withheld at their request.</p>
        </div>
        <div className="cases-grid" data-cases="applications" data-dyn="">
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
              <div className="case-ph">500+ computers</div>
              <span className="case-tag">Case study</span>
            </div>
            <div className="case-body">
              <span className="meta">Power · Hilly terrain</span>
              <h3>Remote greenfield power project</h3>
              <p className="sub" style={{ fontSize: "14px", color: "var(--muted)" }}>
                From zero connectivity to a fully digital site: satellite on day one, then a full optical-fibre
                backbone.
              </p>
              <div className="case-kpis">
                <span>500+ computers</span>
                <span>Online from day one</span>
                <span>Satellite → full fibre</span>
              </div>
              <details>
                <summary>{"Scope & outcome"}</summary>
                <dl>
                  <div>
                    <dt>Scope</dt>
                    <dd>
                      Complete IT infrastructure; servers, storage and backup; LAN and Wi-Fi; firewall and endpoint
                      security; SAP rollout and user enablement; intranet; site-wide radio for field teams.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>One connected digital workplace built for a remote, difficult site.</dd>
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
