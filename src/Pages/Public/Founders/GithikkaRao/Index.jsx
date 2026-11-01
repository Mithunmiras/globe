import React from "react";
import Page from "../../../../Component/Page";
import ShadowProfile from "../../../../Component/ShadowProfile";
import markup from "./profile.html?raw";
import css from "./profile.css?raw";
import initGithikkaRao from "./initGithikkaRao";

export default function GithikkaRaoPage() {
  return (
    <Page route="githikka-rao" title="Githikka Rao · Founder · Digital Globe Consultancy" className="kpx-page">
      <ShadowProfile id="kpx-githikka" markup={markup} css={css} init={initGithikkaRao} />
    </Page>
  );
}
