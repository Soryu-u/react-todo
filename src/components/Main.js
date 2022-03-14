import Todos from "./Todos";



export default function Main(props) {

  let sendData = (index) =>{
    props.sendData(index)
  }
  let deleteTask = (index) =>{
    props.deleteTask(index)
  }



  return (
    <main className="main">
      <h2 className="main__head">Todo list</h2>
      <div scroll="yes" className="todo">
        <Todos todo={props.task} sendData={sendData} deleteTask={deleteTask}/>
      </div>
    </main>
  );
}
