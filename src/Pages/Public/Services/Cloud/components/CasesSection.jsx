import React from "react";

export default function CasesSection() {
  return (
    <section className="band" id="cloud-cases">
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
        <div className="cases-grid" data-cases="cloud" data-dyn="">
          <article className="case-card">
            <div className="case-media">
              <img src="/images/img-74-461f077cff.jpg" alt="" />
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
              <div className="case-ph">Up to 10,000 users</div>
              <span className="case-tag">Case study</span>
            </div>
            <div className="case-body">
              <span className="meta">Enterprise AI · Confidential</span>
              <h3>On-premise AI units for an international enterprise</h3>
              <p className="sub" style={{ fontSize: "14px", color: "var(--muted)" }}>
                Enterprise AI inside the client's own data centre, with data that never leaves their control.
              </p>
              <div className="case-kpis">
                <span>Up to 10,000 users</span>
                <span>Air-gap ready</span>
                <span>No per-token billing</span>
              </div>
              <details>
                <summary>{"Scope & outcome"}</summary>
                <dl>
                  <div>
                    <dt>Scope</dt>
                    <dd>
                      Full-stack AI units powered by Lyzr Optimus, sized from 50 to 10,000 users; DC readiness for
                      power, cooling, network and security; identity and data integration; agent building and ongoing
                      support.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>Local inference with predictable, infrastructure-led AI costs.</dd>
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
