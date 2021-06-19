import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
    {
        id: "e1",
        title: "iPhone 12 Pro Max 256GB",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New Macbook Pro 13 M1",
        amount: 1799.49,
        date: new Date(2021, 1, 7),
    },
    {
        id: "e3",
        title: "Keychron K3 Mechanical Keyboard",
        amount: 99.49,
        date: new Date(2021, 10, 23),
    },
    {
        id: "e4",
        title: "iPad Pro 2021",
        amount: 499.49,
        date: new Date(2019, 7, 2),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
