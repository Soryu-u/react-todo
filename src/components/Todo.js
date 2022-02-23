import "../css/todo.css";

import trash from "../img/icons8-trash.svg";

export default function Todo(task) {
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
        return "task__date overdue__task";
      } else {
        return "task__date";
      }
    }
  }

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function changeStatus() {}

  return (
    <li className={task.todo.done ? "todo__item done" : "todo__item"}>
      <div className="task__header">
        <input
          type="checkbox"
          className="todo__checkbox"
          checked={task.todo.done}
          onClick={changeStatus()}
        />
        <p className={task.todo.done ? "task__body checked" : "task__body"}>
          {task.todo.title}
        </p>
        <button className="delete__btn">
          <img src={trash} alt="" />
        </button>
      </div>
      <div className="task__content ">
        <p className="task__description">{task.todo.description}</p>
        <p className={isOverdue(task.todo.due_date)}>
          {getDate(task.todo.due_date)}
        </p>
      </div>
    </li>
  );
}
