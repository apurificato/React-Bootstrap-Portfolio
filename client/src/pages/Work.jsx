import Header from "../components/Header";
import Footer from "../components/Footer";

function Work() {
  return (
    <>
      <Header />
      <h1 className="text-center p-5">My Work</h1>
      <main className="d-flex flex-column">
        <h2 className="text-center">
          Check Out The Websites and Applications I Have Built
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card d-flex flex-row mt-5 mb-4">
                <div className="col-md-6">
                  <a
                    href="https://bidding-site-o6l3.onrender.com/"
                    target="_blank"
                  >
                    <img
                      src="nidhi_marketplace-home-page-screenshot.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-md-6 px-3">
                  <div className="card-body">
                    <h4 className="card-title text-center">
                      nidhi Marketplace Website
                    </h4>
                    <p className="card-text text-left">
                      Full-Stack Mock Online Marketplace and Item
                      Listing/Auction Website.
                    </p>
                    <h5 className="card-text text-center">
                      Built With MERNG Stack Technology
                    </h5>
                    <div className="d-flex flex-row pt-3 justify-content-between bg-dark p-3 rounded">
                      <div className="col-1">
                        <img src="MongoDB-icon.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img src="ExpressJS-icon.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img src="react.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img src="Node-js-icon.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img src="GraphQL-icon.svg" height="50px" />
                      </div>
                    </div>
                    <p className="card-text text-left p-2">
                      This project was
                      the first larger-scale website Ive built using React and
                      there were some interesting struggles attempting to get
                      GraphQL data to query and mutate properly. Some extra
                      context files/providers needed to be setup in order to
                      make certain functionality happen.
                    </p>
                    <div className="d-flex flex-row justify-content-around p-2">
                      <a href="https://bidding-site-o6l3.onrender.com/">
                        <button className="card-button">Live Site/Demo</button>
                      </a>
                      <a href="https://github.com/apurificato/nidhi_marketplace">
                        <button className="card-button">GitHub Repo</button>
                      </a>
                    </div>
                    <p className="card-text text-center">
                      <small className="text-muted">
                        Click the image or any of the links to see/learn more.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card d-flex flex-row mt-5 mb-4">
                <div className="col-lg-6">
                  <a
                    href="https://win-big-76ecc78832f3.herokuapp.com/"
                    target="_blank"
                  >
                    <img
                      src="WinBig-Casino-Betting-App.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-lg-6 px-3">
                  <div className="card-body">
                    <h4 className="card-title text-center">
                      WinBig Digital Casino Website
                    </h4>
                    <p className="card-text text-left">
                      Full-Stack Mock Online Digital Casino Website.
                    </p>
                    <h5 className="card-text text-center">
                      Built With Full-Stack Technology
                    </h5>
                    <div className="d-flex flex-row pt-3 justify-content-between bg-dark p-3 rounded">
                      <div className="col-1">
                        <img src="JavaScript-icon.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img
                          src="npm-express-and-handlebars-icon-white-text.svg"
                          height="50px"
                        />
                      </div>
                      <div className="col-1">
                        <img src="CSS3-icon.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img src="Node-js-icon.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img
                          src="postgreSQL-icon-white-text.svg"
                          height="50px"
                        />
                      </div>
                    </div>
                    <p className="card-text text-left p-2">
                      This project was my first introduction to building a
                      completed website with Handlebars.js, a templating engine
                      that is similar to React. Because of that it gave me some
                      experience and familiarity with using a templating
                      enginge, before jumping into React. It was also one of the
                      first major projects that I have done setting up user
                      authentication routes.
                    </p>
                    <div className="d-flex flex-row justify-content-around p-2">
                      <a href="https://win-big-76ecc78832f3.herokuapp.com/">
                        <button className="card-button">Live Site/Demo</button>
                      </a>
                      <a href="https://github.com/apurificato/WinBig-Digital-Casino">
                        <button className="card-button">GitHub Repo</button>
                      </a>
                    </div>
                    <p className="card-text text-center">
                      <small className="text-muted">
                        Click the image or any of the links to see/learn more.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card d-flex flex-row mt-5 mb-4">
                <div className="col-lg-6">
                  <a
                    href="https://apurificato.github.io/Wine-and-Dine/"
                    target="_blank"
                  >
                    <img
                      src="Wine-Dine-Recipe-App.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-lg-6 px-3">
                  <div className="card-body">
                    <h4 className="card-title text-center">
                      Wine & Dine Recipe Generation Website
                    </h4>
                    <p className="card-text text-left">
                      Front-End Website Application that generates recipe ideas
                      and a drink pairing.
                    </p>
                    <h5 className="card-text text-center">
                      Built With This Front-End Technology Stack
                    </h5>
                    <div className="d-flex flex-row pt-3 justify-content-around bg-dark p-3 rounded">
                      <div className="col-2">
                        <img src="JavaScript-icon.svg" height="50px" />
                      </div>
                      <div className="col-2">
                        <img src="HTML5-icon.svg" height="50px" />
                      </div>
                      <div className="col-2">
                        <img src="CSS3-icon.svg" height="50px" />
                      </div>
                    </div>
                    <p className="card-text text-left p-2">
                      Wine & Dine was created using
                      Web APIs, along with basic JavaScript, HTML and CSS
                      to give users a cool place to find some interesting recipe
                      ideas, based on form inputs. The CSS styling was done
                      through CSS Bulma Framework, something never used before
                      this project.
                    </p>
                    <div className="d-flex flex-row justify-content-around p-2">
                      <a href="https://apurificato.github.io/Wine-and-Dine//">
                        <button className="card-button">Live Site/Demo</button>
                      </a>
                      <a href="https://apurificato.github.io/Wine-and-Dine/">
                        <button className="card-button">GitHub Repo</button>
                      </a>
                    </div>
                    <p className="card-text text-center">
                      <small className="text-muted">
                        Click the image or any of the links to see/learn more.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card d-flex flex-row mt-5 mb-4">
                <div className="col-lg-6">
                  <a
                    href="https://tech-notes-he04.onrender.com/"
                    target="_blank"
                  >
                    <img
                      src="Tech-Notes-Web-Design-Technology-Blog-Website.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-lg-6 px-3">
                  <div className="card-body">
                    <h4 className="card-title text-center">
                      tech.notes Blog PWA Website
                    </h4>
                    <p className="card-text text-left">
                      Full-Stack website also built as a Progressive Web App
                      (PWA) to provide users a cool and interesting experience
                      being able to read posts offline.
                    </p>
                    <h5 className="card-text text-center">
                      Built With Full-Stack Technology
                    </h5>
                    <div className="d-flex flex-row pt-3 justify-content-between bg-dark p-3 rounded">
                      <div className="col-1">
                        <img src="JavaScript-icon.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img
                          src="npm-express-and-handlebars-icon-white-text.svg"
                          height="50px"
                        />
                      </div>
                      <div className="col-1">
                        <img src="CSS3-icon.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img src="Node-js-icon.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img
                          src="postgreSQL-icon-white-text.svg"
                          height="50px"
                        />
                      </div>
                    </div>
                    <p className="card-text text-left p-2">
                      tech.notes was built with a mixture of API routes, as well
                      as template rendering through Handlebars.js. Express.js
                      was utilized to set up a live server and enable API routes
                      for CRUD (Create, Read, Update, and Delete) Process in a
                      PostgreSQL database.
                    </p>
                    <div className="d-flex flex-row justify-content-around p-2">
                      <a href="https://win-big-76ecc78832f3.herokuapp.com/">
                        <button className="card-button">Live Site/Demo</button>
                      </a>
                      <a href="https://github.com/apurificato/WinBig-Digital-Casino">
                        <button className="card-button">GitHub Repo</button>
                      </a>
                    </div>
                    <p className="card-text text-center">
                      <small className="text-muted">
                        Click the image or any of the links to see/learn more.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card d-flex flex-row mt-5 mb-4">
                <div className="col-lg-6">
                  <a
                    href="https://note-taker-s8qu.onrender.com/"
                    target="_blank"
                  >
                    <img
                      src="Note-Taker-App.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-lg-6 px-3">
                  <div className="card-body">
                    <h4 className="card-title text-center">
                      Note Taker Application
                    </h4>
                    <p className="card-text text-left">
                      Simple Application Webpage; User Can Create and Save Notes in Browser.
                    </p>
                    <h5 className="card-text text-center">
                      Built With The Following Technology
                    </h5>
                    <div className="d-flex flex-row pt-3 justify-content-around bg-dark p-3 rounded">
                      <div className="col-2">
                        <img src="JavaScript-icon.svg" height="50px" />
                      </div>
                      <div className="col-2">
                        <img
                          src="ExpressJS-icon.svg"
                          height="50px"
                        />
                      </div>
                      <div className="col-2">
                        <img src="HTML5-icon.svg" height="50px" />
                      </div>
                    </div>
                    <p className="card-text text-left p-2">
                      Simple webpage application that enables User to quickly create and store notes in the browser, using a form and form inputs to collect title and note-text data. When the user saves the note, a JSON file (that starts with an empty array) gets updated with new note post objects that get permanently saved until deleted.
                    </p>
                    <div className="d-flex flex-row justify-content-around p-2">
                      <a href="https://note-taker-s8qu.onrender.com/">
                        <button className="card-button">Live Site/Demo</button>
                      </a>
                      <a href="https://github.com/apurificato/Note-Taker">
                        <button className="card-button">GitHub Repo</button>
                      </a>
                    </div>
                    <p className="card-text text-center">
                      <small className="text-muted">
                        Click the image or any of the links to see/learn more.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card d-flex flex-row mt-5 mb-4">
                <div className="col-lg-6">
                  <a
                    href="https://github.com/apurificato/Employee-Management-Application"
                    target="_blank"
                  >
                    <img
                      src="Employee-Database-Application-in-VSCode-Terminal-screenshot.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-lg-6 px-3">
                  <div className="card-body">
                    <h4 className="card-title text-center">
                      Employee Management Application
                    </h4>
                    <p className="card-text text-left">
                      Back-End Mock Employee Management Database Application
                    </p>
                    <h5 className="card-text text-center">
                      Built With This Back-End Technology Stack
                    </h5>
                    <div className="d-flex flex-row pt-3 justify-content-around bg-dark p-3 rounded">
                      <div className="col-1">
                        <img src="JavaScript-icon.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img
                          src="ExpressJS-icon.svg"
                          height="50px"
                        />
                      </div>
                      <div className="col-1">
                        <img src="Node-js-icon.svg" height="50px" />
                      </div>
                      <div className="col-1">
                        <img
                          src="postgreSQL-icon-white-text.svg"
                          height="50px"
                        />
                      </div>
                    </div>
                    <p className="card-text text-left p-2">
                      This simple application was a practice exercise in setting up a database with Node.js and PostgreSQL, enabling a user to interact with a mock employee management software application in order to engage in a CRUD Process with the database. Schema, Query, and Seed files were set up manually. Inquirer Prompt npm also used.
                    </p>
                    <div className="d-flex flex-row justify-content-around p-2">
                      <a href="https://github.com/apurificato/Employee-Management-Application">
                        <button className="card-button">GitHub Repo</button>
                      </a>
                    </div>
                    <p className="card-text text-center">
                      <small className="text-muted">
                        Click the image or any of the links to see/learn more.
                      </small>
                    </p>
                  </div>
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
