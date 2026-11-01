import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DeckSection() {
  return (
    <section className="dx" id="dcs-it-network-deck">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Capability deck</span>
          <h2 className="dx-h">
            Racks, compute, network <span>and storage</span>
          </h2>
          <p className="dx-lede">Choose a layer from the DGC Data Center capability deck.</p>
        </div>
        <div className="dx-tabs" data-tabs="">
          <div className="dx-tablist h" role="tablist" aria-label="Infrastructure layers">
            <button type="button" role="tab" id="inf-racks-t" aria-controls="inf-racks" aria-selected="true">
              <Icon name="layers" />
              Racks
            </button>
            <button type="button" role="tab" id="inf-compute-t" aria-controls="inf-compute" aria-selected="false">
              <Icon name="server" />
              Compute
            </button>
            <button type="button" role="tab" id="inf-network-t" aria-controls="inf-network" aria-selected="false">
              <Icon name="net" />
              Network
            </button>
            <button type="button" role="tab" id="inf-storage-t" aria-controls="inf-storage" aria-selected="false">
              <Icon name="db" />
              Storage
            </button>
          </div>
          <div className="dx-tpanes">
            <div role="tabpanel" id="inf-racks" aria-labelledby="inf-racks-t" className="dx-tp">
              <div className="dx-ip">
                <div className="dx-ip-copy">
                  <span className="dx-k">Physical infrastructure</span>
                  <h3>Rack Infrastructure</h3>
                  <p className="dx-lede">
                    Standard 19” racks form the foundational, space-efficient home for servers, switching and storage —
                    engineered for airflow, cable integrity and load.
                  </p>
                  <h4 className="dx-h4">Key Design Features</h4>
                  <ul className="dx-ticks">
                    <li>
                      <Icon name="check" />
                      42U / 48U standard enclosures, 19” EIA-310 mount
                    </li>
                    <li>
                      <Icon name="check" />
                      Static load rating 1,000–1,500+ kg per cabinet
                    </li>
                    <li>
                      <Icon name="check" />
                      {"Front-to-back airflow with blanking panels & brush strips"}
                    </li>
                    <li>
                      <Icon name="check" />
                      Structured cabling with vertical/horizontal managers
                    </li>
                    <li>
                      <Icon name="check" />
                      {"Dedicated zones for ToR switches, patch panels & PDUs"}
                    </li>
                  </ul>
                  <h4 className="dx-h4">Rack Power Density Tiers</h4>
                  <div className="dx-tiers">
                    <div>
                      <span>
                        <Icon name="server" />
                      </span>
                      <b>Standard Enterprise</b>
                      <em>5 – 10 kW / rack</em>
                      <i style={{ "--w": "18%" }} />
                    </div>
                    <div>
                      <span>
                        <Icon name="cpu" />
                      </span>
                      <b>High-Density Compute</b>
                      <em>15 – 30 kW / rack</em>
                      <i style={{ "--w": "40%" }} />
                    </div>
                    <div>
                      <span>
                        <Icon name="ai" />
                      </span>
                      <b>AI / GPU Clusters</b>
                      <em>40 – 130+ kW / rack (liquid-cooled)</em>
                      <i style={{ "--w": "100%" }} />
                    </div>
                  </div>
                </div>
                <div className="dx-ip-art">
                  <div className="dx-rackart">
                    <figure className="dx-fig rack">
                      <img src="/images/img-103-b804cc43c7.jpg" alt="42U rack" loading="lazy" />
                    </figure>
                    <div className="dx-schem">
                      <h4>Rack schematic (42U)</h4>
                      <ol>
                        <li>
                          <i />
                          Top-of-Rack Switch
                        </li>
                        <li>
                          <i />
                          Patch Panel
                        </li>
                        <li>
                          <i />
                          Compute Servers
                        </li>
                        <li>
                          <i />
                          Storage Array
                        </li>
                        <li>
                          <i />
                          Cable Manager
                        </li>
                        <li>
                          <i />
                          PDU (Vertical, Dual Feed)
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dx-metrics">
                <div className="dx-m">
                  <span>
                    <Icon name="db" />
                  </span>
                  <b>2N / N+1</b>
                  <small>Redundancy across UPS and distribution paths</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="bolt" />
                  </span>
                  <b>10–15 min</b>
                  <small>Battery bridge; generators sized for 48–72 hrs on-site fuel</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="leaf" />
                  </span>
                  <b>PUE 1.2 – 1.5</b>
                  <small>{"Through free-cooling & high-efficiency UPS"}</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="shield" />
                  </span>
                  <b>ATS</b>
                  <small>Automatic Transfer Switches for seamless source failover</small>
                </div>
              </div>
            </div>
            <div role="tabpanel" id="inf-compute" aria-labelledby="inf-compute-t" className="dx-tp" hidden>
              <div className="dx-ip">
                <div className="dx-ip-copy">
                  <span className="dx-k">Compute infrastructure</span>
                  <h3>Compute (Servers)</h3>
                  <p className="dx-lede">
                    High-performance, secure and scalable compute platforms to power your digital ambitions.
                  </p>
                  <div className="dx-fgrid">
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="cpu" />
                      </span>
                      <div>
                        <b>Wide Range of Compute Platforms</b>
                        <span>Industry-leading servers for enterprise, cloud and AI workloads.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="cloud" />
                      </span>
                      <div>
                        <b>{"Optimized for Hybrid & Cloud"}</b>
                        <span>Seamless integration with on-prem, private and public cloud.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="chart" />
                      </span>
                      <div>
                        <b>{"Scalable & Flexible"}</b>
                        <span>Scale from single servers to thousands, on-demand.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="gear" />
                      </span>
                      <div>
                        <b>Intelligent Management</b>
                        <span>Automated provisioning, monitoring and lifecycle management.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="shield" />
                      </span>
                      <div>
                        <b>Secure by Design</b>
                        <span>Hardware root of trust, firmware protection and secure provisioning.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="leaf" />
                      </span>
                      <div>
                        <b>Energy Efficient</b>
                        <span>High performance with lower power consumption.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dx-ip-art">
                  <figure className="dx-fig tall">
                    <img src="/images/img-104-7a8af78754.jpg" alt="Server racks" loading="lazy" />
                  </figure>
                </div>
              </div>
              <div className="dx-metrics">
                <div className="dx-m">
                  <span>
                    <Icon name="server" />
                  </span>
                  <b>Latest Generation</b>
                  <small>Intel / AMD / ARM Platforms</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="trend" />
                  </span>
                  <b>High Performance</b>
                  <small>For AI, HPC and Enterprise</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="db" />
                  </span>
                  <b>High Density</b>
                  <small>Up to 2U/4U GPU Servers</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="leaf" />
                  </span>
                  <b>Lower TCO</b>
                  <small>Optimized for Sustainability</small>
                </div>
              </div>
            </div>
            <div role="tabpanel" id="inf-network" aria-labelledby="inf-network-t" className="dx-tp" hidden>
              <div className="dx-ip">
                <div className="dx-ip-copy">
                  <span className="dx-k">Connecting possibilities</span>
                  <h3>Network Infrastructure for a Connected Tomorrow</h3>
                  <p className="dx-lede">
                    Secure. Scalable. High-Performance. Enabling seamless connectivity across people, systems and
                    possibilities.
                  </p>
                  <div className="dx-fgrid">
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="trend" />
                      </span>
                      <div>
                        <b>High-Speed Connectivity</b>
                        <span>10/25/40/100/400G ready for today and tomorrow.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-line ">
                        <Icon name="cloud" />
                      </span>
                      <div>
                        <b>Data Center Interconnect (DCI)</b>
                        <span>Seamless multi-site connectivity</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="shield" />
                      </span>
                      <div>
                        <b>Secure by Design</b>
                        <span>Segmentation, next-gen firewalls and zero-trust architecture.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-line ">
                        <Icon name="net" />
                      </span>
                      <div>
                        <b>SDN / Network Automation</b>
                        <span>Agility and simplified operations</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="cloud" />
                      </span>
                      <div>
                        <b>Scalable Architecture</b>
                        <span>Modular, flexible and future-ready networking.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-line ">
                        <Icon name="lock" />
                      </span>
                      <div>
                        <b>{"Monitoring & Analytics"}</b>
                        <span>Proactive insights for optimal performance</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="gear" />
                      </span>
                      <div>
                        <b>High Availability</b>
                        <span>Redundant core, distribution and access layers.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-line ">
                        <Icon name="globe" />
                      </span>
                      <div>
                        <b>Global Connectivity</b>
                        <span>Reliable links to cloud and business ecosystems</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="chart" />
                      </span>
                      <div>
                        <b>Intelligent Management</b>
                        <span>Real-time monitoring, automation and analytics.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dx-ip-art">
                  <figure className="dx-fig ">
                    <img
                      src="/images/img-105-dff07754d5.jpg"
                      alt="Core, distribution and access network"
                      loading="lazy"
                    />
                  </figure>
                  <div className="dx-legend">
                    <span>
                      <i>Core</i>High Availability
                    </span>
                    <span>
                      <i>Distribution</i>
                      {"Resilient & Scalable"}
                    </span>
                    <span>
                      <i>Access</i>
                      {"To Servers, Storage & Applications"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="dx-metrics">
                <div className="dx-m">
                  <span>
                    <Icon name="trend" />
                  </span>
                  <b data-n="">99.999%</b>
                  <small>Network Availability</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="bolt" />
                  </span>
                  <b>Ultra-Low Latency</b>
                  <small>For Mission-Critical Workloads</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="net" />
                  </span>
                  <b>Multi-Site Connectivity</b>
                  <small>{"On-Prem, Cloud & Hybrid"}</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="shield" />
                  </span>
                  <b>{"Secure & Compliant"}</b>
                  <small>Aligned to Global Standards</small>
                </div>
              </div>
            </div>
            <div role="tabpanel" id="inf-storage" aria-labelledby="inf-storage-t" className="dx-tp" hidden>
              <div className="dx-ip">
                <div className="dx-ip-copy">
                  <span className="dx-k">Storage infrastructure</span>
                  <h3>Storage</h3>
                  <p className="dx-lede">
                    Secure, scalable and high-performance storage to power today's data and tomorrow's possibilities.
                  </p>
                  <div className="dx-fgrid">
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="db" />
                      </span>
                      <div>
                        <b>Multi-Protocol Support</b>
                        <span>Block, file and object storage for diverse workloads.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="gear" />
                      </span>
                      <div>
                        <b>Intelligent Management</b>
                        <span>Unified management, automation and analytics.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="layers" />
                      </span>
                      <div>
                        <b>Scalable Architecture</b>
                        <span>Scale from TB to PB with non-disruptive growth.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="leaf" />
                      </span>
                      <div>
                        <b>{"Efficient & Sustainable"}</b>
                        <span>Optimized storage technologies for lower power and higher density.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-blue ">
                        <Icon name="shield" />
                      </span>
                      <div>
                        <b>Data Protection</b>
                        <span>Snapshots, replication and multi-site disaster recovery.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="server" />
                      </span>
                      <div>
                        <b>Wide Range of Solutions</b>
                        <span>Enterprise SSD, HDD, All-Flash, Object Storage and Archive.</span>
                      </div>
                    </div>
                    <div className="dx-f">
                      <span className="dx-ic c-gold ">
                        <Icon name="cloud" />
                      </span>
                      <div>
                        <b>{"Hybrid & Cloud Ready"}</b>
                        <span>Seamless integration with on-prem, private and public cloud.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dx-ip-art">
                  <div className="dx-statement">
                    <span className="dx-pill dark">Reliable storage</span>
                    <b>For a data-driven tomorrow</b>
                    <div className="dx-quad">
                      <div>
                        <Icon name="trend" />
                        <span>High Performance</span>
                      </div>
                      <div>
                        <Icon name="net" />
                        <span>Flexible Deployment</span>
                      </div>
                      <div>
                        <Icon name="lock" />
                        <span>High Availability</span>
                      </div>
                      <div>
                        <Icon name="db" />
                        <span>Cost Efficient</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dx-metrics">
                <div className="dx-m">
                  <span>
                    <Icon name="db" />
                  </span>
                  <b>Petabyte-Scale Capacity</b>
                  <small>Built for growth</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="trend" />
                  </span>
                  <b>High Throughput</b>
                  <small>For critical applications</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="shield" />
                  </span>
                  <b>Always Available</b>
                  <small>Business continuity assured</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="leaf" />
                  </span>
                  <b>Optimized TCO</b>
                  <small>Performance with efficiency</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
