import Expenses from './components/Expenses';

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 540,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 12000,
            date: new Date(2021, 2, 12)
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 14500,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 18000,
            date: new Date(2021, 5, 12),
        },
    ];
    return (
        <div>
            <h2>Let's gets started</h2>
            <Expenses item={ expenses } />
        </div>
    );
}

export default App;