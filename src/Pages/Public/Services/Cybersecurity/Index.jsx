import React from "react";
import Page from "../../../../Component/Page";
import Pager from "../../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SubnavSection from "./components/SubnavSection";
import CsMapSection from "./components/CsMapSection";
import OutcomeSection from "./components/OutcomeSection";
import StorySection from "./components/StorySection";
import CoverageSection from "./components/CoverageSection";
import RoadmapSection from "./components/RoadmapSection";
import MeasureSection from "./components/MeasureSection";
import JourneySection from "./components/JourneySection";
import WhySection from "./components/WhySection";
import CasesSection from "./components/CasesSection";
import PartnersSection from "./components/PartnersSection";
import ThanksSection from "./components/ThanksSection";

export default function CybersecurityPage() {
  return (
    <Page route="cybersecurity" title="Cybersecurity & Resilience · Digital Globe Consultancy">
      <div className="dcx-page svc-page ix-page">
        <div className="dcx">
          <HeroSection />
          <MapSection />
          <SubnavSection />
          <CsMapSection />
          <OutcomeSection />
          <StorySection />
          <CoverageSection />
          <RoadmapSection />
          <MeasureSection />
          <JourneySection />
          <WhySection />
        </div>
        <CasesSection />
        <PartnersSection />
        <ThanksSection />
      </div>
      <Pager route="cybersecurity" />
    </Page>
  );
}
