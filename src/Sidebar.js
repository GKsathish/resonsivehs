import React from "react";
import { NavDropdown, NavItem, Navbar,NavLink } from "react-bootstrap";
import { Link,  } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    {
      title: "Dashboard",
      link: "/dashboard"
    },
    {
      title: "Dealer Management",
      submenu: [
        {
          title: "Create Dealer",
          link: "/create-dealer"
        },
        {
          title: "Modify Dealer",
          link: "/modify-dealer"
        }
      ]
    },
    {
      title: "Wallet Management",
      submenu: [
        {
          title: "Create Wallet",
          link: "/create-wallet"
        },
        {
          title: "Modify Wallet",
          link: "/modify-wallet"
        }
      ]
    },
    {
      title: "User Management",
      submenu: [
        {
          title: "User Creation",
          link: "/create-user"
        },
        {
          title: "Add Profile",
          link: "/add-profile"
        }
      ]
    }
  ];
  
  return (
   
    // <div className="col-2  bg-side vh-100 d-none d-md-none d-lg-block ">
    <div className={`col-2   bg-side vh-100 ${isOpen ? 'd-block col-6' : 'd-none'} d-md-none d-lg-block`}>

      <Navbar
        className="nav flex-column "
        style={{  }}
      >
        {menuItems.map((menuItem, index) => (
          <NavItem key={index}>
            {menuItem.submenu ? (
              <NavDropdown title={menuItem.title}>
                {menuItem.submenu.map((subItem, subIndex) => (
                  <NavLink key={subIndex} href={subItem.link}>
                    {subItem.title}
                  </NavLink>
                ))}
              </NavDropdown>
            ) : (
              <NavLink href={menuItem.link}>{menuItem.title}</NavLink>
            )}
          </NavItem>
        ))}
      </Navbar>
    </div>

  );
};

export default Sidebar;
