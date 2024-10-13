import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const income = transactions.filter(transaction => transaction.amount > 0)
                    .map(transaction => transaction.amount)
                    .reduce((acc, item) => {return acc + item},0)
                    .toFixed(2);
    const expense = transactions.filter(transactions => transactions.amount < 0)
                    .map(transaction => transaction.amount)
                    .reduce((acc, item) => {return acc + item},0)
                    .toFixed(2);

    return (
        <div className="flex justify-between bg-white p-4 mt-4 rounded-lg shadow-sm">
  <div className="text-center w-1/2 border-r">
    <div className="text-sm text-gray-500">Income</div>
    <div className="text-xl font-semibold text-green-500">${income}</div>
  </div>
  <div className="text-center w-1/2">
    <div className="text-sm text-gray-500">Expense</div>
    <div className="text-xl font-semibold text-red-500">${Math.abs(expense)}</div>
  </div>
</div>


    )
}

export default IncomeExpenses
