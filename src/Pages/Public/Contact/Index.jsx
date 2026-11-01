import React from "react";
import Page from "../../../Component/Page";
import Pager from "../../../Component/Pager";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";

export default function ContactPage() {
  return (
    <Page route="contact" title="Contact Us · Digital Globe Consultancy">
      <HeroSection />
      <ContactSection />
      <Pager route="contact" />
    </Page>
  );
}
