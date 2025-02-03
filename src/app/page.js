"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/Footer";
// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }
export default function Home() {
  return (
    <>
      <Head>
        <title>Paramount Management Group</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="scroll-content">
        <Header />

        <section className="home-banner">
          <div className="container">
            <div className="content">
              <h1 data-aos="zoom-in" className="main-heading">
                Empowering Business
                <span>Communities Since 2005</span>
              </h1>
              <p data-aos="fade-up" className="paragraph">
                With over 19 years of experience, Paramount Management Group is
                Bushnell's trusted partner for professional property management.
                Discover thriving business environments tailored for growth and
                success.
              </p>

              <div className="banner-btn d-flex">
                <Link className="dflt-button" href="/properties">
                  Explore Properties
                  <i className="fa-solid fa-angle-right"></i>
                </Link>

                <Link className="dflt-button" href="/contact-us">
                  Contact Us
                  <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="scroll-down">
            <Link href="/" id="scroll-down">
              <img src="/images/scroll-down.png" />
            </Link>
          </div>
        </section>

        <section className="home home-section-two" id="scroll-here">
          <div className="container">
            {/* <div className="for-lease-property">
              <div className="row justify-content-start">
                <div className="col-sm-12 col-md-3">
                  <div className="lease-property">
                    <h4>For Lease Property</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <input type="text" placeholder="Enter a Space Use" />
                </div>

                <div className="col-md-5">
                  <input type="text" placeholder="Enter a Location" />
                </div>

                <div className="col-md-2">
                  <button>Search Now</button>
                </div>
              </div>
            </div> */}
            <div className="text-center title">
              <h6 data-aos="fade-up" className="mini-heading">
                Paramount Management Group
              </h6>
              <h1 data-aos="fade-up" className="main-heading">
                Featured <span> </span>
              </h1>
              <p data-aos="fade-up" className="paragraph">
                Explore professional office spaces designed for success. From
                startups to established businesses, our properties in Bushnell
                offer unparalleled opportunities for growth.
              </p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="inner" data-aos="zoom-in">
                  <div className="img">
                    <img
                      src="/images/home-sec-two-card-img1.png"
                      alt="home-sec-two-card-img1"
                    />
                  </div>
                  <div className="text">
                    <h5 className="sub-text">
                      1st Floor, Ste 103 <br></br>Bushnell Plaza | 138 Bushnell
                      Plz
                    </h5>
                    <p className="paragraph">
                      247 - 1,037 SF of Office Space Available in Bushnell, FL
                      33513
                    </p>
                    <div className="d-flex">
                      <div className="black-bg">
                        <h5 className="sub-text">
                          <Link href="/property-detail-one">
                            <span>View in Detail</span>
                          </Link>
                        </h5>
                      </div>
                      {/* <div>
                        <ul>
                          <li>790 SF | 1-5 Years | $22.78 /SF/YR</li>

                          <li>Office | Full Build-Out | Available Property</li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="inner" data-aos="zoom-in">
                  <div className="img">
                    <img
                      src="/images/home-sec-two-card-img2.png"
                      alt="home-sec-two-card-img2"
                    />
                  </div>
                  <div className="text">
                    <h5 className="sub-text">
                      2nd Floor, Ste 201 <br></br>Bushnell Plaza | 138 Bushnell
                      Plz
                    </h5>
                    <p className="paragraph">
                      247 - 1,037 SF of Office Space Available in Bushnell, FL
                      33513
                    </p>
                    <div className="d-flex">
                      <div className="black-bg">
                        <h5 className="sub-text">
                          <Link href="/property-detail-two">
                            <span>View in Detail</span>
                          </Link>
                        </h5>
                      </div>
                      {/* <div>
                        <ul>
                          <li>247 SF | 1-5 Years | $29.16 /SF/YR</li>

                          <li>Office | Full Build-Out | Available Property</li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home home-section-three">
          <div className="container">
            <div className="title text-center">
              <h6 data-aos="fade-up" className="mini-heading">
                Paramount Management Group
              </h6>
              <h2 className="sub-heading" data-aos="fade-up">
                Our <span>Services</span>
              </h2>
              <p data-aos="fade-up" className="paragraph">
                Paramount Management Group (PMG) offers a range of personalized
                services designed to enhance tenant satisfaction and ensure the
                smooth operation of their leased spaces. These services include:
              </p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="inner">
                  <img
                    src="/images/home-sec-three-card-img1.png"
                    alt="home-sec-three-card-img1"
                  />
                  <h5 className="sub-text">Responsive Maintenance & Repairs</h5>
                  <p data-aos="fade-up" className="paragraph">
                    Get reliable 24/7 property maintenance, proactive care, and
                    quick emergency repairs to ensure smooth operations and
                    professional spaces where businesses thrive effortlessly.
                  </p>
                  <Link href="">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-md-6">
                <div className="inner">
                  <img
                    src="/images/home-sec-three-card-img2.png"
                    alt="home-sec-three-card-img2"
                  />
                  <h5 className="sub-text">Property Customization</h5>
                  <p data-aos="fade-up" className="paragraph">
                    Customize leased spaces to fit your unique business needs.
                    PMG offers tailored solutions, seamless upgrades, and
                    collaborative processes to create functional, compliant
                    workspaces.
                  </p>
                  <Link href="">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-md-6">
                <div className="inner">
                  <img
                    src="/images/home-sec-three-card-img3.png"
                    alt="home-sec-three-card-img3"
                  />
                  <h5 className="sub-text">Clear Communication</h5>
                  <p data-aos="fade-up" className="paragraph">
                    Stay informed with transparent updates, responsive
                    communication, and efficient issue resolution. PMG
                    prioritizes tenant satisfaction through clear processes and
                    collaborative management strategies.
                  </p>
                  <Link href="">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-md-6">
                <div className="inner">
                  <img
                    src="/images/home-sec-three-card-img4.png"
                    alt="home-sec-three-card-img4"
                  />
                  <h5 className="sub-text">Tenant Portal</h5>
                  <p data-aos="fade-up" className="paragraph">
                    Simplify your property management experience. Access lease
                    details, submit service requests, and track payments with
                    PMG’s efficient and user-friendly online tenant portal.
                  </p>
                  <Link href="">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <Link className="dflt-button" href="/services">
                  Learn More About Our Services
                  <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="home home-section-four">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="img text-start">
                  <img
                    src="/images/home-sec-four-img.png"
                    alt="home-sec-four-img"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text">
                  <h6 data-aos="fade-up" className="mini-heading">
                    Welcome to
                  </h6>
                  <h1 className="main-heading" data-aos="fade-up">
                    <span>Paramount</span> Management Group LLC
                  </h1>
                  <p data-aos="fade-up" className="paragraph yellowish">
                    Since our inception in 2005 in Bushnell, Florida, we've been
                    redefining what commercial property management can be. Our
                    expert <b>property management solutions</b> transform
                    buildings into dynamic spaces where businesses flourish.
                  </p>
                  <h5 className="sub-text">Why Paramount? </h5>
                  <p data-aos="fade-up" className="paragraph">
                    Imagine a workspace that doesn’t just house your business—it
                    propels it to new heights. That’s the power of our{" "}
                    <b>property management solutions.</b> Our properties go
                    beyond mere locations; they are launchpads for your
                    entrepreneurial ambitions.
                  </p>
                  <h5 className="sub-text">Our Mission</h5>
                  <p data-aos="fade-up" className="paragraph">
                    We’re committed to excellence, ensuring your workspace is
                    more than functional—it's phenomenal. With top-tier{" "}
                    <b>property management solutions</b> and meticulous
                    attention to maintenance, we manage the details so you can
                    focus on your business goals.
                  </p>
                  <Link className="dflt-button" href="/about-us">
                    Learn More About Us
                    <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home home-section-five">
          <div className="container">
            <div className="title text-center">
              <h6 data-aos="fade-up" className="mini-heading">
                Paramount Management Group
              </h6>
              <h2 className="sub-heading" data-aos="fade-up">
                From Our <span>Blog</span>
                <p data-aos="fade-up" className="paragraph">
                  Stay informed with industry insights and updates from PMG.
                  Discover why businesses choose Bushnell for professional
                  growth.
                </p>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="inner">
                  <div className="img">
                    <img
                      src="/images/home-sec-five-card-img1.png"
                      alt="home-sec-five-card-img1"
                    />
                  </div>

                  <div className="text">
                    <h5 className="sub-text">Lorem Ipsum is simply dummy</h5>
                    <p data-aos="fade-up" className="paragraph">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <Link href="">
                      READ MORE<i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="inner">
                  <div className="img">
                    <img
                      src="/images/home-sec-five-card-img2.png"
                      alt="home-sec-five-card-img2"
                    />
                  </div>

                  <div className="text">
                    <h5 className="sub-text">Lorem Ipsum is simply dummy</h5>
                    <p data-aos="fade-up" className="paragraph">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <Link href="">
                      READ MORE<i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="inner">
                  <div className="img">
                    <img
                      src="/images/home-sec-five-card-img3.png"
                      alt="home-sec-five-card-img3"
                    />
                  </div>

                  <div className="text">
                    <h5 className="sub-text">Lorem Ipsum is simply dummy</h5>
                    <p data-aos="fade-up" className="paragraph">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <Link href="">
                      READ MORE<i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home home-section-six">
          <div className="container">
            <div className="title text-center">
              <h6 data-aos="fade-up" className="mini-heading">
                Paramount Management Group
              </h6>
              <h2 className="sub-heading" data-aos="fade-up">
                Lorem Ipsum is <span>simply dummy</span>
                <p data-aos="fade-up" className="paragraph">
                  Paramount Management Group combines excellence, tenant
                  satisfaction, and sustainable practices to redefine property
                  management in Florida. Let us create the perfect workspace for
                  your business.
                </p>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="inner" data-aos="zoom-in">
                  <img
                    src="/images/home-sec-six-img1.png"
                    alt="home-sec-six-img1"
                  />
                  <h5>19+Years of Excellence</h5>
                  <p data-aos="fade-up" className="paragraph">
                    Building professional environments since 2005.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="inner" data-aos="zoom-in">
                  <img
                    src="/images/home-sec-six-img2.png"
                    alt="home-sec-six-img2"
                  />
                  <h5>100% Tenant Satisfaction</h5>
                  <p data-aos="fade-up" className="paragraph">
                    Delivering tailored solutions for every client.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="inner" data-aos="zoom-in">
                  <img
                    src="/images/home-sec-six-img3.png"
                    alt="home-sec-six-img3"
                  />
                  <h5>Eco-Friendly Practices</h5>
                  <p data-aos="fade-up" className="paragraph">
                    Committed to sustainability with green initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home home-section-seven">
          <div className="container">
            <div className="title text-center">
              <h6 data-aos="fade-up" className="mini-heading">
                Paramount Management Group
              </h6>
              <h1 className="main-heading" data-aos="fade-up">
                Stay In <span>Touch</span>
              </h1>
              <p data-aos="fade-up" className="paragraph">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout the
                point of using Lorem Ipsum.
              </p>
            </div>

            <div className="content">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="First Name" />
                    </div>

                    <div className="col-md-6">
                      <input type="text" placeholder="Last Name" />
                    </div>

                    <div className="col-md-6">
                      <input type="text" placeholder="First Name" />
                    </div>

                    <div className="col-md-6">
                      <input type="text" placeholder="Last Name" />
                    </div>

                    <div className="col-md-12">
                      <textarea placeholder="Message"></textarea>
                    </div>
                  </div>
                  <button>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
