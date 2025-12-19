import React, { useState } from "react";

const FormSection = ({ onAddExpense }) => {
  const [expense, setExpense] = useState("");
  const [expenseErr, setExpenseErr] = useState("");

  const [amount, setAmount] = useState("");
  const [amountErr, setAmountErr] = useState("");

  const [transType, setTransType] = useState("expense");
  // const [transactionErr, setTransactionErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!expense.trim()) {
      setExpenseErr("Expense is required");
      isValid = false;
    } else {
      setExpenseErr("");
    }

    if (!amount || Number(amount) < 1) {
      setAmountErr("Amount must be greater than 0");
      isValid = false;
    } else {
      setAmountErr("");
    }

    if (!isValid) return;

    const newInput = {
      id: Date.now() + Math.random(),
      expense,
      amount: Number(amount),
      transType,
    };

    onAddExpense(newInput);

    setExpense("");
    setAmount("");
    setTransType("expense");
  };

  return (
    <section className="mt-3">
      <form action="" onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">
            Transaction Name
          </label>
          <input
            type="text"
            placeholder="e.g Food, Rent"
            id=""
            className="w-full h-12 px-4 rounded-lg border text-lg focus:outline-none focus:ring-2 focus:ring-green-500 "
            value={expense}
            onChange={(e) => {
              setExpense(e.target.value);
              setExpenseErr("");
            }}
          />
          {expenseErr && (
            <span className="text-red-600 text-sm">{expenseErr}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            placeholder="e.g 5000"
            className="w-full h-12 px-4 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setAmountErr("");
            }}
          />
          {amountErr && (
            <span className="text-red-600 text-sm mt-1">{amountErr}</span>
          )}
        </div>

        {/* <div className="text-center text-sm font-medium mt-4 flex flex-row justify-center align-center h-12 text-2xl font-semibold"> */}
        <div>
          <p className="text-sm font-medium mb-2">Transaction Type</p>
          <div className="gap-6 flex">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="expense"
                checked={transType === "expense"}
                className="w-4 h-6 mt-1"
                onChange={(e) => {
                  setTransType(e.target.value);
                }}
              />
              <span>Expense</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={transType === "budget"}
                value="budget"
                onChange={(e) => {
                  setTransType(e.target.value);
                }}
              />
              <span>Budget</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-green-600 hover:bg-green-700 transition text-white text-lg font-semibold rounded-lg"
        >
          Save Transaction
        </button>
        {/* 
        <input
          type="submit"
          value="Submit"
          className="bg-red-400 w-28  h-12  text-white text-xl font-semibold rounded-xl  mx-auto"
        /> */}
      </form>
    </section>
  );
};

export default FormSection;
