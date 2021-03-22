import React from "react";
import Classes from "./transaction.module.css";

export default function Transaction({
  description,
  transactionAmount,
  deleteTransaction,
}) {
  const sign = transactionAmount > 0 ? "+" : "-";
  const transactionType = transactionAmount > 0 ? Classes.plus : Classes.minus;
  return (
    <li className={transactionType}>
      {description}
      <spane>
        {sign}${Math.abs(transactionAmount)}
      </spane>
      <button className={Classes.delete_btn} onClick={deleteTransaction}>
        X
      </button>
    </li>
  );
}
