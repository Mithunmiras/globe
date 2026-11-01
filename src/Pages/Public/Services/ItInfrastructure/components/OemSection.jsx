import React from "react";
import Icon from "../../../../../Component/Icon";

export default function OemSection() {
  return (
    <section className="dx ice" id="in-oem">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">OEM ecosystem</span>
          <h2 className="dx-h">
            Global and Indian <span>technology OEMs</span>
          </h2>
        </div>
        <div className="dx-oem" data-reveal="">
          <div className="dx-oem-c">
            <h4>
              <Icon name="globe" />
              Global OEMs
            </h4>
            <div className="dx-oem-g">
              <div>
                <small>{"Servers & AI"}</small>
                <b>Dell, HPE, Lenovo, Cisco, Supermicro, NVIDIA</b>
              </div>
              <div>
                <small>{"Storage & backup"}</small>
                <b>NetApp, Dell, Pure Storage, HPE, Veeam, Commvault</b>
              </div>
              <div>
                <small>Virtualization</small>
                <b>VMware by Broadcom, Nutanix, Hyper-V, Red Hat</b>
              </div>
              <div>
                <small>Networking</small>
                <b>{"Cisco, HPE Aruba & Juniper, Arista, Extreme, F5"}</b>
              </div>
              <div>
                <small>Security</small>
                <b>Palo Alto, Fortinet, Check Point, Zscaler, Cloudflare</b>
              </div>
              <div>
                <small>Collaboration</small>
                <b>Microsoft, Google, Webex, Zoom, Poly, Logitech, Crestron</b>
              </div>
            </div>
          </div>
          <div className="dx-oem-c in">
            <h4>
              <Icon name="pin" />
              {"Indian & India-founded"}
            </h4>
            <div className="dx-oem-g">
              <div>
                <small>{"Servers, HPC & AI"}</small>
                <b>Netweb Technologies (Tyrone), VVDN</b>
              </div>
              <div>
                <small>{"Networking & optical"}</small>
                <b>HFCL, Tejas Networks, STL</b>
              </div>
              <div>
                <small>Security</small>
                <b>Seqrite, InstaSafe ZTNA, Indusface AppTrana, Haltdos</b>
              </div>
              <div>
                <small>{"Backup & data"}</small>
                <b>Parablu, Vembu</b>
              </div>
              <div>
                <small>Collaboration</small>
                <b>Zoho Workplace, JioMeet</b>
              </div>
              <div>
                <small>{"Comms & surveillance"}</small>
                <b>Matrix Comsec, CP Plus</b>
              </div>
            </div>
          </div>
        </div>
        <div className="dx-callout">
          <Icon name="check" />
          <span>
            <b>OEM-neutral design:</b> we pick the best fit per layer, not one vendor for everything.{" "}
            <b>Make in India:</b> Indian OEMs help meet Preference to Make in India rules in government and PSU tenders.
          </span>
        </div>
      </div>
    </section>
  );
}
