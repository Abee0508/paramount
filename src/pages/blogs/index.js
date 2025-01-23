import Head from "next/head";

import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/Footer";

export default function Blogs() {
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

        <section className="inner-banner blogs-banner">
          <div className="container">
            <div className="content">
              <h1 data-aos="fade-up" className="main-heading">
                <span>BLOG</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="home home-section-five blog-section-two">
          <div className="container">
            <div className="title text-center">
              <h6 data-aos="fade-up" className="mini-heading">Paramount Management Group</h6>
              <h2 data-aos="fade-up" className="sub-heading">
              Explore Our  <span>Insights</span>
                <p data-aos="fade-up" className="paragraph">
                Dive into our blog for the latest updates and expert advice on commercial property management.
                </p>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="inner" data-aos="zoom-in">
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
                <div className="inner" data-aos="zoom-in">
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
                <div className="inner" data-aos="zoom-in">
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

              <div className="col-md-4">
                <div className="inner" data-aos="zoom-in">
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
                <div className="inner" data-aos="zoom-in">
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
                <div className="inner" data-aos="zoom-in">
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

        <section className="home home-section-seven">
          <div className="container">
            <div className="title text-center">
              <h6 data-aos="fade-up" className="mini-heading">Paramount Management Group</h6>
              <h1 data-aos="fade-up" className="main-heading">
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
