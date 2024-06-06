import siteLogo from "/AP-Logo.svg";
import "../App.css";

function Home() {
  return (
    <main>
      <div id="home-page-content">
        {/* <div>
        <h1>Anthony Purificato</h1>
        <h2>Front-End Web Developer</h2>
      </div> */}
        <div className="logo-padding">
          <a href="/about-me">
            <img src={siteLogo} className="logo" alt="Site logo" />
          </a>
          <p>Click logo to get started</p>
        </div>
        <div className="card">
          {/* <h5 className="theme-color">Dont Forget to Download PWA</h5> */}
          {/* <p>(download and access offline)</p> */}
        </div>
      </div>
    </main>
  );
}
export default Home;
