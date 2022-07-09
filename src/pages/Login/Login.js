import { useRef } from "react";
import { loginUser } from "../../api/service";
import { useAuth } from "../../router/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, setLoader } = useAuth();

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setLoader(true);
      let response = await loginUser(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (response.data) {
        toast.success("Login successfully!", { autoClose: 10000 });
        setLoader(false);
        login(response.data);
      } else throw new Error(response.message);
    } catch (err) {
      setLoader(false);
      toast.error(`$${err}`, { autoClose: 10000 });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Email</label>
      <input
        type="email"
        placeholder="abc@xyz.com"
        name="email"
        ref={emailRef}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="********"
        name="password"
        ref={passwordRef}
      />
      {/* <input type="submit" value="Submit"></input> */}
      <button type="submit">Login</button>
      <button>
        <Link to="/registration">Registration</Link>
      </button>
    </form>
  );
};

export default Login;
