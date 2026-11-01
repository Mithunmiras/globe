import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/Index";
import ScrollToTop from "../../Component/ScrollToTop";
import PageLoader from "../../Component/PageLoader";
import AppLayout from "../../layouts/Index";

const PageNotFound = React.lazy(() => import("../PageNotFound/Index"));
const About = React.lazy(() => import("./About/Index"));
const KavyallataRao = React.lazy(() => import("./Founders/KavyallataRao/Index"));
const GeethikaRao = React.lazy(() => import("./Founders/GeethikaRao/Index"));
const DataCenter = React.lazy(() => import("./DataCenter/Index"));
const DataCenterStrategy = React.lazy(() => import("./DataCenter/Strategy/Index"));
const DataCenterDesign = React.lazy(() => import("./DataCenter/Design/Index"));
const DataCenterCritical = React.lazy(() => import("./DataCenter/Critical/Index"));
const DataCenterItNetwork = React.lazy(() => import("./DataCenter/ItNetwork/Index"));
const DataCenterBuild = React.lazy(() => import("./DataCenter/Build/Index"));
const DataCenterOperations = React.lazy(() => import("./DataCenter/Operations/Index"));
const DataCenterSustainability = React.lazy(() => import("./DataCenter/Sustainability/Index"));
const DataCenterExpansion = React.lazy(() => import("./DataCenter/Expansion/Index"));
const DataCenterPower = React.lazy(() => import("./DataCenter/Power/Index"));
const DataCenterCooling = React.lazy(() => import("./DataCenter/Cooling/Index"));
const DataCenterFireSecurity = React.lazy(() => import("./DataCenter/FireSecurity/Index"));
const DataCenterMonitoring = React.lazy(() => import("./DataCenter/Monitoring/Index"));
const DataCenterAi = React.lazy(() => import("./DataCenter/AiDataCenter/Index"));
const DataCenterStandards = React.lazy(() => import("./DataCenter/Standards/Index"));
const Services = React.lazy(() => import("./Services/Index"));
const Consulting = React.lazy(() => import("./Services/Consulting/Index"));
const ItInfrastructure = React.lazy(() => import("./Services/ItInfrastructure/Index"));
const Cybersecurity = React.lazy(() => import("./Services/Cybersecurity/Index"));
const Applications = React.lazy(() => import("./Services/Applications/Index"));
const AiAutomation = React.lazy(() => import("./Services/AiAutomation/Index"));
const Cloud = React.lazy(() => import("./Services/Cloud/Index"));
const DataAnalytics = React.lazy(() => import("./Services/DataAnalytics/Index"));
const ManagedServices = React.lazy(() => import("./Services/ManagedServices/Index"));
const DigitalWorkplace = React.lazy(() => import("./Services/DigitalWorkplace/Index"));
const Industries = React.lazy(() => import("./Industries/Index"));
const IndustriesFinancialServices = React.lazy(() => import("./Industries/FinancialServices/Index"));
const IndustriesPublicSectorHealth = React.lazy(() => import("./Industries/PublicSectorHealth/Index"));
const IndustriesManufacturing = React.lazy(() => import("./Industries/Manufacturing/Index"));
const IndustriesEnergyResources = React.lazy(() => import("./Industries/EnergyResources/Index"));
const IndustriesTechnologyMediaTelecom = React.lazy(() => import("./Industries/TechnologyMediaTelecom/Index"));
const IndustriesServicesInfrastructure = React.lazy(() => import("./Industries/ServicesInfrastructure/Index"));
const Contact = React.lazy(() => import("./Contact/Index"));

const Index = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/kavyallata-rao" element={<KavyallataRao />} />
            <Route path="/geethika-rao" element={<GeethikaRao />} />
            <Route path="/data-center" element={<DataCenter />} />
            <Route path="/data-center-strategy" element={<DataCenterStrategy />} />
            <Route path="/data-center-design" element={<DataCenterDesign />} />
            <Route path="/data-center-critical" element={<DataCenterCritical />} />
            <Route path="/data-center-it-network" element={<DataCenterItNetwork />} />
            <Route path="/data-center-build" element={<DataCenterBuild />} />
            <Route path="/data-center-operations" element={<DataCenterOperations />} />
            <Route path="/data-center-sustainability" element={<DataCenterSustainability />} />
            <Route path="/data-center-expansion" element={<DataCenterExpansion />} />
            <Route path="/data-center-power" element={<DataCenterPower />} />
            <Route path="/data-center-cooling" element={<DataCenterCooling />} />
            <Route path="/data-center-fire-security" element={<DataCenterFireSecurity />} />
            <Route path="/data-center-monitoring" element={<DataCenterMonitoring />} />
            <Route path="/data-center-ai" element={<DataCenterAi />} />
            <Route path="/data-center-standards" element={<DataCenterStandards />} />
            <Route path="/services" element={<Services />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/it-infrastructure" element={<ItInfrastructure />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/ai-automation" element={<AiAutomation />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/managed-services" element={<ManagedServices />} />
            <Route path="/digital-workplace" element={<DigitalWorkplace />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries-financial-services" element={<IndustriesFinancialServices />} />
            <Route path="/industries-public-sector-health" element={<IndustriesPublicSectorHealth />} />
            <Route path="/industries-manufacturing" element={<IndustriesManufacturing />} />
            <Route path="/industries-energy-resources" element={<IndustriesEnergyResources />} />
            <Route path="/industries-technology-media-telecom" element={<IndustriesTechnologyMediaTelecom />} />
            <Route path="/industries-services-infrastructure" element={<IndustriesServicesInfrastructure />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Index;
