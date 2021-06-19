import React, { useState } from "react";
import Card from "../Core/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpense = props.items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onFilterChanged={filterHandler} />
            <ExpensesChart expenses={filteredExpense}/>
            <ExpensesList items={filteredExpense} />
        </Card>
    );
};

export default Expenses;
