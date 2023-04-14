import React, {useState} from "react";
import "./Sidebar.css";
const Sidebar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <ul className={`sidebar ${open ? 'active' : ""}`}>
        <div className="menu-btn"><button onClick={() => setOpen(prev => !prev)}><i className='bx bxs-chevron-right'></i></button></div>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
