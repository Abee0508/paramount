"use client";
import Head from "next/head";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/Footer";
import axios from "@/utils/axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";


export default function ContactUs() {
  const [formData, setFormData] = useState({

    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",

  });
  const [errorData, setErrorData] = useState({});
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const ContactUs = async () => {
    const loadingToastId = toast.loading("Saving...");
    const formDataToSend = new FormData();
  
    // Append form data fields
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
  
    try {
      const response = await axios.post('/contact-us', formDataToSend);
  
      toast.dismiss(loadingToastId);
      toast.success("Inquiry Sent");
  
      // Reset form fields
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
  
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error("Inquiry Failed.");
      console.error(error);
    }
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
                <span>CONTACT US</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="home home-section-seven contact-section-two">
          <div className="container">
            <div className="title text-center">
              <h6 data-aos="fade-up" className="mini-heading">
                Paramount Management Group
              </h6>
              <h1 data-aos="fade-up" className="main-heading">
                Connect With <span>Us</span>
              </h1>
              <p data-aos="fade-up" className="paragraph">
                Your business is important to us. Whether you have questions
                about our <b>property management solutions </b> or want to
                discuss specific needs, we're here and ready to help your
                business succeed. Don't hesitate to get in touch for
                personalized assistance.
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
                  <button type="button" onClick={ContactUs}>Send Message</button>
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
