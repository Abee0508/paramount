import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-logo">
                <img
                  src="/images/footer-logo.png"
                  alt="footer-logo"
                  className="footer-logo"
                />
                <div className="social-links">
                  <ul>
                    <li>
                      <Link href="">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>

                    <li>
                      <Link href="">
                        {" "}
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>

                    <li>
                      <Link href="">
                        {" "}
                        <i className="fa-brands fa-google"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row align-items-start">
                <div className="col-md-4">
                  <div className="footer-nav">
                    <h5>Home</h5>
                    <ul>
                      <li>
                        <Link href="/">
                          <i className="fa-solid fa-angles-right"></i>Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about-us">
                          <i className="fa-solid fa-angles-right"></i>About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/properties">
                          <i className="fa-solid fa-angles-right"></i>Properties
                        </Link>
                      </li>
                      <li>
                        <Link href="/services">
                          <i className="fa-solid fa-angles-right"></i>Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/blogs">
                          <i className="fa-solid fa-angles-right"></i>Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact-us">
                          <i className="fa-solid fa-angles-right"></i>Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/dashboard">
                          <i className="fa-solid fa-angles-right"></i>Tenant
                          Portal
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="footer-nav">
                    <h5>Links</h5>
                    <ul>
                      <li>
                        <Link href="">
                          <i className="fa-solid fa-angles-right"></i>Privacy
                          Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="fa-solid fa-angles-right"></i>Terms &
                          Condition
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="fa-solid fa-angles-right"></i>Request A
                          Tour
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="footer-nav">
                    <h5>Contact</h5>
                    <ul>
                      <li>
                        <div>
                          <i className="fa-solid fa-phone"></i>
                        </div>
                        <div>
                          <h5>Call Us:</h5>
                          <Link href="tel:(352) 457-1877">(352) 457-1877</Link>
                        </div>
                      </li>

                      <li>
                        <div>
                          <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                          <h5>Call Us:</h5>
                          <Link href="mailto:info@pmg.realestate">
                            info@pmg.realestate
                          </Link>
                        </div>
                      </li>

                      <li>
                        <div>
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                          <h5>Location</h5>
                          <p>
                            138 Bushnell Plaza, Suite 303, Bushnell, FL 33513
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right text-center">
            <p>Copyright 2024 Paramount Management Group</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
