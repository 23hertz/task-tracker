import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import FormSection from "./components/FormSection";
import ListSection from "./components/ListSection";
import TotalSection from "./components/TotalSection";
import ExpensesL from "./components/ExpensesL";
import Search from "./components/Search";

function App() {
  const [formDisplay, setFormDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const [expenses, setExpenses] = useState([
    // { id: 1, expense: "Food", amount: 2000 },
    // { id: 2, expense: "Rent", amount: 400 },
    // { id: 3, expense: "Beverage", amount: 800 },
    // { id: 4, expense: "Cloths", amount: 2300 },
    // { id: 5, expense: "Family", amount: 2700 },
  ]);

  // const totalAmt = expenses.reduce((sum, item) => sum + item.amount, 0);
  const getExpense = expenses.filter((item) => item.transType === "expense");
  const getBudget = expenses.filter((item) => item.transType === "budget");

  const totalExpense = getExpense.reduce((sum, item) => sum + item.amount, 0);
  const totalBudget = getBudget.reduce((sum, item) => sum + item.amount, 0);

  const totalAmt = totalBudget - totalExpense;

  const handleClick = () => {
    setFormDisplay((prev) => !prev);
  };

  const addExpenses = (expense) => {
    setExpenses((prevExpense) => [...prevExpense, expense]);
  };

  const handleDelete = (getId) => {
    setExpenses((prev) => prev.filter((item) => item.id !== getId));
  };

  const filteredExpenses = expenses.filter((item) =>
    item.expense.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[768px] mx-auto border border-1 rounded-md">
      <header className="flex justify-center">
        <h1 className="text-center text-[2em] py-2 font-semibold">
          Expense Tracker
        </h1>
      </header>
      <main className="p-4 space-y-6">
        <section>
          <div className="flex flex-row justify-between">
            <TotalSection total={totalAmt} expenses={expenses} />
            <button
              className="bg-green-600 hover:bg-green-700 transition px-4 h-10 font-medium text-lg text-center text-white rounded-md"
              onClick={handleClick}
            >
              {formDisplay ? "Home" : "Add"}
            </button>
          </div>
        </section>
        <ExpensesL getTotal={totalAmt} expenses={expenses} />
        <section className="mt-4">
          <h2 className="text-3xl font-medium">Transactions</h2>
          <Search search={search} setSearch={setSearch} />
          {/* <Search expenses={expenses} setExpenses={setExpenses} /> */}
        </section>

        {formDisplay ? (
          <FormSection onAddExpense={addExpenses} />
        ) : (
          <ListSection
            expenses={filteredExpenses}
            handleDelete={handleDelete}
          />
          // <ListSection expenses={expenses} handleDelete={handleDelete} />
        )}

        {/*  */}
      </main>
    </div>
  );
}

export default App;
