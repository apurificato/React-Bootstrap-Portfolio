import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutMe() {
  return (
    <>
      <Header />
      <main className="d-flex flex-column justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="p-3">About Me</h1>
          <div className="p-5">
            <img
              id="profile-image"
              src="Anthony-Purificato-Profile-Photo-Sketch-Style.png"
              alt="AI generated profile image of Anthony Purificato"
            />
          </div>
          <h2 className="p-3">I Program Dreams, One Project At a Time</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-5">
              <p>
                I love creating websites and digital applications. Lets just say its kinda my passion. When I
                started working within the creative and technology space, I quickly realized that this was a field that I wanted to stay in. My technical skills were built from humble begginings, starting with a simple WordPress blog website for an Online/Blog Writing course that I completed at Rutgers University, blending various creative interests of mine (namely writing and web design). This is where I started to see some sort of path forward into the tech space, as that website project helped me land a Content Specialist role at a Creative Agency in NJ soon after graduating from Rutgers.
              </p>
              <p>
                I worked at that role for almost 3 years, learning a ton about publishing on websites and applications, both small and large in scale. I also broke into the digital marketing space a bit through work I did with publishing/developing email templates, social media posting, and Search Engine Optimization (SEO).
              </p>
            </div>
            <div className="col-md-6 p-5">
              <p>
                Recently, I completed a Full Stack Coding Bootcamp through
                Rutgers/EdX, which has helped bridge the gap from my
                previous web and content management/publishing experience to web development/programming skills.
                My previous professional experience enabled me to learn the ins and outs of websites on various platforms and content management systems. As I
                completed projects I became
                proficient in WordPress, MailChimp, Campaign Monitor, and other
                tools used for building websites/landing pages and email
                marketing campaigns.
              </p>
              <p>
                My current specialty is Front-End Development with a focus on
                the following technologies: HTML, CSS (and CSS Frameworks), and
                JavaScript (including React). Although
                my current specialty is Front-End, I have some additional
                knowledge and experience working with Back-End technologies,
                including Node.js, SQL (PostgreSQL), NoSQL (MongoDB), and
                Express.js.
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
