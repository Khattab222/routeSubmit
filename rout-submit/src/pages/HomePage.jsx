
import TableContent from "../component/TableContent";
import SearchComponent from "../component/SearchComponent";
import useHomePageHook from "../hooks/useHomePageHook";

const HomePage = () => {
 
  const {handleSearch,transacFullInfo,customers}= useHomePageHook()


  return (
    <div className="mx-4 px-10 ">
      <h2 className="text-slate-600 font-extrabold mt-3 text-center text-3xl">
       Customers Transaction Table
      </h2>

      <div className="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
        <SearchComponent handleSearch={handleSearch} />
      </div>

      <div className="tableHeader">
        <div className=" justify-self-start ">Name</div>
        <div className=" justify-self-center ">Date</div>
        <div className=" justify-self-center ">Amout</div>
      </div>

      <div className="  bg-white shadow-sm rounded-sm">
        {transacFullInfo.length ?
          transacFullInfo.map((item, i) => (
            <TableContent key={i} customers={customers} data={item} />
          )):"No transactions"}
      </div>
    </div>
  );
};

export default HomePage;
