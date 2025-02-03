"use client";

import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <div className="full-width-header">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="logoo">
                  <Link href="/">
                    <img src="/images/logo.png" alt="Login Image" />
                  </Link>
                </div>
              </div>

              <div className="col-md-9">
                <div className="d-flex align-items-center">
                  <div className="row w-100 align-items-center">
                    <div className="col-md-8">
                      <div className="navbarr">
                        <ul className="navbarr">
                          <li>
                            <Link
                              href="/"
                              className={
                                router.pathname === "/" ? "active" : ""
                              }
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link href="/about-us" passHref
                                className={
                                  router.pathname === "/about-us"
                                    ? "active"
                                    : ""
                                }
                                >
                                About Us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/properties"
                              className={
                                router.pathname === "/properties"
                                  ? "active"
                                  : ""
                              }
                            >
                              Properties
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services"
                              className={
                                router.pathname === "/services" ? "active" : ""
                              }
                            >
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/contact-us"
                              className={
                                router.pathname === "/contact-us"
                                  ? "active"
                                  : ""
                              }
                            >
                              Contact Us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/login"
                              className={
                                router.pathname === "/tenant-portal"
                                  ? "active"
                                  : ""
                              }
                            >
                              Tenant Portal
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="loginn text-center">
                        <Link className="dflt-button" href="/contact-us">
                          Request a Tour
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* <div className={`mobile-header ${isScrolled ? "scrolled" : ""}`}>
      <header>
        <div className="container">
          <Navbar expand="lg" className="">
            <Navbar.Brand href="/">
              <img
                src="/images/logo.svg"
                alt="Logo Image"
                width={100}
                height={50}
                layout="intrinsic"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar} />
          </Navbar>
        </div>
      

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <Nav className="flex-column navbar-nav">
          <Link href="#home">Home</Link>
          <Link href="/program-page">Program</Link>
          <Link href="/get-started-page">Get Started</Link>
          <Link href="/faq-page">FAQ</Link>
          <Link href="/science-page">Science</Link>
          <Link href="#">Blogs</Link>
          <Nav.Link className="login" href="#">
            <img
              src="/images/login-icon.png"
              alt="Login icon"
              width={20}
              height={20}
              layout="intrinsic"
            />
            Member Login
          </Nav.Link>
        </Nav>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      </header>
      </div> */}
    </>
  );
};

export default Header;
