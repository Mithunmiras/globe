import React from "react";
import Page from "../../../../Component/Page";
import Pager from "../../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SubnavSection from "./components/SubnavSection";
import ApMapSection from "./components/ApMapSection";
import ThreadSection from "./components/ThreadSection";
import StorySection from "./components/StorySection";
import DeliverSection from "./components/DeliverSection";
import OemSection from "./components/OemSection";
import WhySection from "./components/WhySection";
import CasesSection from "./components/CasesSection";
import PartnersSection from "./components/PartnersSection";
import ThanksSection from "./components/ThanksSection";

export default function ApplicationsPage() {
  return (
    <Page route="applications" title="Enterprise Applications · Digital Globe Consultancy">
      <div className="dcx-page svc-page ix-page">
        <div className="dcx">
          <HeroSection />
          <MapSection />
          <SubnavSection />
          <ApMapSection />
          <ThreadSection />
          <StorySection />
          <DeliverSection />
          <OemSection />
          <WhySection />
        </div>
        <CasesSection />
        <PartnersSection />
        <ThanksSection />
      </div>
      <Pager route="applications" />
    </Page>
  );
}
