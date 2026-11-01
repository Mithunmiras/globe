import React from "react";
import Page from "../../../Component/Page";
import Pager from "../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import TickerSection from "./components/TickerSection";
import AllSection from "./components/AllSection";
import VideosSection from "./components/VideosSection";
import HowSection from "./components/HowSection";

export default function ServicesPage() {
  return (
    <Page route="services" title="Services · Digital Globe Consultancy">
      <HeroSection />
      <TickerSection />
      <AllSection />
      <VideosSection />
      <HowSection />
      <Pager route="services" />
    </Page>
  );
}
