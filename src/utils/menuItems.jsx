import { FaPeopleCarry } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";
export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdDashboard size={"2rem"} />,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Incomes",
    icon: <RiMoneyDollarCircleFill size={"2rem"} />,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Personal",
    icon: <TbMoneybag size={"2rem"} />,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Create Group",
    icon: <FaPeopleCarry size={"2rem"} />,
    link: "/dashboard",
  },
];
