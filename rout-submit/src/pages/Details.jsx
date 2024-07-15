
import MonthChart from '../component/Chart';
import useDetailsHook from '../hooks/useDetailsHook';

const Details = () => {
 
    const {oneCustomer,userTransaction} = useDetailsHook()

  return (
    <div className='container mx-auto flex flex-col justify-center items-center'>
      <h2 className='text-3xl'> {oneCustomer?.name}</h2>
      
       <div className=' w-1/2  '>

       <MonthChart userTransaction={userTransaction} />
       </div>
    </div>
  )
}

export default Details