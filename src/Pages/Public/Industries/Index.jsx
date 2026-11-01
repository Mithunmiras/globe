import React from "react";
import Page from "../../../Component/Page";
import Pager from "../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import GridSection from "./components/GridSection";
import VideosSection from "./components/VideosSection";

export default function IndustriesPage() {
  return (
    <Page route="industries" title="Industries · Digital Globe Consultancy">
      <HeroSection />
      <GridSection />
      <VideosSection />
      <Pager route="industries" />
    </Page>
  );
}
