import { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../button/Button";
import { IoAddOutline } from "react-icons/io5";
function GroupForm() {
  const { error, setError, groups, setGroups } = useGlobalContext();
  const [inputState, setInputState] = useState({
    groupName: "",
    userName: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      // These are mock users as of now
      const mockUsers = [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
        { id: 4, name: "User 4" },
      ];
      setAllUsers(mockUsers);
    };

    fetchAllUsers();
  }, []);

  const { groupName, userName } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroup = { id: groups.length + 1, groupName, userName };
    setGroups([...groups, newGroup]);
    setInputState({
      groupName: "",
      userName: "",
    });
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={groupName}
          name={"groupName"}
          placeholder="Group Name"
          onChange={handleInput("groupName")}
          className="border-2 border-slate-400  rounded-md p-2 placeholder:text-slate-800"
        />
      </div>
      <div className="input-control">
        <select
          value={userName}
          name={"userName"}
          onChange={handleInput("userName")}
          className="border-2 border-slate-400  rounded-md p-2 placeholder:text-slate-800"
        >
          <option value="" disabled>
            Select User
          </option>
          {allUsers.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div className="submit-btn">
        <Button
          name={"Create Group"}
          icon={
            <IoAddOutline
              className="cursor-pointer"
              size={"20px"}
              style={{ marginRight: "4px" }}
            />
          }
        />
      </div>
    </form>
  );
}

export default GroupForm;
