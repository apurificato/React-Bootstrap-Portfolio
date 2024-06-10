import Header from "../components/Header";
import Footer from "../components/Footer";

function Work() {
  return (
    <>
      <Header />
      <h1 className="text-center pt-5">My Work</h1>
      <h2 className="text-center pt-3 px-5">
        Check Out The Websites and Applications That I&apos;ve Built
      </h2>
      <main className="d-flex flex-column justify-content-center align-items-center pb-5">
        <div className="d-flex flex-column container">
          <div className="row">
            <div className="col-12">
              <div className="card mt-5 mb-4 d-flex flex-column">
                <h3 className="card-title text-center pb-3">
                  nidhi Marketplace Website
                </h3>
                <a
                  href="https://bidding-site-o6l3.onrender.com/"
                  target="_blank"
                >
                  <img
                    src="nidhi_marketplace-home-page-screenshot.webp"
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <p className="card-text py-3">
                    Full-Stack Mock Online Marketplace and Item Listing/Auction
                    Website. This project was the first larger-scale website
                    I&apos;ve built using React and there were some interesting
                    struggles attempting to get GraphQL data to query and mutate
                    properly. Some extra context files/providers needed to be
                    setup in order to make certain functionality happen.
                  </p>
                  <div className="tech-card-container d-flex flex-column p-3 rounded">
                    <h5 className="text-center">
                      Built With MERNG Stack Technology
                    </h5>
                    <div className="d-flex flex-row justify-content-around py-3">
                      <div className="col-2 text-center">
                        <img src="MongoDB-icon.svg" height="50px" />
                      </div>
                      <div className="col-2 text-center">
                        <img src="ExpressJS-icon.svg" height="50px" />
                      </div>
                      <div className="col-2 text-center">
                        <img src="react.svg" height="50px" />
                      </div>
                        <div className="col-2 text-center">
                          <img src="Node-js-icon.svg" height="50px" />
                        </div>
                        <div className="col-2 text-center">
                          <img src="GraphQL-icon.svg" height="50px" />
                        </div>
                    </div>
                  </div>
                  <div
                    id="card-button-parent"
                    className="d-flex flex-row justify-content-around py-3"
                  >
                    <a href="https://bidding-site-o6l3.onrender.com/">
                      <button className="card-button">Live Demo</button>
                    </a>
                    <a href="https://github.com/apurificato/nidhi_marketplace">
                      <button className="card-button">GitHub Repo</button>
                    </a>
                  </div>
                  <p className="card-text text-center">
                    <small className="text-muted">
                      Click the image or any of the buttons above to see and
                      learn more about this project.
                    </small>
                  </p>
                </div>
              </div>
              <div className="card mt-5 mb-4 d-flex flex-column">
                <h3 className="card-title text-center pb-3">
                  WinBig Digital Casino Website
                </h3>
                <a
                  href="https://win-big-76ecc78832f3.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src="WinBig-Casino-Betting-App.webp"
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <p className="card-text py-3">
                    Full-Stack Mock Online Digital Casino Website. This project
                    was my first introduction to building a completed website
                    with Handlebars.js, a templating engine that is similar to
                    React. Because of that it gave me some experience and
                    familiarity with using a templating enginge, before jumping
                    into React. It was also one of the first major projects that
                    I have done setting up user authentication routes.
                  </p>
                  <div className="tech-card-container d-flex flex-column p-3 rounded">
                    <h5 className="text-center">
                      Built With Full-Stack Technology
                    </h5>
                    <div className="d-flex flex-row justify-content-around py-3">
                      <div className="col-2 text-center">
                        <img src="JavaScript-icon.svg" height="50px" />
                      </div>
                      <div className="col-2 text-center">
                        <img
                          src="npm-express-and-handlebars-icon-white-text.svg"
                          height="50px"
                        />
                      </div>
                      <div className="col-2 text-center">
                        <img src="CSS3-icon.svg" height="50px" />
                      </div>
                      <div className="col-2 text-center">
                        <img src="Node-js-icon.svg" height="50px" />
                      </div>
                      <div className="col-2 text-center">
                        <img
                          src="postgreSQL-icon-white-text.svg"
                          height="50px"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="card-button-parent"
                    className="d-flex flex-row justify-content-around py-3"
                  >
                    <a href="https://win-big-76ecc78832f3.herokuapp.com/">
                      <button className="card-button">Live Demo</button>
                    </a>
                    <a href="https://github.com/apurificato/WinBig-Digital-Casino">
                      <button className="card-button">GitHub Repo</button>
                    </a>
                  </div>
                  <p className="card-text text-center">
                    <small className="text-muted">
                      Click the image or any of the buttons above to see and
                      learn more about this project.
                    </small>
                  </p>
                </div>
              </div>
              <div className="card mt-5 mb-4 d-flex flex-column">
                <h3 className="card-title text-center pb-3">
                  Wine & Dine Recipe Generation Website
                </h3>
                <a
                  href="https://apurificato.github.io/Wine-and-Dine/"
                  target="_blank"
                >
                  <img
                    src="Wine-Dine-Recipe-App.webp"
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <p className="card-text py-3">
                    Front-End Website Application that generates recipe ideas
                    and a drink pairing. Wine & Dine was created using Web APIs,
                    along with basic JavaScript, HTML and CSS to give users a
                    cool place to find some interesting recipe ideas, based on
                    form inputs. The CSS styling was done through CSS Bulma
                    Framework, something I&apos;ve never used before this
                    project.
                  </p>
                  <div className="tech-card-container d-flex flex-column p-3 rounded">
                    <h5 className="text-center">
                      Built With The Following Front-End Technology
                    </h5>
                    <div className="d-flex flex-row justify-content-around py-3">
                      <div className="col-4 text-center">
                        <img src="JavaScript-icon.svg" height="50px" />
                      </div>
                      <div className="col-4 text-center">
                        <img src="HTML5-icon.svg" height="50px" />
                      </div>
                      <div className="col-4 text-center">
                        <img src="CSS3-icon.svg" height="50px" />
                      </div>
                    </div>
                  </div>
                  <div
                    id="card-button-parent"
                    className="d-flex flex-row justify-content-around py-3"
                  >
                    <a href="https://apurificato.github.io/Wine-and-Dine/">
                      <button className="card-button">Live Demo</button>
                    </a>
                    <a href="https://github.com/apurificato/Wine-and-Dine">
                      <button className="card-button">GitHub Repo</button>
                    </a>
                  </div>
                  <p className="card-text text-center">
                    <small className="text-muted">
                      Click the image or any of the buttons above to see and
                      learn more about this project.
                    </small>
                  </p>
                </div>
              </div>
              <div className="card mt-5 mb-4 d-flex flex-column">
                <h3 className="card-title text-center pb-3">
                  tech.notes Blog Website
                </h3>
                <a href="https://tech-notes-he04.onrender.com/" target="_blank">
                  <img
                    src="Tech-Notes-Web-Design-Technology-Blog-Website.webp"
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <p className="card-text py-3">
                    tech.notes is a Full-Stack website that was built with a
                    mixture of API routes, as well as template rendering through
                    Handlebars.js. Express.js was utilized to set up a live
                    server and enable API routes for CRUD (Create, Read, Update,
                    and Delete) Process in a PostgreSQL database.
                  </p>
                  <div className="tech-card-container d-flex flex-column p-3 rounded">
                    <h5 className="text-center">
                      Built With Full-Stack Technology
                    </h5>
                    <div className="d-flex flex-row justify-content-around py-3">
                      <div className="col-2 text-center">
                        <img src="JavaScript-icon.svg" height="50px" />
                      </div>
                      <div className="col-2 text-center">
                        <img
                          src="npm-express-and-handlebars-icon-white-text.svg"
                          height="50px"
                        />
                      </div>
                      <div className="col-2 text-center">
                        <img src="CSS3-icon.svg" height="50px" />
                      </div>
                      <div className="col-2 text-center">
                        <img src="Node-js-icon.svg" height="50px" />
                      </div>
                      <div className="col-2 text-center">
                        <img
                          src="postgreSQL-icon-white-text.svg"
                          height="50px"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="card-button-parent"
                    className="d-flex flex-row justify-content-around py-3"
                  >
                    <a href="https://tech-notes-he04.onrender.com/">
                      <button className="card-button">Live Demo</button>
                    </a>
                    <a href="https://github.com/apurificato/tech.notes">
                      <button className="card-button">GitHub Repo</button>
                    </a>
                  </div>
                  <p className="card-text text-center">
                    <small className="text-muted">
                      Click the image or any of the buttons above to see and
                      learn more about this project.
                    </small>
                  </p>
                </div>
              </div>
              <div className="card mt-5 mb-4 d-flex flex-column">
                <h3 className="card-title text-center pb-3">
                  Note Taker Simple Webpage Application
                </h3>
                <a href="https://note-taker-s8qu.onrender.com/" target="_blank">
                  <img
                    src="Note-Taker-App.webp"
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <p className="card-text py-3">
                    Simple webpage application that enables User to quickly
                    create and store notes in the browser, using a form and form
                    inputs to collect title and note-text data. When the user
                    saves the note, a JSON file (that starts with an empty
                    array) gets updated with new note post objects that get
                    permanently saved until deleted.
                  </p>
                  <div className="tech-card-container d-flex flex-column p-3 rounded">
                    <h5 className="text-center">
                      Built With the Following Front-End Technology
                    </h5>
                    <div className="d-flex flex-row justify-content-around py-3">
                      <div className="col-4 text-center">
                        <img src="JavaScript-icon.svg" height="50px" />
                      </div>
                      <div className="col-4 text-center">
                        <img src="ExpressJS-icon.svg" height="50px" />
                      </div>
                      <div className="col-4 text-center">
                        <img src="HTML5-icon.svg" height="50px" />
                      </div>
                    </div>
                  </div>
                  <div
                    id="card-button-parent"
                    className="d-flex flex-row justify-content-around py-3"
                  >
                    <a href="https://note-taker-s8qu.onrender.com/">
                      <button className="card-button">Live Demo</button>
                    </a>
                    <a href="https://github.com/apurificato/Note-Taker">
                      <button className="card-button">GitHub Repo</button>
                    </a>
                  </div>
                  <p className="card-text text-center">
                    <small className="text-muted">
                      Click the image or any of the buttons above to see and
                      learn more about this project.
                    </small>
                  </p>
                </div>
              </div>
              <div className="card mt-5 mb-4 d-flex flex-column">
                <h3 className="card-title text-center pb-3">
                  Employee Database Management Application
                </h3>
                <a
                  href="https://github.com/apurificato/Employee-Management-Application"
                  target="_blank"
                >
                  <img
                    src="Employee-Database-Application-in-VSCode-Terminal-screenshot.webp"
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <p className="card-text py-3">
                    This simple Back-End Node.js application was a practice
                    exercise in setting up a database using JavaScript, Node.js,
                    and PostgreSQL, enabling a user to interact with a mock
                    employee management software application. The user can then
                    engage in a CRUD (Create, Read, Update, and Delete) Process
                    with the database. Since a node package like Sequelize was
                    NOT used here, I set up the Schema, Query, and Seed files
                    manually. Inquirer Prompt node package was also used in this
                    project, allowing for the user to run a prompt series of
                    questions in the Command Terminal; input recieved there
                    dynamically updates the database.
                  </p>
                  <div className="tech-card-container d-flex flex-column p-3 rounded">
                    <h5 className="text-center">
                      Built With the Following Back-End Technologies
                    </h5>
                    <div className="d-flex flex-row justify-content-around py-3">
                      <div className="col-3 text-center">
                        <img src="JavaScript-icon.svg" height="50px" />
                      </div>
                      <div className="col-3 text-center">
                        <img src="ExpressJS-icon.svg" height="50px" />
                      </div>
                      <div className="col-3 text-center">
                        <img src="Node-js-icon.svg" height="50px" />
                      </div>
                      <div className="col-3 text-center">
                        <img
                          src="postgreSQL-icon-white-text.svg"
                          height="50px"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="card-button-parent"
                    className="d-flex flex-row justify-content-around py-3"
                  >
                    <a href="https://github.com/apurificato/Employee-Management-Application">
                      <button className="card-button">GitHub Repo</button>
                    </a>
                  </div>
                  <p className="card-text text-center">
                    <small className="text-muted">
                      Click the image or any of the buttons above to see and
                      learn more about this project.
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
