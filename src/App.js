import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from "./note-state";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React, { useState } from 'react';

// import Tesing from "./Tesing";



function App() {
  const [alert, setalert] = useState(null)
  const showAlert = (message, color) => {
    setalert({
      message: message,
      color: color,
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  return (
    <NoteState>
      <Router>
    <div>
        <Nav />
        <Alert alert={alert}/>
    </div>
      
        <div className="container mt-5">
          {/* <Tesing/> */}
          <Routes>

            <Route exact path="/" element={<Home />} />

            <Route exact path="about" element={<About />} />

            <Route exact path="login" element={<Login showAlert={showAlert} />} />

            <Route exact path="signup" element={<Signup showAlert={showAlert} />} />

          </Routes>
        </div>
      </Router>
      </NoteState>

      )
}

      export default App;
