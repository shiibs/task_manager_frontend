import React, { useState } from "react";
import {
  FaBars,
  FaUser,
  FaTasks,
  FaUsers,
  FaClipboardList,
  FaSignOutAlt,
  FaTools,
  FaChevronDown,
  FaTimes,
  FaBell,
} from "react-icons/fa";

const Sidebar = ({ userRole }) => {
  const [isOpen, setIsOpen] = useState(false); // To control sidebar open/close
  const [openDropdown, setOpenDropdown] = useState("");

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Toggle Dropdown
  const toggleDropdown = (section) => {
    if (openDropdown === section) {
      setOpenDropdown("");
    } else {
      setOpenDropdown(section);
    }
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div className="p-4 text-gray-900  flex justify-between md:hidden">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }
          md:relative md:translate-x-0 transition-transform duration-300 bg-gray-900 w-72 text-white z-30 h-screen`}
      >
        {/* Close Button on Mobile */}
        <div className="p-4 bg-gray-900 text-white flex justify-between items-center md:hidden">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        <div className="p-5">
          <h1 className="text-2xl font-bold hidden md:block">Dashboard</h1>
        </div>

        <nav className="mt-10 pr-6">
          {/* Common User/Admin Links */}
          <a
            href="/profile"
            className="flex items-center p-3 hover:bg-gray-700"
          >
            <FaUser className="mr-3" />
            <span>Profile</span>
          </a>

          <a href="/teams" className="flex items-center p-3 hover:bg-gray-700">
            <FaUsers className="mr-3" />
            <span>My Teams</span>
          </a>

          <a href="/tasks" className="flex items-center p-3 hover:bg-gray-700">
            <FaClipboardList className="mr-3" />
            <span>My Tasks</span>
          </a>

          {/* Admin Specific Links with Dropdowns */}
          {userRole === "admin" && (
            <>
              {/* Manage Users Dropdown */}
              <div>
                <div
                  className="flex items-center p-3 hover:bg-gray-700 cursor-pointer"
                  onClick={() => toggleDropdown("users")}
                >
                  <FaUsers className="mr-3" />
                  <span>Manage Users</span>
                  <FaChevronDown className="ml-auto" />
                </div>
                {openDropdown === "users" && (
                  <div className="ml-5">
                    <a
                      href="/admin/users/create"
                      className="block p-2 hover:bg-gray-700"
                    >
                      Create User
                    </a>
                    <a
                      href="/admin/users"
                      className="block p-2 hover:bg-gray-700"
                    >
                      View Users
                    </a>

                    <a
                      href="/admin/users/delete"
                      className="block p-2 hover:bg-gray-700"
                    >
                      Delete User
                    </a>
                  </div>
                )}
              </div>

              {/* Manage Teams Dropdown */}
              <div>
                <div
                  className="flex items-center p-3 hover:bg-gray-700 cursor-pointer"
                  onClick={() => toggleDropdown("teams")}
                >
                  <FaTasks className="mr-3" />
                  <span>Manage Teams</span>
                  <FaChevronDown className="ml-auto" />
                </div>
                {openDropdown === "teams" && (
                  <div className="ml-5">
                    <a
                      href="/admin/teams/create"
                      className="block p-2 hover:bg-gray-700"
                    >
                      Create Team
                    </a>
                    <a
                      href="/admin/teams"
                      className="block p-2 hover:bg-gray-700"
                    >
                      View Teams
                    </a>
                    <a
                      href="/admin/teams/update"
                      className="block p-2 hover:bg-gray-700"
                    >
                      Update Team
                    </a>
                    <a
                      href="/admin/teams/delete"
                      className="block p-2 hover:bg-gray-700"
                    >
                      Delete Team
                    </a>
                  </div>
                )}
              </div>

              {/* Manage Tasks Dropdown */}
              <div>
                <div
                  className="flex items-center p-3 hover:bg-gray-700 cursor-pointer"
                  onClick={() => toggleDropdown("tasks")}
                >
                  <FaTools className="mr-3" />
                  <span>Manage Tasks</span>
                  <FaChevronDown className="ml-auto" />
                </div>
                {openDropdown === "tasks" && (
                  <div className="ml-5">
                    <a
                      href="/admin/tasks/create"
                      className="block p-2 hover:bg-gray-700"
                    >
                      Create Task
                    </a>
                    <a
                      href="/admin/tasks"
                      className="block p-2 hover:bg-gray-700"
                    >
                      View Tasks
                    </a>
                    <a
                      href="/admin/tasks/update"
                      className="block p-2 hover:bg-gray-700"
                    >
                      Update Task
                    </a>
                    <a
                      href="/admin/tasks/delete"
                      className="block p-2 hover:bg-gray-700"
                    >
                      Delete Task
                    </a>
                  </div>
                )}
              </div>
            </>
          )}

          <a
            href="/logout"
            className="flex items-center p-3 hover:bg-gray-700 mt-auto "
          >
            <FaSignOutAlt className="mr-3" />
            <span>Logout</span>
          </a>
        </nav>
      </div>

      {/* Overlay for mobile to close the sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
