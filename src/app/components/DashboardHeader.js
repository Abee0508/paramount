"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout, me } from "@/app/actions";
import { useEffect, useState } from "react";

const DashboardHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    getUser();
  }, []);

  const getUser = async () => {
    const user = await me();
    if (user?.name) {
      setUserName(user.name);
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <div className="top d-flex justify-content-between align-items-center mb-5">
        <div className="session-heading">
          <h1>Dashboard</h1>
        </div>

        <div className="search">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input type="text" placeholder="Search something..." />
        </div>

        <div className="user d-flex align-items-center">
          <div className="noti">
            <button onClick={() => setShowModal(true)}>
              <img src="/images/notification-icon.png" alt="Notifications" />
            </button>
          </div>
          <div className="text-end">
            {isLoggedIn && <h5>{userName}</h5>}
            <h6>User</h6>
          </div>
          <div className="user-logo">
            <img src="/images/user-logo.png" alt="User" />
          </div>
        </div>
      </div>

      {/* Modal */}
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
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardHeader;
