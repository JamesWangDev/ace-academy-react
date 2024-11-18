// CustomTable.tsx
import React, { useState } from 'react';

interface TableColumn {
  header: string;
  width?: string;
}

interface TableProps {
  columns: TableColumn[];
  data: any[][];
  showCheckbox?: boolean;
}

const CustomTable: React.FC<TableProps> = ({ columns, data, showCheckbox }) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const handleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
    } else {
      const allRows = Array.from({ length: data.length }, (_, index) => index);
      setSelectedRows(new Set(allRows));
    }
  };

  const handleRowCheckboxClick = (rowIndex: number) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(rowIndex)) {
        newSelectedRows.delete(rowIndex);
      } else {
        newSelectedRows.add(rowIndex);
      }
      return newSelectedRows;
    });
  };

  return (
    <div className="min-w-full pb-7.5 rounded-2.5 bg-white text-midblack">
        <table>
            <thead>
                <tr>
                {showCheckbox && <th style={{ width: '1%' }} className="py-4.5 px-5 pl-8 border-b">
                    <input
                        type="checkbox"
                        checked={selectedRows.size === data.length}
                        onChange={handleSelectAll}
                    />
                </th>}
                {columns.map((column, index) => (
                    <th key={index} style={{ width: column.width || 'auto' }} className="py-4.5 px-5 border-b text-left font-extrabold">
                    {column.header}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {showCheckbox && <td style={{ width: '1%' }} className="py-2 px-5 border-b pl-8">
                        <input
                            className='w-full m-auto my-4.5'
                            type="checkbox"
                            checked={selectedRows.has(rowIndex)}
                            onChange={() => handleRowCheckboxClick(rowIndex)}
                        />
                    </td>}
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex} style={{ width: columns[cellIndex].width || 'auto' }} className="py-2 px-5 border-b font-semibold">
                            {cell}
                        </td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default CustomTable;
