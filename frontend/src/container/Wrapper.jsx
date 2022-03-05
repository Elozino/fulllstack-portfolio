import React from "react";
import "./Wrapper.scss"
import NavigationDots from "../components/NavigationDots";

const Wrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <Component />
        <div className="app__nav-dots">
          <NavigationDots activeId={idName}/>
        </div>
      </div>
    );
  };  

export default Wrapper;
