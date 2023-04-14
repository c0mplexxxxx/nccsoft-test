import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";


const App = () => {
  return <div className="App">
    <div className="layout">
      <div className="sidebar-wrapper"><Sidebar/></div>
      <div className="content-wrapper"><Content/></div>
      <div className="footer-wrapper"><Footer/></div>
    </div>
  </div>;
};

export default App;
