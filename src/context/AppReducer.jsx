export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                transactions : state.transactions.
                                filter(transaction => transaction.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            return {
                transactions :[...state.transactions, action.payload]
            }

        case 'EDIT_TRANSACTION': 
            return {
                transactions : [...state.transactions.filter(transaction => transaction.id !== action.payload.id),
                                action.payload ]
            }
        default:
            return state
    }
}