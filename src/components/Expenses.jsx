import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expense({ items }) {
  return (
    <Card className='expenses'>
      {items.map((item, index) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={index}
        />
      ))}
    </Card>
  );
}

export default Expense;
