import React from "react";

export default function CasesSection() {
  return (
    <section className="band" id="ai-automation-cases">
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
        <div className="cases-grid" data-cases="ai-automation" data-dyn="">
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
          <article className="case-card">
            <div className="case-media">
              <img src="assets/img/dc-building.jpg" alt="" />
              <span className="case-tag">Case study</span>
            </div>
            <div className="case-body">
              <span className="meta">{"Data centre & AI infrastructure · Design"}</span>
              <h3>Engineering a 1 MW AI data centre</h3>
              <p className="sub" style={{ fontSize: "14px", color: "var(--muted)" }}>
                From a one-line brief to a build-ready, priced design.
              </p>
              <div className="case-kpis">
                <span>1 MW IT load</span>
                <span>432 NVIDIA B300 GPUs</span>
                <span>PUE 1.19</span>
              </div>
              <details>
                <summary>{"Scope & outcome"}</summary>
                <dl>
                  <div>
                    <dt>Scope</dt>
                    <dd>
                      Five layers sized top-down: 6 × GB300 NVL72 racks; NVLink 5 + InfiniBand XDR; 2 PB NVMe, 5 PB QLC
                      and 10 PB object storage; Slurm, Kubernetes and DCIM; 2N UPS, N+1 generation and direct-to-chip
                      liquid cooling.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>
                      Tier III-aligned design with 17 PB usable storage and an estimated ₹922 Cr five-year cloud cost
                      avoidance.
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
