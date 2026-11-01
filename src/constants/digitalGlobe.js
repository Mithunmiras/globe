export const BRAND = {
  name: "Digital Globe Consultancy",
  short: "Digital Globe",
  tagline: "You dream it, we deliver it",
  description:
    "Digital Globe Consultancy — data center, IT infrastructure, cybersecurity & SOC, enterprise applications, ERP, cloud & AI, managed services and consulting. Bengaluru, India.",
  email: "sales@digitalglobe.co.in",
  leadershipEmail: "kavyallatarao@digitalglobe.co.in",
  phone: "+91 95387 30151",
  altPhone: "+91 95135 03151",
  website: "www.digitalglobe.co.in",
  addressLine1: "Bannerghatta Road",
  addressLine2: "Bengaluru – 560076, Karnataka, India",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bannerghatta+Road+Bengaluru+560076",
  copyright: "© 2026 Digital Globe Consultancy Private Limited. All rights reserved.",
};

export const DEFAULT_TITLE = "Digital Globe Consultancy";

// Reading order used by the previous / next pager at the foot of every page.
export const PAGE_ORDER = [
  { route: "home", label: "Home", icon: "home" },
  { route: "about", label: "About Us", icon: "users" },
  { route: "services", label: "Services", icon: "layout" },
  { route: "consulting", label: "Consulting & Advisory", icon: "compass" },
  { route: "data-center", label: "Data Center & Infrastructure", icon: "dc" },
  { route: "data-center-strategy", label: "DC · Strategy & Concept", icon: "dc" },
  { route: "data-center-design", label: "DC · Design & Engineering", icon: "dc" },
  { route: "data-center-critical", label: "DC · Critical Infrastructure", icon: "dc" },
  { route: "data-center-it-network", label: "DC · IT & Network", icon: "dc" },
  { route: "data-center-build", label: "DC · Build & Commission", icon: "dc" },
  { route: "data-center-operations", label: "DC · Operate & Maintain", icon: "dc" },
  { route: "data-center-sustainability", label: "DC · Optimise & Sustain", icon: "dc" },
  { route: "data-center-expansion", label: "DC · Expand & Modernise", icon: "dc" },
  { route: "data-center-power", label: "DC · Power", icon: "dc" },
  { route: "data-center-cooling", label: "DC · Cooling", icon: "dc" },
  { route: "data-center-fire-security", label: "DC · Fire & Security", icon: "dc" },
  { route: "data-center-monitoring", label: "DC · DCIM & Monitoring", icon: "dc" },
  { route: "data-center-ai", label: "DC · AI Data Center", icon: "dc" },
  { route: "data-center-standards", label: "DC · Standards & Assurance", icon: "dc" },
  { route: "it-infrastructure", label: "IT Infrastructure", icon: "server" },
  { route: "cybersecurity", label: "Cybersecurity & Resilience", icon: "shield" },
  { route: "cloud", label: "Cloud & Modernisation", icon: "cloud" },
  { route: "applications", label: "Enterprise Applications", icon: "apps" },
  { route: "data-analytics", label: "Data, Analytics & AI", icon: "chart" },
  { route: "ai-automation", label: "AI & Automation", icon: "ai" },
  { route: "digital-workplace", label: "Digital Workplace & Automation", icon: "laptop" },
  { route: "managed-services", label: "Managed IT Services", icon: "headset" },
  { route: "industries", label: "Industries", icon: "chart" },
  { route: "industries-financial-services", label: "Industries · Financial Services", icon: "globe" },
  { route: "industries-public-sector-health", label: "Industries · Public Sector & Health", icon: "globe" },
  { route: "industries-manufacturing", label: "Industries · Products & Manufacturing", icon: "globe" },
  { route: "industries-energy-resources", label: "Industries · Resources & Energy", icon: "globe" },
  { route: "industries-technology-media-telecom", label: "Industries · Communications, Media & Technology", icon: "globe" },
  { route: "industries-services-infrastructure", label: "Industries · Services & Infrastructure", icon: "globe" },
  { route: "contact", label: "Contact Us", icon: "mail" },
];

// Routes that sit under the "Services" mega menu (drives the active tab).
export const SERVICE_ROUTES = ["services","consulting","it-infrastructure","cybersecurity","applications","ai-automation","cloud","data-analytics","managed-services","digital-workplace"];

// The closing "Let's build what's next" call-to-action is not shown on these.
export const CTA_HIDDEN_ROUTES = ["contact", "cybersecurity"];
