import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AllWorks, Footer, Home } from "./Layout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/allworks" element={<AllWorks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
