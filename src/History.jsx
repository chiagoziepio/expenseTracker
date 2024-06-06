import React, { useContext } from 'react'
import {transctionContext} from './context/transactionContextprovider'

const History = () => {
  const{transaction, deletTransaction} = useContext(transctionContext)
 /*  const trans = state.transactions; */
  
  return (
    <div className='transactions'>
        <p>Transactions</p>
        <ul>
          { transaction.map((tran)=>(

            <li className={tran.amount < 0 ? "expense": "income"}key={tran.id}>
              <label onClick={() => deletTransaction(tran.id)}>x</label>
              <p>{tran.item}</p>
              <span>#{ Math.abs(tran.amount) }</span>
            </li>
          )
          )}
               
        {/* <li className='income'>
            <p>Tomatoes</p>
            <span>#400.00</span>
            </li> */}
        </ul>
        
    </div>
  )
}

export default History