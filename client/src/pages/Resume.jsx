import Header from "../components/Header";
import Footer from "../components/Footer";

function Resume() {
  return (
    <>
      <Header />
      <h1 className="text-center p-5">My Resume</h1>
      <h2 className="text-center pt-3 px-5">
        Click to Download and Save My Resume For Your Convenience
      </h2>
      <main className="d-flex flex-column text-center justify-content-center align-items-center pb-5">
        <div id="resume-div" className="d-flex flex-column align-items-center">
          <img
            src="Anthony-Purificato-Web-Developer-Resume-2024.webp"
            alt="Web Developer Resume Image for Anthony Purificato"
            className="p-5"
            id="resume-image"
          />
          <a
            href="/Anthony-Purificato-Web-Developer-Resume-2024.pdf"
            download="AP-Resume"
          >
            <button id="resume-button" type="button">Download Resume</button>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Resume;
