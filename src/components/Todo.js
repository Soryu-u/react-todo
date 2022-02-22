import { Component } from "react";
import "../css/todo.css";

function Todo() {
  let todo = [
    {
      title: "task",
      description: "Description",
      due_date: "2022-02-22",
    },
  ];

  return (
    <li id="" className="todo__item ">
      <div className="task__header">
        <input type="checkbox" className="todo__checkbox" />
        <p className="task__body">{todo[0].title}</p>
        <button className="delete__btn">
          <img src="../img/icons8-trash.svg" alt="" />
        </button>
      </div>
      <div className="task__content ">
        <p className="task__description">{todo[0].description}</p>
        <p className="task__date">{todo[0].due_date}</p>
      </div>
    </li>
  );
}

export default Todo;
