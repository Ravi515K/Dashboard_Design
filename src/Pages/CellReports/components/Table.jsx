import React from 'react'
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from 'react-icons/fa'

function Table({table,flexRender}) {
    return (
        <div>
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
        </div>
    )
}

export default Table
