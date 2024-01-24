import React from "react";

const Status = ({ data }) => {
  return (
    <div className="flex justify-between mb-5">
      <h3 className="text-2xl font-bold">Your List</h3>
      <div className="flex items-center bg-neutral-700 text-white px-3 rounded-full text-sm py-1">
        Done ( <span id="doneCount">0</span> /
        <span id="listCount"> {data.length} </span> )
      </div>
    </div>
  );
};

export default Status;
