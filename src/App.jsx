import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import PageLoader from "./Component/PageLoader";
import IconSprite from "./Component/IconSprite";

const Public = React.lazy(() => import("./Pages/Public/Index"));

function App() {
  return (
    <>
      <IconSprite />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/*" element={<Public />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
