import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import TopNavbar from "src/components/TopNavbar";
import Profile from "../AsideSection/components/Profile";
import Sidebar from "../AsideSection/components/Sidebar";
import Action from "./components/Action";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import Table from "./components/table";
import useCrud from "./hook/useCrud";

function CellReports() {
  const {
    handleDelete,
    handleEdit,
    handleToggle,
    handleAdd,
    person,
    showAdd,
    showEdit,
    editData,
    toggle,
    setPerson,
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
      header: "Profile",
      accessorKey: "profileAndName",
      cell: (info) => {
        return (
          <div className="flex justify-center items-center">
            <img
              src={info.row.original.img}
              alt={`Profile of ${info.row.original.name}`}
              className="w-12 h-12 rounded-full border border-green-300 mr-2"
            />
            {info.row.original.name}
          </div>
        );
      },
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
          <button>
            <Action obj={info.row.original} handleEdit={handleEdit} handleDelete={handleDelete}/>
          </button>
        );
      },
    },
    
  ];

  const table = useReactTable({
    data: person,
    columns,
    initialState: {
      pagination: {
        pageSize: 6,
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
  
  // console.log(showEdit)
  
  return (
    <div className="w-full flex">
      <div className="w-[20%]">
        <Sidebar index={4} />
        <Profile />
      </div>
      <div className="w-[80%] h-auto">
        <div className="mb-[60px]">
          <TopNavbar />
        </div>
        <div className="flex ">
          <div className="w-[100%] p-2">
            <div className="flex justify-between p-2">
              <input
                type="text"
                placeholder="Filtering"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
                className=" w-[80%] my-2 rounded-md pl-3 border-2 border-[#91D273]"
              />
              <div className="text-left px-3">
                <button
                  className="w-16 h-10  rounded-md bg-white border border-[#91D273]"
                  onClick={handleAdd}
                >
                  ADD
                </button>
              </div>
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
                  <div className="border border-[#91D273] shadow rounded absolute right-[10px] top-[170px]">
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
              <Table table={table} flexRender={flexRender} />
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
         {
         console.log(showEdit)
         } 
          {showEdit ? 
            <EditModal obj={editData} person={person} setPerson={setPerson} />
           : null}
          {showAdd ? <AddModal setPerson={setPerson} person={person} /> : null}
        </div>
      </div>
    </div>
  );
}

export default CellReports;
