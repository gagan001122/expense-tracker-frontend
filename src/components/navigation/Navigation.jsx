import avatar from "../../img/avatar.png";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";

function Navigation() {
  return (
    <nav className="px-8 py-6 w-80 h-full bg-[rgba(252, 246, 249, 0.78)] border-3 border-solid border-white backdrop-blur-[4.5px] rounded-3xl flex flex-col justify-between">
      <div className="user-con flex flex-row items-center mb-4">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover bg-[#fcf6f9] border-3 border-4 border-solid border-blue-200 box-shadow-[0px 1px 17px rgba(0, 0, 0, 0.06)]"
        />
        <div className="text text-center mt-2">
          <h2 className="text-primary text-xl ml-2">Gagan Singh</h2>
          <p className="text-primary-opacity ml-2"></p>
        </div>
      </div>
      <ul className="menu-items flex-1 flex flex-col">
        <li className="flex items-center my-3 font-semibold cursor-pointer gap-2 transition-all duration-400 ease-in-out">
          <Link to="/dashboard">
            <MdDashboard size={"2rem"} />
            <span className="ml-2">Dashboard</span>
          </Link>
        </li>
        <li className="flex items-center my-3 font-semibold cursor-pointer gap-2 transition-all duration-400 ease-in-out">
          <Link to="/incomes">
            <RiMoneyDollarCircleFill size={"2rem"} />
            <span className="ml-2">Budget</span>
          </Link>
        </li>
        <li className="flex items-center my-3 font-semibold cursor-pointer gap-2 transition-all duration-400 ease-in-out">
          <Link to="/personal">
            <TbMoneybag size={"2rem"} />
            <span className="ml-2">Personal</span>
          </Link>
        </li>
        <li className="flex items-center my-3 font-semibold cursor-pointer gap-2 transition-all duration-400 ease-in-out">
          <Link to="/create-group">
            <FaPeopleCarry size={"2rem"} />
            <span className="ml-2">Create Group</span>
          </Link>
        </li>
        <li className="flex items-center my-3 font-semibold cursor-pointer gap-2 transition-all duration-400 ease-in-out">
          <Link to="/groups">
            <FaPeopleCarry size={"2rem"} />
            <span className="ml-2">Groups</span>
          </Link>
        </li>
      </ul>
      <div className="bottom-nav">
        <ul className="flex items-center">
          <li className="text-primary flex items-center">
            <FaSignOutAlt className="mr-2" />
            <span>Sign Out</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
