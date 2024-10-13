import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  // console.log(transactions);
  
  const total = transactions.map(transaction => transaction.amount).
                reduce((acc, item) => {return acc + item},0).toFixed(2)
  
  return (
    <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      <div className="text-sm text-gray-500">My Balance</div>
      <div className="text-3xl font-semibold mt-2">${total}</div>
    </div>


  )
}

export default Balance
