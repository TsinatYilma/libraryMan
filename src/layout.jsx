import { Outlet, Link } from "react-router-dom";
import "./css/home.css";

function Layout() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-black border">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Library Management
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pages/books">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/members">
                  Members
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* This is where child pages will render */}
      <main className=" border border-black w-screen min-h-[1000pz]">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="pt-2000 border border-black ">
        <div className="ourfooter ">
          <div>
            <h2>Image Gallery</h2>
            <div className="image-container">
              <div>
                <img src="/images/img 1.jpeg" alt="" />
                <img src="/images/img 2.webp" alt="" />
                <img src="/images/img 3.jpeg" alt="" />
              </div>
              <div>
                <img src="/images/img 4.jpeg" alt="" />
                <img src="/images/img 5.jpeg" alt="" />
                <img src="/images/img 6.jpeg" alt="" />
              </div>
            </div>
          </div>

          <div>
            <h2>About</h2>
            <div className="about-footer">
              <img src="src/images/image1.jpg" alt="" />
              <p>
                Our Library Management System is a user-friendly platform
                designed to simplify the way you access and manage library
                resources.
              </p>
            </div>
            <p>
              Whether you're a student, educator, or book enthusiast, we make it
              easy to browse our extensive catalog, reserve books, and track
              borrowed items—all in one place.
            </p>
            <a href="#">Learn more</a>
          </div>

          <div className="ourcontact">
            <h2>Contact</h2>
            <p>You can also connect with me through the following channels:</p>
            <p>
              <span>Phone:</span> +2519-00-00-00-00
            </p>
            <p>
              <span>Address:</span> Addis Ababa, Ethiopia
            </p>
            <p>
              <span>Email:</span> LMSGROUP@gmail.com
            </p>
          </div>
        </div>

        <div className="dark-footer">
          <h2>Designed by LMS GROUP</h2>
        </div>
      </footer>
    </>
  );
}

export default Layout;
