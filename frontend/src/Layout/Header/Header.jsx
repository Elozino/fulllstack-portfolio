import React from "react";
import "./Header.scss";
import Img1 from "../../assets/avatar.png";

import { motion } from "framer-motion";

import Wrapper from "../../container/Wrapper";

function Header() {
  return (
    <main className="header__container">
      <section>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="header__info"
        >
          <h1>
            Hello, I am <span>Elozino Ovedhe</span>
          </h1>
          <h2>
            A <span>Frontend Developer</span>
          </h2>
          <div className="header__info-content">
            {/* <h1>
            <span className="greet">Hello 👋🏽</span>
          </h1> */}

            <h3>Welcome to my page where i bring live to aesthetic design</h3>
            <p>
              I am a front-end React and React Native developer who loves
              building custom and responsive UI with functionalities that
              provide digital solutions. A tech enthusiast and a Mechanical
              Engineer. I am open to offers and would love to work on products
              that brings value.
            </p>
          </div>
          <a href="/Elozino CV.pdf" download="Elozino's CV">
            <button className="header__resume-btn">DOWNLOAD CV</button>
          </a>
          <a href="/https://drive.google.com/file/d/1Tk3gpN-eAGguMQuf17UkbGWoaEHbZ8xx/view?usp=sharing">
            <button className="header__resume-btn">DOWNLOAD CV</button>
          </a>
        </motion.div>
      </section>
      <section className="header__avatar">
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <img src={Img1} alt="My Portrait" />
        </motion.div>
      </section>
    </main>
  );
}

export default Wrapper(Header, "home");
