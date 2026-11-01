import React from "react";
import Page from "../../../Component/Page";
import Pager from "../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import ValuesSection from "./components/ValuesSection";
import BoardSection from "./components/BoardSection";
import LeadershipSection from "./components/LeadershipSection";

export default function AboutPage() {
  return (
    <Page route="about" title="About Us · Digital Globe Consultancy">
      <HeroSection />
      <ValuesSection />
      <BoardSection />
      <LeadershipSection />
      <Pager route="about" />
    </Page>
  );
}
