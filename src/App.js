import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/login";
import SignUp from "./components/signup";
import NoteState from "./context/notes/NotesStates";

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
