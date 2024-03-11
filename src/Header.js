import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  return (
    <div className="row">
      <div className="col-12 bg-warning h-25 d-flex flex-row justify-content-between align-items-center">
        <div>
          <img
            src="./logo512.png"
            alt="logo"
            height="75"
            width="75"
            className=" d-lg-block d-xl-block d-none "
          />
          <span className="  h-100 w-100 d-lg-none d-sm-block">
            <i className="bi bi-list text-danger"></i>
          </span>
        </div>
        <div>
          <span className="h-100 w-100">
            {" "}
            <i className="bi bi-person-circle  text-danger h-100 w-100"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
