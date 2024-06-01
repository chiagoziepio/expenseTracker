import { useReducer } from "react"
import transactionReducer from "../transactionReducer"
import { createContext } from "react";




const initialState = {

    transactions:[

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
            id: 4
        },
    ]
}

 export const transctionContext = createContext();

const transactionContextprovider = ({children})=>{
 const [state , dispatch] = useReducer(transactionReducer,initialState)
 
    return(
        <transctionContext.Provider value = {{state}} >
            {children}
        </transctionContext.Provider>
    )
}

export default transactionContextprovider