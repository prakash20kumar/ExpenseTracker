import ExpenseItem from './ExpenseItem';
import './Expenses.css'
const Expenses = (props) => {
    const items = props.item;
    return (
        <div className="expenses">
            {
                items.map(item => (
                    <ExpenseItem title={ item.title } amount={ item.amount } date={ item.date } />
                ))

            }
        </div>
    )

}
export default Expenses;