// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
        <Header />
      <Sidebar />
        </div>
      </div>
   
    </div>
  );
}

export default App;
