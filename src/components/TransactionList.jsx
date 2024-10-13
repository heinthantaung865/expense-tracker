import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const TransactionList = ({handleEditTransaction}) => {
    const {transactions} = useContext(GlobalContext);
    const {deleteTransaction} = useContext(GlobalContext);
    
    return (
        <div className="mt-6">
  <div className="text-lg font-semibold mb-2">History</div>
  <hr />
  <ul className="mt-4 space-y-3">
    {transactions.map((transaction) => (
      <li key={transaction.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
        <div className="font-medium">{transaction.text}</div>
        <div className={`${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'} font-semibold`}>
          {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
        </div>
        <div className="flex space-x-2">
          <button className="text-blue-500" onClick={() => handleEditTransaction(transaction)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="text-red-500" onClick={() => deleteTransaction(transaction.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>


    )   
}

export default TransactionList
