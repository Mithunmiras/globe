import React from "react";
import Page from "../../../../Component/Page";
import Pager from "../../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SubnavSection from "./components/SubnavSection";
import CoMapSection from "./components/CoMapSection";
import ApproachSection from "./components/ApproachSection";
import StorySection from "./components/StorySection";
import AdvisorySection from "./components/AdvisorySection";
import DeliverSection from "./components/DeliverSection";
import WhySection from "./components/WhySection";
import CasesSection from "./components/CasesSection";
import ThanksSection from "./components/ThanksSection";

export default function ConsultingPage() {
  return (
    <Page route="consulting" title="Consulting & Advisory · Digital Globe Consultancy">
      <div className="dcx-page svc-page ix-page">
        <div className="dcx">
          <HeroSection />
          <MapSection />
          <SubnavSection />
          <CoMapSection />
          <ApproachSection />
          <StorySection />
          <AdvisorySection />
          <DeliverSection />
          <WhySection />
        </div>
        <CasesSection />
        <ThanksSection />
      </div>
      <Pager route="consulting" />
    </Page>
  );
}
