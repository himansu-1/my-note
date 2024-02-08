import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from "./note-state";



function App() {
  return (
    <NoteState>
      <Router>

        <Nav />
        <div className="container">

          <Routes>

            <Route exact path="/" element={<Home />} />

            <Route exact path="about" element={<About />} />

          </Routes>
        </div>
      </Router>
      </NoteState>

      )
}

      export default App;
