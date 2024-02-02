/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectMembers({ setSelectedId }) {
  const [selected, setSelected] = useState({ name: "" });
  const [_people, setPeople] = useState([{ name: "", id: 0 }]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/user/all`)
      .then(({ data }) => setPeople(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <Listbox
      value={selected}
      onChange={(e) => {
        setSelected(e);
        setSelectedId(e.id);
      }}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            Add Member
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full h-8 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">
                  {selected.name || ""}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <IoMdArrowDropdownCircle
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {_people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <FaCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
