import React, { useContext, useEffect, useState } from "react";
import { Form, Heading, Total, Wrapper } from "../ui";
import SkeletonLoader from "../skeleton/SkeletonLoader.skeleton";
import { getTodoData } from "../../service/todo.service";
import { ListGroup, ListUi } from "../list";
import useFetch from "../../hook/useFetch";
import { TodoContext } from "../../context/TodoContext";

const HomePage = () => {
  const { loading } = useFetch(getTodoData, "todo");
  const { todo } = useContext(TodoContext);
  return (
    <Wrapper>
      <div className="py-12">
        <Heading />
        <Form />

        {loading ? (
          <SkeletonLoader />
        ) : (
          <>
            <Total data={todo} />
            <ListGroup data={todo} />
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default HomePage;
