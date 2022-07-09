import Styles from "../Loader/Loader.module.css";
import { useState } from "react";
import { useAuth } from "../../router/AuthProvider";
const Loader = ({ children, isLoading }) => {
  return (
    <>
      <div className={Styles.loaderContainer}>
        <div className={Styles.loader}></div>
      </div>
    </>
  );
};

export default Loader;
