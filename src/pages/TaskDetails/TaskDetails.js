import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditTaskDetails from "../../components/EditTaskDetails/EditTaskDetails";
import ShowTaskDetails from "../../components/ShowTaskDetails/ShowTaskDetails";
import { updateTaskDetails, deleteTask } from "../../api/service";
import { useAuth } from "../../router/AuthProvider";
import { toast } from "react-toastify";

const TaskDetails = () => {
  const { setLoader } = useAuth();
  const [edit, showEdit] = useState(false);
  const { state } = useLocation();
  const [data, setData] = useState(state);
  const navigate = useNavigate();
  const editHandler = () => {
    showEdit((prevState) => !prevState);
  };
  const updateTaskHandler = async (title, module, description, status) => {
    try {
      setLoader(true);
      let response = await updateTaskDetails(
        state._id,
        title,
        module,
        description,
        status
      );
      if (response.data) {
        toast.success("Task updated successfully", { autoClose: 10000 });
        setLoader(false);
        setData(response.data);
        showEdit((prevState) => !prevState);
      } else throw new Error("Update Failed");
    } catch (err) {
      setLoader(false);
      console.log("err", err);
      toast.error(`${err}`, { autoClose: 10000 });
    }
  };
  const disableEdit = () => {
    showEdit((prevState) => !prevState);
  };
  const closeTaskDetail = () => {
    navigate(-1);
  };
  const deleteTaskDetail = async () => {
    try {
      setLoader(true);
      let response = await deleteTask(state._id);
      if (response.data) {
        toast.success("Task deleted successfully", { autoClose: 10000 });
        setLoader(false);
        navigate(-1);
      } else throw new Error(response.message);
    } catch (err) {
      setLoader(false);
      toast.error(`${err}`, { autoClose: 10000 });
    }
  };
  return (
    <>
      {!edit ? (
        <>
          <ShowTaskDetails data={data} />
          <button onClick={editHandler}>Edit</button>
          <button onClick={deleteTaskDetail}>Delete</button>
          <button onClick={closeTaskDetail}>Close</button>
        </>
      ) : (
        <EditTaskDetails
          data={data}
          updateTask={updateTaskHandler}
          disableEdit={disableEdit}
        />
      )}
    </>
  );
};
export default TaskDetails;
