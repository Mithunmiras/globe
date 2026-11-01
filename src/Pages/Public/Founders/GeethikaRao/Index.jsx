import React from "react";
import Page from "../../../../Component/Page";
import ShadowProfile from "../../../../Component/ShadowProfile";
import markup from "./profile.html?raw";
import css from "./profile.css?raw";
import initGeethikaRao from "./initGeethikaRao";

export default function GeethikaRaoPage() {
  return (
    <Page route="geethika-rao" title="Geethika Rao · Founder · Digital Globe Consultancy" className="kpx-page">
      <ShadowProfile id="kpx-geethika" markup={markup} css={css} init={initGeethikaRao} />
    </Page>
  );
}
