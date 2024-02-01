import PropTypes from "prop-types";
import avatar from "../../img/avatar.png";
import { menuItems } from "../../utils/menuItems";
import { FaSignOutAlt } from "react-icons/fa";
function Navigation({ active, setActive }) {
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
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`grid grid-cols-[auto,1fr] items-center my-3 font-semibold cursor-pointer gap-2 transition-all duration-400 ease-in-out ${
              active === item.id
                ? "text-primary underline"
                : "text-primary-opacity"
            } ${active === item.id ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
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

Navigation.propTypes = {
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Navigation;

// import PropTypes from "prop-types";
// import avatar from "../../img/avatar.png";
// import { menuItems } from "../../utils/menuItems";

// function Navigation({ active, setActive }) {
//   return (
//     <nav className="px-8 py-6 w-80 h-full bg-[rgba(252, 246, 249, 0.78)] border-3 border-solid border-white backdrop-blur-[4.5px] rounded-3xl flex flex-col justify-between">
//       <div className="user-con mb-6">
//         <img
//           src={avatar}
//           alt="User Avatar"
//           className="w-20 h-20 rounded-full object-cover bg-[#fcf6f9] border-2 border-solid border-white p-1 box-shadow-[0px 1px 17px rgba(0, 0, 0, 0.06)]"
//         />
//         <div className="text mt-3">
//           <h2 className="text-primary text-lg font-semibold">Gagan</h2>
//           <p className="text-primary-opacity text-sm">Your Money</p>
//         </div>
//       </div>
//       <ul className="menu-items flex-1 flex flex-col gap-3">
//         {menuItems.map((item) => (
//           <li
//             key={item.id}
//             onClick={() => setActive(item.id)}
//             className={`grid grid-cols-40px auto items-center my-2 font-semibold cursor-pointer transition-all duration-400 ease-in-out ${
//               active === item.id ? "text-primary" : "text-primary-opacity"
//             } ${active === item.id ? "active" : ""}`}
//           >
//             {item.icon}
//             <span>{item.title}</span>
//           </li>
//         ))}
//       </ul>
//       <div className="bottom-nav mt-4">
//         <ul>
//           <li className="text-primary text-lg">{signout} Sign Out</li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// Navigation.propTypes = {
//   active: PropTypes.number.isRequired,
//   setActive: PropTypes.func.isRequired,
// };

// export default Navigation;
