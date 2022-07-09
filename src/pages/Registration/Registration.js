import { useRef } from "react";
import { registerUser } from "../../api/service";
import { useAuth } from "../../router/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const ageRef = useRef(0);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login, setLoader } = useAuth();
  const userRegistrationHandler = async (event) => {
    event.preventDefault();
    try {
      setLoader(true);
      let response = await registerUser(
        nameRef.current.value,
        ageRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      if (response.data) {
        setLoader(false);
        login(response.data);
        toast.success("User created successfully", { autoClose: 10000 });
      } else throw new Error(response.message);
    } catch (err) {
      setLoader(false);
      console.log("err", err);
      toast.error(`${err}`, { autoClose: 10000 });
    }
  };
  return (
    <>
      <form onSubmit={userRegistrationHandler}>
        <label>Name</label>
        <input
          type="text"
          name="Name"
          placeholder="Nick"
          ref={nameRef}
          required
        />
        <label>Age</label>
        <input
          type="number"
          name="Age"
          placeholder="21"
          min="0"
          ref={ageRef}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="Email"
          placeholder="nick@gmail.com"
          ref={emailRef}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="Password"
          placeholder="*******"
          ref={passwordRef}
          required
        />
        <button type="submit">Registration</button>
      </form>
      <button onClick={() => navigate(-1)}>Login</button>
    </>
  );
};

export default Registration;
