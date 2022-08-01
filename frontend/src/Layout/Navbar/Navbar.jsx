import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ isAllWork }) {
  const [menu, setMenu] = useState(true);

  return (
    <nav className="nav">
      <h1>Elozino Ovedhe</h1>
      <ul className={menu ? "nav__nav-link" : "nav__nav-link active"}>
        {isAllWork ? (
          <>
            {["Home"].map((item, i) => (
              <li key={i} className="link_li">
                <Link to="/" onClick={() => setMenu(!menu)}>
                  {item}
                </Link>
              </li>
            ))}
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>

      <div className="nav__menu" onClick={() => setMenu(!menu)}>
        {menu ? <FaBars /> : <FaTimes />}
      </div>
    </nav>
  );
}

export default Navbar;
