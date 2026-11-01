import React from "react";
import Page from "../../../../Component/Page";
import Pager from "../../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import SubnavSection from "./components/SubnavSection";
import WhySection from "./components/WhySection";
import ScopeSection from "./components/ScopeSection";
import DiagramSection from "./components/DiagramSection";
import WhatSection from "./components/WhatSection";
import DeliverySection from "./components/DeliverySection";
import StandardsSection from "./components/StandardsSection";
import RelatedSection from "./components/RelatedSection";
import ThanksSection from "./components/ThanksSection";

export default function DataCenterCriticalPage() {
  return (
    <Page route="data-center-critical" title="Critical Infrastructure · Data Center · Digital Globe Consultancy">
      <div className="dcx-page svc-page ix-page dcs-page">
        <div className="dcx">
          <HeroSection />
          <SubnavSection />
          <WhySection />
          <ScopeSection />
          <DiagramSection />
          <WhatSection />
          <DeliverySection />
          <StandardsSection />
          <RelatedSection />
        </div>
        <ThanksSection />
      </div>
      <Pager route="data-center-critical" />
    </Page>
  );
}
