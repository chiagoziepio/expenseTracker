import { useState } from 'react'
import Header from './header'
import Balance from './Balance'
import TotalBalance from './totalBalance'
import History from './History'

function App() {
  

  return (
    <div className='app'>

    <Header/>
    < TotalBalance/>
    <Balance/>
    <History/>

        
    </div>
  )
}

export default App
