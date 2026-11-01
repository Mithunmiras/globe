import React from "react";
import Page from "../../../../Component/Page";
import ShadowProfile from "../../../../Component/ShadowProfile";
import markup from "./profile.html?raw";
import css from "./profile.css?raw";
import initKavyallataRao from "./initKavyallataRao";

export default function KavyallataRaoPage() {
  return (
    <Page
      route="kavyallata-rao"
      title="Kavyalatha Rao · Co-founder & CMD · Digital Globe Consultancy"
      className="kpx-page"
    >
      <ShadowProfile id="kpx-kavya" markup={markup} css={css} init={initKavyallataRao} />
    </Page>
  );
}
