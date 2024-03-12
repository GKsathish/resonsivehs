import React from "react";

const Contetnt = ({ isOpen, toggleSidebar }) => {
  return (
   
      <div className={` ${isOpen ? "col-sm-12":"col-10"}` }>
        <div className="card bg-body-secondary m-3 ">
          <h1 className="card-header">content</h1>
          <p className="card-description">
          The definition of sales is a set of activities a business does to help customers buy their product. These actions vary from company to company but often include: Prospecting and generating new leads.
          </p>
        </div>
      </div>
  
  );
};

export default Contetnt;
