import "../css/header.css";
import Calendar from "./Calendar";
import Clock from "./Clock";

function Header() {
  return (
    <header className="header">
      <div className="left__nav">
        square<span id="text">shnik</span> todo list
      </div>
      <div className="right__nav">
        <Clock />
        <Calendar />
      </div>
    </header>
  );
}

export default Header;
