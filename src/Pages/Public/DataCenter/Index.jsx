import React from "react";
import Page from "../../../Component/Page";
import Pager from "../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SubnavSection from "./components/SubnavSection";
import LifecycleSection from "./components/LifecycleSection";
import VideosSection from "./components/VideosSection";
import DirectorySection from "./components/DirectorySection";
import TypesSection from "./components/TypesSection";
import EngageSection from "./components/EngageSection";
import WhySection from "./components/WhySection";
import CasesSection from "./components/CasesSection";
import PartnersSection from "./components/PartnersSection";
import ThanksSection from "./components/ThanksSection";

export default function DataCenterPage() {
  return (
    <Page route="data-center" title="Data Center & Infrastructure · Digital Globe Consultancy">
      <div className="dcx-page ix-page">
        <div className="dcx">
          <HeroSection />
          <MapSection />
          <SubnavSection />
          <LifecycleSection />
          <VideosSection />
          <DirectorySection />
          <TypesSection />
          <EngageSection />
          <WhySection />
        </div>
        <CasesSection />
        <PartnersSection />
        <ThanksSection />
      </div>
      <Pager route="data-center" />
    </Page>
  );
}
