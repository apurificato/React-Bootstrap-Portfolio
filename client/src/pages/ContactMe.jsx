import Header from "../components/Header";
import Footer from "../components/Footer";

function ContactMe() {
  return (
    <>
      <Header />
      <h1 className="text-center pt-5">Contact Me</h1>
      <h2 className="text-center pt-3 px-5">
          Reach Out to Me So We Can Build Something Cool Together.
        </h2>
      <main className="d-flex flex-column text-center justify-content-center align-items-center pb-5">
        <section id="contact-me">
          <h4 className="px-5">
            Just quickly submit this form and I will get back to you within 24
            hours.
          </h4>
          <div className="py-5">
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
                  <input className="w-100" type="text" id="name" name="name" required />
                </li>
                <li>
                  <label htmlFor="email">Enter email</label>
                  <input className="w-100" type="email" id="mail" name="email" required />
                </li>
                <li>
                  <label htmlFor="msg">Enter your message</label>
                  <textarea className="w-100" id="msg" name="message" required></textarea>
                </li>
                <li className="button">
                  <button type="submit">Submit</button>
                </li>
              </ul>
            </form>
          </div>
          <h4 className="px-5">
            Thank you for visiting my site. I look forward to connecting with
            you soon!
          </h4>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactMe;
