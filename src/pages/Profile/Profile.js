import { useAuth } from "../../router/AuthProvider";
import { useState, useRef } from "react";
import { updateUser, deleteUser } from "../../api/service";
import { toast } from "react-toastify";
const Profile = () => {
  const [edit, setEdit] = useState(false);
  const { user, updateUserData, logout, setLoader } = useAuth();
  const editName = useRef(user.name);
  const editAge = useRef(user.age);
  const editEmail = useRef(user.email);
  const editProfile = () => {
    setEdit((prevState) => !prevState);
    console.log(edit);
  };
  const updateProfileHandler = async (event) => {
    event.preventDefault();
    try {
      setLoader(true);
      let response = await updateUser(
        editName.current.value,
        editEmail.current.value,
        editAge.current.value
      );
      if (response.data) {
        toast.success("Profile updated !", { autoClose: 10000 });
        setLoader(false);
        updateUserData(response.data);
        setEdit((prevState) => !prevState);
      } else throw new Error(response.message);
    } catch (err) {
      setLoader(false);
      console.log("err", err);
      toast.err(`${err}`, { autoClose: 10000 });
    }
  };
  const deleteProfile = async () => {
    try {
      setLoader(true);
      let response = await deleteUser();
      if (response.data) {
        setLoader(false);
        logout();
        toast.success("Account deleted successfully", { autoClose: 10000 });
      } else throw new Error(response.message);
    } catch (err) {
      setLoader(false);
      console.log("err", err);
      toast.error(`${err}`, { autoClose: 10000 });
    }
  };
  return (
    <>
      {edit ? (
        <form onSubmit={updateProfileHandler}>
          <label>Name</label>
          <input
            ref={editName}
            type="text"
            name="Name"
            defaultValue={user.name || ""}
          />
          <label>Age</label>
          <input
            ref={editAge}
            type="number"
            name="Age"
            defaultValue={user.age || 0}
            min="0"
          />
          <label>Email</label>
          <input
            ref={editEmail}
            type="email"
            name="Email"
            defaultValue={user.email || ""}
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
          <button onClick={editProfile}>Edit</button>
          <button onClick={deleteProfile}>Delete</button>
        </div>
      )}
    </>
  );
};

export default Profile;
