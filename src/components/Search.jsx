import React from "react";

import { useState } from "react";
import ExpensesL from "./ExpensesL";
const Search = ({ search, setSearch }) => {
  // const Search = ({ expenses, setExpenses }) => {
  // const [search, setSearch] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const searchExpenses = expenses.filter((item) =>
  //     item.expense.toLowerCase().includes(search.toLowerCase())
  //   );
  //   // console.log(setExpenses(searchExpenses));
  // };

  return (
    <input
      type="text"
      className="border border-2 h-8 pl-4 text-xl w-full h-12 mt-4 rounded-md"
      placeholder="Search expenses ..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;
