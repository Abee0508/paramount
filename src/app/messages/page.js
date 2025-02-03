import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function Messages() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // CHAT SCREEN
  const [messages, setMessages] = useState([
    { sender: "You", text: "Hi!" },
    { sender: "Other", text: "Hello! How are you?" },
    { sender: "You", text: "I am good, thanks! What about you?" },
    { sender: "Other", text: "I am doing great as well!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { sender: "You", text: input }]);
      setInput("");
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
        <section className="dashboard-main submit-ticket messages">
          <div className="container-fluid">
            <div className="dashboard-content d-flex">
              <div className="left-bar">
                <div className="top-logo">
                  <img src="/images/dashboard-logo.png" />
                </div>
                <div className="dashboard-buttons">
                  <ul>
                    <li>
                      <Link href="/dashboard">
                        <button className id="dashboard">
                          <img src="/images/dash-icon.png" />
                          Dashboard
                        </button>
                      </Link>
                    </li>

                    <li>
                      <button id="tickets">
                        <img src="/images/profile-icon.png" />
                        My Tickets
                      </button>
                    </li>

                    <li>
                      <Link href="/messages">
                        <button className="active" id="messages">
                          <img src="/images/msg-icon.png" />
                          Messages
                        </button>
                      </Link>
                    </li>

                    <li>
                      <button id="setting">
                        <img src="/images/setting-icon.png" />
                        Setting
                      </button>
                    </li>

                    <li>
                      <Link href="/login">
                        <button id="logout">
                          <img src="/images/logout-icon.png" />
                          Log Out
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="faded-logo">
                  <img src="/images/dashboard-faded-logo.png" />
                </div>
              </div>

              <div className="center-part">
                <div className="top d-flex justify-content-between align-items-center mb-5">
                  <div className="session-heading">
                    <h1>Dashboard</h1>
                  </div>

                  <div className="search">
                    <span>
                      {" "}
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" placeholder="Search something..." />
                  </div>

                  <div className="user d-flex align-items-center">
                    <div className="noti">
                      <button onClick={handleOpenModal}>
                        <img src="/images/notification-icon.png" />
                      </button>
                    </div>
                    <div className="text-end">
                      <h5>Your Name</h5>
                      <h6>User</h6>
                    </div>
                    <div className="user-logo">
                      <img src="/images/user-logo.png" />
                    </div>
                  </div>
                </div>

                <div className="middle d-flex justify-content-between">
                  <div className="tkt-status">
                    <h4>Messages</h4>
                  </div>
                  <div className="submit-ticket-main chat-area">
                    <div className="chat-window">
                      <div className="messages">
                        {messages.map((msg, index) => (
                          <div
                            key={index}
                            className={`message ${
                              msg.sender === "You" ? "sent" : "received"
                            }`}
                          >
                            <span>{msg.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="input-bar d-flex">
                        <input
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Type a message..."
                        />
                        <button onClick={sendMessage}>Send</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="footerr copy-right text-center">
          <p>Copyright 2024 Paramount Management Group</p>
        </div>
        {showModal && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">No New Notification</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body"></div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
