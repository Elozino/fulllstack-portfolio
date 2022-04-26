import React from "react";
import { About, Contact, Header, Skills, Work } from "./index";

function Home({ isAllWork, setisAllWork }) {
  console.log(isAllWork);
  return (
    <main>
      <Header />
      <About />
      <Work isAllWork={isAllWork} />
      <Skills />
      <Contact />
    </main>
  );
}

export default Home;
