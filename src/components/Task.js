import { Card } from "primereact/card";

export default function Task(props) {

  return (
    <Card className="card-task">
      <div className="flex justify-content-between flex-wrap">
      <span>{props?.task?.name}</span>
      <i onClick={() => props.onDelete(props?.task?.ID)} className="trash-icon pi pi-trash"></i>
      </div>
    </Card>
    );
}
