import React, { useContext }  from 'react'
import {transctionContext} from './context/transactionContextprovider'

const totalBalance = () => {
  const{transaction} = useContext(transctionContext)
  /* const trans = state.transactions; */
  const amount = transaction.map(tans => tans.amount);
  const total = amount.reduce(( p , c) => {
    return p + c
  },0).toFixed(2)
  
  return ( 
    <>
     <p className='totalBalance'>
       Total balance <br /> #{total} </p>
     
    </>
  )
}

export default totalBalance