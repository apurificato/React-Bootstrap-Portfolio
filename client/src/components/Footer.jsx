function Footer() {
  return (
    <footer className="footer">
      <div className="brand">
        <p>&copy;Copyright 2024</p>
        <div className="d-flex flex-row justify-content-between footer-icons">
            <a href="https://www.github.com/apurificato">
              <img
                className="footer-logo-item brand-logo"
                src="/Github-logo.svg"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/apurificato">
              <img
                className="footer-logo-item brand-logo"
                src="/LinkedIn-logo.svg"
              ></img>
            </a>
          {/* <a href='https://www.instagram.com/tonypreetz'>
                <img className="footer-logo-item" src='/Instagram-logo.svg'></img>
            </a> */}
        </div>
        <p>Developed by Anthony Purificato</p>
      </div>
    </footer>
  );
}

export default Footer;
