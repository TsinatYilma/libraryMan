import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css";

function Home() {
  return (
    <>
      {/* Navbar */}
      

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container text-center">
          <img
            className="icon mb-3"
            src="/images/icon.png"
            alt="Library Icon"
          />
          <h1>Welcome to the Library Management System</h1>
          <p>Stay organized and efficient!</p>
          <a href="books.html" className="btn btn-primary btn-lg">
            Start Managing Books
          </a>
        </div>
      </section>

      {/* Statistics */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="stats-card">
              <div className="card-header">Total Books</div>
              <div className="card-body">
                <h5 className="card-title">120</h5>
                <p>Books are ready for checkout!</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="stats-card">
              <div className="card-header">Total Members</div>
              <div className="card-body">
                <h5 className="card-title">45</h5>
                <p>Members are actively using the library.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="stats-card">
              <div className="card-header">Books Issued</div>
              <div className="card-body">
                <h5 className="card-title">30</h5>
                <p>Books are currently issued to members.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 text-center">
          <a href="books.html" className="btn btn-primary btn-lg">
            Manage Books
          </a>
          <a href="members.html" className="btn btn-success btn-lg ms-3">
            Manage Members
          </a>
          <a href="settings.html" className="btn btn-warning btn-lg ms-3">
            Settings
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="ourfooter">
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

export default Home;
