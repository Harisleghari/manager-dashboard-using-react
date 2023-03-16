import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faUsers,
  faUser,
  faUserLarge,
  faGear,
  faChevronLeft,
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <div>
            <div>
              <img
                src="https://enableu.com/wp-content/uploads/2022/08/Enable-u-Logo.svg"
                alt="logo"
              ></img>
            </div>
            
              <div className="custom-menu" style={{display: props.isOpen? "block" : "inline"}}>
              
              
            </div>
            <div className="m-2">
              <span className="m-2">
                <FontAwesomeIcon icon={faUserPlus} />
              </span>
              Executive
            </div>
            <div className="m-2">
              <span className="m-2">
                <FontAwesomeIcon icon={faUsers} />
              </span>
              Manager
              <span style={{ float: "right" }}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
            </div>
            <div className="m-2">
              <span className="m-2">
                <FontAwesomeIcon icon={faUser} />
              </span>
              Individual
              <span style={{ float: "right" }}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
            </div>
            <div className="m-2">
              <span className="m-2">
                <FontAwesomeIcon icon={faUserLarge} />
              </span>
              Super Admin
              <span style={{ float: "right" }}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
            </div>
            <div className="m-2">
              <span className="m-2">
                <FontAwesomeIcon icon={faGear} />
              </span>
              Setting
              <span style={{ float: "right" }}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
            </div>
      {/* <button onClick={props.toggleSidebar} className="sidebar-toggle">
        Toggle Sidebar
      </button> */}
      <button type="button" onClick={props.toggleSidebar} className="sidebar-toggle">
                <span className="navbar-toggler-icon" >{ props.isOpen ?<FontAwesomeIcon icon={faCircleChevronLeft} />: <FontAwesomeIcon icon={faCircleChevronRight} />}</span>
    </button>
    </div>

    
        </div>
  );
};
export default SideBar;