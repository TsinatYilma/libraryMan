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
    </>
  );
}

export default Home;
