import React, { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import EditModal from "./components/EditModal";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { data } from "./CellRepoprts.constant";
import AddModal from "./components/AddModal";
import Aside from "../AsideSection/Aside";
import Sidebar from "../AsideSection/components/Sidebar";
import Profile from "../AsideSection/components/Profile";
import Navbar from "../Home/components/Navbar";
import TopNavbar from "src/components/TopNavbar";

function CellReports() {
  const [person, setPerson] = useState(data);
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "Actions",
      accessorKey: "action",
      cell: (info) => {
        return (
          <button onClick={() => handleAction(info.row.original)}>
            <BsThreeDots className="text-[#40493B]" />
          </button>
        );
      },
    },
    {
      header: "Edit",
      accessorKey: "edit",
      cell: (info) => {
        return <BiSolidEdit onClick={() => handleEdit(info.row.original)} />;
      },
    },
    {
      header: "Delete",
      accessorKey: "delete",
      cell: (info) => {
        return <AiFillDelete onClick={() => handleDelete(info.row.original)} />;
      },
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [colVisible, setColVisible] = useState({});
  const [toggle, setToggle] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [editData, setEditData] = useState({});

  const table = useReactTable({
    data: person,
    columns,
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnVisibility: colVisible,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onGlobalfilterchange: setFiltering,
    onColumnVisibilityChange: setColVisible,
  });

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleAction = (obj) => {
    alert(`Hi ${obj.name} is Here`);
  };

  const handleEdit = (obj) => {
    setEditData(obj);
    setShowEdit(!showEdit);
  };

  const handleDelete = (item) => {
    const newData = person.filter((el) => el.id !== item.id);
    setPerson(newData);
  };

  const handleAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className="w-full flex">
      <div className="w-[20%]">
        <Sidebar index={4} />
        <Profile />
      </div>
      <div className="w-[80%]">
        <div className="mb-[50px]">
           <TopNavbar />
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="w-[60%]  border-2 border-[#91D273] p-5">
            <div className="text-left px-3">
              <button
                className="w-16 h-10  rounded-md bg-white border border-[#91D273]"
                onClick={handleAdd}
              >
                ADD
              </button>
            </div>
            <div className="flex justify-between p-2">
              <input
                type="text"
                placeholder="Filtering"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
                className=" w-[80%] my-2 rounded-md pl-3 border-2 border-[#91D273]"
              />
              {!toggle ? (
                <button
                  className="w-16 h-10  rounded-md bg-white border border-[#91D273]"
                  onClick={handleToggle}
                >
                  Toggle
                </button>
              ) : null}

              {toggle ? (
                <div className="flex">
                  <div className="px-1">
                    <button
                      className="w-16 h-10  rounded-md bg-[#A4AE9E]  border border-[#91D273]"
                      onClick={handleToggle}
                    >
                      Toggle
                    </button>
                  </div>
                  <div className="border border-[#91D273] shadow rounded absolute right-[240px] top-[240px]">
                    {table.getAllLeafColumns().map((column) => {
                      return (
                        <div key={column.id} className="px-1">
                          <label className="text-[#40493B]">
                            <input
                              {...{
                                type: "checkbox",
                                checked: column.getIsVisible(),
                                onChange: column.getToggleVisibilityHandler(),
                              }}
                            />{" "}
                            {column.id}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>

            <table className="table-auto border-collapse border text-[#40493B] border-green-600 w-full ">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="bg-[#74a85c]">
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.key}
                        className="border border-slate-300 text-white w-auto text-center"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div className="flex items-center justify-center ">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {
                            {
                              asc: (
                                <FaRegArrowAltCircleUp className="text-[#1d2a17] ml-2" />
                              ),
                              desc: (
                                <FaRegArrowAltCircleDown className="text-[#1d2a17] ml-2" />
                              ),
                            }[header.column.getIsSorted() ?? NULL]
                          }
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row, ind) => (
                  <tr
                    key={row.id}
                    className={`${
                      ind % 2 === 0
                        ? "bg-white text-center"
                        : "bg-white text-center"
                    }`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="border border-slate-300 w-auto p-3"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between mt-2">
              <button
                disabled={!table.getCanPreviousPage()}
                onClick={() => table.previousPage()}
                className={`${
                  !table.getCanPreviousPage()
                    ? "text-gray-500 w-auto bg-white p-1 rounded-md"
                    : "w-auto text-white bg-[#659350] p-1 rounded-md"
                }`}
              >
                goTo Previous
              </button>
              <div className="text-[#40493B]">
                Page {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </div>
              <button
                disabled={!table.getCanNextPage()}
                onClick={() => table.nextPage()}
                className={`${
                  !table.getCanNextPage()
                    ? "text-gray-500 w-auto bg-white p-1 rounded-md"
                    : "w-auto text-white bg-[#659350] p-1 rounded-md"
                }`}
              >
                goTo next
              </button>
            </div>
          </div>
          {showEdit ? (
            <EditModal obj={editData} person={person} setPerson={setPerson} />
          ) : null}
          {showAdd ? <AddModal setPerson={setPerson} person={person} /> : null}
        </div>
      </div>
    </div>
  );
}

export default CellReports;
