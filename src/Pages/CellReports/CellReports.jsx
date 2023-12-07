import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const data = [
  { id: 1, name: "Ravi", gender: "male", role: "FrontEnd" },
  { id: 2, name: "Revati", gender: "female", role: "Php Developer" },
  { id: 3, name: "Chetan", gender: "male", role: "ASp.Net" },
  { id: 4, name: "Pratik", gender: "male", role: "React Developer" },
  { id: 5, name: "Ravi", gender: "male", role: "FrontEnd" },
  { id: 6, name: "Revati", gender: "female", role: "Php Developer" },
  { id: 7, name: "Chetan", gender: "male", role: "ASp.Net" },
  { id: 8, name: "Pratik", gender: "male", role: "React Developer" },
  { id: 9, name: "Ravi", gender: "male", role: "FrontEnd" },
  { id: 10, name: "Revati", gender: "female", role: "Php Developer" },
  { id: 11, name: "Chetan", gender: "male", role: "ASp.Net" },
  { id: 12, name: "Pratik", gender: "male", role: "React Developer" },
];
function CellReports() {
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
  ];

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [colVisible, setColVisible] = useState({});
  const [toggle, setToggle] = useState(false);
  const table = useReactTable({
    data,
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

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-[50%]  ">
        <div className="flex justify-between p-2">
          <input
            type="text"
            placeholder="Filtering"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className="border border-black w-[80%] my-2 rounded-md pl-3"
          />
          {!toggle ? (
            <button
              className="w-16 h-10 border border-black rounded-md"
              onClick={handleToggle}
            >
              Toggle
            </button>
          ) : null}

          {toggle ? (
            <div className="flex">
             <div className="px-1">
                <button
                  className="w-16 h-10 border border-black rounded-md"
                  onClick={handleToggle}
                >
                  Toggle
                </button>
              </div>
            <div className="border border-black shadow rounded absolute right-[260px] top-[260px]">
             
              {table.getAllLeafColumns().map((column) => {
                return (
                  <div key={column.id} className="px-1">
                    <label>
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

        <table className="table-auto border-collapse border border-slate-400 w3-table w3-striped ">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.key}
                    className="border border-slate-300 w-auto text-center"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-slate-300 w-auto p-3"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
          >
            goTo Previous
          </button>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            goTo next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CellReports;
