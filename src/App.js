// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Contetnt from "./Contetnt";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="container-fluid">
    
        <Header  toggleSidebar={toggleSidebar} />
  
      <div className="row">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Contetnt  />
      </div>
    </div>
  );
}

export default App;
