import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const ex1 = {
    date: new Date(2023, 11, 20),
    title: "Food",
    price: "Rs 10",
  };
  const ex2 = {
    date: new Date(2023, 11, 21),
    title: "Petrol",
    price: "Rs 200",
  };
  const ex3 = {
    date: new Date(2023, 11, 21),
    title: "Movies",
    price: "Rs 33",
  };
  return (
    <>
      <h2>Expense Item!</h2>
      <div className="expense-item">
        <div>{ex1.date.toLocaleDateString()}</div>
        <div className="expense-item__description">
          <h2>{ex1.title}</h2>
          <div className="expense-item__price"> {ex1.price} </div>
        </div>
      </div>
      <div className="expense-item">
        <div>{ex2.date.toLocaleDateString()}</div>
        <div className="expense-item__description">
          <h2>{ex2.title}</h2>
          <div className="expense-item__price"> {ex2.price} </div>
        </div>
      </div>
      <div className="expense-item">
        <div>{ex3.date.toLocaleDateString()}</div>
        <div className="expense-item__description">
          <h2>{ex3.title}</h2>
          <div className="expense-item__price"> {ex3.price}</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
