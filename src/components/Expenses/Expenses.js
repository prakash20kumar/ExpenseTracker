import ExpenseItem from './ExpenseItem';
import './Expenses.css'
const Expenses = (props) => {
    const items = props.item;
    return (
        <div className="expenses">
            {
                items.map((item, i) => (
                    <ExpenseItem key={ i } title={ item.title } amount={ item.amount } date={ item.date } />
                ))

            }
        </div>
    )

}
export default Expenses;