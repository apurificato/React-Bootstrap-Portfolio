import Header from "../components/Header";
import Footer from "../components/Footer";

function Resume() {
  return (
    <>
      <Header />
      <main className="d-flex flex-column justify-content-center align-items-center">
            <section className="text-center" id="resume">
              <h1 className="p-5">My Resume</h1>
              <h2>Click to Download and Save My Resume For Your Reference</h2>
              <div className="d-flex flex-column align-items-center p-5" id="download-section">
                <a
                  href="/Anthony-Purificato-Web-Developer-Resume-2024.pdf"
                  download="AP-Resume"
                >
                  <button type="button">Download Resume</button>
                </a>
              </div>
              <h3>
                Thank you for visiting my site. I look forward to connecting
                with you soon!
              </h3>
            </section>
      </main>
      <Footer />
    </>
  );
}

export default Resume;
