import React from "react";
import Icon from "../../../../../Component/Icon";

export default function StorySection() {
  return (
    <section className="dx ice ix-story" id="ai-story">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Capabilities</span>
          <h2 className="dx-h">
            Built safely into <span>how your business runs</span>
          </h2>
          <p className="dx-lede">Choose a capability on the left — the detail opens alongside.</p>
        </div>
        <div className="ix-grid" data-tabs="">
          <div className="ix-rail" role="tablist" aria-orientation="vertical" aria-label="Capabilities">
            <button type="button" role="tab" id="ai-strategy-t" aria-controls="ai-strategy" aria-selected="true">
              <Icon name="compass" />
              <span>{"Strategy & data"}</span>
            </button>
            <button type="button" role="tab" id="ai-genai-t" aria-controls="ai-genai" aria-selected="false">
              <Icon name="ai" />
              <span>Generative AI</span>
            </button>
            <button type="button" role="tab" id="ai-agents-t" aria-controls="ai-agents" aria-selected="false">
              <Icon name="spark" />
              <span>AI agents</span>
            </button>
            <button type="button" role="tab" id="ai-ml-t" aria-controls="ai-ml" aria-selected="false">
              <Icon name="chart" />
              <span>Machine learning</span>
            </button>
            <button type="button" role="tab" id="ai-auto-t" aria-controls="ai-auto" aria-selected="false">
              <Icon name="gear" />
              <span>Automation</span>
            </button>
            <button type="button" role="tab" id="ai-aiops-t" aria-controls="ai-aiops" aria-selected="false">
              <Icon name="server" />
              <span>AIOps</span>
            </button>
            <button type="button" role="tab" id="ai-responsible-t" aria-controls="ai-responsible" aria-selected="false">
              <Icon name="shield" />
              <span>Responsible AI</span>
            </button>
            <button type="button" role="tab" id="ai-run-t" aria-controls="ai-run" aria-selected="false">
              <Icon name="cpu" />
              <span>Where AI runs</span>
            </button>
          </div>
          <div className="ix-main">
            <section className="ix-chapter" id="ai-strategy" role="tabpanel" aria-labelledby="ai-strategy-t">
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Strategy & data"}</h2>
                  <p className="dx-lede">
                    Choosing the AI projects to do first — and the data foundations they depend on.
                  </p>
                  <div className="ix-chips">
                    <span>Readiness</span>
                    <span>Use-case scoring</span>
                    <span>Data platforms</span>
                    <span>Governance</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ai-st">
                <header>
                  <span className="dx-k">AI strategy</span>
                  <h3>Choosing the AI projects to do first</h3>
                </header>
                <div className="ai-2">
                  <div className="ix-list dark">
                    <h4>AI readiness assessment</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        Business goals and pain points
                      </li>
                      <li>
                        <Icon name="check" />
                        Data availability and quality
                      </li>
                      <li>
                        <Icon name="check" />
                        Skills, tools, infrastructure
                      </li>
                      <li>
                        <Icon name="check" />
                        Risk, privacy, compliance
                      </li>
                      <li>
                        <Icon name="check" />
                        Roadmap and business case
                      </li>
                    </ul>
                  </div>
                  <div className="dx-matrix" data-reveal="">
                    <div className="q1">
                      <b>Strategic bets</b>
                      <span>High value, harder to build</span>
                    </div>
                    <div className="q2 hot">
                      <b>Quick wins — start here</b>
                      <span>High value, easy to build</span>
                    </div>
                    <div className="q3">
                      <b>Avoid</b>
                      <span>Low value, hard to build</span>
                    </div>
                    <div className="q4">
                      <b>Fill-ins</b>
                      <span>Low value, easy to build</span>
                    </div>
                    <small className="ax">← Harder to build · Easier to build →</small>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="ai-data">
                <header>
                  <span className="dx-k">Data foundations</span>
                  <h3>AI is only as good as its data</h3>
                </header>
                <div className="ix-tiles c2" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="db" />
                    </span>
                    <b>Data platforms</b>
                    <span>One governed place for ERP, CRM, plant and IoT data</span>
                    <em>Microsoft Fabric · Databricks · Snowflake · BigQuery</em>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="arrow" />
                    </span>
                    <b>Pipelines</b>
                    <span>Automated, monitored data flows from source systems</span>
                    <em>Data Factory · Fivetran · Airflow · SAP Datasphere</em>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="eye" />
                    </span>
                    <b>{"Search & vectors"}</b>
                    <span>Indexes that let AI find the right document passage</span>
                    <em>Azure AI Search · OpenSearch · pgvector</em>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="shield" />
                    </span>
                    <b>Governance</b>
                    <span>Catalogue, lineage, quality rules, access control</span>
                    <em>Microsoft Purview · Unity Catalog</em>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ai-genai" role="tabpanel" aria-labelledby="ai-genai-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Generative AI</h2>
                  <p className="dx-lede">
                    The right model for each job, knowledge assistants with cited answers, and copilots rolled out
                    safely.
                  </p>
                  <div className="ix-chips">
                    <span>Models</span>
                    <span>RAG</span>
                    <span>Copilots</span>
                    <span>Indian languages</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ai-models">
                <header>
                  <span className="dx-k">Models</span>
                  <h3>The right model for each job</h3>
                </header>
                <div className="dx-tbl2" data-reveal="">
                  <table>
                    <thead>
                      <tr>
                        <th>Route</th>
                        <th>Models</th>
                        <th>Best for</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>Microsoft Foundry</b>
                        </td>
                        <td>OpenAI GPT and partner models</td>
                        <td>Microsoft-centric firms</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Amazon Bedrock</b>
                        </td>
                        <td>Claude, Llama, Mistral, Nova</td>
                        <td>AWS customers</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Google Vertex AI</b>
                        </td>
                        <td>Gemini and partner models</td>
                        <td>Google Cloud users</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Self-hosted</b>
                        </td>
                        <td>Llama, Mistral, Qwen, Gemma</td>
                        <td>Data that must stay in-house</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Indian-language</b>
                        </td>
                        <td>Sarvam AI, Indic open models</td>
                        <td>Hindi and regional users</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="ix-bar">
                  <small>Swappable</small>
                  <span>
                    Built with an abstraction layer, so models can be swapped as better or cheaper ones arrive.
                  </span>
                </div>
              </article>
              <article className="ix-scene" id="ai-ka">
                <header>
                  <span className="dx-k">Knowledge assistants</span>
                  <h3>Ask your documents, get cited answers</h3>
                </header>
                <div className="ix-zt n5" data-reveal="">
                  <div className="ix-zs" style={{ "--i": "0" }}>
                    <Icon name="inbox" />
                    <b>Sources</b>
                    <span>SharePoint, ERP, PLM</span>
                  </div>
                  <div className="ix-zs" style={{ "--i": "1" }}>
                    <Icon name="upload" />
                    <b>Ingest</b>
                    <span>Split, tag access</span>
                  </div>
                  <div className="ix-zs" style={{ "--i": "2" }}>
                    <Icon name="db" />
                    <b>Index</b>
                    <span>Vector search</span>
                  </div>
                  <div className="ix-zs" style={{ "--i": "3" }}>
                    <Icon name="lock" />
                    <b>Retrieve</b>
                    <span>Permitted text only</span>
                  </div>
                  <div className="ix-zs end" style={{ "--i": "4" }}>
                    <Icon name="doc" />
                    <b>Answer</b>
                    <span>With source links</span>
                  </div>
                  <i className="ix-zdot" aria-hidden="true" />
                </div>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="lock" />
                    </span>
                    <b>Permission-aware</b>
                    <span>Answers only from documents the user can already open</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="doc" />
                    </span>
                    <b>Cited answers</b>
                    <span>Every answer links back to its source for checking</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="check" />
                    </span>
                    <b>{"Tested & monitored"}</b>
                    <span>Accuracy test sets, guardrails, usage dashboards</span>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="ai-cop">
                <header>
                  <span className="dx-k">Copilots</span>
                  <h3>Copilots rolled out safely and used</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="mail" />
                    </span>
                    <b>Microsoft 365 Copilot</b>
                    <span>AI in Outlook, Teams, Word, Excel and PowerPoint</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="doc" />
                    </span>
                    <b>Gemini for Workspace</b>
                    <span>AI in Gmail, Docs, Sheets and Meet</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="users" />
                    </span>
                    <b>Enterprise assistants</b>
                    <span>ChatGPT Enterprise and Claude for teams, with admin controls</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="apps" />
                    </span>
                    <b>In-app copilots</b>
                    <span>SAP Joule, Dynamics 365 Copilot, GitHub Copilot</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Adoption</small>
                  <span>Permission clean-up · Usage policy · Prompt training · Usage tracking</span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ai-agents" role="tabpanel" aria-labelledby="ai-agents-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">AI agents</h2>
                  <p className="dx-lede">AI agents that do the work, people in control.</p>
                  <div className="ix-chips">
                    <span>Agentforce</span>
                    <span>SAP Joule</span>
                    <span>Copilot Studio</span>
                    <span>MCP</span>
                    <span>LangGraph</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ai-ag">
                <header>
                  <span className="dx-k">Example</span>
                  <h3>From enquiry email to approved quote</h3>
                </header>
                <div className="ai-agent" data-reveal="">
                  <div className="bot" style={{ "--i": "0" }}>
                    <span>
                      <Icon name="mail" />
                    </span>
                    <b>Customer emails enquiry</b>
                    <small>Trigger</small>
                  </div>
                  <div className="bot" style={{ "--i": "1" }}>
                    <span>
                      <Icon name="erp" />
                    </span>
                    <b>Agent checks ERP stock</b>
                    <small>AI agent</small>
                  </div>
                  <div className="bot" style={{ "--i": "2" }}>
                    <span>
                      <Icon name="doc" />
                    </span>
                    <b>Agent drafts quote in CRM</b>
                    <small>AI agent</small>
                  </div>
                  <div className="hum" style={{ "--i": "3" }}>
                    <span>
                      <Icon name="users" />
                    </span>
                    <b>Salesperson approves</b>
                    <small>Person in control</small>
                  </div>
                  <div className="bot" style={{ "--i": "4" }}>
                    <span>
                      <Icon name="check" />
                    </span>
                    <b>Agent sends and logs</b>
                    <small>AI agent</small>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="ai-ag-pl">
                <header>
                  <span className="dx-k">Where agents are built</span>
                  <h3>Agents in your apps and platforms</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="apps" />
                    </span>
                    <b>In business apps</b>
                    <span>Salesforce Agentforce, SAP Joule, Dynamics 365</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layout" />
                    </span>
                    <b>Low-code builders</b>
                    <span>Copilot Studio, Zoho and ServiceNow agents</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cloud" />
                    </span>
                    <b>Cloud platforms</b>
                    <span>Bedrock AgentCore, Vertex AI Agent Builder, Foundry</span>
                  </div>
                  <div className="ix-tile dark" style={{ "--i": "3" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="code" />
                    </span>
                    <b>Open standards</b>
                    <span>Model Context Protocol (MCP), LangGraph</span>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ai-ml" role="tabpanel" aria-labelledby="ai-ml-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Machine learning</h2>
                  <p className="dx-lede">
                    Predicting what happens next, cameras that inspect and keep people safe, and industrial AI from
                    machine signal to work order.
                  </p>
                  <div className="ix-chips">
                    <span>Forecasting</span>
                    <span>Predictive maintenance</span>
                    <span>Vision</span>
                    <span>IoT</span>
                    <span>MLOps</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ai-pred">
                <header>
                  <span className="dx-k">Predictive analytics</span>
                  <h3>Predicting what happens next</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="trend" />
                    </span>
                    <b>Demand forecasting</b>
                    <span>SKU-level forecasts feeding ERP planning and stock targets</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="gear" />
                    </span>
                    <b>Predictive maintenance</b>
                    <span>Sensor data that flags failures before they stop a line</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="check" />
                    </span>
                    <b>Quality prediction</b>
                    <span>Process settings linked to defects, corrected early</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="users" />
                    </span>
                    <b>Customer analytics</b>
                    <span>Churn risk, next-best offer and pricing insight in CRM</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>MLOps</small>
                  <span>Azure Machine Learning · SageMaker · Vertex AI · Databricks · MLflow</span>
                </div>
              </article>
              <article className="ix-scene" id="ai-cv">
                <header>
                  <span className="dx-k">Computer vision</span>
                  <h3>Cameras that inspect and keep people safe</h3>
                </header>
                <div className="ai-cv" data-reveal="">
                  <div className="ai-belt" aria-hidden="true">
                    <i />
                    <i className="bad" />
                    <i />
                    <i />
                    <span className="cam">
                      <Icon name="video" />
                    </span>
                    <span className="scan" />
                  </div>
                  <ol className="cx-pipe gl" data-reveal="">
                    <li style={{ "--i": "0" }}>
                      <Icon name="video" />
                      <b>Camera on the line</b>
                      <span />
                    </li>
                    <li style={{ "--i": "1" }}>
                      <Icon name="cpu" />
                      <b>Edge AI decides in real time</b>
                      <span />
                    </li>
                    <li style={{ "--i": "2" }}>
                      <Icon name="x" />
                      <b>Reject signal to the PLC</b>
                      <span />
                    </li>
                    <li style={{ "--i": "3" }}>
                      <Icon name="doc" />
                      <b>Result logged in MES</b>
                      <span />
                    </li>
                  </ol>
                </div>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="eye" />
                    </span>
                    <b>Defect detection</b>
                    <span>Scratches, dents, cracks</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="check" />
                    </span>
                    <b>Assembly checks</b>
                    <span>Missing or misplaced parts</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="shield" />
                    </span>
                    <b>{"Safety & PPE"}</b>
                    <span>Helmets, vests, restricted zones</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="doc" />
                    </span>
                    <b>{"Reading & tracking"}</b>
                    <span>Serials, labels, counting</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Built with</small>
                  <span>Industrial cameras · NVIDIA Jetson edge devices · custom-trained vision models</span>
                </div>
              </article>
              <article className="ix-scene" id="ai-iot">
                <header>
                  <span className="dx-k">{"Industrial AI & IoT"}</span>
                  <h3>From machine signal to work order</h3>
                </header>
                <div className="ix-zt n5" data-reveal="">
                  <div className="ix-zs" style={{ "--i": "0" }}>
                    <Icon name="thermo" />
                    <b>Sensors</b>
                    <span>Vibration, heat</span>
                  </div>
                  <div className="ix-zs" style={{ "--i": "1" }}>
                    <Icon name="wifi" />
                    <b>Edge</b>
                    <span>OPC UA, MQTT</span>
                  </div>
                  <div className="ix-zs" style={{ "--i": "2" }}>
                    <Icon name="db" />
                    <b>Data</b>
                    <span>History, context</span>
                  </div>
                  <div className="ix-zs" style={{ "--i": "3" }}>
                    <Icon name="chart" />
                    <b>ML model</b>
                    <span>Failure risk</span>
                  </div>
                  <div className="ix-zs end" style={{ "--i": "4" }}>
                    <Icon name="erp" />
                    <b>Action</b>
                    <span>ERP work order</span>
                  </div>
                  <i className="ix-zdot" aria-hidden="true" />
                </div>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="gear" />
                    </span>
                    <b>Less downtime</b>
                    <span>Repairs planned before breakdowns, parts ready</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="bolt" />
                    </span>
                    <b>Energy insight</b>
                    <span>Machine-level energy use tracked and optimized</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>Digital twins</b>
                    <span>Virtual models of lines to test changes safely</span>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ai-auto" role="tabpanel" aria-labelledby="ai-auto-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Intelligent automation</h2>
                  <p className="dx-lede">
                    From simple workflows to AI agents — robots, document AI and process mining working with your
                    people.
                  </p>
                  <div className="ix-chips">
                    <span>Workflow</span>
                    <span>RPA</span>
                    <span>Document AI</span>
                    <span>Process mining</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ai-lad">
                <header>
                  <span className="dx-k">The automation ladder</span>
                  <h3>The automation ladder</h3>
                </header>
                <div className="ai-ladder" data-reveal="">
                  <div style={{ "--i": "0" }}>
                    <span>
                      <Icon name="layout" />
                    </span>
                    <b>Workflow</b>
                    <small>Rules, forms and approvals</small>
                  </div>
                  <div style={{ "--i": "1" }}>
                    <span>
                      <Icon name="gear" />
                    </span>
                    <b>RPA bots</b>
                    <small>Software robots that work screens like a person</small>
                  </div>
                  <div style={{ "--i": "2" }}>
                    <span>
                      <Icon name="doc" />
                    </span>
                    <b>Document AI</b>
                    <small>Reads invoices, orders and forms</small>
                  </div>
                  <div style={{ "--i": "3" }}>
                    <span>
                      <Icon name="spark" />
                    </span>
                    <b>AI agents</b>
                    <small>Handle exceptions that need judgement, with approvals</small>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="ai-rpa">
                <header>
                  <span className="dx-k">RPA</span>
                  <h3>Software robots for repetitive work</h3>
                </header>
                <div className="ai-2">
                  <div className="ix-list dark">
                    <h4>Good RPA candidates</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        High volume, done daily
                      </li>
                      <li>
                        <Icon name="check" />
                        Clear rules, few exceptions
                      </li>
                      <li>
                        <Icon name="check" />
                        Copying between systems
                      </li>
                      <li>
                        <Icon name="check" />
                        Legacy apps without APIs
                      </li>
                      <li>
                        <Icon name="check" />
                        Stable screens and inputs
                      </li>
                    </ul>
                  </div>
                  <div className="ix-tiles c2" data-reveal="">
                    <div className="ix-tile" style={{ "--i": "0" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="gear" />
                      </span>
                      <b>UiPath</b>
                      <span>Enterprise automation with agents</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "1" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="spark" />
                      </span>
                      <b>Power Automate</b>
                      <span>Flows for Microsoft 365 users</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "2" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="cloud" />
                      </span>
                      <b>Automation Anywhere</b>
                      <span>Cloud-native RPA with AI</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "3" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="shield" />
                      </span>
                      <b>{"SS&C Blue Prism"}</b>
                      <span>Governed bots for regulated firms</span>
                    </div>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Example bots</small>
                  <span>Vendor onboarding · GST reconciliation · order entry · daily MIS reports</span>
                </div>
              </article>
              <article className="ix-scene" id="ai-idp">
                <header>
                  <span className="dx-k">Document processing</span>
                  <h3>Documents read and posted, no typing</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="inbox" />
                    <b>Receive</b>
                    <span>Email, scan, portal</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="copy" />
                    <b>Classify</b>
                    <span>Invoice, PO, challan</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="doc" />
                    <b>Extract</b>
                    <span>Fields and line items</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="check" />
                    <b>Validate</b>
                    <span>Match PO, GSTIN</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="users" />
                    <b>Review</b>
                    <span>Person checks unsure cases</span>
                  </li>
                  <li style={{ "--i": "5" }}>
                    <Icon name="erp" />
                    <b>Post</b>
                    <span>Entry created in ERP</span>
                  </li>
                </ol>
                <div className="dx-meta">
                  <div>
                    <small>Documents</small>
                    <b>Supplier invoices · Purchase orders · E-way bills · KYC · Test certificates</b>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Tools</small>
                  <span>
                    Azure AI Document Intelligence · Amazon Textract · Google Document AI · UiPath · LLM extraction
                  </span>
                </div>
              </article>
              <article className="ix-scene" id="ai-pm">
                <header>
                  <span className="dx-k">Process mining</span>
                  <h3>See how work really flows, then fix it</h3>
                </header>
                <div className="cx-cols" data-reveal="">
                  <div className="cx-col b" style={{ "--i": "0" }}>
                    <div className="cx-col-h">
                      <Icon name="eye" />
                      <b>Process mining</b>
                    </div>
                    <ul>
                      <li>Reads ERP and CRM event logs to map the real process</li>
                      <li>Bottlenecks and rework</li>
                      <li>Deviations from standard</li>
                      <li>Best automation candidates</li>
                      <li>Celonis · SAP Signavio · UiPath · Power Automate</li>
                    </ul>
                  </div>
                  <div className="cx-col g" style={{ "--i": "1" }}>
                    <div className="cx-col-h">
                      <Icon name="layout" />
                      <b>Workflow</b>
                    </div>
                    <ul>
                      <li>Digital approvals and hand-offs across teams</li>
                      <li>Purchase and capex approvals</li>
                      <li>Onboarding and offboarding</li>
                      <li>Bots, AI and people in one flow</li>
                      <li>ServiceNow · Power Automate · SAP Build · Zoho Flow</li>
                    </ul>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ai-aiops" role="tabpanel" aria-labelledby="ai-aiops-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">AIOps</h2>
                  <p className="dx-lede">IT that fixes itself first.</p>
                  <div className="ix-chips">
                    <span>Self-service</span>
                    <span>Smart ticketing</span>
                    <span>Anomaly detection</span>
                    <span>Auto-remediation</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ai-ops">
                <header>
                  <span className="dx-k">IT operations</span>
                  <h3>AIOps: IT that fixes itself first</h3>
                </header>
                <div className="ai-loop" data-reveal="">
                  <div style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="headset" />
                    </span>
                    <b>Self-service IT</b>
                    <span>Teams chat for password resets and access requests</span>
                    <em>Copilot Studio · ServiceNow</em>
                  </div>
                  <div style={{ "--i": "1" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="layout" />
                    </span>
                    <b>Smart ticketing</b>
                    <span>AI categorizes, routes and summarizes tickets</span>
                    <em>ServiceNow · Jira · Freshservice</em>
                  </div>
                  <div style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="eye" />
                    </span>
                    <b>Anomaly detection</b>
                    <span>Spots unusual behaviour before users feel it</span>
                    <em>Dynatrace · Datadog · Splunk</em>
                  </div>
                  <div style={{ "--i": "3" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="gear" />
                    </span>
                    <b>Auto-remediation</b>
                    <span>Known issues fixed by approved runbooks</span>
                    <em>Ansible · PowerShell · Terraform</em>
                  </div>
                  <span className="ai-loop-c" aria-hidden="true">
                    <Icon name="spark" />
                  </span>
                </div>
              </article>
            </section>
            <section
              className="ix-chapter"
              id="ai-responsible"
              role="tabpanel"
              aria-labelledby="ai-responsible-t"
              hidden
            >
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Responsible AI</h2>
                  <p className="dx-lede">AI that is safe, compliant and trusted.</p>
                  <div className="ix-chips">
                    <span>DPDP</span>
                    <span>MeitY guidelines</span>
                    <span>ISO/IEC 42001</span>
                    <span>NIST AI RMF</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ai-rai">
                <header>
                  <span className="dx-k">In every project</span>
                  <h3>AI that is safe, compliant and trusted</h3>
                </header>
                <div className="ai-2">
                  <div className="ix-list dark">
                    <h4>In every project</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        Data privacy and masking
                      </li>
                      <li>
                        <Icon name="check" />
                        Guardrails against misuse
                      </li>
                      <li>
                        <Icon name="check" />
                        Accuracy tests before release
                      </li>
                      <li>
                        <Icon name="check" />
                        People approve key decisions
                      </li>
                      <li>
                        <Icon name="check" />
                        Full logging and audit trail
                      </li>
                      <li>
                        <Icon name="check" />
                        Bias and fairness review
                      </li>
                    </ul>
                  </div>
                  <div className="ix-tiles c2" data-reveal="">
                    <div className="ix-tile" style={{ "--i": "0" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="doc" />
                      </span>
                      <b>{"DPDP Act & Rules"}</b>
                      <span>Consent and safeguards for personal data</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "1" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="gov" />
                      </span>
                      <b>India AI guidelines</b>
                      <span>MeitY’s AI Governance Guidelines</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "2" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="check" />
                      </span>
                      <b>ISO/IEC 42001</b>
                      <span>AI management system standard</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "3" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="globe" />
                      </span>
                      <b>Global</b>
                      <span>NIST AI RMF; EU AI Act for exporters</span>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ai-run" role="tabpanel" aria-labelledby="ai-run-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Where AI runs</h2>
                  <p className="dx-lede">
                    Four options, from pay-per-use APIs to GPUs in your own data center or plant.
                  </p>
                  <div className="ix-chips">
                    <span>APIs</span>
                    <span>Indian regions</span>
                    <span>GPU cloud</span>
                    <span>On-premises</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ai-run-s">
                <header>
                  <span className="dx-k">AI infrastructure</span>
                  <h3>Where your AI runs: four options</h3>
                </header>
                <div className="ai-spec" data-reveal="">
                  <div className="ai-spec-ax">
                    <span>Fastest start</span>
                    <i />
                    <span>Full control</span>
                  </div>
                  <div className="ai-spec-c">
                    <div style={{ "--i": "0" }}>
                      <span className="dot" />
                      <span className="dx-ic c-blue">
                        <Icon name="cloud" />
                      </span>
                      <b>AI service APIs</b>
                      <p>Fastest start, pay per use, enterprise data terms</p>
                      <em>Best for pilots and low-risk data</em>
                    </div>
                    <div style={{ "--i": "1" }}>
                      <span className="dot" />
                      <span className="dx-ic c-blue">
                        <Icon name="globe" />
                      </span>
                      <b>Hyperscaler, India</b>
                      <p>Models in Azure, AWS or Google Indian regions</p>
                      <em>Best for most production use</em>
                    </div>
                    <div style={{ "--i": "2" }}>
                      <span className="dot" />
                      <span className="dx-ic c-blue">
                        <Icon name="pin" />
                      </span>
                      <b>Indian GPU cloud</b>
                      <p>Open models on Yotta, E2E Networks, billed in rupees</p>
                      <em>Best for sovereign or regulated data</em>
                    </div>
                    <div style={{ "--i": "3" }}>
                      <span className="dot" />
                      <span className="dx-ic c-gold">
                        <Icon name="server" />
                      </span>
                      <b>On-premises GPUs</b>
                      <p>NVIDIA GPU servers in your data center or plant</p>
                      <em>Best for full control and edge AI</em>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
