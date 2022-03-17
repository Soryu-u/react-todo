import "../css/header.css";
import Calendar from "./Calendar";
import Clock from "./Clock";

function Header() {
  return (
    <header className="header">
      <div className="left__nav">
        <p className="pc">
          square<span id="text">shnik</span> todo list
        </p>
        <p className="mobile">
          square<span id="text">shnik</span> todo list
        </p>
      </div>
      <div className="right__nav">
        <Clock />
        <Calendar />
      </div>
    </header>
  );
}

export default Header;
