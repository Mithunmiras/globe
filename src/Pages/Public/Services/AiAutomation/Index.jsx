import React from "react";
import Page from "../../../../Component/Page";
import Pager from "../../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SubnavSection from "./components/SubnavSection";
import AiMapSection from "./components/AiMapSection";
import ValueSection from "./components/ValueSection";
import StorySection from "./components/StorySection";
import UseSection from "./components/UseSection";
import DeliverSection from "./components/DeliverSection";
import OemSection from "./components/OemSection";
import WhySection from "./components/WhySection";
import CasesSection from "./components/CasesSection";
import PartnersSection from "./components/PartnersSection";
import ThanksSection from "./components/ThanksSection";

export default function AiAutomationPage() {
  return (
    <Page route="ai-automation" title="AI & Automation · Digital Globe Consultancy">
      <div className="dcx-page svc-page ix-page">
        <div className="dcx">
          <HeroSection />
          <MapSection />
          <SubnavSection />
          <AiMapSection />
          <ValueSection />
          <StorySection />
          <UseSection />
          <DeliverSection />
          <OemSection />
          <WhySection />
        </div>
        <CasesSection />
        <PartnersSection />
        <ThanksSection />
      </div>
      <Pager route="ai-automation" />
    </Page>
  );
}
