import React from "react";
import Page from "../../../../Component/Page";
import Pager from "../../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SubnavSection from "./components/SubnavSection";
import InMapSection from "./components/InMapSection";
import StorySection from "./components/StorySection";
import DeliverSection from "./components/DeliverSection";
import OemSection from "./components/OemSection";
import WhySection from "./components/WhySection";
import CasesSection from "./components/CasesSection";
import PartnersSection from "./components/PartnersSection";
import ThanksSection from "./components/ThanksSection";

export default function ItInfrastructurePage() {
  return (
    <Page route="it-infrastructure" title="IT Infrastructure · Digital Globe Consultancy">
      <div className="dcx-page svc-page ix-page">
        <div className="dcx">
          <HeroSection />
          <MapSection />
          <SubnavSection />
          <InMapSection />
          <StorySection />
          <DeliverSection />
          <OemSection />
          <WhySection />
        </div>
        <CasesSection />
        <PartnersSection />
        <ThanksSection />
      </div>
      <Pager route="it-infrastructure" />
    </Page>
  );
}
