import Header from "../components/Header";
import Footer from "../components/Footer";

function ContactMe() {
  return (
    <>
      <Header />
      <main className="d-flex flex-column justify-content-center align-items-center">
        <section id="contact-me">
          <h1 className="p-5">Contact Me</h1>
          <h2>Reach Out to Me So We Can Build Something Cool Together.</h2>
          <div className="p-5">
            <form action="https://api.web3forms.com/submit" method="POST">
              <ul>
                <input
                  type="hidden"
                  name="access_key"
                  value="407a7ac5-808f-4f76-a23c-82e1c88be2d1"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Message From User"
                />
                <li>
                  <label htmlFor="name">Enter your name</label>
                  <input type="text" id="name" name="name" required />
                </li>
                <li>
                  <label htmlFor="email">Enter email</label>
                  <input type="email" id="mail" name="email" required />
                </li>
                <li>
                  <label htmlFor="msg">Enter your message</label>
                  <textarea id="msg" name="message" required></textarea>
                </li>
                <li className="button">
                  <button type="submit">Submit</button>
                </li>
              </ul>
            </form>
          </div>
          <h4>
            Just quickly fill out and submit this form and I will get back to
            you within 24 hours!
          </h4>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactMe;
