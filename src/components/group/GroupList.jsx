import { useGlobalContext } from "../../context/globalContext";
// import Button from "../button/Button";
import { MdDelete } from "react-icons/md";

function GroupList() {
  const { groups, deleteGroup } = useGlobalContext();

  const handleDeleteGroup = (groupId) => {
    deleteGroup(groupId);
  };
  // const demoGroups = [
  //   { id: "1", groupName: "Demo Group 1" },
  //   { id: "2", groupName: "Demo Group 2" },
  //   { id: "3", groupName: "Demo Group 3" },
  // ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-1 text">
        <div className="flex flex-col w-full gap-4 bg-FCF6F9 border-2 border-FFFFFF shadow-md p-4 rounded-2xl overflow-y-auto h-[29.5rem] no-scrollbar">
          <h2 className="text-2xl font-bold mb-4 p-4">Groups</h2>
          {groups.map((group) => (
            <li
              key={group.id}
              className="history-item bg-FCF6F9 border-2 border-black w-full shadow-md p-4 rounded-2xl flex justify-between items-center"
            >
              {group.groupName}
              <div className="btn-con">
                <MdDelete
                  className="cursor-pointer"
                  size={"30px"}
                  color={"red"}
                  style={{
                    borderRadius: "50%",
                    padding: "0.3rem",
                  }}
                  onClick={() => handleDeleteGroup(group.id)}
                />
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroupList;
