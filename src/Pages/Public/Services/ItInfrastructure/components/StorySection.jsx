import React from "react";
import Icon from "../../../../../Component/Icon";

export default function StorySection() {
  return (
    <section className="dx ice ix-story" id="in-story">
      <div className="wrap ix-grid" data-tabs="">
        <div className="ix-rail" role="tablist" aria-orientation="vertical" aria-label="Infrastructure domains">
          <button type="button" role="tab" id="in-network-t" aria-controls="in-network" aria-selected="true">
            <Icon name="net" />
            <span>Network</span>
          </button>
          <button type="button" role="tab" id="in-security-t" aria-controls="in-security" aria-selected="false">
            <Icon name="shield" />
            <span>Security</span>
          </button>
          <button type="button" role="tab" id="in-server-t" aria-controls="in-server" aria-selected="false">
            <Icon name="server" />
            <span>Server</span>
          </button>
          <button type="button" role="tab" id="in-storage-t" aria-controls="in-storage" aria-selected="false">
            <Icon name="db" />
            <span>Storage</span>
          </button>
          <button type="button" role="tab" id="in-collab-t" aria-controls="in-collab" aria-selected="false">
            <Icon name="video" />
            <span>Collaboration</span>
          </button>
        </div>
        <div className="ix-main">
          <section className="ix-chapter" id="in-network" role="tabpanel" aria-labelledby="in-network-t">
            <div className="ix-ch-head">
              <div>
                <h2 className="dx-h">Network</h2>
                <p className="dx-lede">Core, edge, Wi-Fi, SDN and load balancing, designed as one layered network.</p>
                <div className="ix-chips">
                  <span>Core switching</span>
                  <span>Edge switching</span>
                  <span>Enterprise Wi-Fi</span>
                  <span>{"SDN & SD-WAN"}</span>
                  <span>Load balancers</span>
                  <span>Cabling</span>
                </div>
              </div>
            </div>
            <article className="ix-scene" id="in-net-arch">
              <header>
                <span className="dx-k">Enterprise network · Architecture</span>
                <h3>A layered network, end to end</h3>
              </header>
              <div className="ix-layers" data-reveal="">
                <div className="ix-layer" style={{ "--i": "0" }}>
                  <span className="ix-lic">
                    <Icon name="globe" />
                  </span>
                  <b>{"WAN & cloud edge"}</b>
                  <span>Internet, MPLS, SD-WAN, direct cloud links</span>
                  <i className="ix-pulse" />
                </div>
                <div className="ix-layer" style={{ "--i": "1" }}>
                  <span className="ix-lic">
                    <Icon name="shield" />
                  </span>
                  <b>Security perimeter</b>
                  <span>Firewalls, WAF, load balancers, DDoS</span>
                  <i className="ix-pulse" />
                </div>
                <div className="ix-layer" style={{ "--i": "2" }}>
                  <span className="ix-lic">
                    <Icon name="net" />
                  </span>
                  <b>Core</b>
                  <span>Redundant core, Layer 3, 40–400G uplinks</span>
                  <i className="ix-pulse" />
                </div>
                <div className="ix-layer" style={{ "--i": "3" }}>
                  <span className="ix-lic">
                    <Icon name="layers" />
                  </span>
                  <b>DC fabric</b>
                  <span>Spine-leaf VXLAN-EVPN; campus distribution</span>
                  <i className="ix-pulse" />
                </div>
                <div className="ix-layer" style={{ "--i": "4" }}>
                  <span className="ix-lic">
                    <Icon name="wifi" />
                  </span>
                  <b>{"Access & wireless"}</b>
                  <span>PoE switches, Wi-Fi 6E/7, 802.1X</span>
                  <i className="ix-pulse" />
                </div>
                <div className="ix-layer" style={{ "--i": "5" }}>
                  <span className="ix-lic">
                    <Icon name="chart" />
                  </span>
                  <b>Management</b>
                  <span>SDN controllers, flow analytics, 24x7 NOC</span>
                  <i className="ix-pulse" />
                </div>
              </div>
            </article>
            <article className="ix-scene" id="in-net-core">
              <header>
                <span className="dx-k">Enterprise network · Core switching</span>
                <h3>Core switching with no single point of failure</h3>
              </header>
              <div className="ix-split">
                <div className="ix-tiles c1" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="building" />
                    </span>
                    <b>Campus core</b>
                    <span>Chassis pairs linking buildings, DC and WAN</span>
                    <em>Catalyst 9500/9600 · Aruba CX · Juniper EX</em>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>Data center spine-leaf</b>
                    <span>VXLAN-EVPN at 25–400G, ready for 800G AI</span>
                    <em>Nexus 9000 · Arista 7000 · Juniper QFX</em>
                  </div>
                </div>
                <div className="ix-list dark">
                  <h4>Design principles</h4>
                  <ul>
                    <li>
                      <Icon name="check" />
                      Dual core: StackWise Virtual, VSX, MLAG
                    </li>
                    <li>
                      <Icon name="check" />
                      Redundant power and supervisors
                    </li>
                    <li>
                      <Icon name="check" />
                      OSPF / BGP, fast convergence
                    </li>
                    <li>
                      <Icon name="check" />
                      VRF segmentation: IT, OT, guest
                    </li>
                    <li>
                      <Icon name="check" />
                      Upgrades without downtime
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="ix-scene" id="in-net-edge">
              <header>
                <span className="dx-k">{"Enterprise network · Edge & wireless"}</span>
                <h3>Where people and machines connect</h3>
              </header>
              <div className="ix-tiles c4" data-reveal="">
                <div className="ix-tile" style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="net" />
                  </span>
                  <b>Access switches</b>
                  <span>Stackable PoE for phones, cameras, APs</span>
                  <em>Catalyst 9200/9300 · Aruba CX · Meraki</em>
                </div>
                <div className="ix-tile" style={{ "--i": "1" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="wifi" />
                  </span>
                  <b>Enterprise Wi-Fi</b>
                  <span>Wi-Fi 6E and Wi-Fi 7 from site surveys</span>
                  <em>Cisco · Juniper Mist · Aruba · Ruckus</em>
                </div>
                <div className="ix-tile" style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="key" />
                  </span>
                  <b>Network access control</b>
                  <span>802.1X, guest onboarding, IoT profiling</span>
                  <em>Cisco ISE · ClearPass · Forescout</em>
                </div>
                <div className="ix-tile dark" style={{ "--i": "3" }}>
                  <span className="dx-ic c-gold">
                    <Icon name="factory" />
                  </span>
                  <b>{"Industrial & OT edge"}</b>
                  <span>Rugged DIN-rail switches for plants</span>
                  <em>Cisco IE · Moxa · Hirschmann</em>
                </div>
              </div>
            </article>
            <article className="ix-scene" id="in-net-sdn">
              <header>
                <span className="dx-k">{"Enterprise network · SDN & SD-WAN"}</span>
                <h3>Software-defined networks</h3>
              </header>
              <div className="ix-duo">
                <div className="ix-card">
                  <span className="dx-ic c-blue">
                    <Icon name="layers" />
                  </span>
                  <h4>{"SDN: DC & campus"}</h4>
                  <ul>
                    <li>
                      <Icon name="check" />
                      Intent-based policy
                    </li>
                    <li>
                      <Icon name="check" />
                      Micro-segmentation
                    </li>
                    <li>
                      <Icon name="check" />
                      Zero-touch provisioning
                    </li>
                    <li>
                      <Icon name="check" />
                      Fabric-wide assurance
                    </li>
                  </ul>
                  <em>Cisco ACI · NSX · CloudVision · Apstra</em>
                </div>
                <div className="ix-card dark">
                  <span className="dx-ic c-gold">
                    <Icon name="globe" />
                  </span>
                  <h4>SD-WAN: branches</h4>
                  <ul>
                    <li>
                      <Icon name="check" />
                      App-aware path selection
                    </li>
                    <li>
                      <Icon name="check" />
                      Zero-touch branch rollout
                    </li>
                    <li>
                      <Icon name="check" />
                      Direct SaaS breakout
                    </li>
                    <li>
                      <Icon name="check" />
                      Ready for SASE / ZTNA
                    </li>
                  </ul>
                  <em>Cisco · Fortinet · Prisma · VeloCloud · Versa</em>
                </div>
              </div>
            </article>
            <article className="ix-scene" id="in-net-lb">
              <header>
                <span className="dx-k">Enterprise network · Load balancers</span>
                <h3>Applications that stay fast and available</h3>
              </header>
              <div className="ix-tiles c4" data-reveal="">
                <div className="ix-tile" style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="gear" />
                  </span>
                  <b>Local load balancing</b>
                  <span>L4/L7 with health checks and TLS offload</span>
                </div>
                <div className="ix-tile" style={{ "--i": "1" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="globe" />
                  </span>
                  <b>Global server LB</b>
                  <span>Active-active data centers and DR failover</span>
                </div>
                <div className="ix-tile" style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="cloud" />
                  </span>
                  <b>{"Cloud & Kubernetes"}</b>
                  <span>Cloud load balancers and ingress controllers</span>
                </div>
                <div className="ix-tile" style={{ "--i": "3" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="shield" />
                  </span>
                  <b>Secure delivery</b>
                  <span>Built-in WAF, bot defence, rate limits</span>
                </div>
              </div>
              <div className="ix-bar">
                <small>Platforms</small>
                <span>F5 BIG-IP · NetScaler · A10 · Radware · Kemp · NGINX · HAProxy</span>
              </div>
            </article>
          </section>
          <section className="ix-chapter" id="in-security" role="tabpanel" aria-labelledby="in-security-t" hidden>
            <div className="ix-ch-head">
              <div>
                <h2 className="dx-h">Security</h2>
                <p className="dx-lede">
                  Firewalls, WAF and zero trust at every boundary, from the internet edge to the plant.
                </p>
                <div className="ix-chips">
                  <span>Firewalls</span>
                  <span>{"WAF & API"}</span>
                  <span>{"ZTNA & SASE"}</span>
                  <span>Access control</span>
                  <span>Segmentation</span>
                  <span>DDoS defence</span>
                </div>
              </div>
            </div>
            <article className="ix-scene" id="in-sec-fw">
              <header>
                <span className="dx-k">Security · Next-generation firewalls</span>
                <h3>Firewalls at every boundary</h3>
              </header>
              <div className="ix-split rev">
                <div className="ix-list dark">
                  <h4>NGFW capabilities</h4>
                  <ul>
                    <li>
                      <Icon name="check" />
                      App and user awareness
                    </li>
                    <li>
                      <Icon name="check" />
                      Intrusion prevention
                    </li>
                    <li>
                      <Icon name="check" />
                      URL and DNS filtering
                    </li>
                    <li>
                      <Icon name="check" />
                      Sandboxing
                    </li>
                    <li>
                      <Icon name="check" />
                      TLS inspection
                    </li>
                    <li>
                      <Icon name="check" />
                      HA, central policy
                    </li>
                  </ul>
                </div>
                <div className="ix-tiles c2" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="globe" />
                    </span>
                    <b>Internet edge</b>
                    <span>Perimeter, VPN, safe internet</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="server" />
                    </span>
                    <b>Data center</b>
                    <span>East-west segmentation</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="factory" />
                    </span>
                    <b>{"Branch & OT"}</b>
                    <span>Plant networks kept apart from IT</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cloud" />
                    </span>
                    <b>Public cloud</b>
                    <span>Virtual NGFW on AWS, Azure, GCP</span>
                  </div>
                </div>
              </div>
              <div className="ix-bar">
                <small>Platforms</small>
                <span>Palo Alto · FortiGate · Check Point · Cisco Secure Firewall · Sophos</span>
              </div>
            </article>
            <article className="ix-scene" id="in-sec-waf">
              <header>
                <span className="dx-k">Security · Web application firewall</span>
                <h3>Protecting web apps and APIs</h3>
              </header>
              <div className="ix-split">
                <div className="ix-threats">
                  <h4>Threats we stop</h4>
                  <div style={{ "--i": "0" }}>
                    <i>
                      <Icon name="x" />
                    </i>
                    <span>OWASP Top 10: SQLi, XSS</span>
                  </div>
                  <div style={{ "--i": "1" }}>
                    <i>
                      <Icon name="x" />
                    </i>
                    <span>API abuse and scraping</span>
                  </div>
                  <div style={{ "--i": "2" }}>
                    <i>
                      <Icon name="x" />
                    </i>
                    <span>Bots, credential stuffing</span>
                  </div>
                  <div style={{ "--i": "3" }}>
                    <i>
                      <Icon name="x" />
                    </i>
                    <span>Layer 7 DDoS floods</span>
                  </div>
                  <div style={{ "--i": "4" }}>
                    <i>
                      <Icon name="x" />
                    </i>
                    <span>Unpatched app flaws</span>
                  </div>
                </div>
                <div className="ix-tiles c1" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cloud" />
                    </span>
                    <b>Cloud WAAP</b>
                    <span>Cloudflare · Akamai · Imperva · AWS WAF</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="server" />
                    </span>
                    <b>On-premises</b>
                    <span>F5 Advanced WAF · FortiWeb · Barracuda</span>
                  </div>
                  <div className="ix-tile dark" style={{ "--i": "2" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="layers" />
                    </span>
                    <b>Container-native</b>
                    <span>NGINX App Protect · F5 Distributed Cloud</span>
                  </div>
                </div>
              </div>
            </article>
            <article className="ix-scene" id="in-sec-zt">
              <header>
                <span className="dx-k">Security · Zero trust network access</span>
                <h3>Verify every user, device and request</h3>
              </header>
              <div className="ix-zt" data-reveal="">
                <div className="ix-zs" style={{ "--i": "0" }}>
                  <Icon name="laptop" />
                  <b>{"User & device"}</b>
                  <span>Anywhere</span>
                </div>
                <div className="ix-zs" style={{ "--i": "1" }}>
                  <Icon name="key" />
                  <b>Identity check</b>
                  <span>SSO, MFA, health</span>
                </div>
                <div className="ix-zs" style={{ "--i": "2" }}>
                  <Icon name="shield" />
                  <b>Policy broker</b>
                  <span>Least privilege</span>
                </div>
                <div className="ix-zs end" style={{ "--i": "3" }}>
                  <Icon name="apps" />
                  <b>One app</b>
                  <span>Not the network</span>
                </div>
                <i className="ix-zdot" aria-hidden="true" />
              </div>
              <div className="ix-vs">
                <div className="ix-vs-h">
                  <span />
                  <b>Traditional VPN</b>
                  <b className="z">ZTNA / SASE</b>
                </div>
                <div>
                  <span>Access</span>
                  <p>Whole network</p>
                  <p className="z">Specific apps only</p>
                </div>
                <div>
                  <span>Trust</span>
                  <p>Once connected</p>
                  <p className="z">Every request</p>
                </div>
                <div>
                  <span>Experience</span>
                  <p>Backhauled, slow</p>
                  <p className="z">Direct, nearest edge</p>
                </div>
              </div>
              <div className="ix-bar">
                <small>Platforms</small>
                <span>Zscaler · Prisma Access · Netskope · Cloudflare One · FortiSASE</span>
              </div>
            </article>
          </section>
          <section className="ix-chapter" id="in-server" role="tabpanel" aria-labelledby="in-server-t" hidden>
            <div className="ix-ch-head">
              <div>
                <h2 className="dx-h">Server</h2>
                <p className="dx-lede">
                  Rack, blade, HCI and edge servers, virtualization, HPC and AI-ready GPU platforms.
                </p>
                <div className="ix-chips">
                  <span>{"Servers & HCI"}</span>
                  <span>Virtualization</span>
                  <span>HPC clusters</span>
                  <span>AI / GPU servers</span>
                </div>
              </div>
            </div>
            <article className="ix-scene" id="in-srv-servers">
              <header>
                <span className="dx-k">Data center · Servers</span>
                <h3>Servers sized for every workload</h3>
              </header>
              <div className="ix-servers" data-reveal="">
                <div className="ix-srv" style={{ "--i": "0" }}>
                  <span className="ix-rack rack" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <b>Rack servers</b>
                  <span>ERP, databases and virtualization</span>
                  <em>Dell PowerEdge · HPE ProLiant · Lenovo · Cisco UCS</em>
                </div>
                <div className="ix-srv" style={{ "--i": "1" }}>
                  <span className="ix-rack blade" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <b>{"Blade & modular"}</b>
                  <span>High density, shared power and fabric</span>
                  <em>HPE Synergy · Dell MX · Cisco UCS X</em>
                </div>
                <div className="ix-srv" style={{ "--i": "2" }}>
                  <span className="ix-rack hci" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <b>Hyperconverged</b>
                  <span>One cluster that grows node by node</span>
                  <em>Nutanix · Dell VxRail · Azure Local</em>
                </div>
                <div className="ix-srv" style={{ "--i": "3" }}>
                  <span className="ix-rack edge" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                  <b>{"Edge & plant"}</b>
                  <span>Rugged servers for branches and MES</span>
                  <em>Dell XR · HPE Edgeline · ThinkEdge</em>
                </div>
              </div>
              <div className="ix-bar">
                <small>We deliver</small>
                <span>sizing · rack, power and cooling design · firmware lifecycle · hardware refresh</span>
              </div>
            </article>
            <article className="ix-scene" id="in-srv-virt">
              <header>
                <span className="dx-k">Data center · Virtualization</span>
                <h3>Virtualization and private cloud</h3>
              </header>
              <div className="ix-tiles c2" data-reveal="">
                <div className="ix-tile" style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="server" />
                  </span>
                  <b>Server virtualization</b>
                  <span>Clustered hypervisors with HA and live migration</span>
                  <em>VMware VCF · Hyper-V · Nutanix AHV · Proxmox</em>
                </div>
                <div className="ix-tile" style={{ "--i": "1" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="layers" />
                  </span>
                  <b>Containers</b>
                  <span>VMs and containers side by side on Kubernetes</span>
                  <em>Red Hat OpenShift · Rancher · AKS / EKS</em>
                </div>
                <div className="ix-tile" style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="laptop" />
                  </span>
                  <b>{"VDI & DaaS"}</b>
                  <span>Secure desktops for remote and branch staff</span>
                  <em>Citrix · Omnissa Horizon · AVD · Windows 365</em>
                </div>
                <div className="ix-tile dark" style={{ "--i": "3" }}>
                  <span className="dx-ic c-gold">
                    <Icon name="arrow" />
                  </span>
                  <b>Hypervisor migration</b>
                  <span>Licensing review and low-downtime moves</span>
                  <em>VMware → Nutanix, Hyper-V, OpenShift</em>
                </div>
              </div>
            </article>
            <article className="ix-scene" id="in-srv-hpc">
              <header>
                <span className="dx-k">Data center · High-performance computing</span>
                <h3>HPC clusters built layer by layer</h3>
              </header>
              <div className="ix-hpc" data-reveal="">
                <div style={{ "--i": "5" }}>
                  <b>Applications</b>
                  <span>ANSYS, Abaqus, OpenFOAM, GROMACS</span>
                </div>
                <div style={{ "--i": "4" }}>
                  <b>Scheduling</b>
                  <span>Slurm, PBS Pro, Base Command Manager</span>
                </div>
                <div style={{ "--i": "3" }}>
                  <b>Parallel storage</b>
                  <span>Lustre, IBM Storage Scale, BeeGFS, WEKA</span>
                </div>
                <div style={{ "--i": "2" }}>
                  <b>Interconnect</b>
                  <span>InfiniBand NDR/XDR, RoCE 200–800G</span>
                </div>
                <div style={{ "--i": "1" }}>
                  <b>Compute</b>
                  <span>CPU, GPU and high-memory nodes</span>
                </div>
                <div style={{ "--i": "0" }}>
                  <b>Facility</b>
                  <span>High-density power, liquid cooling</span>
                </div>
              </div>
              <div className="ix-bar">
                <small>For</small>
                <span>CAE/CFD simulation · EDA · genomics · weather and energy models</span>
              </div>
            </article>
            <article className="ix-scene" id="in-srv-ai">
              <header>
                <span className="dx-k">Data center · AI infrastructure</span>
                <h3>AI-ready infrastructure</h3>
              </header>
              <div className="ix-tiles c2" data-reveal="">
                <div className="ix-tile" style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="cpu" />
                  </span>
                  <b>GPU servers</b>
                  <span>8-GPU NVIDIA HGX training systems; inference servers</span>
                  <em>Dell XE · HPE · Lenovo · Supermicro</em>
                </div>
                <div className="ix-tile" style={{ "--i": "1" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="net" />
                  </span>
                  <b>{"Fabric & storage"}</b>
                  <span>400/800G GPU fabric, fast NVMe file systems</span>
                  <em>InfiniBand · Spectrum-X · WEKA · VAST</em>
                </div>
                <div className="ix-tile" style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="ai" />
                  </span>
                  <b>AI software stack</b>
                  <span>GPU scheduling, MLOps, private LLM hosting</span>
                  <em>NVIDIA AI Enterprise · OpenShift AI · vLLM</em>
                </div>
                <div className="ix-tile dark" style={{ "--i": "3" }}>
                  <span className="dx-ic c-gold">
                    <Icon name="bolt" />
                  </span>
                  <b>{"Power & cooling"}</b>
                  <span>High-density racks, direct liquid cooling</span>
                  <em>Readiness audit · PDU and UPS sizing</em>
                </div>
              </div>
              <div className="ix-bar">
                <small>Use cases</small>
                <span>private GenAI · vision inspection · predictive maintenance · document AI</span>
              </div>
            </article>
          </section>
          <section className="ix-chapter" id="in-storage" role="tabpanel" aria-labelledby="in-storage-t" hidden>
            <div className="ix-ch-head">
              <div>
                <h2 className="dx-h">Storage</h2>
                <p className="dx-lede">
                  The right tier for each type of data, protected by ransomware-resilient backup and tested DR.
                </p>
                <div className="ix-chips">
                  <span>{"Storage & SAN"}</span>
                  <span>Object storage</span>
                  <span>{"Backup & DR"}</span>
                </div>
              </div>
            </div>
            <article className="ix-scene" id="in-sto-tiers">
              <header>
                <span className="dx-k">Data center · Storage</span>
                <h3>The right storage tier for each type of data</h3>
              </header>
              <div className="ix-tiers" data-tabs="">
                <div className="ix-tier-l" role="tablist" aria-label="Storage tiers">
                  <button type="button" role="tab" id="ixt-0-t" aria-controls="ixt-0" aria-selected="true">
                    <Icon name="bolt" />
                    <b>All-flash SAN</b>
                  </button>
                  <button type="button" role="tab" id="ixt-1-t" aria-controls="ixt-1" aria-selected="false">
                    <Icon name="doc" />
                    <b>Unified / NAS</b>
                  </button>
                  <button type="button" role="tab" id="ixt-2-t" aria-controls="ixt-2" aria-selected="false">
                    <Icon name="cloud" />
                    <b>Object (S3)</b>
                  </button>
                  <button type="button" role="tab" id="ixt-3-t" aria-controls="ixt-3" aria-selected="false">
                    <Icon name="layers" />
                    <b>Software-defined</b>
                  </button>
                  <button type="button" role="tab" id="ixt-4-t" aria-controls="ixt-4" aria-selected="false">
                    <Icon name="net" />
                    <b>SAN fabric</b>
                  </button>
                </div>
                <div className="ix-tier-p">
                  <div role="tabpanel" id="ixt-0" aria-labelledby="ixt-0-t">
                    <span className="dx-k">Tier</span>
                    <h4>All-flash SAN</h4>
                    <dl>
                      <div>
                        <dt>Best for</dt>
                        <dd>Databases, SAP HANA, VMs</dd>
                      </div>
                      <div>
                        <dt>Platforms</dt>
                        <dd>PowerStore · Alletra · NetApp AFF · Pure</dd>
                      </div>
                    </dl>
                  </div>
                  <div role="tabpanel" id="ixt-1" aria-labelledby="ixt-1-t" hidden>
                    <span className="dx-k">Tier</span>
                    <h4>Unified / NAS</h4>
                    <dl>
                      <div>
                        <dt>Best for</dt>
                        <dd>File shares, PLM vaults</dd>
                      </div>
                      <div>
                        <dt>Platforms</dt>
                        <dd>NetApp FAS · Dell PowerScale</dd>
                      </div>
                    </dl>
                  </div>
                  <div role="tabpanel" id="ixt-2" aria-labelledby="ixt-2-t" hidden>
                    <span className="dx-k">Tier</span>
                    <h4>Object (S3)</h4>
                    <dl>
                      <div>
                        <dt>Best for</dt>
                        <dd>Backups, archives, AI data</dd>
                      </div>
                      <div>
                        <dt>Platforms</dt>
                        <dd>ObjectScale · StorageGRID · MinIO</dd>
                      </div>
                    </dl>
                  </div>
                  <div role="tabpanel" id="ixt-3" aria-labelledby="ixt-3-t" hidden>
                    <span className="dx-k">Tier</span>
                    <h4>Software-defined</h4>
                    <dl>
                      <div>
                        <dt>Best for</dt>
                        <dd>Scale-out private cloud</dd>
                      </div>
                      <div>
                        <dt>Platforms</dt>
                        <dd>Nutanix · vSAN · Ceph</dd>
                      </div>
                    </dl>
                  </div>
                  <div role="tabpanel" id="ixt-4" aria-labelledby="ixt-4-t" hidden>
                    <span className="dx-k">Tier</span>
                    <h4>SAN fabric</h4>
                    <dl>
                      <div>
                        <dt>Best for</dt>
                        <dd>32/64G FC and NVMe-oF</dd>
                      </div>
                      <div>
                        <dt>Platforms</dt>
                        <dd>Brocade · Cisco MDS</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="ix-bar">
                <small>Services</small>
                <span>capacity planning · data migration · replication · cloud tiering</span>
              </div>
            </article>
            <article className="ix-scene" id="in-sto-backup">
              <header>
                <span className="dx-k">{"Data center · Backup & DR"}</span>
                <h3>Ransomware-resilient backup: 3-2-1-1-0</h3>
              </header>
              <div className="ix-rule" data-reveal="">
                <div style={{ "--i": "0" }}>
                  <b>3</b>
                  <span>copies of data</span>
                </div>
                <div style={{ "--i": "1" }}>
                  <b>2</b>
                  <span>types of media</span>
                </div>
                <div style={{ "--i": "2" }}>
                  <b>1</b>
                  <span>copy offsite</span>
                </div>
                <div style={{ "--i": "3" }}>
                  <b>1</b>
                  <span>immutable copy</span>
                </div>
                <div style={{ "--i": "4" }}>
                  <b>0</b>
                  <span>restore errors</span>
                </div>
              </div>
              <div className="ix-tiles c3" data-reveal="">
                <div className="ix-tile" style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="db" />
                  </span>
                  <b>{"Backup & recovery"}</b>
                  <span>VMs, databases, files, Kubernetes</span>
                  <em>Veeam · Commvault · Cohesity · Rubrik</em>
                </div>
                <div className="ix-tile" style={{ "--i": "1" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="cloud" />
                  </span>
                  <b>{"SaaS & cloud"}</b>
                  <span>Microsoft 365, Workspace, cloud VMs</span>
                  <em>Druva · Veeam · AWS / Azure Backup</em>
                </div>
                <div className="ix-tile" style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="gear" />
                  </span>
                  <b>{"DR & DRaaS"}</b>
                  <span>Replication with tested RPO/RTO</span>
                  <em>Zerto · Azure Site Recovery</em>
                </div>
              </div>
            </article>
          </section>
          <section className="ix-chapter" id="in-collab" role="tabpanel" aria-labelledby="in-collab-t" hidden>
            <div className="ix-ch-head">
              <div>
                <h2 className="dx-h">Collaboration</h2>
                <p className="dx-lede">
                  Suites, video rooms and boardrooms that start with one touch, plus secure BYOD and BYOM.
                </p>
                <div className="ix-chips">
                  <span>Teams</span>
                  <span>Google Workspace</span>
                  <span>{"Webex & Zoom"}</span>
                  <span>Video rooms</span>
                  <span>Boardroom AV</span>
                  <span>{"BYOD & BYOM"}</span>
                </div>
              </div>
            </div>
            <article className="ix-scene" id="in-col-suites">
              <header>
                <span className="dx-k">Digital workplace · Collaboration</span>
                <h3>Collaboration suites, deployed and governed</h3>
              </header>
              <div className="ix-tiles c4" data-reveal="">
                <div className="ix-tile" style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="users" />
                  </span>
                  <b>Microsoft Teams</b>
                  <span>Teams Phone, Teams Rooms, Purview governance</span>
                </div>
                <div className="ix-tile" style={{ "--i": "1" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="mail" />
                  </span>
                  <b>Google Workspace</b>
                  <span>Gmail, Meet, Drive, Vault, Meet rooms</span>
                </div>
                <div className="ix-tile" style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="video" />
                  </span>
                  <b>Cisco Webex</b>
                  <span>Webex Suite, Calling, room devices</span>
                </div>
                <div className="ix-tile" style={{ "--i": "3" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="headset" />
                  </span>
                  <b>Zoom</b>
                  <span>Zoom Workplace, Phone and Rooms</span>
                </div>
              </div>
              <div className="ix-bar">
                <small>Services</small>
                <span>migration · tenant security · licence optimization · interop · adoption</span>
              </div>
            </article>
            <article className="ix-scene" id="in-col-video">
              <header>
                <span className="dx-k">Digital workplace · Video conferencing</span>
                <h3>Video rooms sized to the space</h3>
              </header>
              <div className="ix-rooms" data-reveal="">
                <div style={{ "--i": "0" }}>
                  <span className="ix-seats" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <b>Huddle</b>
                  <em>2–4 seats</em>
                  <span>All-in-one video bar, one display</span>
                </div>
                <div style={{ "--i": "1" }}>
                  <span className="ix-seats" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <b>Medium</b>
                  <em>5–10 seats</em>
                  <span>Video bar, extra mics, dual displays</span>
                </div>
                <div style={{ "--i": "2" }}>
                  <span className="ix-seats" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <b>Large</b>
                  <em>10–20 seats</em>
                  <span>PTZ cameras, ceiling mics, DSP</span>
                </div>
                <div style={{ "--i": "3" }}>
                  <span className="ix-seats" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <b>Boardroom</b>
                  <em>12+ seats</em>
                  <span>Speaker tracking, full room control</span>
                </div>
              </div>
              <div className="ix-duo2">
                <div className="ix-bar">
                  <small>Platforms</small>
                  <span>Teams Rooms · Meet · Zoom Rooms · Webex</span>
                </div>
                <div className="ix-bar">
                  <small>Endpoints</small>
                  <span>Cisco · Poly · Logitech · Yealink · Neat</span>
                </div>
              </div>
            </article>
            <article className="ix-scene" id="in-col-board">
              <header>
                <span className="dx-k">Digital workplace · Boardroom solutions</span>
                <h3>Boardrooms that start with one touch</h3>
              </header>
              <div className="ix-tiles c3" data-reveal="">
                <div className="ix-tile" style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="laptop" />
                  </span>
                  <b>Displays</b>
                  <span>LED walls, 4K and interactive panels</span>
                </div>
                <div className="ix-tile" style={{ "--i": "1" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="radio" />
                  </span>
                  <b>{"Audio & DSP"}</b>
                  <span>Ceiling mics: Shure, Biamp, Q-SYS</span>
                </div>
                <div className="ix-tile" style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="video" />
                  </span>
                  <b>Cameras</b>
                  <span>Speaker tracking, auto-framing</span>
                </div>
                <div className="ix-tile" style={{ "--i": "3" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="gear" />
                  </span>
                  <b>Control</b>
                  <span>One-touch join: Crestron, Extron</span>
                </div>
                <div className="ix-tile" style={{ "--i": "4" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="wifi" />
                  </span>
                  <b>Wireless sharing</b>
                  <span>ClickShare, AirMedia</span>
                </div>
                <div className="ix-tile" style={{ "--i": "5" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="layout" />
                  </span>
                  <b>Scheduling</b>
                  <span>Booking panels, occupancy</span>
                </div>
              </div>
              <ol className="ix-chev">
                <li>Survey</li>
                <li>Design</li>
                <li>Install</li>
                <li>Handover</li>
                <li>Support</li>
              </ol>
            </article>
            <article className="ix-scene" id="in-col-byod">
              <header>
                <span className="dx-k">{"Digital workplace · BYOD & BYOM"}</span>
                <h3>Bring your own device, bring your own meeting</h3>
              </header>
              <div className="ix-duo">
                <div className="ix-card">
                  <span className="dx-ic c-blue">
                    <Icon name="laptop" />
                  </span>
                  <h4>BYOD: own device</h4>
                  <ul>
                    <li>
                      <Icon name="check" />
                      Endpoint management
                    </li>
                    <li>
                      <Icon name="check" />
                      Work data kept separate
                    </li>
                    <li>
                      <Icon name="check" />
                      Access by device health
                    </li>
                    <li>
                      <Icon name="check" />
                      Wipe company data only
                    </li>
                  </ul>
                  <em>Intune · Workspace ONE · Jamf</em>
                </div>
                <div className="ix-card dark">
                  <span className="dx-ic c-gold">
                    <Icon name="video" />
                  </span>
                  <h4>BYOM: own meeting</h4>
                  <ul>
                    <li>
                      <Icon name="check" />
                      Laptop uses room camera
                    </li>
                    <li>
                      <Icon name="check" />
                      One cable or wireless
                    </li>
                    <li>
                      <Icon name="check" />
                      Any platform: Teams, Zoom
                    </li>
                    <li>
                      <Icon name="check" />
                      No room PC licence
                    </li>
                  </ul>
                  <em>ClickShare · Logitech Swytch · Yealink</em>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}
