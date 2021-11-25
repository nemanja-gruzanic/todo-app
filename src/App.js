import "./App.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="task-layout">
      <TaskList />
    </div>
  );
}

export default App;
