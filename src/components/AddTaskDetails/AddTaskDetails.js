import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUserTasks } from "../../api/service";
import { useAuth } from "../../router/AuthProvider";
import { toast } from "react-toastify";
const AddTaskDetails = () => {
  const { setLoader } = useAuth();
  const navigate = useNavigate();
  const editTitle = useRef(null);
  const editModule = useRef(null);
  const editDescription = useRef(null);
  const editCompletedStatus = useRef(false);
  const [statusCompleted, editStatusCompleted] = useState(false);
  const addTask = async (event) => {
    event.preventDefault();
    try {
      setLoader(true);
      let response = await addUserTasks(
        editTitle.current.value,
        editModule.current.value,
        editDescription.current.value,
        statusCompleted
      );
      if (response.data) {
        setLoader(false);
        editTitle.current.value = "";
        editModule.current.value = "";
        editDescription.current.value = "";
        editStatusCompleted((prevState) => !prevState);
        toast.success("Task added", {
          autoClose: 15000,
        });
      } else throw new Error(response.message);
    } catch (err) {
      setLoader(false);
      console.log("err", err);
      toast.error(`$${err}`, { autoClose: 10000 });
    }
    // if(edit)
  };
  //   console.log(status);
  const setCompletedStatus = () => {
    editStatusCompleted((prevState) => !prevState);
    console.log(statusCompleted);
  };
  const closeAddTask = () => {
    navigate("/home");
  };
  return (
    <>
      <form onSubmit={addTask}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Task 1"
          ref={editTitle}
          required
        />
        <label>Module</label>
        <input
          type="text"
          name="module"
          placeholder="App"
          ref={editModule}
          required
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Setup basic folder structure"
          ref={editDescription}
          required
        />
        <label>Completed</label>
        <input
          type="checkbox"
          name="yes"
          checked={statusCompleted}
          // defaultChecked={statusCompleted ? "true" : ""}
          ref={editCompletedStatus}
          onChange={() => setCompletedStatus(true)}
        />
        <button type="submit">Save</button>
      </form>
      <button onClick={closeAddTask}>Close</button>
    </>
  );
};

export default AddTaskDetails;
