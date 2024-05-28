import { useState } from 'react'
import Header from './header'
import Balance from './Balance'
import TotalBalance from './totalBalance'
import History from './History'
import AddTransaction from './AddTransaction'

function App() {
  const [transaction, setTransaction] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <div className='app'>

    <Header/>
    < TotalBalance/>
    <Balance/>
    <History/>
    <AddTransaction 
    transaction={transaction}
    setTransaction={setTransaction}
    setAmount={setAmount}
    amount={amount}
    />

        
    </div>
  )
}

export default App
