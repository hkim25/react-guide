import React from 'react';
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props)=>{
    if(props.data.length===0){
        return <p className="expenses-list__fallback">No expenses found.</p>
    }
    return (
            <ul className="expenses-list">
                {props.data.map(ele =>
                    <ExpenseItem
                        key={ele.id}
                        title={ele.title}
                        amount={ele.amount}
                        date={ele.date} />)}
            </ul>
        );
}

export default ExpensesList;