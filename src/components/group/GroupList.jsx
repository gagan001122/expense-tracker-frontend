import { useGlobalContext } from "../../context/globalContext";
// import Button from "../button/Button";
import { MdDelete } from "react-icons/md";

function GroupList() {
  const { groups, deleteGroup } = useGlobalContext();

  const handleDeleteGroup = (groupId) => {
    deleteGroup(groupId);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Recent Groups</h1>
      {groups?.length > 0 ? (
        <ul className="list-none p-0">
          {groups.map((group) => (
            <li
              key={group.id}
              className="bg-[#FCF6F9] border-2 border-white box-border border-solid shadow-md rounded-10 p-4 mb-4 flex justify-between items-center"
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
        </ul>
      ) : (
        <p className="text-xl">No groups created yet.</p>
      )}
    </div>
  );
}

export default GroupList;
