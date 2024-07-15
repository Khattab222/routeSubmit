import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../context/dataContext';
import { useParams } from 'react-router-dom';

const useDetailsHook = () => {
  
    const { transactions, customers, } = useContext(dataContext);
    const {id} = useParams()
  const [oneCustomer, setoneCustomer] = useState({});
  const [userTransaction, setuserTransaction] = useState([])

      // get customer data
    const getcustomerData = (id) =>{
      const customer = customers.find((item) => item.id === Number(id));
      setoneCustomer(customer)
    }

    // get transaction belong to the  selected customer
    const getCustomerTransactions = (id) =>{

           const filtered = transactions?.filter((item) => item.customer_id === Number(id) );
           setuserTransaction(filtered)

    }

    useEffect(() => {
   
      getcustomerData(id);
      getCustomerTransactions(id)

    }, [customers,id,transactions])
  
  
  
  
  
  
    return {oneCustomer,userTransaction}
}

export default useDetailsHook