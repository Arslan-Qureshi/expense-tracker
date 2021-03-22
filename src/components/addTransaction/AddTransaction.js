import React, { useState, useContext } from "react";
import Classes from "./AddTransaction.module.css";
import { GlobalContext } from "../../context/expenseTrackerGlobalState";
export default function AddTransaction() {
  const [description, setDescription] = useState("");
  const [transaction, setTransaction] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const onChangeHandlerDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeHandlerTransaction = (e) => {
    setTransaction(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      description,
      amount: +transaction,
    };
    addTransaction(newTransaction);
  };
  // console.log(typeof transaction);
  return (
    <div className={Classes.AddTransaction}>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Detail Of Transaction"
            value={description}
            onChange={(e) => onChangeHandlerDescription(e)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">Transaction Amount</label>
          <input
            type="text"
            id="transactionamount"
            placeholder="Enter Transaction Amount"
            value={transaction}
            onChange={(e) => onChangeHandlerTransaction(e)}
          />
        </div>

        <p
          style={{
            color: "red",
            display:
              (description === "" && transaction === 0) || ""
                ? "block"
                : "none",
          }}
        >
          Add Transation to Enable the Button
        </p>

        <button
          className={Classes.btn}
          disabled={transaction === 0 || "" ? true : false}
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
