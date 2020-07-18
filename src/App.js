import React, { lazy, Suspense } from "react";
import "./App.css";

import ErrorBoundary from "./ErrorBoundary";
const Header = lazy(() => import("./components/Header/Header"));

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback="loading...">
          <Header title="Expance Tracker" />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
