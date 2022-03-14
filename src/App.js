import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./css/App.css";

function App() {

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main/>
    </div>
  );
}

export default App;
