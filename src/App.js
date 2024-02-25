import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Hosc from "./Component/page/Hosc";
// import About from "./Component/page/About";
import Paysystem from "./Component/Paysystem";
// import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={ <Hosc/> } />
          <Route path="/ps2" element={ <Paysystem/> } />

          {/* <Route path="contact" element={ <Contact/> } /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
