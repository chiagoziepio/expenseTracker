import { useState } from 'react'
import Header from './header'
import Balance from './Balance'
import TotalBalance from './totalBalance'
import History from './History'
import AddTransaction from './AddTransaction'
import TransactionContextprovider from './context/transactionContextprovider'

function App() {
  const [transaction, setTransaction] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <div className='app'>


    <Header/>
      
      <TransactionContextprovider>

        <TotalBalance/>
        <Balance/>
        <History/>
        <AddTransaction 
        transaction={transaction}
        setTransaction={setTransaction}
        setAmount={setAmount}
        amount={amount}
        />
      </TransactionContextprovider>
    
    </div>
  )
}

export default App
