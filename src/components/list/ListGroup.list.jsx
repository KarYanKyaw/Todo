import React from "react";
import ListUi from "./ListUi.list";

const ListGroup = ({ data }) => {
  console.log(data);
  return (
    <div className=" grid gap-4 grid-cols-1">
      {data.map((data) => (
        <ListUi key={data.id} {...data} />
      ))}
    </div>
  );
};

export default ListGroup;
