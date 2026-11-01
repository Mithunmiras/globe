import React from "react";
import Page from "../../../../Component/Page";
import Pager from "../../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SubnavSection from "./components/SubnavSection";
import DwMapSection from "./components/DwMapSection";
import DaySection from "./components/DaySection";
import StorySection from "./components/StorySection";
import DeliverSection from "./components/DeliverSection";
import OemSection from "./components/OemSection";
import WhySection from "./components/WhySection";
import ThanksSection from "./components/ThanksSection";

export default function DigitalWorkplacePage() {
  return (
    <Page route="digital-workplace" title="Digital Workplace & Automation · Digital Globe Consultancy">
      <div className="dcx-page svc-page ix-page">
        <div className="dcx">
          <HeroSection />
          <MapSection />
          <SubnavSection />
          <DwMapSection />
          <DaySection />
          <StorySection />
          <DeliverSection />
          <OemSection />
          <WhySection />
        </div>
        <ThanksSection />
      </div>
      <Pager route="digital-workplace" />
    </Page>
  );
}
