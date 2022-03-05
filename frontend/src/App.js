import "./App.css";

import { About, Contact, Footer, Header, Navbar, Skills, Work } from "./Layout";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
