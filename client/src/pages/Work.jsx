import Header from "../components/Header";
import Footer from "../components/Footer";

function Work() {
  return (
    <>
      <Header />
      <h1 className="text-center p-5">My Work</h1>
      <main className="d-flex flex-column">
        <h2 className="text-center">
          Check Out The Websites and Applications Ive Built!
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-5">
              <h4 className="text-center">Website Projects</h4>
              <div className="card mt-5 mb-4">
                <img
                  src="nidhi_marketplace-home-page-screenshot.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    nidhi Marketplace Website
                  </h5>
                  <p className="card-text text-left">
                    Full-Stack Mock Online Marketplace/Auction Website, built
                    with MERNG (MongoDB, Express.js, React, Next.js, GraphQL)
                    technology stack.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Click the links to see more.
                    </small>
                  </p>
                </div>
              </div>
              <div className="card my-4">
                <img
                  src="WinBig-Casino-Betting-App.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    WinBig Digital Casino Website
                  </h5>
                  <p className="card-text text-left">
                    Full-Stack Mock Online Digital Casino Website, built with
                    Node.js, Express.js, and PostgreSQL technology stack.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Click the links to see more.
                    </small>
                  </p>
                </div>
              </div>
              <div className="card my-3">
                <img
                  src="Wine-Dine-Recipe-App.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Wine & Dine Website
                  </h5>
                  <p className="card-text text-left">
                    Full-Stack Mock Online Marketplace/Auction Website, built
                    with MERNG (MongoDB, Express.js, React, Next.js, GraphQL)
                    technology stack.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Click the links to see more.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-5">
              <h4 className="text-center">Applications</h4>
              <div className="card mt-5 mb-4">
                <img
                  src="Tech-Notes-Web-Design-Technology-Blog-Website.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    tech.notes Blog PWA
                  </h5>
                  <p className="card-text text-left">
                    Full-Stack Blog website, built as a PWA with Node.js,
                    Express.js, and PostgreSQL technology stack.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Click the links to see more.
                    </small>
                  </p>
                </div>
              </div>
              <div className="card my-4">
                <img
                  src="Note-Taker-App.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Note Taker Browser Application
                  </h5>
                  <p className="card-text text-left">
                    Browser Application that allows a user to create and
                    add/save notes in the browser. It uses JavaScript to modify
                    a JSON file, adding note objects and savingthem in local
                    storage.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Click the links to see more.
                    </small>
                  </p>
                </div>
              </div>
              <div className="card my-4">
                <img
                  src="Employee-Database-Application-in-VSCode-Terminal-screenshot.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Faux Employee Database Application
                  </h5>
                  <p className="card-text text-left">
                    Back-End Node.js application that allows a user to update a mock employee database. Application built using JavaScript, Node.js, and PostGreSQL.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Click the links to see more.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Work;
