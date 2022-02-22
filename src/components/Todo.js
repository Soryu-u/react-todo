import "../css/todo.css";

export default function Todo(task) {
  return (
    <li className="todo__item">
      <div className="task__header">
        <input type="checkbox" className="todo__checkbox" />
        <p className="task__body">{task.todo.title}</p>
        <button className="delete__btn">
          <img src="../img/icons8-trash.svg" alt="" />
        </button>
      </div>
      <div className="task__content ">
        <p className="task__description">{task.todo.description}</p>
        <p className="task__date">{task.todo.due_date}</p>
      </div>
    </li>
  );
}
