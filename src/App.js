import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>

        <Nav />
        <div className="container">

        <Routes>

          <Route exact path="/" element={<Home />} />

          <Route exact path="about" element={<About />} />

        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
