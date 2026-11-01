import React from "react";
import Page from "../../../../Component/Page";
import Pager from "../../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SubnavSection from "./components/SubnavSection";
import MsMapSection from "./components/MsMapSection";
import ModelSection from "./components/ModelSection";
import StorySection from "./components/StorySection";
import SlaSection from "./components/SlaSection";
import TransitionSection from "./components/TransitionSection";
import OemSection from "./components/OemSection";
import WhySection from "./components/WhySection";
import ThanksSection from "./components/ThanksSection";

export default function ManagedServicesPage() {
  return (
    <Page route="managed-services" title="Managed IT Services · Digital Globe Consultancy">
      <div className="dcx-page svc-page ix-page">
        <div className="dcx">
          <HeroSection />
          <MapSection />
          <SubnavSection />
          <MsMapSection />
          <ModelSection />
          <StorySection />
          <SlaSection />
          <TransitionSection />
          <OemSection />
          <WhySection />
        </div>
        <ThanksSection />
      </div>
      <Pager route="managed-services" />
    </Page>
  );
}
