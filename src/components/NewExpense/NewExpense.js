import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import './ExpenseForm';
const NewExpense = (props) => {
    const [isExpense, setIsExpense] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsExpense(false);
    }

    const AddExpenseBtnHandler = () => {
        setIsExpense(true);
    }

    const CancelExpenseBtnHandler = () => {
        setIsExpense(false);
    }

    return (
        <div className="new-expense">
            {!isExpense && <button onClick={ AddExpenseBtnHandler }>Add New Expense</button> }
            {isExpense && <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } onCancel={ CancelExpenseBtnHandler } /> }
        </div>
    )
}
export default NewExpense;