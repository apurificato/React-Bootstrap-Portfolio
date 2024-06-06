import siteLogo from "/AP-Logo.svg";
import "../App.css";

function Home() {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
          <a href="/about-me">
            <img src={siteLogo}  className="logo" alt="Anthony Purificato Website logo" />
          </a>
          <p className="text-suggestion pt-5">Click to get started</p>
      </div>
    </main>
  );
}
export default Home;
