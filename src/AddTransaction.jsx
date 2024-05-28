import React from 'react'

const AddTransaction = ({transaction, setTransaction, amount, setAmount}) => {
  return (
    <form >
        <p>Add Transaction</p>

        <div className="input_control">
            <input 
            type="text"
            required
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
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