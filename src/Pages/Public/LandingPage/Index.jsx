import React from "react";
import Page from "../../../Component/Page";
import Pager from "../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import TickerSection from "./components/TickerSection";
import LandscapeSection from "./components/LandscapeSection";
import ServicesSection from "./components/ServicesSection";
import PartnersSection from "./components/PartnersSection";
import DataCenterSection from "./components/DataCenterSection";
import VideosSection from "./components/VideosSection";
import FoundersSection from "./components/FoundersSection";
import IndustriesSection from "./components/IndustriesSection";
import CasesSection from "./components/CasesSection";
import NewsletterSection from "./components/NewsletterSection";

export default function LandingPage() {
  return (
    <Page route="home" title="Digital Globe Consultancy">
      <HeroSection />
      <TickerSection />
      <LandscapeSection />
      <ServicesSection />
      <PartnersSection />
      <DataCenterSection />
      <VideosSection />
      <FoundersSection />
      <IndustriesSection />
      <CasesSection />
      <NewsletterSection />
      <Pager route="home" />
    </Page>
  );
}
