import Header from "../components/Header";
import Footer from "../components/Footer";

function Resume() {
  return (
    <>
      <Header />
      <h1 className="text-center p-5">My Resume</h1>
      <main className="d-flex flex-column text-center">
        <h2 className="text-center">Click to Download and Save My Resume For Your Reference</h2>
        <div className="p-5" id="download-section">
          <a href="/Anthony-Purificato-Web-Developer-Resume-2024.pdf" download="AP-Resume">
            <button type="button">Download Resume</button>
          </a>
        </div>
        <h3>Thank you for visiting my site. I look forward to connecting with you soon!</h3>
      </main>
      <Footer />
    </>
  );
}

export default Resume;
