import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import TopNavbar from "src/components/TopNavbar";
import Profile from "../AsideSection/components/Profile";
import Sidebar from "../AsideSection/components/Sidebar";
import { data } from "./Utility/CellRepoprts.constant";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import useCrud from "./hook/useCrud";
import Table from "./components/table";

function CellReports() {
  const {
    handleAction,
    handleDelete,
    handleEdit,
    handleToggle,
    handleAdd,
    person,
    showAdd,
    showEdit,
    editData,
    toggle,
    setPerson
  } = useCrud();
 
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [colVisible, setColVisible] = useState({});

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
        return (
          <button>
              <BiSolidEdit onClick={() => handleEdit(info.row.original)} />
          </button>
        )
        
      },
    },
    {
      header: "Delete",
      accessorKey: "delete",
      cell: (info) => {
        return (
          <button>
              <AiFillDelete onClick={() => handleDelete(info.row.original)} />
          </button>
        )
      },
    },
  ];

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

  return (
    <div className="w-full flex">
      <div className="w-[20%]">
        <Sidebar index={4} />
        <Profile />
      </div>
      <div className="w-[80%] h-auto">
        <div className="mb-[100px]">
          <TopNavbar />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[80%]  border-2 border-[#91D273] p-5">
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
                  <div className="border border-[#91D273] shadow rounded absolute right-[20px] top-[240px]">
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
            <div className="">
                <Table 
                  table={table}
                  flexRender={flexRender}
                  
                />
            </div>
                    
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
