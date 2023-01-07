import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookmark from "./components/Bookmarks/Bookmark";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/random" element={<Home />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
