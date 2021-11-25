import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";

export default function TaskDialog(props) {
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
          onClick={() => {}}
          className="p-button-success"
        />
      </div>
    );
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
          <div className="col-12">
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 pl-1">Name</div>
            </div>
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 p-fluid p-1 pl-1">
                <InputText
                  value={props?.task?.name ?? ""}
                  onChange={(e) => {}}
                />
              </div>
            </div>
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 pl-1 mt-3">Due date</div>
            </div>
            <div className="grid align-items-center justfy-content-center">
              <div className="col-12 p-1 pl-1">
                <Calendar
                  showTime
                  hourFormat="24"
                  showButtonBar
                  dateFormat={"dd.mm.yy."}
                  value={
                    props?.task?.dueDate
                      ? new Date(props?.task?.dueDate)
                      : undefined
                  }
                  onChange={(e) => {}}
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
                  value={
                    props?.task?.description ?? ""
                  }
                  onChange={(e) => {}}
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
                  value={props?.task?.priority ?? undefined}
                  showClear
                  onChange={(e) => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
