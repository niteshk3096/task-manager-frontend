import { useAuth } from "../../router/AuthProvider";
import { NavLink, Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
import { logutUser } from "../../api/service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout, setLoader } = useAuth();
  const [userData, setUserData] = useState(user);
  const userLogout = async () => {
    try {
      setLoader(true);
      let response = await logutUser();
      if (response.data) {
        toast.success("User logout successfully", { autoClose: 10000 });
        setLoader(false);
        logout();
        setUserData(null);
      } else throw new Error(response.message);
    } catch (err) {
      setLoader(false);
      console.log("err", err);
      toast.error(`$${err}`, { autoClose: 10000 });
    }
  };
  return (
    <>
      {userData !== null ? (
        <div className={styles.navbarContainer}>
          <p>Hi {user.name}</p>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <button onClick={userLogout}>Logout</button>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
