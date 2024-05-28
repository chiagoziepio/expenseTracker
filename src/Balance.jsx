import React from 'react'

const Balance = () => {
  return (
    <div className='balance'>
        <div className="income_balance">
            <h5>INCOME</h5>
            <p className='income_balance_amount'>#0</p>
        </div>
        
        <div className="expense_balance">
            <h5>EXPENSES</h5>
            <p className="expense_balance_amount">#0</p>
        </div>

    </div>
  )
}

export default Balance