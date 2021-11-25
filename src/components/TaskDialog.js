import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "primereact/toast";

export default function TaskDialog(props) {
  const [task, setTask] = useState(
    props?.task
      ? props?.task
      : {
          ID: "",
          name: "",
          description: "",
          dueDate: "",
          priority: "",
        }
  );
  const toast = useRef(null);
  const dropdownOptions = [
    { label: "Low", value: "Low" },
    { label: "Medium", value: "Medium" },
    { label: "High", value: "High" },
  ];

  const footer = () => {
    return (
      <div>
        <Button
          label="Save"
          icon="pi pi-save"
          onClick={() => {
            if (validateTask()) props.onSave({ ...task, ID: uuidv4() });
          }}
          className="p-button-success"
        />
      </div>
    );
  };

  const validateTask = () => {
    if(!task.name || !task.name.trim()) {
      toast.current.show({
        severity: "error",
        detail: "The name is required field",
        sticky: true,
      });
    } else if (task.name.length > 100) {
      toast.current.show({
        severity: "error",
        detail: "The name must contain less than 100 characters",
        sticky: true,
      });
      return false;
    } else if (task.dueDate && task.dueDate < new Date()) {
      toast.current.show({
        severity: "error",
        detail: "The due date must be in future",
        sticky: true,
      });
      return false;
    } else if (task.description.length > 1000) {
      toast.current.show({
        severity: "error",
        detail: "The description must contain less than 1000 characters",
        sticky: true,
      });
      return false;
    } else {
      return true;
    }
  };

  return (
    <Dialog
      className="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6"
      visible={props.visibleDialog}
      footer={footer}
      onHide={() => props.setVisibleDialog(false)}
    >
      <div>
        <div className="grid">
          <Toast ref={toast} />
          <div className="col-12">
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 pl-1">Name *</div>
            </div>
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 p-fluid p-1 pl-1">
                <InputText
                  value={task?.name ?? ""}
                  onChange={(e) => {
                    setTask({ ...task, name: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 pl-1 mt-3">Due date</div>
            </div>
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 p-1 pl-1">
                <Calendar
                  showButtonBar
                  dateFormat={"dd.mm.yy."}
                  value={
                    props?.task?.dueDate
                      ? new Date(props?.task?.dueDate)
                      : undefined
                  }
                  onChange={(e) => {
                    setTask({ ...task, dueDate: e.value });
                  }}
                  showIcon
                  className="inputfield w-full"
                />
              </div>
            </div>
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 pl-1 mt-3">Description</div>
            </div>
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 p-fluid p-1 pl-1">
                <InputTextarea
                  value={task.description ?? ""}
                  onChange={(e) => {
                    setTask({ ...task, description: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 pl-1 mt-3">Priority</div>
            </div>
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 p-1 pl-1">
                <Dropdown
                  className="w-full"
                  options={dropdownOptions}
                  resetFilterOnHide
                  value={task?.priority ?? undefined}
                  showClear
                  onChange={(e) => {
                    setTask({ ...task, priority: e.value });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
