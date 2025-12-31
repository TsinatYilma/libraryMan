import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import "./css/home.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="home.html">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./pages/books">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="members.html">
                Members
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="settings.html">
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Index.html">
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
