import { Card } from "primereact/card";

export default function Task(props) {
  const { task } = props;

  return (
    <Card className="card-task">
      <div className="grid align-items-center">
        <span className={`col-10 ${task.isDone ? "line-through" : ""}`}>
          {task.name}
        </span>
        <i
          onClick={() => props.onDelete(task.ID)}
          className="trash-icon pi pi-trash"
        />
        <i
          onClick={() => props.onDone(task.ID)}
          className={`check-icon pi ${
            task.isDone ? "pi-check-circle" : "pi-circle"
          }`}
        />
      </div>
    </Card>
  );
}
