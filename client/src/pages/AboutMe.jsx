import Header from "../components/Header";
import Footer from "../components/Footer";


function AboutMe() {
  return (
    <>
      <Header />
      <main>
        <div id="about-me-content">
          <h2>About Me</h2>
          <h3>I Program Dreams, One Project At a Time</h3>
          <div>
            <img
              id="profile-image"
              src="Anthony-Purificato-Profile-Photo-Sketch-Style.png"
              alt="AI generated profile image of Anthony Purificato"
            />
          </div>
        </div>
        <div id="about-me-paragraphs">
            <p>I love creating websites and digital applications. When I started working within the creative/tech space, I quickly realized that this was a field that I was passionate about.</p>
            <p>
              My current specialty is Front-End Development with a focus on the
              following technologies: HTML, CSS (and CSS Frameworks), and
              JavaScript (including React). I have worked on a variety of
              projects, including building websites and applications. Although
              my current specialty is Front-End, I have some additional
              knowledge and experience working with Back-End technologies,
              including Node.js, SQL (PostgreSQL), NoSQL (MongoDB), and
              Express.js.
            </p>
            <p>
              I have recently completed a Full Stack Coding Bootcamp through
              Rutgers University, which has helped bridge the gap from my
              previous web experience. Before this, I had worked at a Web Agency
              for about 3 years, learning some of the ins and outs of websites
              and publishing on websites through various platforms. I completed
              projects both small and large in scale and became proficient in
              WordPress, MailChimp, Campaign Monitor, and other tools used for
              building websites/landing pages and email marketing campaigns.
            </p>
            <p>
              I have a passion for building websites and seeing my work
              completed throughout the entire process, from start to finish. I
              continue to grow and learn new things everyday!
            </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AboutMe;
