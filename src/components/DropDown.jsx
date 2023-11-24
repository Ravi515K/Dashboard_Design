import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaAngleDown } from "react-icons/fa";
import {
  EditActiveIcon,
  EditInactiveIcon,
  DeleteActiveIcon,
  DeleteInactiveIcon,
} from "./MenuOpton/Icon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  openEditModal,
  openEditModal_in,
} from "../Redux/Slices/AddMember/AddMember";

export default function DropDown({ id1, detailId }) {
 // console.log(id1)
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const deleteMember = (id1) => {
    try {
      fetch(`https://gorest.co.in/public/v2/users/${id1}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'Authorization':
            "Bearer 39c73ae0c166fedbeb5c0b6e5b79dbf0c251b0c68f0485d6686687ab9c76c18e",
        },
      });
    } catch {
      (err) => console.log(err);
    }
  };
  const mutation = useMutation({
    mutationFn: (id1) => {
      return deleteMember(id1);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["member"] });
    },
  });

  const handleDelete = (id1) => {
    mutation.mutate(id1);
  };

  const openEdit = (id1, detailId) => {
    // console.log(id1,singleId)
    if (id1) {
      dispatch(openEditModal(id1));
    } else if (singleId) {
      dispatch(openEditModal_in(detailId));
    }
  };
  return (
    <div className="">
      <Menu as="div" className=" inline-block text-left">
        <div>
          <Menu.Button className=" w-3 h-3 ">
            <FaAngleDown
              className=" h-4 w-4 font-semibold text-[20px] text-zinc-950"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-1 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => openEdit(id1, detailId)}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              {/* <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item> */}
            </div>
            {/* <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Move
                  </button>
                )}
              </Menu.Item>
            </div> */}
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => handleDelete(id1)}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
