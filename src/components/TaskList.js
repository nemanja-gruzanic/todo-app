import { Card } from "primereact/card";

import { Button } from "primereact/button";
import { useState } from "react";
import TaskDialog from "./TaskDialog";
import Task from "./Task";

export default function TaskList() {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [taskForChange, setTaskForChange] = useState();

  const onSave = (task) => {
    setTaskList([...taskList, task]);
    setVisibleDialog(false);
  };

  const onUpdate = (newTask) => {
    setTaskList(
      taskList.map((task) => {
        return task.ID === newTask.ID
          ? {
              ID: newTask.ID,
              name: newTask.name,
              description: newTask.description,
              dueDate: newTask.dueDate,
              priority: newTask.priority,
              isDone: newTask.isDone,
            }
          : task;
      })
    );
    setVisibleDialog(false);
  };

  const onDelete = (taskID) => {
    setTaskList(taskList.filter((task) => task.ID !== taskID));
  };

  const onDone = (taskID) => {
    setTaskList(
      taskList.map((task) => {
        return task.ID === taskID ? { ...task, isDone: !task.isDone } : task;
      })
    );
  };

  return (
    <div className="justify-content-center">
      <h2 className="color-cyan"> Todo List app </h2>
      <div className="flex justify-content-center flex-wra">
        <div className="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6">
          <Card className="card-background-color">
            <Button
              label="Add task"
              onClick={() => {
                setVisibleDialog(true);
              }}
            />
            {taskList?.map((task) => {
              return (
                <Task
                  key={task.ID}
                  task={task}
                  onDelete={onDelete}
                  onDone={onDone}
                  setVisibleDialog={setVisibleDialog}
                  setTaskForChange={setTaskForChange}
                />
              );
            })}
          </Card>
        </div>
      </div>
      <TaskDialog
        visibleDialog={visibleDialog}
        setVisibleDialog={setVisibleDialog}
        setTaskList={setTaskList}
        onSave={onSave}
        onUpdate={onUpdate}
        taskForChange={taskForChange}
        setTaskForChange={setTaskForChange}
      />
    </div>
  );
}
