import React from "react";
import Page from "../../../../Component/Page";
import Pager from "../../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import SubnavSection from "./components/SubnavSection";
import WhySection from "./components/WhySection";
import IndustrySection from "./components/IndustrySection";
import SolutionsSection from "./components/SolutionsSection";
import FrameworksSection from "./components/FrameworksSection";
import HowSection from "./components/HowSection";
import RelatedSection from "./components/RelatedSection";
import ThanksSection from "./components/ThanksSection";

export default function IndustriesManufacturingPage() {
  return (
    <Page route="industries-manufacturing" title="Products & Manufacturing · Industries · Digital Globe Consultancy">
      <div className="dcx-page svc-page ix-page dcs-page ins-page">
        <div className="dcx">
          <HeroSection />
          <SubnavSection />
          <WhySection />
          <IndustrySection />
          <SolutionsSection />
          <FrameworksSection />
          <HowSection />
          <RelatedSection />
        </div>
        <ThanksSection />
      </div>
      <Pager route="industries-manufacturing" />
    </Page>
  );
}
