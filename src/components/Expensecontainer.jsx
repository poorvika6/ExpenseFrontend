import React, { useState ,useEffect} from 'react'
import Form from './Form'
import { v4 as uid } from 'uuid'
import History from './History'
import BalanceContainer from './BalanceContainer'

function Expensecontainer() {


  const [expense, setExpense] = useState([]);

  async function addExpense(title, amount) {
   try {
     const newExpense=await fetch("https://expensebackend-55nr.onrender.com/post", {   
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, amount })
    })
    const data = await newExpense.json()
    console.log(data);
    if(data.expense)
    {
      setExpense([...expense,data.expense])
    }
   } catch (error) {
    console.log(error);
   }
  }
   async function fetchExpenses() {
    try {
      const res = await fetch("https://expensebackend-55nr.onrender.com/get");
      const data = await res.json();
      if (data.expenses) {
        setExpense(data.expenses);
      }
    } catch (error) {
      console.log("Error fetching expenses:", error);
    }
  }

  useEffect(() => {
    fetchExpenses();
  }, []);
  async function deleteExpense(id) {
  
  await fetch(`https://expensebackend-55nr.onrender.com/expense/${id}`,
    {
      method:"DELETE"
    }
  )
  fetchExpenses()
}

  return (
    <div className='expense-container'>
      <BalanceContainer expense={expense} />
      <Form addExpense={addExpense} />
      <History expense={expense} deleteExpense={deleteExpense} />
    </div>
  )
}

export default Expensecontainer
