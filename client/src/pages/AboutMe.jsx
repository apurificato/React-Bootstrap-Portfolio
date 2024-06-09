import { useContext } from "react";
import { ThemeContext } from "../App";

import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutMe() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const getImageSource = () => {
    if (theme === "dark") {
      return "Anthony-Purificato-Profile-Photo-Sketch-Style-Dark.png";
    } else {
      return "Anthony-Purificato-Profile-Photo-Sketch-Style-Light.png";
    }
  };

  return (
    <>
      <Header />
      <div className="pb-5">
        <h1 className="pt-5 text-center">About Me</h1>
        <h2 className="text-center pt-3 px-5">Anthony Purificato</h2>
        <h4 className="text-center">Front-End Developer</h4>
      </div>
      <main className="d-flex flex-column justify-content-center align-items-center pb-5">
        <div className="text-center">
          <div className="p-5">
            <img
              id="profile-image"
              src={getImageSource()}
              alt="AI generated profile image of Anthony Purificato"
              onClick={toggleTheme}
            />
          </div>
          <h2 className="p-5">Programming Dreams, One Project At a Time</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-5">
              <p>
                <span className="theme-color">
                  I love creating websites and digital applications. Let&apos;s
                  just say it&apos;s kinda my thing.
                </span>{" "}
                When I started working within the creative and technology space,
                I quickly realized that this was a field that I wanted to stay
                in. My technical skills were built from humble beginnings,
                starting with a simple WordPress blog website for an Online/Blog
                Writing course that I completed at Rutgers University. The
                course blended various creative interests of mine (namely
                writing and web design) and this was where I started to see some
                sort of path forward into the tech space. That little website
                helped me land a Content Specialist role at a Creative Agency in
                NJ soon after graduating from Rutgers.
              </p>
              <p>
                I worked at that role for almost 3 years, learning a ton about
                publishing websites and applications, both small and large in
                scale. I also broke into the digital marketing space a bit
                through work I did with publishing/developing email templates,
                social media posting, and Search Engine Optimization (SEO) there
                and moving forward.
              </p>
            </div>
            <div className="col-md-6 px-5">
              <p>
                Just recently, I completed a Full Stack Coding Bootcamp through
                Rutgers/EdX, which has helped bridge the gap from my previous
                content management and publishing experience to actual web
                development/programming skills. My previous professional
                experience enabled me to learn the ins and outs of websites on
                various platforms and content management systems. As I completed
                projects I became proficient in WordPress, MailChimp, Campaign
                Monitor, and other tools used for building websites/landing
                pages and email marketing campaigns.
              </p>
              <p>
                <span className="theme-color">
                  My current specialty is Front-End Development with a focus on
                  the following technologies: HTML, CSS (and CSS Frameworks),
                  and JavaScript (including React).
                </span>
                Although I am well versed in Front-End Development and
                Responsive Web Design, I have some additional knowledge and
                experience working with Back-End technologies, including
                Node.js, SQL (PostgreSQL), NoSQL (MongoDB), and Express.js.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AboutMe;