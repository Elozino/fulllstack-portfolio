import React, { useState } from "react";
import { About, Contact, Header, Navbar, Skills, Work } from "./index";

function Home() {
  const [isAllWork, setisAllWork] = useState(false);

  return (
    <main>
      <Navbar isAllWork={isAllWork} setisAllWork={setisAllWork} />
      <Header />
      <About />
      <Work isAllWork={isAllWork} setisAllWork={setisAllWork} />
      <Skills />
      <Contact />
    </main>
  );
}

export default Home;
