import  { useContext, useEffect, useState } from 'react'
import { dataContext } from '../context/dataContext';

const useHomePageHook = () => {
  
    const { transactions, customers, getData, getcustomerName } =useContext(dataContext);
    const [transacFullInfo, settransacFullInfo] = useState([]);
  
    // get full table data
    const getTableData = () => {
      const FullInfo = transactions?.map((el) => ({
        ...el,
        name: getcustomerName(el.customer_id),
      }));
      settransacFullInfo(FullInfo);
    };
  
    useEffect(() => {
      if (transactions) {
        getTableData();
      }
    }, [transactions]);
  
    const handleSearch = (e) => {
      const value = e.target.value;
      if (value === "") {
        getData();
      }
  
      const filtered = transacFullInfo.filter((el) =>
        el.name.toLowerCase().includes(value.toLowerCase())
      );
  
      settransacFullInfo(filtered);
    };
  
  
  
  
  
    return{handleSearch,transacFullInfo,customers}
}

export default useHomePageHook