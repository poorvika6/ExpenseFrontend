import React from 'react'
import CurrentItem from './CurrentItem';

function BalanceContainer(props) {
    let income=0;
    let expenses=0;
    props.expense.forEach((i)=>{
     if(i.amount>0)
     {
        income+=parseInt(i.amount);
     }
     else{
        expenses+=parseInt(i.amount);
     }
    })

  return (
    <div className='balance-container'>
      <CurrentItem  title="Income" amount={income} type="income"/>
      <CurrentItem title="Expense" amount={expenses} type="expense"/>
      <CurrentItem title="Balance" amount={income+expenses} type="balance"/>
    </div>
  )
}

export default BalanceContainer