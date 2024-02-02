// // import { useEffect } from "react";
// // import { useGlobalContext } from "../../context/globalContext";
// import { useEffect, useState } from "react";
// import GroupForm from "./GroupForm";
// import axios from "axios";
// function GroupExpenses() {
//   // const { getExpenses, totalExpenses } = useGlobalContext();

//   // useEffect(() => {
//   //   getExpenses();
//   // }, []);
//   const [_groups, setGroups] = useState([{ id: 0, name: "" }]);
//   function fetchGroups(setGroups) {
//     axios
//       .get(
//         `${import.meta.env.VITE_API}/group/user/${localStorage.getItem(
//           "selfId"
//         )}`
//       )
//       .then(({ data }) => {
//         console.log(data, "HEHE");
//         setGroups(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   useEffect(() => {
//     fetchGroups(setGroups);
//   }, []);
//   return (
//     <div className="flex overflow-auto h-full">
//       <div className="w-full bg-white border-2 border-solid border-white shadow-md rounded-2xl p-8">
//         <h1 className="text-3xl font-semibold mb-4">Group Expenses</h1>
//         <h2 className="total-income text-2xl font-semibol flex justify-center items-center bg-[#FCF6F9] border-2 border-white box-border border-solid shadow-md rounded-2xl p-4 mb-4">
//           Total Group Expense:{" "}
//           <span className="text-green-700 text-2xl ml-3 font-bold">$$$</span>
//         </h2>
//         <div className="flex gap-8">
//           <div className="w-1/2">
//             <GroupForm _setGroups={setGroups} fetchGroups={fetchGroups} />
//           </div>
//           <div className="flex-1 text">
//             <div className="flex flex-col items-center w-full gap-4 bg-FCF6F9 border-2 border-FFFFFF shadow-md p-4 rounded-2xl overflow-y-auto h-[29.5rem] no-scrollbar">
//               <h2 className="text-2xl font-bold mb-4">Your Groups</h2>
//               <div className="flex flex-col p-8">
//                 {_groups.map((group) => (
//                   <div
//                     key={group.id}
//                     className="history-item w-[25rem] bg-FCF6F9 border-2 border-black shadow-sm p-4 rounded-2xl flex justify-center items-center space-x-4 mb-4"
//                   >
//                     <p
//                       className={`text-base flex font-medium justify-between items-center text-black-600`}
//                     >
//                       {group.name}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GroupExpenses;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GroupForm from "./GroupForm";
import axios from "axios";

function GroupExpenses() {
  const [activeGroup, setActiveGroup] = useState(null);
  const [groups, setGroups] = useState([{ id: 0, name: "" }]);
  const navigate = useNavigate();

  function fetchGroups(setGroups) {
    axios
      .get(
        `${import.meta.env.VITE_API}/group/user/${localStorage.getItem(
          "selfId"
        )}`
      )
      .then(({ data }) => {
        console.log(data, "HEHE");
        setGroups(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchGroups(setGroups);
  }, []);

  const handleGroupClick = (groupId) => {
    setActiveGroup(groupId);
    navigate(`/open-group/${groupId}`);
  };

  return (
    <div className="flex overflow-auto h-full">
      <div className="w-full bg-white border-2 border-solid border-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-semibold mb-4">Group Expenses</h1>
        <h2 className="total-income text-2xl font-semibol flex justify-center items-center bg-[#FCF6F9] border-2 border-white box-border border-solid shadow-md rounded-2xl p-4 mb-4">
          Total Group Expense:{" "}
          <span className="text-green-700 text-2xl ml-3 font-bold">$</span>
        </h2>
        <div className="flex gap-8">
          <div className="w-1/2">
            <GroupForm setGroups={setGroups} fetchGroups={fetchGroups} />
          </div>
          <div className="flex-1 text">
            <div className="flex flex-col items-center w-full gap-4 bg-FCF6F9 border-2 border-FFFFFF shadow-md p-4 rounded-2xl overflow-y-auto h-[29.5rem] no-scrollbar">
              <h2 className="text-2xl font-bold mb-4">Your Groups</h2>
              <h2 className="text-xl font-bold mb-1">Click to open !</h2>
              <div className="flex flex-col p-8">
                {groups.map((group) => (
                  <div
                    key={group.id}
                    className={`history-item w-[25rem] bg-FCF6F9 border-2 border-black shadow-sm p-4 rounded-2xl flex justify-center items-center space-x-4 mb-4 ${
                      activeGroup === group.id ? "active-group" : ""
                    }`}
                    onClick={() => handleGroupClick(group.id)}
                  >
                    <p
                      className={`text-base flex font-medium justify-between items-center text-black-600`}
                    >
                      {group.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupExpenses;
