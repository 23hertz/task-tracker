import React from "react";

const TotalSection = ({ total }) => {
  //   const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">Balance</span>
      <span
        className={`text-xl font-bold ${
          total < 0 ? "text-red-400" : "text-green-400"
        }`}
      >
        # {total.toLocaleString()}
      </span>
    </div>
  );
};

export default TotalSection;
