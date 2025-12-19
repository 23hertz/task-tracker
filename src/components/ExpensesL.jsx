import React from "react";

const ExpensesL = ({ getTotal, expenses }) => {
  const totalExpense = expenses
    .filter((item) => item.transType === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalBudget = expenses
    .filter((item) => item.transType === "budget")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <section className="mt-4 md:flex justify-between">
      <div className="border md:w-[45%] p-2 flex gap-4 rounded-md border border-1 justify-between h-14 mt-4">
        <h1 className="text-xl ">Expense</h1>
        <span className="text-2xl font-bold text-red-600">
          #{totalExpense.toLocaleString()}
        </span>
      </div>
      <div className="border md:w-[45%] p-2 flex gap-4 rounded-md border border-1 justify-between h-14 mt-4">
        <h1 className="text-xl">Budget</h1>
        <span className="text-2xl font-bold pt-2 text-green-600">
          #{totalBudget.toLocaleString()}
        </span>
      </div>
    </section>
  );
};

export default ExpensesL;
