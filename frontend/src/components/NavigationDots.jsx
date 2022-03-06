import React from "react";

function NavigationDots({ activeId }) {
  return (
    <div className="app__navigation-dots">
      {["home", "about", "work", "skills", "contact"].map((item, i) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          key={i}
          href={`#${item}`}
          style={activeId === item ? { backgroundColor: "#313bac" } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDots;
