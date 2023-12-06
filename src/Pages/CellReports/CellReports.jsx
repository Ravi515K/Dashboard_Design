import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

function CellReports() {
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-[50%]  ">
        <table className="table-auto border-collapse border border-slate-400 w3-table w3-striped">
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
          <button onClick={() => table.nextPage()}>goTo next</button>
        </div>
      </div>
    </div>
  );
}

export default CellReports;
