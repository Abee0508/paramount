
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/app/actions";

const Sidebar = () => {
  const pathname = usePathname().replace(/\/$/, "");

//   console.log("Current Path:", pathname); // Debugging

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="dashboard-buttons">
      <ul>
        <li>
          <Link href="/dashboard">
            <button className={pathname === "/dashboard" ? "active" : ""} id="dashboard">
              <img src="/images/dash-icon.png" />
              Dashboard
            </button>
          </Link>
        </li>

        <li>
          <Link href="/tickets">
            <button className={pathname === "/tickets" ? "active" : ""} id="tickets">
              <img src="/images/profile-icon.png" />
              My Tickets
            </button>
          </Link>
        </li>

        <li>
          <Link href="/messages">
            <button className={pathname === "/messages" ? "active" : ""} id="messages">
              <img src="/images/msg-icon.png" />
              Messages
            </button>
          </Link>
        </li>

        <li>
          <Link href="/settings">
            <button className={pathname === "/settings" ? "active" : ""} id="setting">
              <img src="/images/setting-icon.png" />
              Setting
            </button>
          </Link>
        </li>

        <li>
          <button id="logout" onClick={handleLogout}>
            <img src="/images/logout-icon.png" />
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
