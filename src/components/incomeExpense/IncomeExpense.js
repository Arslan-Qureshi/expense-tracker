import React, { useContext } from "react";
import Classes from "./IncomeExpense.module.css";
import { GlobalContext } from "../../context/expenseTrackerGlobalState";
export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense =
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <div className={Classes.incomeExpenseContainer}>
      <div>
        <h4>Income</h4>
        <p className={Classes.moneyplus}>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className={Classes.moneyminus}>{expense.toFixed(2)}</p>
      </div>
    </div>
  );
}
