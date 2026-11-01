import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function StorySection() {
  return (
    <section className="dx ice ix-story" id="cl-story">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Cloud services</span>
          <h2 className="dx-h">
            Planned, migrated, secured <span>and run as one estate</span>
          </h2>
          <p className="dx-lede">Choose a service on the left — the detail opens alongside.</p>
        </div>
        <div className="ix-grid" data-tabs="">
          <div className="ix-rail" role="tablist" aria-orientation="vertical" aria-label="Cloud services">
            <button type="button" role="tab" id="cl-multi-t" aria-controls="cl-multi" aria-selected="true">
              <Icon name="cloud" />
              <span>Multi-cloud</span>
            </button>
            <button type="button" role="tab" id="cl-india-t" aria-controls="cl-india" aria-selected="false">
              <Icon name="pin" />
              <span>Cloud for India</span>
            </button>
            <button type="button" role="tab" id="cl-migration-t" aria-controls="cl-migration" aria-selected="false">
              <Icon name="arrow" />
              <span>Migration</span>
            </button>
            <button type="button" role="tab" id="cl-devops-t" aria-controls="cl-devops" aria-selected="false">
              <Icon name="code" />
              <span>Cloud-native</span>
            </button>
            <button type="button" role="tab" id="cl-security-t" aria-controls="cl-security" aria-selected="false">
              <Icon name="shield" />
              <span>Security</span>
            </button>
            <button type="button" role="tab" id="cl-finops-t" aria-controls="cl-finops" aria-selected="false">
              <Icon name="chart" />
              <span>FinOps</span>
            </button>
            <button type="button" role="tab" id="cl-dr-t" aria-controls="cl-dr" aria-selected="false">
              <Icon name="db" />
              <span>{"Backup & DR"}</span>
            </button>
            <button type="button" role="tab" id="cl-managed-t" aria-controls="cl-managed" aria-selected="false">
              <Icon name="headset" />
              <span>Managed cloud</span>
            </button>
          </div>
          <div className="ix-main">
            <section className="ix-chapter" id="cl-multi" role="tabpanel" aria-labelledby="cl-multi-t">
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Multi-cloud</h2>
                  <p className="dx-lede">
                    Four hyperscalers, each with two or more Indian regions — so in-country DR works on all four.
                  </p>
                  <div className="ix-chips">
                    <span>AWS</span>
                    <span>Azure</span>
                    <span>Google Cloud</span>
                    <span>Oracle</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cl-glance">
                <header>
                  <span className="dx-k">At a glance</span>
                  <h3>Choosing between hyperscalers</h3>
                </header>
                <div className="dx-tbl2" data-reveal="">
                  <table>
                    <thead>
                      <tr>
                        <th>Provider</th>
                        <th>India regions</th>
                        <th>Strength</th>
                        <th>We use it for</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>AWS</b>
                        </td>
                        <td>Mumbai, Hyderabad</td>
                        <td>Widest services</td>
                        <td>Digital apps, SAP</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Azure</b>
                        </td>
                        <td>Pune, Chennai, Mumbai</td>
                        <td>Microsoft, hybrid</td>
                        <td>Windows, VDI</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Google</b>
                        </td>
                        <td>Mumbai, Delhi</td>
                        <td>BigQuery, Vertex AI</td>
                        <td>Data and AI</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Oracle</b>
                        </td>
                        <td>Mumbai, Hyderabad</td>
                        <td>Exadata</td>
                        <td>Oracle ERP, DB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
              <article className="ix-scene" id="cl-hyp">
                <header>
                  <span className="dx-k">Hyperscalers</span>
                  <h3>Pick a provider</h3>
                </header>
                <div className="ix-tiers ps" data-tabs="">
                  <div className="ix-tier-l" role="tablist">
                    <button type="button" role="tab" id="cl-ps-0-t" aria-controls="cl-ps-0" aria-selected="true">
                      <Icon name="cloud" />
                      <b>AWS: broadest service catalogue</b>
                    </button>
                    <button type="button" role="tab" id="cl-ps-1-t" aria-controls="cl-ps-1" aria-selected="false">
                      <Icon name="apps" />
                      <b>Azure: home for Microsoft estates</b>
                    </button>
                    <button type="button" role="tab" id="cl-ps-2-t" aria-controls="cl-ps-2" aria-selected="false">
                      <Icon name="globe" />
                      <b>Google Cloud: data and AI first</b>
                    </button>
                    <button type="button" role="tab" id="cl-ps-3-t" aria-controls="cl-ps-3" aria-selected="false">
                      <Icon name="db" />
                      <b>OCI: built for Oracle databases</b>
                    </button>
                  </div>
                  <div className="ix-tier-p">
                    <div role="tabpanel" id="cl-ps-0" aria-labelledby="cl-ps-0-t">
                      <span className="dx-k">Platform</span>
                      <h4>AWS: broadest service catalogue</h4>
                      <div className="dx-meta">
                        <div>
                          <small>India regions</small>
                          <b>Mumbai · Hyderabad</b>
                        </div>
                        <div>
                          <small>Best fit</small>
                          <b>Digital apps, analytics, SAP</b>
                        </div>
                        <div>
                          <small>Connect</small>
                          <b>Direct Connect, VPN</b>
                        </div>
                      </div>
                      <div className="ix-tiles c2" data-reveal="">
                        <div className="ix-tile" style={{ "--i": "0" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="server" />
                          </span>
                          <b>{"Compute & containers"}</b>
                          <span>EC2, EKS, ECS, Lambda</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "1" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="db" />
                          </span>
                          <b>{"Storage & data"}</b>
                          <span>S3, EBS, RDS, Aurora, Redshift</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "2" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="ai" />
                          </span>
                          <b>{"AI & ML"}</b>
                          <span>Bedrock, SageMaker, GPU instances</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "3" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="shield" />
                          </span>
                          <b>Governance</b>
                          <span>Control Tower, GuardDuty, Security Hub</span>
                        </div>
                      </div>
                      <div className="ix-bar">
                        <small>DGC services</small>
                        <span>Well-Architected reviews · landing zones · migration · Savings Plans</span>
                      </div>
                    </div>
                    <div role="tabpanel" id="cl-ps-1" aria-labelledby="cl-ps-1-t" hidden>
                      <span className="dx-k">Platform</span>
                      <h4>Azure: home for Microsoft estates</h4>
                      <div className="dx-meta">
                        <div>
                          <small>India regions</small>
                          <b>Pune · Chennai · Mumbai</b>
                        </div>
                        <div>
                          <small>Best fit</small>
                          <b>Windows, SQL, Microsoft 365</b>
                        </div>
                        <div>
                          <small>Connect</small>
                          <b>ExpressRoute, Virtual WAN</b>
                        </div>
                      </div>
                      <div className="ix-tiles c2" data-reveal="">
                        <div className="ix-tile" style={{ "--i": "0" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="server" />
                          </span>
                          <b>{"Compute & containers"}</b>
                          <span>VMs, Scale Sets, AKS, Functions</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "1" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="db" />
                          </span>
                          <b>{"Storage & data"}</b>
                          <span>Blob, Azure SQL, Cosmos DB, Fabric</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "2" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="ai" />
                          </span>
                          <b>{"AI & ML"}</b>
                          <span>Azure OpenAI, Azure ML, GPU VMs</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "3" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="shield" />
                          </span>
                          <b>Governance</b>
                          <span>Policy, Defender for Cloud, Sentinel</span>
                        </div>
                      </div>
                      <div className="ix-bar">
                        <small>DGC services</small>
                        <span>Landing zones · Azure Migrate · Hybrid Benefit · AVD · Azure Arc</span>
                      </div>
                    </div>
                    <div role="tabpanel" id="cl-ps-2" aria-labelledby="cl-ps-2-t" hidden>
                      <span className="dx-k">Platform</span>
                      <h4>Google Cloud: data and AI first</h4>
                      <div className="dx-meta">
                        <div>
                          <small>India regions</small>
                          <b>Mumbai · Delhi</b>
                        </div>
                        <div>
                          <small>Best fit</small>
                          <b>Analytics, AI, containers</b>
                        </div>
                        <div>
                          <small>Connect</small>
                          <b>Cloud Interconnect, VPN</b>
                        </div>
                      </div>
                      <div className="ix-tiles c2" data-reveal="">
                        <div className="ix-tile" style={{ "--i": "0" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="server" />
                          </span>
                          <b>{"Compute & containers"}</b>
                          <span>Compute Engine, GKE, Cloud Run</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "1" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="db" />
                          </span>
                          <b>{"Storage & data"}</b>
                          <span>Cloud Storage, BigQuery, AlloyDB</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "2" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="ai" />
                          </span>
                          <b>{"AI & ML"}</b>
                          <span>Vertex AI, Gemini, GPUs and TPUs</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "3" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="shield" />
                          </span>
                          <b>Governance</b>
                          <span>Org policies, Security Command Center</span>
                        </div>
                      </div>
                      <div className="ix-bar">
                        <small>DGC services</small>
                        <span>Foundation setup · VM migration · BigQuery moves · GKE operations</span>
                      </div>
                    </div>
                    <div role="tabpanel" id="cl-ps-3" aria-labelledby="cl-ps-3-t" hidden>
                      <span className="dx-k">Platform</span>
                      <h4>OCI: built for Oracle databases</h4>
                      <div className="dx-meta">
                        <div>
                          <small>India regions</small>
                          <b>Mumbai · Hyderabad</b>
                        </div>
                        <div>
                          <small>Best fit</small>
                          <b>Oracle DB, EBS, JD Edwards</b>
                        </div>
                        <div>
                          <small>Connect</small>
                          <b>FastConnect, multicloud DB</b>
                        </div>
                      </div>
                      <div className="ix-tiles c2" data-reveal="">
                        <div className="ix-tile" style={{ "--i": "0" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="server" />
                          </span>
                          <b>{"Compute & containers"}</b>
                          <span>VMs, bare metal, OKE</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "1" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="db" />
                          </span>
                          <b>Database</b>
                          <span>Autonomous DB, Exadata, HeatWave</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "2" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="ai" />
                          </span>
                          <b>{"AI & ML"}</b>
                          <span>OCI Generative AI, GPU clusters</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "3" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="shield" />
                          </span>
                          <b>Governance</b>
                          <span>Cloud Guard, Security Zones, Vault</span>
                        </div>
                      </div>
                      <div className="ix-bar">
                        <small>DGC services</small>
                        <span>Oracle ERP and DB moves · Exadata sizing · licence review (BYOL)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cl-india" role="tabpanel" aria-labelledby="cl-india-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Cloud for India</h2>
                  <p className="dx-lede">
                    Why Indian clouds belong in the mix — residency, rupee billing, sovereign GPUs and local support.
                  </p>
                  <div className="ix-chips">
                    <span>Data residency</span>
                    <span>MeitY</span>
                    <span>Sovereign AI</span>
                    <span>DPDP</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cl-in-why">
                <header>
                  <span className="dx-k">Why</span>
                  <h3>Why Indian clouds belong in the mix</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="pin" />
                    </span>
                    <b>Data residency</b>
                    <span>Indian soil, Indian operators</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="check" />
                    </span>
                    <b>MeitY empanelled</b>
                    <span>Needed for government work</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="card" />
                    </span>
                    <b>Rupee billing</b>
                    <span>No currency risk, simple GST</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cpu" />
                    </span>
                    <b>Sovereign GPUs</b>
                    <span>AI capacity hosted in India</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="headset" />
                    </span>
                    <b>Local support</b>
                    <span>Direct access, flexible terms</span>
                  </div>
                  <div className="ix-tile dark" style={{ "--i": "5" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="layers" />
                    </span>
                    <b>Better together</b>
                    <span>Pair with a hyperscaler</span>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="cl-in-prov">
                <header>
                  <span className="dx-k">Providers</span>
                  <h3>Leading Indian cloud providers</h3>
                </header>
                <div className="dx-tbl2" data-reveal="">
                  <table>
                    <thead>
                      <tr>
                        <th>Provider</th>
                        <th>Highlights</th>
                        <th>Best fit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>Yotta</b>
                        </td>
                        <td>Shakti Cloud GPUs</td>
                        <td>AI, government</td>
                      </tr>
                      <tr>
                        <td>
                          <b>E2E Networks</b>
                        </td>
                        <td>Self-service CPU, GPU</td>
                        <td>Startups, AI/ML</td>
                      </tr>
                      <tr>
                        <td>
                          <b>CtrlS</b>
                        </td>
                        <td>Rated-4 DCs, managed cloud</td>
                        <td>BFSI, DR</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Sify</b>
                        </td>
                        <td>CloudInfinit, DC, network</td>
                        <td>Hybrid IT</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Tata Comm.</b>
                        </td>
                        <td>Vayu cloud, IZO links</td>
                        <td>Network-heavy firms</td>
                      </tr>
                      <tr>
                        <td>
                          <b>NxtGen</b>
                        </td>
                        <td>Sovereign cloud</td>
                        <td>Regulated data</td>
                      </tr>
                      <tr>
                        <td>
                          <b>ESDS</b>
                        </td>
                        <td>eNlight, community cloud</td>
                        <td>SMEs, government</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Airtel Cloud</b>
                        </td>
                        <td>Nxtra data centers</td>
                        <td>Airtel customers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="ix-bar">
                  <small>Note</small>
                  <span>MeitY empanelment and certifications confirmed per project.</span>
                </div>
              </article>
              <article className="ix-scene" id="cl-in-ai">
                <header>
                  <span className="dx-k">Sovereign AI</span>
                  <h3>GPU cloud capacity inside India</h3>
                </header>
                <p className="dx-lede">Train and run AI without data leaving India.</p>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cpu" />
                    </span>
                    <b>Yotta Shakti Cloud</b>
                    <span>Large NVIDIA clusters for training</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="bolt" />
                    </span>
                    <b>E2E Networks</b>
                    <span>On-demand GPUs for inference</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="gov" />
                    </span>
                    <b>IndiaAI Mission</b>
                    <span>Government-supported GPU access</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cloud" />
                    </span>
                    <b>Hyperscaler GPUs</b>
                    <span>In AWS, Azure, Google India regions</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>We help with</small>
                  <span>GPU sizing and selection · Private LLM and RAG · Data pipelines, MLOps · GPU cost control</span>
                </div>
              </article>
              <article className="ix-scene" id="cl-in-rules">
                <header>
                  <span className="dx-k">Compliance</span>
                  <h3>Indian rules that shape cloud design</h3>
                </header>
                <div className="cx-cov" data-reveal="">
                  <div className="b" style={{ "--i": "0" }}>
                    <span>
                      <Icon name="doc" />
                      <b>{"DPDP Act & Rules"}</b>
                    </span>
                    <p>Consent, safeguards, breach reporting; phased in</p>
                  </div>
                  <div className="g" style={{ "--i": "1" }}>
                    <span>
                      <Icon name="shield" />
                      <b>CERT-In</b>
                    </span>
                    <p>Report incidents in 6 hours; logs in India 180 days</p>
                  </div>
                  <div className="o" style={{ "--i": "2" }}>
                    <span>
                      <Icon name="bank" />
                      <b>RBI</b>
                    </span>
                    <p>Payment data stored only in India</p>
                  </div>
                  <div className="t" style={{ "--i": "3" }}>
                    <span>
                      <Icon name="chart" />
                      <b>SEBI</b>
                    </span>
                    <p>Cloud framework for regulated entities</p>
                  </div>
                  <div className="p" style={{ "--i": "4" }}>
                    <span>
                      <Icon name="umbrella" />
                      <b>IRDAI</b>
                    </span>
                    <p>Insurance records kept in Indian data centers</p>
                  </div>
                  <div className="b" style={{ "--i": "5" }}>
                    <span>
                      <Icon name="gov" />
                      <b>MeitY</b>
                    </span>
                    <p>Government buys from empanelled providers</p>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Planning summary only</small>
                  <span>Each project follows the customer’s legal advice.</span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cl-migration" role="tabpanel" aria-labelledby="cl-migration-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Migration & landing zones"}</h2>
                  <p className="dx-lede">
                    The right path per application, on a secure foundation, with data center and clouds run as one.
                  </p>
                  <div className="ix-chips">
                    <span>7 Rs</span>
                    <span>Landing zones</span>
                    <span>Hybrid</span>
                    <span>Private links</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cl-7rs">
                <header>
                  <span className="dx-k">Migration</span>
                  <h3>The right path per application: 7 Rs</h3>
                </header>
                <div className="cl-7r" data-reveal="">
                  <div style={{ "--i": "0" }}>
                    <span>Re</span>
                    <b>Retire</b>
                    <p>Switch off unused apps</p>
                    <em>Duplicate reports</em>
                  </div>
                  <div style={{ "--i": "1" }}>
                    <span>Re</span>
                    <b>Retain</b>
                    <p>Keep on-premises</p>
                    <em>Plant-floor MES</em>
                  </div>
                  <div style={{ "--i": "2" }}>
                    <span>Re</span>
                    <b>Rehost</b>
                    <p>Lift and shift VMs</p>
                    <em>File servers</em>
                  </div>
                  <div style={{ "--i": "3" }}>
                    <span>Re</span>
                    <b>Relocate</b>
                    <p>Move VMware as-is</p>
                    <em>Azure VMware Solution</em>
                  </div>
                  <div style={{ "--i": "4" }}>
                    <span>Re</span>
                    <b>Replatform</b>
                    <p>Use managed services</p>
                    <em>SQL to managed DB</em>
                  </div>
                  <div style={{ "--i": "5" }}>
                    <span>Re</span>
                    <b>Repurchase</b>
                    <p>Replace with SaaS</p>
                    <em>On-prem CRM to SaaS</em>
                  </div>
                  <div style={{ "--i": "6" }}>
                    <span>Re</span>
                    <b>Refactor</b>
                    <p>Re-architect</p>
                    <em>Monolith to containers</em>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Tools</small>
                  <span>AWS MGN · Azure Migrate · Migrate to VMs · VMware HCX</span>
                </div>
              </article>
              <article className="ix-scene" id="cl-lz">
                <header>
                  <span className="dx-k">Landing zones</span>
                  <h3>A secure foundation before workloads</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>Accounts</b>
                    <span>Prod, non-prod, shared</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="key" />
                    </span>
                    <b>Identity</b>
                    <span>SSO, MFA, just-in-time admin</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="net" />
                    </span>
                    <b>Network</b>
                    <span>Hub-and-spoke, private links</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="pin" />
                    </span>
                    <b>Guardrails</b>
                    <span>India-only regions, encryption</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="doc" />
                    </span>
                    <b>Logging</b>
                    <span>Tamper-proof logs to SIEM</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "5" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="code" />
                    </span>
                    <b>As code</b>
                    <span>Terraform, policy-as-code</span>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="cl-hyb">
                <header>
                  <span className="dx-k">{"Hybrid & multi-cloud"}</span>
                  <h3>Data center and clouds as one</h3>
                </header>
                <div className="ai-2">
                  <div className="ix-list dark">
                    <h4>Hybrid platforms</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        Azure Arc, Azure Local
                      </li>
                      <li>
                        <Icon name="check" />
                        AWS Outposts
                      </li>
                      <li>
                        <Icon name="check" />
                        Google Distributed Cloud
                      </li>
                      <li>
                        <Icon name="check" />
                        VMware on any cloud
                      </li>
                      <li>
                        <Icon name="check" />
                        Nutanix NC2
                      </li>
                    </ul>
                  </div>
                  <div className="ix-list">
                    <h4>Private connectivity</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        Direct Connect, ExpressRoute
                      </li>
                      <li>
                        <Icon name="check" />
                        Interconnect, FastConnect
                      </li>
                      <li>
                        <Icon name="check" />
                        Mumbai, Chennai on-ramps
                      </li>
                      <li>
                        <Icon name="check" />
                        Telco multicloud fabrics
                      </li>
                      <li>
                        <Icon name="check" />
                        SD-WAN cloud breakout
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cl-devops" role="tabpanel" aria-labelledby="cl-devops-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Cloud-native & DevOps"}</h2>
                  <p className="dx-lede">Platforms for fast, safe releases.</p>
                  <div className="ix-chips">
                    <span>Kubernetes</span>
                    <span>IaC</span>
                    <span>CI/CD</span>
                    <span>Observability</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cl-dev">
                <header>
                  <span className="dx-k">{"Cloud-native & DevOps"}</span>
                  <h3>Platforms for fast, safe releases</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="code" />
                    <b>Code</b>
                    <span>Git, reviews</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="gear" />
                    <b>{"Build & test"}</b>
                    <span>CI pipelines</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="shield" />
                    <b>Scan</b>
                    <span>Code, images, IaC</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="rocket" />
                    <b>Deploy</b>
                    <span>GitOps to Kubernetes</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="eye" />
                    <b>Observe</b>
                    <span>Metrics, logs, traces</span>
                  </li>
                </ol>
                <div className="ix-tiles c2" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>Kubernetes</b>
                    <span>Managed, auto-scaling clusters</span>
                    <em>EKS · AKS · GKE · OpenShift</em>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="code" />
                    </span>
                    <b>Infrastructure as code</b>
                    <span>Version-controlled environments</span>
                    <em>Terraform · Bicep · Ansible</em>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="rocket" />
                    </span>
                    <b>{"CI/CD & GitOps"}</b>
                    <span>Build, test, scan, deploy</span>
                    <em>GitHub Actions · Azure DevOps · Argo CD</em>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="eye" />
                    </span>
                    <b>Observability</b>
                    <span>Metrics, logs, traces, alerts</span>
                    <em>Prometheus · Grafana · Datadog</em>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cl-security" role="tabpanel" aria-labelledby="cl-security-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Cloud security</h2>
                  <p className="dx-lede">Cloud security, shared responsibility.</p>
                  <div className="ix-chips">
                    <span>CNAPP</span>
                    <span>Identity</span>
                    <span>Encryption</span>
                    <span>24x7 SOC</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cl-sec">
                <header>
                  <span className="dx-k">Security</span>
                  <h3>Cloud security, shared responsibility</h3>
                </header>
                <div className="ai-2">
                  <div className="ix-list dark">
                    <h4>Baseline controls</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        MFA, least privilege
                      </li>
                      <li>
                        <Icon name="check" />
                        Your own encryption keys
                      </li>
                      <li>
                        <Icon name="check" />
                        No public storage
                      </li>
                      <li>
                        <Icon name="check" />
                        CIS hardening
                      </li>
                      <li>
                        <Icon name="check" />
                        Logs 180 days in India
                      </li>
                      <li>
                        <Icon name="check" />
                        24x7 SOC
                      </li>
                    </ul>
                  </div>
                  <div className="ix-tiles c2" data-reveal="">
                    <div className="ix-tile" style={{ "--i": "0" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="shield" />
                      </span>
                      <b>Posture (CNAPP)</b>
                      <span>Defender · Wiz · Prisma Cloud</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "1" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="key" />
                      </span>
                      <b>Identity</b>
                      <span>Entra ID · Okta · CyberArk</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "2" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="lock" />
                      </span>
                      <b>Data protection</b>
                      <span>KMS · Key Vault · HSM</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "3" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="eye" />
                      </span>
                      <b>Threat detection</b>
                      <span>GuardDuty · Sentinel</span>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cl-finops" role="tabpanel" aria-labelledby="cl-finops-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">FinOps</h2>
                  <p className="dx-lede">Cloud spend, visible and controlled.</p>
                  <div className="ix-chips">
                    <span>Inform</span>
                    <span>Optimize</span>
                    <span>Operate</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cl-fin">
                <header>
                  <span className="dx-k">FinOps</span>
                  <h3>Cloud spend, visible and controlled</h3>
                </header>
                <div className="cx-cols" data-reveal="">
                  <div className="cx-col b" style={{ "--i": "0" }}>
                    <div className="cx-col-h">
                      <Icon name="eye" />
                      <b>Inform</b>
                    </div>
                    <ul>
                      <li>Tagging standards</li>
                      <li>Showback by team</li>
                      <li>Budgets, alerts</li>
                    </ul>
                  </div>
                  <div className="cx-col g" style={{ "--i": "1" }}>
                    <div className="cx-col-h">
                      <Icon name="target" />
                      <b>Optimize</b>
                    </div>
                    <ul>
                      <li>Rightsizing</li>
                      <li>Savings plans</li>
                      <li>Spot for batch</li>
                    </ul>
                  </div>
                  <div className="cx-col t" style={{ "--i": "2" }}>
                    <div className="cx-col-h">
                      <Icon name="gear" />
                      <b>Operate</b>
                    </div>
                    <ul>
                      <li>Non-prod schedules</li>
                      <li>Licence reuse</li>
                      <li>Quarterly reviews</li>
                    </ul>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Tools</small>
                  <span>Cost Explorer · Azure Cost Management · CloudHealth · Kubecost</span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cl-dr" role="tabpanel" aria-labelledby="cl-dr-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Backup & DR"}</h2>
                  <p className="dx-lede">Disaster recovery inside India.</p>
                  <div className="ix-chips">
                    <span>In-country DR</span>
                    <span>Recovery patterns</span>
                    <span>Veeam</span>
                    <span>Zerto</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cl-drs">
                <header>
                  <span className="dx-k">{"Backup & DR"}</span>
                  <h3>Disaster recovery inside India</h3>
                </header>
                <div className="ai-spec" data-reveal="">
                  <div className="ai-spec-ax">
                    <span>Lower cost</span>
                    <i />
                    <span>Faster recovery</span>
                  </div>
                  <div className="ai-spec-c">
                    <div style={{ "--i": "0" }}>
                      <span className="dot" />
                      <span className="dx-ic c-blue">
                        <Icon name="upload" />
                      </span>
                      <b>{"Backup & restore"}</b>
                      <p>Recovery: Hours</p>
                      <em>Cost: Lowest</em>
                    </div>
                    <div style={{ "--i": "1" }}>
                      <span className="dot" />
                      <span className="dx-ic c-blue">
                        <Icon name="bolt" />
                      </span>
                      <b>Pilot light</b>
                      <p>Recovery: Under hours</p>
                      <em>Cost: Low</em>
                    </div>
                    <div style={{ "--i": "2" }}>
                      <span className="dot" />
                      <span className="dx-ic c-blue">
                        <Icon name="gear" />
                      </span>
                      <b>Warm standby</b>
                      <p>Recovery: Minutes</p>
                      <em>Cost: Medium</em>
                    </div>
                    <div style={{ "--i": "3" }}>
                      <span className="dot" />
                      <span className="dx-ic c-gold">
                        <Icon name="layers" />
                      </span>
                      <b>Active-active</b>
                      <p>Recovery: Near zero</p>
                      <em>Cost: Highest</em>
                    </div>
                  </div>
                </div>
                <div className="ai-2">
                  <div className="ix-list dark">
                    <h4>In-country DR pairs</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        AWS, Oracle: Mumbai ↔ Hyderabad
                      </li>
                      <li>
                        <Icon name="check" />
                        Azure: Pune ↔ Chennai
                      </li>
                      <li>
                        <Icon name="check" />
                        Google: Mumbai ↔ Delhi
                      </li>
                      <li>
                        <Icon name="check" />
                        Cross-provider: Indian cloud ↔ hyperscaler
                      </li>
                    </ul>
                  </div>
                  <div className="ix-bar">
                    <small>Tools</small>
                    <span>AWS DRS · Azure Site Recovery · Veeam · Zerto · Commvault</span>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cl-managed" role="tabpanel" aria-labelledby="cl-managed-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Managed cloud</h2>
                  <p className="dx-lede">24x7 managed cloud, every provider — one contact, one SLA.</p>
                  <div className="ix-chips">
                    <span>NOC</span>
                    <span>SOC</span>
                    <span>ITIL</span>
                    <span>FinOps</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cl-mg">
                <header>
                  <span className="dx-k">Managed cloud</span>
                  <h3>24x7 managed cloud, every provider</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="eye" />
                    </span>
                    <b>Monitoring</b>
                    <span>24x7 NOC on health and uptime</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="shield" />
                    </span>
                    <b>Security ops</b>
                    <span>SOC monitoring and response</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="gear" />
                    </span>
                    <b>{"Patch & backup"}</b>
                    <span>Patching, restore tests</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="doc" />
                    </span>
                    <b>Change control</b>
                    <span>ITIL incident and change</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="chart" />
                    </span>
                    <b>Cost reviews</b>
                    <span>Monthly FinOps actions</span>
                  </div>
                  <div className="ix-tile dark" style={{ "--i": "5" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="headset" />
                    </span>
                    <b>One desk</b>
                    <span>One contact, one SLA</span>
                  </div>
                </div>
                <Link to="/managed-services" className="cl-more">
                  <Icon name="headset" />
                  <span>
                    <b>Managed Services</b>
                    <small>See the full 24x7 operations model</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
