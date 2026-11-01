import React from "react";
import Icon from "../../../../../Component/Icon";

export default function OemSection() {
  return (
    <section className="dx ice" id="ai-oem">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">OEM ecosystem</span>
          <h2 className="dx-h">
            Global and Indian <span>AI partners</span>
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
                <small>Models</small>
                <b>OpenAI, Anthropic, Google Gemini, Meta Llama</b>
              </div>
              <div>
                <small>AI platforms</small>
                <b>Azure AI Foundry, AWS Bedrock, Vertex AI</b>
              </div>
              <div>
                <small>AI compute</small>
                <b>NVIDIA, AMD, Intel</b>
              </div>
              <div>
                <small>Automation</small>
                <b>UiPath, Automation Anywhere, Power Automate</b>
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
                <small>Indian LLMs</small>
                <b>Sarvam AI, BharatGen, Krutrim</b>
              </div>
              <div>
                <small>Conversational AI</small>
                <b>Yellow.ai, Haptik, Gupshup</b>
              </div>
              <div>
                <small>{"GPU cloud & servers"}</small>
                <b>Yotta, E2E Networks, Netweb</b>
              </div>
              <div>
                <small>Indian languages</small>
                <b>Bhashini, Sarvam</b>
              </div>
            </div>
          </div>
        </div>
        <div className="dx-callout">
          <Icon name="check" />
          <span>
            <b>Sovereign AI:</b> Indian models and GPU clouds keep data and inference in India.
          </span>
        </div>
      </div>
    </section>
  );
}
