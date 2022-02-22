import "../css/sidebar.css";
import InputForm from "./InputForm";

function Sidebar() {
  return (
    <div className="sidebar">
      <InputForm />
      <div className="routing">
        <p>Show:</p>
        <button id="open" className="route__btn">
          open tasks
        </button>
        <button id="all" className="route__btn active">
          all tasks
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
