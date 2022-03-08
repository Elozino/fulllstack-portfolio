import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(true);

  // useEffect(() => {
  //   const menubar = () => setMenu(!menu);
  //   menubar();
  // }, []);

  return (
    <nav className="nav">
      <h1>Elozino Ovedhe</h1>
      {/* <span>icon</span> */}
      {/* <ul className="nav__nav-link"> */}
      <ul className={menu ? "nav__nav-link" : "nav__nav-link active"}>
        {["Home", "About", "Work", "Skills", "Contact"].map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.toLocaleLowerCase()}`}
              onClick={() => setMenu(!menu)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav__menu" onClick={() => setMenu(!menu)}>
        {menu ? <FaBars /> : <FaTimes />}
      </div>
    </nav>
  );
}

export default Navbar;
