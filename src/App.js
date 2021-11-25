import "./App.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-layout">
      <TodoList />
    </div>
  );
}

export default App;
