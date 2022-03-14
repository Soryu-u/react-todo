import axios from "axios";
import React, { useEffect, useState } from "react";


const baseURL = "http://10.177.1.5:8000/tasks";

function InputForm() {
  function onSubmitHandler() {
    console.log("onSubmitHandler");
  }


  const [post, setPost] = useState(null);

  useEffect(() => {
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

  


  return (
    <div className="newTask">
      <form onSubmit={onSubmitHandler} className="input" name="task">
        <input
          className="newTask__form "
          type="text"
          name="title"
          placeholder="Enter task name"
        ></input>
        <input
          className="newTask__form"
          type="text"
          name="description"
          placeholder="Enter task description"
        ></input>
        <input className="newTask__date" type="date" name="due_date"></input>

        <button type="submit" className="newTask__btn">
          add
        </button>
      </form>
    </div>
  );
}

export default InputForm;
