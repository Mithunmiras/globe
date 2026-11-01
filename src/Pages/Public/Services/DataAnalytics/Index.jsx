import React from "react";
import Page from "../../../../Component/Page";
import Pager from "../../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SubnavSection from "./components/SubnavSection";
import DaMapSection from "./components/DaMapSection";
import MaturitySection from "./components/MaturitySection";
import ArchSection from "./components/ArchSection";
import PlatformsSection from "./components/PlatformsSection";
import DashboardsSection from "./components/DashboardsSection";
import AdvancedSection from "./components/AdvancedSection";
import DeliverSection from "./components/DeliverSection";
import OemSection from "./components/OemSection";
import WhySection from "./components/WhySection";
import CasesSection from "./components/CasesSection";
import PartnersSection from "./components/PartnersSection";
import ThanksSection from "./components/ThanksSection";

export default function DataAnalyticsPage() {
  return (
    <Page route="data-analytics" title="Data, Analytics & AI · Digital Globe Consultancy">
      <div className="dcx-page svc-page ix-page da-page">
        <div className="dcx">
          <HeroSection />
          <MapSection />
          <SubnavSection />
          <DaMapSection />
          <MaturitySection />
          <ArchSection />
          <PlatformsSection />
          <DashboardsSection />
          <AdvancedSection />
          <DeliverSection />
          <OemSection />
          <WhySection />
        </div>
        <CasesSection />
        <PartnersSection />
        <ThanksSection />
      </div>
      <Pager route="data-analytics" />
    </Page>
  );
}
