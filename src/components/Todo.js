import "../css/todo.css";

import trash from "../img/icons8-trash.svg";

export default function Todo(props) {
  function getDate(data) {
    if (data) {
      let taskDate = new Date(data);
      function month() {
        return taskDate.getMonth() + 1 > 9
          ? taskDate.getMonth() + 1
          : `0${taskDate.getMonth() + 1}`;
      }
      function day() {
        return taskDate.getDate() > 9
          ? taskDate.getDate()
          : `0${taskDate.getDate()}`;
      }
      let date = `${day()}.${month()}.${taskDate.getFullYear()}`;
      return date;
    } else {
      return "";
    }
  }

  function isOverdue(data) {
    if (data) {
      let currentDate = new Date().setHours(0, 0, 0, 0, 0);
      let taskDate = new Date(data).setHours(0, 0, 0, 0, 0);

      if (taskDate < currentDate) {
        return true;
      }
    }
  }

  let changeHandler = (event) => {
    let changedTask = {
      ...props.todo,
      done: event.target.checked,
    };
    props.sendData(changedTask);
  };

  let deleteHandler = () => {
    props.deleteTask(props.todo);
  };

  return (
    <li className={`todo__item ${props.todo.done ? "done" : ""}`}>
      <div className="task__header">
        <input
          type="checkbox"
          className="todo__checkbox"
          defaultChecked={props.todo.done}
          onChange={changeHandler}
        />
        <p className={`task__body ${props.todo.done ? "checked" : ""}`}>
          {props.todo.title}
        </p>
        <button className="delete__btn">
          <img src={trash} alt="delete" onClick={deleteHandler} />
        </button>
      </div>
      <div className="task__content ">
        <p className="task__description">{props.todo.description}</p>
        <p
          className={`task__date ${
            isOverdue(props.todo.due_date) && !props.todo.done
              ? "overdue__task"
              : ""
          } `}
        >
          {getDate(props.todo.due_date)}
        </p>
      </div>
    </li>
  );
}
