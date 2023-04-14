import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";


const App = () => {
  return <div className="App">
    <Sidebar/>
    <Content/>
    <Footer/>
  </div>;
};

export default App;
