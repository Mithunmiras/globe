import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./headers/Index";
import Footer from "./footer/Index";
import PageLoader from "../Component/PageLoader";
import ScrollProgress from "../Component/ScrollProgress";

// Header and footer stay mounted while the page between them changes, so the
// open/closed state of the menus survives navigation. Pass `children` to wrap
// a single page, or use as a layout route (renders the matched child route).
function AppLayout({ children }) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Suspense fallback={<PageLoader />}>{children ?? <Outlet />}</Suspense>
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
