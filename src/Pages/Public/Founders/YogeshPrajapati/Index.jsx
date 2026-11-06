import React from "react";
import Page from "../../../../Component/Page";
import ShadowProfile from "../../../../Component/ShadowProfile";
import markup from "./profile.html?raw";
import css from "./profile.css?raw";
import initYogeshPrajapati from "./initYogeshPrajapati";

export default function YogeshPrajapatiPage() {
  return (
    <Page
      route="yogesh-prajapati"
      title="Yogesh Prajapati · CTO & CIO · Digital Globe Consultancy"
      className="kpx-page"
    >
      <ShadowProfile id="kpx-yogesh" markup={markup} css={css} init={initYogeshPrajapati} />
    </Page>
  );
}
