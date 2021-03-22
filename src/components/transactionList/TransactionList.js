import React, { useContext } from "react";
import Classes from "./TransactionList.module.css";
import Transaction from "../transaction/Transaction";
import { GlobalContext } from "../../context/expenseTrackerGlobalState";
export default function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className={Classes.listContainer}>
      <h3>Transaction History</h3>
      <ul className={Classes.list}>
        {transactions.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              description={transaction.description}
              transactionAmount={transaction.amount}
              deleteTransaction={() => deleteTransaction(transaction.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
