import React, { lazy, Suspense } from "react";
import "./App.css";

import ErrorBoundary from "./ErrorBoundary";
import { GlobalProvider } from "./context/GlobalState";
const Header = lazy(() => import("./components/Header/Header"));
const Balance = lazy(() => import("./components/Balance/Balance"));
const IncomeExpanses = lazy(() =>
  import("./components/IncomeExpanses/IncomeExpanses")
);
const TransactionList = lazy(() =>
  import("./components/TransactionList/TransactionList")
);
const AddTransaction = lazy(() =>
  import("./components/AddTransaction/AddTransaction")
);

function App() {
  return (
    <GlobalProvider>
      <ErrorBoundary>
        <Suspense fallback="loading...">
          <Header title="Expance Tracker" />
        </Suspense>
        <div className="container">
          <Suspense fallback="loading...">
            <Balance />
            <IncomeExpanses />
            <TransactionList />
            <AddTransaction />
          </Suspense>
        </div>
      </ErrorBoundary>
    </GlobalProvider>
  );
}

export default App;
