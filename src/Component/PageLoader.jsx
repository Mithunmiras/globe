import React from "react";
import logoIcon from "../assets/logo-icon.png";
import { BRAND } from "../constants/digitalGlobe";

export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <img src={logoIcon} alt="" />
      <span>{BRAND.name}</span>
    </div>
  );
}
