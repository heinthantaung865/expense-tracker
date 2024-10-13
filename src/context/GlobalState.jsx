import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions : [
    {id: 1, text : 'Flower', amount : -50},
    {id: 2, text : 'Salary', amount : 500},
    {id: 3, text : 'Snacks', amount : -30}
  ]
}
export const GlobalContext = createContext(initialState)

const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function deleteTransaction(id){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  function editTransaction(transaction){
    dispatch({
      type : 'EDIT_TRANSACTION',
      payload : transaction
    })
  }
  return (
    <GlobalContext.Provider value={
      {
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        editTransaction
      }
    }>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
