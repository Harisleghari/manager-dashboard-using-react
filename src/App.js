/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const [open, setopen] = useState(true);

  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div className="container-fluid">
      <div className="row vh-100 d-flex ">
        <div className="col-lg-2 col-md-3 col-sm-6 main-sidebar">
          <SideBar isOpen={open} toggleSidebar={toggleOpen} />
        </div>
        <div className="main-content col-lg-10 col-md-9 col-sm-6">
          <MainContent isOpen={open} toggleSidebar={toggleOpen} />
        </div>
      </div>
    </div>
  );
}

export default App;
