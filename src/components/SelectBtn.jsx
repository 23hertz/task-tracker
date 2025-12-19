import React, { useState } from "react";

const SelectBtn = () => {
  const [selectedOption, setSelectedOption] = useState("opt1");

  const handleBtn = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="text-center mt-4 flex flex-row justify-center align-center h-12 text-2xl font-semibold">
      <div className="gap-4  w-60 flex">
        <input
          type="radio"
          name=""
          id=""
          value="opt1"
          className="w-4 h-6 mt-1"
        />
        <span>Expense</span>
      </div>
      <div className="gap-4 w-60 flex">
        <input
          type="radio"
          name=""
          id=""
          value="opt2"
          className="w-4 h-6 mt-1"
        />
        <span>Budget</span>
      </div>
    </div>
  );
};

export default SelectBtn;
