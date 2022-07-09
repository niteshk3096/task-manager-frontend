import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
import Style from "../NotFoundPage/NotFound.module.css";
const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className={Style.notFoundContainer}>
      <Player
        autoplay
        loop
        src={require("../../shared/assets/Lottie/404.json")}
        style={{ height: "100vh", width: "100vw", position: "relative" }}
      >
        <div className={Style.goBack} onClick={goHome}>
          Go Back
        </div>
      </Player>
    </div>
  );
};

export default NotFound;
