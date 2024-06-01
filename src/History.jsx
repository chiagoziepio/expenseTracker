import React, { useContext } from 'react'
import {transctionContext} from './context/transactionContextprovider'

const History = () => {
  const trans = useContext(transctionContext)
  const transaction = trans.transactions
  console.log(trans.transactions);
  return (
    <div className='transactions'>
        <p>Transactions</p>
        <ul>
          {transaction.map(tran =>(
            
            <li className='income'>
                <p>Tomatoes</p>
                <span>#400.00</span>
                </li>
          ))}
               
        </ul>
        
    </div>
  )
}

export default History