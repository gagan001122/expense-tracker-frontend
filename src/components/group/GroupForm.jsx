/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../button/Button";
import { IoAddOutline } from "react-icons/io5";
import axios from "axios";
function GroupForm({ _setGroups, fetchGroups }) {
  const { error, setError, groups, setGroups } = useGlobalContext();
  const [inputState, setInputState] = useState({
    groupName: "",
    userName: "",
  });
  const [allUsers, setAllUsers] = useState([]);
  const [name, setName] = useState("");
  const [selectedId, setSelectedId] = useState(0);
  useEffect(() => {
    const fetchAllUsers = async () => {
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
    <form className="flex flex-col gap-8">
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          name={"groupName"}
          placeholder="Group Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border-2 border-slate-400  rounded-md p-2 placeholder:text-slate-800"
        />
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
          onClick={(e) => {
            e.preventDefault();
            axios
              .post(`${import.meta.env.VITE_API}/group/create`, {
                group: { name: name },
                creatorId: Number(localStorage.getItem("selfId")),
                members: [selectedId],
              })
              .then(() => {
                fetchGroups(_setGroups);
              })
              .catch((e) => console.log(e));
          }}
        />
      </div>
    </form>
  );
}

export default GroupForm;
