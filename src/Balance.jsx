import React, { useContext } from 'react'
import {transctionContext} from './context/transactionContextprovider'

const Balance = () => {
  const{transaction} = useContext(transctionContext)
  /* const trans = state.transactions; */
  const amount = transaction.map(tans => tans.amount )
  const incomeTotal = amount
        .filter(tans => tans > 0)
        .reduce(( p , c) => {
          return p + c
        },0)
        .toFixed(2)
  const expenseTotal = amount
        .filter(tans => tans < 0)
        .reduce(( p , c) => {
          return p + c
        },0)
        
  return (
    <div className='balance'>
        <div className="income_balance">
            <h5>INCOME</h5>
            <p className='income_balance_amount'>#{incomeTotal}</p>
        </div>
        
        <div className="expense_balance">
            <h5>EXPENSES</h5>
            <p className="expense_balance_amount">#{Math.abs(expenseTotal).toFixed(2)}</p>
        </div>

    </div>
  )
}

export default Balance