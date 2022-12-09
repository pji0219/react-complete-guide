import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  // 여러 state 다루기 1방법
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // 여러 state 다루기 2방법
  /* const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });

    3방법 이전 state에 의존해야 하는 경우 가장 안전한 방법, 이전 state에 기반하는 상황에서는 이 방법을 사용하는 것을 권장 예) 카운터
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }
    })
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });

    3방법 이전 state에 의존해야 하는 경우 가장 안전한 방법
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value }
    })
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });

    3방법 이전 state에 의존해야 하는 경우 가장 안전한 방법
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value }
    })
  }; */

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  // 양방향 바인딩: 상태를 업데이트 하기 위해서 입력값을 수신하는 것 뿐만 아니라 입력에 상태를 다시 보내줌
  // 그래서 상태를 변경하면 입력도 변함
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
