import React, { useContext, lazy, Suspense } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Transaction = lazy(() => import("../Transaction/Transaction"));

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Suspense fallback={<div>loading...</div>} key={transaction.id}>
            <Transaction transaction={transaction} />
          </Suspense>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
