import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [expensesForm, setExpensesForm] = useState(false);

    const submitExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        isFormDisplay(false);
    };

    const handleAddExpense = () => {
        isFormDisplay(true);
    };

    const isFormDisplay = (value) => {
        setExpensesForm(value);
    };

    return (
        <div className="new-expense">
            {expensesForm === true ? (
                <ExpenseForm
                    onSubmitExpenseData={submitExpenseDataHandler}
                    formDisplay={isFormDisplay}
                />
            ) : (
                <button onClick={handleAddExpense}>Add New Expense</button>
            )}
        </div>
    );
};

export default NewExpense;
