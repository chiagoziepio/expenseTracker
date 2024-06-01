import React, { useContext } from 'react'
import {transctionContext} from './context/transactionContextprovider'

const History = () => {
  const{state} = useContext(transctionContext)
  const trans = state.transactions

  /* console.log(trans);  */
  return (
    <div className='transactions'>
        <p>Transactions</p>
        <ul>
          { trans.map((tran)=>(

            <li className={tran.amount < 0 ? "expense": "income"}key={tran.id}>
              <p>{tran.item}</p>
              <span>#{tran.amount}</span>
            </li>
          )
          )}
               
       {/*  <li className='income'>
            <p>Tomatoes</p>
            <span>#400.00</span>
            </li> */}
        </ul>
        
    </div>
  )
}

export default History