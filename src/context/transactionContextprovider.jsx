import { useReducer } from "react"
import transactionReducer from "../transactionReducer"
import { createContext } from "react";




const initialState = {

    transactions:[

        {
            item: "salary",
            amount: 530,
            id: 1
        },
        {
            item: "textbook",
            amount: -230,
            id: 2
        },
        {
            item: "tomatoes",
            amount: -400,
            id: 3
        },
        {
            item: "birthday gift",
            amount: 630,
            id: 4
        },
    ]
}

 export const transctionContext = createContext();

const transactionContextprovider = ({children})=>{
 const [state , dispatch] = useReducer(transactionReducer,initialState)

 function deletTransaction(id) {
    dispatch(
        {
            type: 'DELETED_TRANSACTION',
            payload: id
        }
    )
 }
 function addTransaction (transaction){
    dispatch(
    {
        type: 'ADDED_TRANSACTION',
        payload: transaction
    }
    )
 }
 
    return(
        <transctionContext.Provider value = {{
           transaction: state.transactions, deletTransaction, addTransaction}} >
            {children}
        </transctionContext.Provider>
    )
}

export default transactionContextprovider