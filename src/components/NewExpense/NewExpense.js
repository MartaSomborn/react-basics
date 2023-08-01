import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [newExpenseVisible, setNewExpenseVisible] = useState(false);
  const saveExpenseDateHandler = (enteredExpanseDate) => {
    const expenseDate = {
      ...enteredExpanseDate,
      id: Math.random().toString(),
    };
    onAddExpense(expenseDate);
    setNewExpenseVisible(false);
  };

  const showExpenseFormHandler = () => {
    setNewExpenseVisible(true);
  };

  const hideNewExpenseFormHandler = () => {
    setNewExpenseVisible(false);
  };
  return (
    <div className="new-expense">
      {newExpenseVisible ? (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDateHandler}
          onCancelExpenseForm={hideNewExpenseFormHandler}
        />
      ) : (
        <button onClick={showExpenseFormHandler}>Add new Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
