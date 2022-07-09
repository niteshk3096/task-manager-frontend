import { useRef, useState } from "react";
const EditTaskDetails = ({ data, updateTask, disableEdit }) => {
  const editTitle = useRef(data.title || "");
  const editModule = useRef(data.module || "");
  const editDescription = useRef(data.description || "");
  //   const editYes = useRef(data.completed);
  const [statusCompleted, editStatusCompleted] = useState(data.completed || "");
  const editTask = (event) => {
    event.preventDefault();
    updateTask(
      editTitle.current.value,
      editModule.current.value,
      editDescription.current.value,
      statusCompleted
    );
  };
  //   console.log(status);
  const setCompletedStatus = () => {
    editStatusCompleted((prevState) => !prevState);
  };
  return (
    <>
      <form onSubmit={editTask}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          defaultValue={data.title || ""}
          ref={editTitle}
        />
        <label>Module</label>
        <input
          type="text"
          name="module"
          defaultValue={data.module || ""}
          ref={editModule}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          defaultValue={data.description || ""}
          ref={editDescription}
        />
        <label>Completed</label>
        <input
          type="checkbox"
          name="yes"
          defaultChecked={statusCompleted === true ? "true" : ""}
          onClick={() => setCompletedStatus(true)}
        />
        <button type="submit">Update</button>
      </form>
      <button onClick={() => disableEdit()}>Close</button>
    </>
  );
};

export default EditTaskDetails;
