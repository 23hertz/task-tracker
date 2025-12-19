import React from "react";

const ItemSection = ({ tran, handleDelete }) => {
  return (
    <li
      key={tran.id}
      className={`flex item-center justify-between border rounded-lg text-xl font-normal p-3 shadow-sm px-4 border-r-4  mt-2 text-center bg-white"  ${
        tran.transType === "expense" ? "border-r-red-600" : "border-r-green-600"
      }`}
    >
      <span className="font-medium">{tran.expense}</span>
      {/* <h3>{tran.amount}</h3> */}
      <span
        className={`font-semibold ${
          tran.transType === "expense" ? "text-red-400" : "text-green-600"
        }`}
      >
        ₦{tran.amount}
      </span>
      <button
        className="text-white p-2 text-red-500 hover:text-white text-sm rounded-sm bg-red-400 hover:bg-red-700 "
        onClick={() => handleDelete(tran.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ItemSection;
