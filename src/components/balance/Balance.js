import React, { useContext } from "react";
import { GlobalContext } from "../../context/expenseTrackerGlobalState";
export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  let amount = transactions.map((transaction) => transaction.amount);
  let total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h5>CURRENT BALANCE</h5>
      <h1>${total}</h1>
    </div>
  );
}
