import { useReducer } from "react"
/* import transctionContext from "./transactionContext" */
import transactionReducer from "../transactionReducer"
import { createContext } from "react";




const transactions = [
    {
        item: "salary",
        amount: "530",
        id: 1
    },
    {
        item: "textbook",
        amount: "-230",
        id: 2
    },
    {
        item: "tomatoes",
        amount: "-400",
        id: 3
    },
    {
        item: "birthday gift",
        amount: "630",
        id: 2
    },
]

 export const transctionContext = createContext(transactions);

const transactionContextprovider = ({children})=>{
 const [state , dispatch] = useReducer(transactionReducer,transactions)
    return(
        <transctionContext.Provider value = {{transactions}} >
            {children}
        </transctionContext.Provider>
    )
}

export default transactionContextprovider