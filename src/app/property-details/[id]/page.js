'use client';

import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/Footer";
import React, { useRef } from "react";
import Slider from "react-slick";
import axios from "@/utils/axios";
import { useRouter } from 'next/navigation';
import { fixStoragePath } from "@/app/auth/api/helper";
import { use } from 'react';
import handleContactUs from "@/app/auth/api/contactUsHelper";


export default function PropertyDetails({ params }) {
    const router = useRouter();
    const { id } = use(params);
    const [property, setProperty] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (id) {
            async function fetchProperty() {
                try {
                    const response = await axios.get(`/properties-by-id/${id}`);

                    console.log("Full API Response:", response);
                    console.log("Response Data:", response.data); // Log full response

                    const propertyData = response.data?.property || response.data;

                    console.log("Extracted propertyData:", propertyData);

                    if (propertyData) {
                        setProperty(propertyData);
                    } else {
                        console.error("Property data is missing in API response");
                    }
                } catch (error) {
                    console.error("Error fetching property details:", error);
                } finally {
                    setIsLoading(false);
                }
            }

            fetchProperty();
        }
    }, [id]);




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

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
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
                            {isLoading ? (
                                <p>Loading property details...</p>
                            ) : property ? (
                                <div className="col-md-6">
                                    <div className="text">
                                        <h5 className="sub-text">{property.name}</h5>
                                        <div className="property-feature" dangerouslySetInnerHTML={{ __html: property.features }} />

                                        <div className="d-flex flex-column mt-5">
                                            <div className="size-term-rating">
                                                <ul className="golden">
                                                    <li>Size</li>
                                                    <li>Term</li>
                                                    <li>Rental Rate</li>
                                                </ul>
                                                <ul className="brown">
                                                    <li>{property.size} SF</li>
                                                    <li>{property.term} Years</li>
                                                    <li>${property.rental_rate} /SF/YR</li>
                                                </ul>
                                                <ul className="golden">
                                                    <li>Space Use</li>
                                                    <li>Condition</li>
                                                    <li>Available</li>
                                                </ul>
                                                <ul className="brown">
                                                    <li>{property.space_use}</li>
                                                    <li>{property.condition}</li>
                                                    <li>{property?.is_available === 1 ? "Now" : "Booked"}</li>

                                                </ul>
                                            </div>
                                            <Link className="dflt-button" href="">
                                                Request a Tour
                                                <i className="fa-solid fa-angle-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p>No property found.</p>
                            )}
                        </div>
                        {isLoading ? (
                            <p>Loading property details...</p>
                        ) : property ? (
                            <div className="additional-text mt-4">
                                <div className="mb-5">
                                    <h5 className="sub-text mb-3">Property Overview:</h5>
                                    <div className="property-overview" dangerouslySetInnerHTML={{ __html: property.overview }} />
                                    {/* <div className="features-grid">
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
                                </div> */}
                                </div>

                                <div className="">
                                    <h5 className="sub-text mb-3">Property Facts:</h5>
                                    <div className="building-details">
                                        <ul>
                                            <li className="d-flex">
                                                <p>Building Type:</p>
                                                <strong>{property.building_type}</strong>
                                            </li>
                                            <li className="d-flex">
                                                <p>Building Height:</p>
                                                <strong>{property.building_height}</strong>
                                            </li>
                                            <li className="d-flex">
                                                <p>Building Size:</p>
                                                <strong>{property.building_size}</strong>
                                            </li>
                                            <li className="d-flex">
                                                <p>Building Class:</p>
                                                <strong>{property.building_class}</strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className="d-flex">
                                                <p>Year Built/Renovated:</p>
                                                <strong>{property.year_build}</strong>
                                            </li>
                                            <li className="d-flex">
                                                <p>Building Size:</p>
                                                <strong>{property.building_size_sqft} SF</strong>
                                            </li>
                                            <li className="d-flex">
                                                <p>Typical Floor Size:</p>
                                                <strong>{property.typical_floor_size} SF</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>No property found.</p>
                        )}
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
                                            <input
                                                type="text"
                                                placeholder="First Name *"
                                                value={formData.first_name}
                                                onChange={(e) => handleInputChange("first_name", e.target.value)}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                placeholder="Last Name *"
                                                value={formData.last_name}
                                                onChange={(e) => handleInputChange("last_name", e.target.value)}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                placeholder="Email Address *"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="tel"
                                                placeholder="Phone Number *"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <textarea
                                                placeholder="Message Here..."
                                                value={formData.message}
                                                onChange={(e) => handleInputChange("message", e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button onClick={() => handleContactUs(formData, setFormData)}>Send Message</button>
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
