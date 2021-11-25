import { Card } from "primereact/card";

import { Button } from "primereact/button";
import { useState } from "react";
import TaskDialog from "./TaskDialog";

export default function TodoList() {
  const [visibleDialog, setVisibleDialog] = useState(false);

  return (
    <div className=" justify-content-center">
      <h2 className="color-cyan"> Todo List app </h2>
      <div className="flex justify-content-center flex-wra">
        <div className="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6">
          <Card>
            <Button
              label="Add task"
              onClick={() => {
                setVisibleDialog(true);
              }}
            />
          </Card>
        </div>
      </div>
      <TaskDialog
        visibleDialog={visibleDialog}
        setVisibleDialog={setVisibleDialog}
      />
    </div>
  );
}
