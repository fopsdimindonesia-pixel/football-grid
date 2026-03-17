import React from "react";

interface DataTableColumn {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: DataTableColumn[];
  data: any[];
}

export function DataTable({ columns, data }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-6 py-4">
                  {col.render
                    ? col.render(row[col.key], row)
                    : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
