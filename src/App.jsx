import { useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import GlobalProvider from './context/GlobalState'
function App() {
  const [transactionToEdit, setTransactionToEdit] = useState(null); 
  const [isEdit, setIsEdit] = useState(false);

  function handleEditTransaction(transactionToEdit){
    setIsEdit(true);
    setTransactionToEdit(transactionToEdit)
  }
  return (
    <GlobalProvider>
  <div className="container mx-auto max-w-lg p-4">
    <Balance />
    <IncomeExpenses />
    <TransactionList handleEditTransaction={handleEditTransaction} />
    <AddTransaction transactionToEdit={transactionToEdit} isEdit={isEdit} setIsEdit={setIsEdit} />
  </div>
</GlobalProvider>
  )
}

export default App
