import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NotesStates";

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
