import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="row">
      <div className="col-12 bg-con h-25 d-flex flex-row justify-content-between align-items-center">
        <div>
          {/* <img
            src="./bsnl.webp"
            alt="logo"
            style={{height: "50px", width:'120px',margin:'20px',ble}}
            className=" d-lg-block d-xl-block d-none " */}
          {/* /> */}
          <div
            style={{
              position: "relative",
              width: "120px",
              height: "60px",
              overflow: "hidden",
            }}
            className="d-lg-block d-xl-block d-none"
          >
            <img
              src="./bsnl.webp"
              alt="logo"
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                top: 0,
                left: 0,
                objectFit: "cover",
                mixBlendMode: "multiply",
              }}
            />
          </div>
          <span className="  h-100 w-100 d-lg-none d-sm-block" onClick={toggleSidebar}>
            <i className="bi bi-list text-danger"></i>
          </span>
        </div>
        <h3 className="text-white text-center">Sales Channel Management</h3>
        <div className="d-block ">
          <span className="h-100 w-100 d-block   ">
            {" "}
            {/* <i className="bi bi-person-circle  text-white h-100 w-100"></i> */}
            <div
              style={{
                position: "relative",
                width: "100px",
                height: "60px",
                overflow: "hidden",
              }}
              className="d-lg-block d-xl-block "
            >
              <img
                src="./Pyro.png"
                alt="logo"
                style={{
                  width: "100%",
                  height: "auto",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  objectFit: "cover",
                  mixBlendMode: "multiply",
                  padding: "10px",
                }}
              />
            </div>
          </span>
    
        </div>
      </div>
    </div>
  );
};

export default Header;
