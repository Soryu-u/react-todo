import React, { useState } from "react";

let useFormInput = (data) => {
  let [value, setValue] = useState(data);
  return {
    value: value,
    onChange: (e) => setValue(e.target.value),
  };
};

function InputForm(props) {
  const title = useFormInput("");
  const description = useFormInput("");
  const due_date = useFormInput("");

  let [inputStatus, setInputStatus] = useState(false);

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    let newTask = {
      title: title.value,
      description: description.value,
      due_date: due_date.value ? due_date.value : null,
    };
    if (newTask.title) {
      setInputStatus(false);
      props.createTask(newTask);
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
