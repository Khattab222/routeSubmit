import axios from "axios"
import {createContext, useEffect, useState} from "react"



export const  dataContext = createContext()


const DataContextProvider = ({children}) =>{

    const [customers, setcustomers] = useState([])
    const [transactions, setTransactions] = useState([])



    // get data from server
const getData = async ()=>{
    const {data} = await axios.get("http://localhost:3000/");
    if (data) {
        
        setcustomers(data.customers)
        setTransactions(data.transactions)
    }
}

useEffect(() => {
  
    getData()
  
 
}, [])


const getcustomerName = (id) =>{
    const name = customers.find((item) => item.id === id).name
    return name
}




    return <dataContext.Provider value={{transactions,customers,getData,getcustomerName}}>
        {children}
         </dataContext.Provider>
}


export default DataContextProvider