import React from "react";
import Page from "../../../../Component/Page";
import Pager from "../../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SubnavSection from "./components/SubnavSection";
import ClMapSection from "./components/ClMapSection";
import JourneySection from "./components/JourneySection";
import StorySection from "./components/StorySection";
import UseSection from "./components/UseSection";
import OemSection from "./components/OemSection";
import WhySection from "./components/WhySection";
import CasesSection from "./components/CasesSection";
import PartnersSection from "./components/PartnersSection";
import ThanksSection from "./components/ThanksSection";

export default function CloudPage() {
  return (
    <Page route="cloud" title="Cloud & Modernisation · Digital Globe Consultancy">
      <div className="dcx-page svc-page ix-page">
        <div className="dcx">
          <HeroSection />
          <MapSection />
          <SubnavSection />
          <ClMapSection />
          <JourneySection />
          <StorySection />
          <UseSection />
          <OemSection />
          <WhySection />
        </div>
        <CasesSection />
        <PartnersSection />
        <ThanksSection />
      </div>
      <Pager route="cloud" />
    </Page>
  );
}
