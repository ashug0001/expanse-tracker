import React, { lazy, Suspense } from "react";
import "./App.css";

import ErrorBoundary from "./ErrorBoundary";
const Header = lazy(() => import("./components/Header/Header"));
const Balance = lazy(() => import("./components/Balance/Balance"));
const IncomeExpanses = lazy(() =>
  import("./components/IncomeExpanses/IncomeExpanses")
);
const TransactionList = lazy(() =>
  import("./components/TransactionList/TransactionList")
);

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback="loading...">
          <Header title="Expance Tracker" />
        </Suspense>
        <div className="container">
          <Suspense fallback="loading...">
            <Balance />
            <IncomeExpanses />
            <TransactionList />
          </Suspense>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
