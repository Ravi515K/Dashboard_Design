import { Fragment, useEffect, useRef, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { CiSearch } from "react-icons/ci";
import PageData from "src/Utility/Utlity";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const searchRef = useRef();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [data, setData] = useState(PageData);
  const [selected, setSelected] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const filteredPeople =
    query === ""
      ? data
      : data.filter((el) =>
          el.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleRedirect = (path) => {
    console.log("hi");
    
    navigate(path);
  };

  useEffect(() => {
    const handleKeypress = (e) => {
      if (e.key == "/") {
        e.preventDefault();
        searchRef.current.focus();
      }
    };
    document.addEventListener("keypress", handleKeypress);
    return () => {
      document.removeEventListener("keypress", handleKeypress);
    };
  }, []);

  return (
    <div className="">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full h-8 cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Button>
              <CiSearch
                className="h-8 w-8 text-gray-400 cursor-pointer absolute inset-y-0 left-0 flex items-center pl-2"
                aria-hidden="true"
              />
              <Combobox.Input
                className="w-full border-none h-4 py-2 pl-3 pr-10 text-md text-center leading-5 outline-none text-gray-900 focus:ring-0"
                displayValue={(person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
                ref={searchRef}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            show={isFocused}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    onClick={() => handleRedirect(person.path)}
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
