import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isAddMode, setIsAddMode] = useState(false);
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
          title: enteredTitle,
          amount: +enteredAmount,
          date: new Date(enteredDate)
        };
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setIsAddMode(false);
        props.onSaveExpenseData(expenseData);
    }
    const addModeHandler = (event)=>{
        event.preventDefault();
        setIsAddMode((prevState)=>!prevState);
    }

    let formResult = (
        <div className="new-expense__addButton">
            <button onClick={addModeHandler}>Add New Expense</button>
        </div>
    );

    if(isAddMode){
        formResult = (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            type="text"
                            onChange={titleChangeHandler}
                            value={enteredTitle}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            onChange={amountChangeHandler}
                            value={enteredAmount}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type="date"
                            min="2019-01-01"
                            max="2022-12-31"
                            onChange={dateChangeHandler}
                            value={enteredDate}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={addModeHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        );
    }
    return (
        formResult
    );
}

export default ExpenseForm;