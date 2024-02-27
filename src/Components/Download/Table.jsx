import React from "react";

const Table = ({ tables }) => {
  return (
    <div className="overflow-x-auto">
      {tables.map((table, tableIndex) => (
        <div
          key={tableIndex}
          className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto my-5"
        >
          <table className="w-full text-sm text-left text-gray-400 bg-gray-200">
            <thead className="text-xl text-gray-700 uppercase ">
              <tr>
                {table.headers.map((header, headerIndex) => (
                  <th key={headerIndex} scope="col" className="px-6 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-white border-b text-gray-700 hover:bg-gray-50"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 text-center sm:text-left capitalize"
                    >
                      {/* Check if cell is a link */}
                      {cell.link ? (
                        <a href={cell.link}>{cell.content}</a>
                      ) : (
                        cell.content
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Table;
