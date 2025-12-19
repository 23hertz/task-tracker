import React from "react";
import ItemSection from "./ItemSection";
const ListSection = ({ expenses, handleDelete }) => {
  return (
    <section className="mt-3">
      <ul>
        {expenses.map((tran) => (
          <ItemSection tran={tran} handleDelete={handleDelete} />
        ))}
      </ul>
    </section>
  );
};

export default ListSection;
