import React, {useState} from 'react';
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
    const expenses = props.data;
    const [yearFilter, setYearFilter] = useState('2020');
    const filtering = (year)=>{
        return expenses.filter((ele)=>{
            return ele.date.getFullYear().toString()===year;
        });
    }
    const filteredArray = filtering(yearFilter);

    const handleChangeYearFilter = (year)=>{
        setYearFilter(year);
    }

    return(
        <div className="expenses">
            <ExpensesFilter selected={yearFilter} onChangeYearFilter={handleChangeYearFilter}/>
            <ExpensesChart expenses={filteredArray}/>
            <ExpensesList data={filteredArray}/>
        </div>
    );
}

export default Expenses;