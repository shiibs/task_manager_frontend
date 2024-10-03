import {
  FaUser,
  FaTasks,
  FaUsers,
  FaClipboardList,
  FaSignOutAlt,
  FaTools,
  FaChevronDown,
  FaBell,
} from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-end bg-gray-50 py-6 pr-5">
      <a
        href="/logout"
        className="flex px-3 items-center text-orange-500  hover:text-blue-800  mt-auto"
      >
        <FaBell className="mr-2" />
        <span>Notifications</span>
      </a>
    </div>
  );
}
