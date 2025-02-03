import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/Footer";
import React, { useRef } from "react";
import Slider from "react-slick";

export default function ContactUs() {
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);

  const images = [
    "/images/property-slider-img1.jpg",
    "/images/property-slider-img2.jpg",
    "/images/property-slider-img3.jpg",
    "/images/property-slider-img4.png",
  ];

  const mainSliderSettings = {
    asNavFor: thumbnailSlider,
    ref: (slider) => setMainSlider(slider),
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
  };

  const thumbnailSliderSettings = {
    asNavFor: mainSlider,
    ref: (slider) => setThumbnailSlider(slider),
    slidesToShow: Math.min(images.length, 4),
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: false,
    infinite: true,
    arrows: false,
    speed: 300,
  };

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

        <section className="inner-banner blogs-banner contact-banner">
          <div className="container">
            <div className="content">
              <h1 data-aos="fade-up" className="main-heading">
                <span>PROPERTY DETAIL PAGE</span>
              </h1>
              <p className="paragraph italic">
                Downtown Bushnell next to the historic court house.
              </p>
            </div>
          </div>
        </section>

        <section className="property-section-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="property-slider">
                  <div className="synchronized-slider">
                    {/* Main Slider */}
                    <Slider {...mainSliderSettings}>
                      {images.map((src, index) => (
                        <div key={index} className="main-slide">
                          <img src={src} alt={`Slide ${index + 1}`} />
                        </div>
                      ))}
                    </Slider>

                    {/* Thumbnail Slider */}
                    <Slider
                      {...thumbnailSliderSettings}
                      className="thumbnail-slider"
                    >
                      {images.map((src, index) => (
                        <div key={index} className="thumbnail-slide">
                          <img src={src} alt={`Thumbnail ${index + 1}`} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="text">
                  <h5 className="sub-text">1st Floor, Ste 103</h5>
                  <p className="paragraph">
                    Listed rate may not include certain utilities, building
                    services and property expenses.
                  </p>

                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li>3 Private Offices</li>
                        <li>Finished Ceilings: 8’v</li>
                        <li>Central Air and Heating</li>
                        <li>Smoke Detector</li>
                      </ul>
                    </div>

                    <div className="col-md-6">
                      <ul>
                        <li>Fully Built-Out as Standard Office</li>
                        <li>1 Conference Room</li>
                        <li>Space is in Excellent Condition</li>
                        <li>Reception Area</li>
                        <li>Wheelchair Accessible</li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex flex-column mt-5">
                    <div className="size-term-rating">
                      <ul className="golden">
                        <li>Size</li>
                        <li>Term</li>
                        <li>Rental Rate</li>
                      </ul>
                      <ul className="brown">
                        <li>790 SF</li>
                        <li>1-5 Years</li>
                        <li>$22.78 /SF/YR</li>
                      </ul>
                      <ul className="golden">
                        <li>Space Use</li>
                        <li>Condition</li>
                        <li>Available</li>
                      </ul>
                      <ul className="brown">
                        <li>Office</li>
                        <li>Full Build-Out</li>
                        <li>Now</li>
                      </ul>
                    </div>
                    <Link className="dflt-button" href="">
                      Request a Tour
                      <i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="additional-text mt-4">
              <div className="mb-5">
                <h5 className="sub-text mb-3">Property Overview:</h5>
                <p className="paragraph">
                  1 or 3 professional office suites available for lease on the
                  1st floor depending on your needs.<br></br> 2nd floor has 1
                  professional Office available. Space can be customized to fit
                  your business needs.
                </p>
                <div className="features-grid">
                  <ul>
                    <li>Food Service</li>
                    <li>Property Manager on Site</li>
                    <li>Restaurant</li>
                  </ul>
                  <ul>
                    <li>Signage</li>
                    <li>Central Heating</li>
                    <li>Fully Carpeted</li>
                  </ul>
                  <ul>
                    <li>High Ceilings</li>
                    <li>Direct Elevator Exposure</li>
                    <li>Natural Light</li>
                  </ul>
                  <ul>
                    <li>Reception</li>
                    <li>Drop Ceiling</li>
                    <li>Air Conditioning</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5">
                <h5 className="sub-text mb-3">Property Facts:</h5>
                <div className="building-details">
                  <ul>
                    <li className="d-flex">
                      <p>Building Type:</p>
                      <strong>Office</strong>
                    </li>
                    <li className="d-flex">
                      <p>Building Height:</p>
                      <strong>3 Stories</strong>
                    </li>
                    <li className="d-flex">
                      <p>Building Size:</p>
                      <strong>C</strong>
                    </li>
                    <li className="d-flex">
                      <p>Building Class:</p>
                      <strong>20 Surface Parking Spaces Covered Parking</strong>
                    </li>
                  </ul>
                  <ul>
                    <li className="d-flex">
                      <p>Year Built/Renovated:</p>
                      <strong>1925/2005</strong>
                    </li>
                    <li className="d-flex">
                      <p>Building Size:</p>
                      <strong>10,542 SF</strong>
                    </li>
                    <li className="d-flex">
                      <p>Typical Floor Size:</p>
                      <strong>2,852 SF</strong>
                    </li>
                  </ul>
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
