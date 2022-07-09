const ShowTaskDetails = ({ data }) => {
  const created = new Date(data.createdAt);
  return (
    <div>
      <p>Task details</p>
      <label>Title</label>
      <p>{data.title}</p>
      <label>Module</label>
      <p>{data.modlue}</p>
      <label>Description</label>
      <p>{data.description}</p>
      <label>Completed</label>
      <p>{data.completed ? "Yes" : "No"}</p>
      <label>Created At</label>
      <p>{`${created.getDate()}/${created.getMonth()}/${created.getFullYear()} ${created.getHours()}:${created.getMinutes()}:${created.getSeconds()}`}</p>
    </div>
  );
};

export default ShowTaskDetails;
