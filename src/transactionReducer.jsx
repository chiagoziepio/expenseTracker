const transactionReducer = (state ,action)=>{
    switch (action.type) {
        case 'DELETED_TRANSACTION':
            console.log(`seen ${action.payload}`);
            return{
                
                ...state,
                transactions: state.transactions.filter(trans => trans.id !== action.payload)

            }
            case 'ADDED_TRANSACTION':
                return{
                    ...state,
                    transactions: [action.payload, ...state.transactions]
                }
            break;
    }
    
}

export default transactionReducer