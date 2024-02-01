import { dateFormat } from "../../utils/dateFormat";
import { IoBookSharp, IoFastFoodOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { CiBank } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { GiClothes } from "react-icons/gi";
import { RiMoneyDollarCircleFill, RiTakeawayFill } from "react-icons/ri";
import { FaBriefcaseMedical, FaRegCircle } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import PropTypes from "prop-types";
function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return <RiMoneyDollarCircleFill />;
      case "freelancing":
        return <RiMoneyDollarCircleFill />;
      case "investments":
        return <CiBank />;
      case "stocks":
        return <FaPeopleGroup />;
      case "bitcoin":
        return <FaBitcoin />;
      case "bank":
        return <FaAddressCard />;
      case "youtube":
        return <FaYoutube />;
      case "other":
        return <TbMoneybag />;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return <IoBookSharp />;
      case "groceries":
        return <IoFastFoodOutline />;
      case "health":
        return <FaBriefcaseMedical />;
      case "subscriptions":
        return <RiNetflixFill />;
      case "takeaways":
        return <RiTakeawayFill />;
      case "clothing":
        return <GiClothes />;
      case "travelling":
        return <SiFreelancer />;
      case "other":
        return <FaRegCircle />;
      default:
        return "";
    }
  };
  return (
    <div className="flex gap-8">
      <div className="history-item bg-FCF6F9 border-2 border-white shadow-md p-4 rounded-2xl flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {type === "expense" ? expenseCatIcon() : categoryIcon()}
            <h5 className="relative text-lg pl-2">
              {title}
              <span
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full ${indicatorColor}`}
              />
            </h5>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-5">
              <p
                className={`flex items-center gap-2 text-primary-opacity ${
                  type === "expense" ? "text-red-600" : "text-green-600"
                }`}
              >
                {<FaRupeeSign size={"20px"} color={"black"} />}
                {amount}
              </p>
              <p className="flex items-center gap-2 text-primary-opacity">
                {<SlCalender />}
                {dateFormat(date)}
              </p>
            </div>
            <div className="btn-con">
              <MdDelete
                className="cursor-pointer"
                size={"30px"}
                color={"red"}
                style={{
                  borderRadius: "50%",
                  padding: "0.3rem",
                }}
                onClick={() => deleteItem(id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
IncomeItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  indicatorColor: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
export default IncomeItem;
