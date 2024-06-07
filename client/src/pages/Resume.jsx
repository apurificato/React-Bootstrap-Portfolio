import Header from "../components/Header";
import Footer from "../components/Footer";

function Resume() {
  return (
    <>
      <Header />
      <h1 className="text-center p-5">My Resume</h1>
      <h2 className="text-center">Click to Download and Save My Resume For Your Convenience</h2>
      <main className="d-flex flex-column text-center justify-content-center align-items-center">
        <div className="p-5 d-flex flex-column">
        <img src="Green-arrow.svg" alt="Green arrow image" className="p-5" id="download-arrow" />
          <a href="/Anthony-Purificato-Web-Developer-Resume-2024.pdf" download="AP-Resume">
            <button type="button">Download Resume</button>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Resume;
