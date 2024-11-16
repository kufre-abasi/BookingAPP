import React from "react";

import ConsumerTable from "./ConsumerTable";
import DeleteIcon from "../ui/Icons/DeleteIcon";
import Dropdown from "../ui/Icons/Dropdown";
import FilterIcon from "../ui/Icons/FilterIcon";

const consumers = [
  { id: 235, name: "Mior Zaki", date: "08/20/22" },
  { id: 234, name: "Jess Archer", date: "08/20/22" },
  { id: 233, name: "Taylor Otwell", date: "08/20/22" },
  { id: 232, name: "Mior Zaki", date: "08/20/22" },
  { id: 231, name: "Jess Archer", date: "08/20/22" },
  { id: 230, name: "David Zaki", date: "08/20/22" },
  { id: 232, name: "Mior Zaki", date: "08/20/22" },
  { id: 231, name: "Jess Archer", date: "08/20/22" },
  { id: 230, name: "David Zaki", date: "08/20/22" },
];

const ConsumerList = () => {
  const headers = ["ID", "CONSUMER", "DATE (Registration)"];

  const renderActions = (consumer: any) => (
    <button className="text-red-500">
      <DeleteIcon />
    </button>
  );

  return (
    <div className=" bg-white rounded-[8px] shadow-md max-w-full lg:w-full  mt-10">
      <div className="flex justify-between items-center">
        <div className="flex px-4 items-center py-6 gap-4">
          <input type="checkbox" className="form-checkbox" />
          <Dropdown />
        </div>
        <div className="flex px-4 items-center py-4 gap-4">
          <FilterIcon />
          <Dropdown />
        </div>
      </div>
      <div className=" flex justify-between items-center">
        <ConsumerTable
          headers={headers}
          data={consumers}
          renderActions={renderActions}
        />
      </div>
      <div className="flex justify-between p-5 text-[12px] font-bold text-[#CBD5E1]">
        <p>previous</p>
        <p>226-235 of 235</p>
        <p>Next</p>
      </div>
    </div>
  );
};

export default ConsumerList;
