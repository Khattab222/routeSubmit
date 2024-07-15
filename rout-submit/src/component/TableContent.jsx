import React from "react";
import { useNavigate } from "react-router-dom";

const TableContent = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`customer/${data.customer_id}`)}
      className="tableContent"
    >
      <div className=" justify-self-start">{data.name}</div>
      <div className=" justify-self-center">{data.date}</div>
      <div className=" justify-self-center">{data.amount}</div>
    </div>
  );
};

export default TableContent;
