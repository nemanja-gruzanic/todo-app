import { Card } from "primereact/card";

export default function Task(props) {
  const { task, onDelete, onDone, setVisibleDialog, setTaskForChange } = props;

  return (
    <Card className="card-task">
      <div className="grid align-items-center">
        <span
          onClick={() => {
            setTaskForChange(task);
            setVisibleDialog(true);
          }}
          className={`task-span col-10 ${task.isDone ? "line-through" : ""}`}
        >
          {task.name}
        </span>
        <i
          onClick={() => onDelete(task.ID)}
          className="trash-icon pi pi-trash"
        />
        <i
          onClick={() => onDone(task.ID)}
          className={`check-icon pi ${
            task.isDone ? "pi-check-circle" : "pi-circle"
          }`}
        />
      </div>
    </Card>
  );
}
