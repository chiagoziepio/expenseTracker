import React, {useContext} from 'react'
import {transctionContext} from './context/transactionContextprovider'


const AddTransaction = ({transactions, setTransactions, amount, setAmount}) => {
  const { addTransaction, transaction } = useContext(transctionContext)

  const handleAddTransction = (e)=>{
   
     e.preventDefault();
   const newTransaction = {
      id: transaction.length ? transaction[ transaction.length -1].id + 1: 1,
      item : transactions,
      amount : +amount
    }
    const allTransaction = transaction.concat(newTransaction)
    addTransaction(allTransaction) 
    console.log(transaction);
  }
  return (
    <form  onSubmit={handleAddTransction}>
        <p>Add Transaction</p>

        <div className="input_control">
            <input 
            type="text"
            required
            value={transactions}
            onChange={(e) => setTransactions(e.target.value)}
            placeholder='Enter text'
            />
            
            <input 
            type="text"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='amount'
            id='amount'
            />
            <label htmlFor="amount">include "-" for expenses </label>
        </div>
        
        <button type="submit">Add transaction</button>

    </form>
  )
}

export default AddTransaction