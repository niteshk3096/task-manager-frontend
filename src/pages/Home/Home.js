/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import { getUserTasks, getTaskDetails } from "../../api/service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../router/AuthProvider";
import { toast } from "react-toastify";
const Home = () => {
  const [tasks, setTasks] = useState([]);
  // const [addTask, setAddTask] = useState(false);
  const { setLoader } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    toast.info("Taks loading", { toastId: "taskLoading" });
    setLoader(true);
    const controller = new AbortController();
    (async () => {
      try {
        let response = await getUserTasks(controller.signal);
        if (response.data) {
          setTasks(response.data);
          setLoader(false);
          toast.dismiss("taskLoading");
        } else {
          throw new Error(response.message);
        }
      } catch (err) {
        setLoader(false);
        toast.error(`${err}`, { autoClose: 10000 });
        console.log("tasks list data err", err);
      }
    })();
    return () => {
      controller.abort();
      console.log("unsubscribe");
    };
  }, []);
  // console.log("tasks", tasksRef.current);
  const taskDetailsHandler = async (id) => {
    try {
      setLoader(true);
      let response = await getTaskDetails(id);
      if (response.data) {
        setLoader(false);
        navigate("/task/details", { state: response.data });
      } else throw new Error(response.message);
    } catch (err) {
      setLoader(false);
      console.log("err", err);
    }
  };
  const addTaskHandler = () => {
    navigate("/task/add");
  };
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div onClick={() => taskDetailsHandler(task._id)} key={task._id}>
            {task.title}
          </div>
        ))
      ) : (
        <div>No taks found</div>
      )}
      <button onClick={addTaskHandler}>Add Task</button>
    </div>
  );
};

export default Home;
