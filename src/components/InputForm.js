import React, { useState } from "react";
import { useParams } from "react-router-dom";

let useFormInput = (data) => {
  let [value, setValue] = useState(data);
  let inputProps = {
    value: value,
    onChange: (e) => setValue(e.target.value),
  };
  Object.defineProperty(inputProps, "setValue", {
    value: setValue,
    enumerable: false,
  });
  return inputProps;
};

function InputForm(props) {
  let { id } = useParams();

  const title = useFormInput("");
  const description = useFormInput("");
  const due_date = useFormInput("");

  let [inputStatus, setInputStatus] = useState(false);

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    let newTask = {
      list_id: id ? id : 5,
      title: title.value,
      description: description.value,
      due_date: due_date.value ? due_date.value : null,
    };
    if (newTask.title) {
      setInputStatus(false);
      props.createTask(newTask);
      for (let f of [title, description, due_date]) {
        f.setValue("");
      }
    } else {
      setInputStatus(true);
    }
  };

  return (
    <div className="newTask">
      <form onSubmit={onSubmitHandler} className="input" name="task">
        <input
          className={`newTask__form ${inputStatus ? "invalid__input" : ""}`}
          type="text"
          name="title"
          {...title}
          placeholder="Enter task name"
        />
        <input
          className="newTask__form"
          type="text"
          name="desc"
          {...description}
          placeholder="Enter task description"
        />
        <input
          className="newTask__date"
          type="date"
          name="due_date"
          {...due_date}
        />

        <button type="submit" className="newTask__btn">
          add
        </button>
      </form>
    </div>
  );
}

export default InputForm;
