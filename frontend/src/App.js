import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AllWorks, Footer, Home, Navbar } from "./Layout";
import { useState } from "react";

function App() {
  const [isAllWork, setisAllWork] = useState(false);

  return (
    <div className="app">
      <Navbar isAllWork={isAllWork} setisAllWork={setisAllWork} />
      <Routes>
        <Route
          index
          element={<Home setisAllWork={setisAllWork} isAllWork={isAllWork} />}
        />
        <Route path="/allworks" element={<AllWorks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
