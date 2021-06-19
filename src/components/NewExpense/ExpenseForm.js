import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");

    // using mutliple state
    // const [userInput, setUserInput] = useState({
    //     inputTitle: '',
    //     inputAmount: '',
    //     inputDate: ''
    // });

    const titleChangeHandler = (event) => {
        setInputTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     inputTitle: event.target.value
        // });

        // more safer:
        // setUserInput((prevState) => {
        //     return { ...prevState, inputTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const subdmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: inputTitle,
            amount: +inputAmount,
            date: new Date(inputDate),
        };

        props.onSubmitExpenseData(expenseData);
        setInputTitle("");
        setInputAmount("");
        setInputDate("");
    };

    const handleCancelButton = () => {
        props.formDisplay(false);
    };

    return (
        <form onSubmit={subdmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={inputTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={inputAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2020-01-01"
                        max="2022-01-01"
                        value={inputDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={handleCancelButton}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
