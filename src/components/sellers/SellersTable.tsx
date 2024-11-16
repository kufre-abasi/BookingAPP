import React from "react";

interface TableProps {
  headers: string[];
  data: { id: number; [key: string]: any }[]; 
  renderActions: (item: any) => React.ReactNode;
}

const SellersTable: React.FC<TableProps> = ({ headers, data, renderActions }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead className="text-[12px]">
          <tr className="bg-[#F2F2FF] text-left text-gray-600 w-full">
            
            <th className="px-4 py-2 w-10">
              <input type="checkbox" className="form-checkbox" />
            </th>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-4">{header}</th>
            ))}
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-[14px]">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors border-b">
              
              <td className="px-4 py-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
              
              <td
                className="px-4 py-2"
                style={{ color: '#0EA5E9', fontWeight: 'bold' }}
              >
                {item.id}
              </td>
             
              {Object.keys(item).filter(key => key !== 'id').map((key, i) => (
                <td key={i} className="px-4 py-2">{item[key]}</td>
              ))}
              
              <td className="px-4 py-2">{renderActions(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellersTable;
